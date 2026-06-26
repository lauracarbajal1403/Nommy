import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import type { NotifySalesPayload, NotifySalesResponse } from '@/types';

/**
 * ──────────────────────────────────────────────────────────────────────────
 * CONFIGURACIÓN REQUERIDA (variables de entorno)
 * ──────────────────────────────────────────────────────────────────────────
 * RESEND_API_KEY     → API key de tu cuenta de Resend (resend.com/api-keys)
 * SALES_EMAIL_FROM    → remitente verificado en Resend, ej. "Nominik <notificaciones@nommy.mx>"
 *                        (el dominio nommy.mx debe estar verificado en Resend)
 * SALES_EMAIL_TO      → opcional, por defecto "ventas@nommy.mx"
 *
 * Pasos previos en Resend:
 * 1. Crear cuenta en https://resend.com
 * 2. Verificar el dominio nommy.mx (Resend → Domains → Add Domain → agregar
 *    los registros DNS que te indique: SPF/DKIM).
 * 3. Generar una API Key (Resend → API Keys → Create API Key).
 * 4. npm install resend
 * ──────────────────────────────────────────────────────────────────────────
 */

const resend = new Resend(process.env.RESEND_API_KEY);

const SALES_EMAIL_TO = process.env.SALES_EMAIL_TO || 'laura.carbajal@nommy.mx';
const SALES_EMAIL_FROM = process.env.SALES_EMAIL_FROM || 'no-reply@resend.dev';

function buildSubject(payload: NotifySalesPayload): string {
  if (payload.type === 'call_request') {
    return `📞 Nuevo lead pide llamada — ${payload.name || 'Sin nombre'}`;
  }
  return `⚠️ Lead recuperado (abandono de chat) — ${payload.name || 'Sin nombre'}`;
}

function buildHtml(payload: NotifySalesPayload): string {
  const rows: Array<[string, string | undefined]> = [
    ['Nombre', payload.name],
    ['Teléfono', payload.phone],
    ['Correo', payload.email],
    ['Reto / dolor', payload.pain],
    ['Tamaño de equipo', payload.teamSize],
    ['Bloque horario preferido', payload.preferredBlock],
    ['Canal preferido', payload.preferredChannel],
  ];

  const rowsHtml = rows
    .filter(([, value]) => Boolean(value))
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;color:#666;font-size:13px;">${label}</td><td style="padding:6px 12px;font-size:13px;font-weight:600;color:#111;">${value}</td></tr>`
    )
    .join('');

  const title =
    payload.type === 'call_request'
      ? 'Nuevo prospecto solicita llamada telefónica'
      : 'Lead recuperado (abandonó el chat de Nominik)';

  return `
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #4db8a8, #3da393); padding: 20px; border-radius: 12px 12px 0 0;">
        <h2 style="color: white; margin: 0; font-size: 18px;">${title}</h2>
      </div>
      <table style="width: 100%; border-collapse: collapse; background: #f9fafb; border-radius: 0 0 12px 12px;">
        ${rowsHtml}
      </table>
      <p style="color: #999; font-size: 11px; margin-top: 12px;">
        Generado automáticamente por Nominik, el asistente virtual de nommy.mx.
      </p>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const payload: NotifySalesPayload = await req.json();

    if (!payload.type) {
      const res: NotifySalesResponse = { success: false, error: 'Falta el tipo de notificación.' };
      return NextResponse.json(res, { status: 400 });
    }

    await resend.emails.send({
      from: SALES_EMAIL_FROM,
      to: SALES_EMAIL_TO,
      subject: buildSubject(payload),
      html: buildHtml(payload),
    });

    const res: NotifySalesResponse = { success: true };
    return NextResponse.json(res);
  } catch (error) {
    console.error('Error enviando correo con Resend:', error);
    const res: NotifySalesResponse = {
      success: false,
      error: 'No se pudo notificar al equipo de ventas.',
    };
    return NextResponse.json(res, { status: 500 });
  }
}