import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY is not configured")
      return NextResponse.json(
        { error: "Email service is not configured. Please add RESEND_API_KEY environment variable." },
        { status: 500 },
      )
    }

    const body = await request.json()
    const { name, email, company, employees, phone, message, recipientEmail } = body

    // Validate required fields
    if (!name || !email || !company || !employees) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    console.log("[v0] Sending demo request email to:", recipientEmail || "ventas@nommy.mx")

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "NOMMY Demo <onboarding@resend.dev>",
      to: recipientEmail || "ventas@nommy.mx",
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

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log("[v0] Email sent successfully:", data)
    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error in send-demo-request API:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to send email" },
      { status: 500 },
    )
  }
}
