import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import type { BookDemoPayload, BookDemoResponse, CalendarSlot } from '@/types';

/**
 * ──────────────────────────────────────────────────────────────────────────
 * CONFIGURACIÓN REQUERIDA (variables de entorno)
 * ──────────────────────────────────────────────────────────────────────────
 * GOOGLE_CLIENT_EMAIL      → email de la Service Account de Google Cloud
 * GOOGLE_PRIVATE_KEY       → private key de la Service Account (con \n escapados)
 * GOOGLE_CALENDAR_ID       → ID del calendario de Nommy (ej. ventas@nommy.mx
 *                            o el ID largo que da Google Calendar)
 *
 * Pasos previos en Google Cloud Console:
 * 1. Crear un proyecto y habilitar "Google Calendar API".
 * 2. Crear una Service Account y descargar su JSON de credenciales.
 * 3. En Google Calendar (calendar.google.com), compartir el calendario de
 *    ventas con el email de la Service Account, dándole permiso de
 *    "Realizar cambios en los eventos".
 * 4. (Opcional, recomendado) Habilitar "Domain-Wide Delegation" si quieres
 *    que los eventos se creen a nombre de un usuario real de Google
 *    Workspace en vez de la Service Account.
 * ──────────────────────────────────────────────────────────────────────────
 */

function getCalendarClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/calendar'],
  });

  return google.calendar({ version: 'v3', auth });
}

const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'primary';
const SLOT_DURATION_MIN = 20; // duración de cada demo
const WORK_START_HOUR = 9;
const WORK_END_HOUR = 19; // 7:00 PM
const DAYS_AHEAD_TO_SCAN = 5; // cuántos días hábiles hacia adelante ofrecer

/**
 * GET /api/calendar
 * Devuelve los próximos horarios disponibles (lun-vie, 9am-7pm),
 * descontando los eventos que ya existen en el calendario de Nommy.
 */
export async function GET() {
  try {
    const calendar = getCalendarClient();

    const now = new Date();
    const horizon = new Date(now);
    horizon.setDate(horizon.getDate() + DAYS_AHEAD_TO_SCAN + 2); // colchón por fines de semana

    const busyResp = await calendar.events.list({
      calendarId: CALENDAR_ID,
      timeMin: now.toISOString(),
      timeMax: horizon.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    const busyRanges = (busyResp.data.items || []).map((ev) => ({
      start: new Date(ev.start?.dateTime || ev.start?.date || now).getTime(),
      end: new Date(ev.end?.dateTime || ev.end?.date || now).getTime(),
    }));

    const slots: CalendarSlot[] = [];
    const cursor = new Date(now);
    cursor.setMinutes(0, 0, 0);
    cursor.setHours(cursor.getHours() + 1); // empieza desde la próxima hora en punto

    let daysScanned = 0;
    while (slots.length < 6 && daysScanned < DAYS_AHEAD_TO_SCAN + 2) {
      const day = cursor.getDay(); // 0 = domingo, 6 = sábado
      if (day !== 0 && day !== 6) {
        for (let hour = WORK_START_HOUR; hour < WORK_END_HOUR; hour++) {
          const slotStart = new Date(cursor);
          slotStart.setHours(hour, 0, 0, 0);
          const slotEnd = new Date(slotStart.getTime() + SLOT_DURATION_MIN * 60000);

          if (slotStart.getTime() <= now.getTime()) continue;

          const overlaps = busyRanges.some(
            (b) => slotStart.getTime() < b.end && slotEnd.getTime() > b.start
          );

          if (!overlaps) {
            slots.push({
              id: `${slotStart.toISOString()}`,
              startISO: slotStart.toISOString(),
              endISO: slotEnd.toISOString(),
              label: slotStart.toLocaleString('es-MX', {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                timeZone: 'America/Mexico_City',
              }),
            });
          }

          if (slots.length >= 6) break;
        }
      }
      cursor.setDate(cursor.getDate() + 1);
      daysScanned++;
    }

    return NextResponse.json({ slots });
  } catch (error) {
    console.error('Error consultando Google Calendar:', error);
    return NextResponse.json(
      { slots: [], error: 'No se pudo consultar la disponibilidad.' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/calendar
 * Crea el evento de la demo en Google Calendar, agrega Google Meet,
 * e invita al prospecto por correo (si dejó uno).
 */
export async function POST(req: NextRequest) {
  try {
    const body: BookDemoPayload = await req.json();

    if (!body.startISO || !body.endISO || !body.name) {
      const res: BookDemoResponse = { success: false, error: 'Faltan datos para agendar.' };
      return NextResponse.json(res, { status: 400 });
    }

    const calendar = getCalendarClient();

    const attendees = body.email ? [{ email: body.email }] : [];

    const event = await calendar.events.insert({
      calendarId: CALENDAR_ID,
      conferenceDataVersion: 1,
      requestBody: {
        summary: `Demo Nommy con ${body.name}`,
        description: [
          `Lead generado vía chatbot Nominik.`,
          body.pain ? `Reto principal: ${body.pain}` : null,
          body.teamSize ? `Tamaño de equipo: ${body.teamSize}` : null,
          body.phone ? `Teléfono: ${body.phone}` : null,
        ]
          .filter(Boolean)
          .join('\n'),
        start: { dateTime: body.startISO, timeZone: 'America/Mexico_City' },
        end: { dateTime: body.endISO, timeZone: 'America/Mexico_City' },
        attendees,
        conferenceData: {
          createRequest: {
            requestId: `nommy-demo-${body.slotId}`,
            conferenceSolutionKey: { type: 'hangoutsMeet' },
          },
        },
        reminders: {
          useDefault: false,
          overrides: [{ method: 'email', minutes: 60 }, { method: 'popup', minutes: 10 }],
        },
      },
    });

    const meetLink = event.data.hangoutLink || undefined;

    const res: BookDemoResponse = {
      success: true,
      eventId: event.data.id || undefined,
      meetLink,
    };
    return NextResponse.json(res);
  } catch (error) {
    console.error('Error creando evento en Google Calendar:', error);
    const res: BookDemoResponse = {
      success: false,
      error: 'No se pudo agendar la demo. Intenta de nuevo.',
    };
    return NextResponse.json(res, { status: 500 });
  }
}