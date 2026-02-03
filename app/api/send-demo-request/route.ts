import { NextResponse } from "next/server"
import { MailService } from "@/lib/mail.service"

export async function POST(request: Request) {
  try {
    // Check if SMTP is configured
    if (!process.env.SMTP_USER || !(process.env.SMTP_PASSWORD || process.env.SMTP_PASS)) {
      console.error("[send-demo-request] SMTP credentials are not configured")
      return NextResponse.json(
        { error: "Email service is not configured. Please add SMTP environment variables." },
        { status: 500 },
      )
    }

    const body = await request.json()
    const { name, email, company, employees, phone, message, recipientEmail } = body

    // Validate required fields
    if (!name || !email || !company || !employees) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const recipient = recipientEmail || "ventas@nommy.mx"
    console.log("[send-demo-request] Sending demo request email to:", recipient)

    // Send email using MailService
    const result = await MailService.SendMail({
      to: recipient,
      replyTo: email,
      subject: `Nueva solicitud de demo de NOMMY - ${company}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #274263 0%, #2DD4BF 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #274263; margin-bottom: 5px; }
              .value { color: #555; }
              .footer { text-align: center; margin-top: 30px; color: #888; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">Nueva Solicitud de Demo</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Nombre:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Empresa:</div>
                  <div class="value">${company}</div>
                </div>
                <div class="field">
                  <div class="label">Número de empleados:</div>
                  <div class="value">${employees}</div>
                </div>
                ${
                  phone
                    ? `
                <div class="field">
                  <div class="label">Teléfono:</div>
                  <div class="value">${phone}</div>
                </div>
                `
                    : ""
                }
                ${
                  message
                    ? `
                <div class="field">
                  <div class="label">Mensaje:</div>
                  <div class="value">${message}</div>
                </div>
                `
                    : ""
                }
              </div>
              <div class="footer">
                <p>Este correo fue enviado desde el formulario de solicitud de demo de NOMMY</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    console.log("[send-demo-request] Email sent successfully:", result.messageId)
    return NextResponse.json({ 
      success: true, 
      messageId: result.messageId,
      accepted: result.accepted 
    }, { status: 200 })
  } catch (error) {
    console.error("[send-demo-request] Error sending email:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to send email" },
      { status: 500 },
    )
  }
}