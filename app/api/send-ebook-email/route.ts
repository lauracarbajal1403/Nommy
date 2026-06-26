import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { readFileSync } from 'fs';
import { join } from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_FROM = 'onboarding@resend.dev';

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, error: 'Falta el correo electrónico.' }, { status: 400 });
    }

    const pdfPath = join(process.cwd(), 'public', 'ebooks', 'ConoceNommy.pdf');
    const pdfBuffer = readFileSync(pdfPath);

    await resend.emails.send({
      from: "NOMMY <onboarding@resend.dev>",
      to: email,
      subject: '📘 Tu ebook ConoceNommy — ¡Aquí está!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 520px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #4db8a8, #3da393); padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 20px;">¡Hola${name ? ', ' + name : ''}! 👋</h2>
          </div>
          <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="color: #374151; font-size: 15px; line-height: 1.6; margin-top: 0;">
              Gracias por tu interés en <strong>Nommy</strong>. Adjunto encontrarás el ebook
              <strong>"ConoceNommy"</strong> con toda la información sobre nuestra plataforma
              de nómina y gestión de talento.
            </p>
            <p style="color: #374151; font-size: 15px; line-height: 1.6;">
              Si tienes alguna pregunta o quieres agendar una demo gratuita, responde a este correo
              o escríbenos al <strong>(33) 15179175</strong>.
            </p>
            <p style="color: #6b7280; font-size: 13px; margin-bottom: 0;">
              — El equipo de <strong style="color: #3da393;">Nommy</strong>
            </p>
          </div>
          <p style="color: #9ca3af; font-size: 11px; margin-top: 12px; text-align: center;">
            Generado automáticamente por Nominik, el asistente virtual de nommy.mx.
          </p>
        </div>
      `,
      attachments: [
        {
          filename: 'ConoceNommy.pdf',
          content: pdfBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error enviando ebook por correo:', error);
    return NextResponse.json({ success: false, error: 'No se pudo enviar el correo.' }, { status: 500 });
  }
}
