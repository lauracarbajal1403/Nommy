import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, employees, phone, message, recipientEmail } = body

    // Validate required fields
    if (!name || !email || !company || !employees) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const recipient = recipientEmail || "ventas@nommy.mx"

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">
          <div style="max-width:600px;margin:0 auto;background:white;border-radius:8px;overflow:hidden;">
            <div style="background:linear-gradient(135deg,#274263,#2DD4BF);color:white;padding:30px;text-align:center;">
              <h1 style="margin:0;">Nueva Solicitud de Demo</h1>
            </div>
            <div style="padding:30px;">
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Empresa:</strong> ${company}</p>
              <p><strong>Número de empleados:</strong> ${employees}</p>
              ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ""}
              ${message ? `<p><strong>Mensaje:</strong> ${message}</p>` : ""}
            </div>
            <div style="text-align:center;padding:20px;font-size:12px;color:#888;">
              Este correo fue enviado desde el formulario de solicitud de demo de NOMMY
            </div>
          </div>
        </body>
      </html>
    `

    const { data, error } = await resend.emails.send({
      from: "NOMMY <onboarding@resend.dev>", // ⚠️ luego cambia por tu dominio verificado
      to: recipient,
      subject: `Nueva solicitud de demo de NOMMY - ${company}`,
      html: htmlContent,
    })

    if (error) {
      console.error("[send-demo-request] Resend error:", error)
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    console.log("[send-demo-request] Email sent successfully:", data?.id)

    return NextResponse.json(
      {
        success: true,
        messageId: data?.id,
      },
      { status: 200 }
    )

  } catch (error) {
    console.error("[send-demo-request] Error sending email:", error)

    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to send email" },
      { status: 500 }
    )
  }
}
