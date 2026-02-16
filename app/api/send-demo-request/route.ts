import { NextResponse } from "next/server"
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"

const ses = new SESClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

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

    const recipient = recipientEmail || "laura.carbajal@nommy.mx"

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

    const command = new SendEmailCommand({
      Source: "no-reply@nommy.mx", // ⚠️ ESTE EMAIL debe estar verificado en SES
      Destination: {
        ToAddresses: ["laura.carbajal@nommy.mx"],
      },
      ReplyToAddresses: [email],
      Message: {
        Subject: {
          Data: `Nueva solicitud de demo de NOMMY - ${company}`,
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: htmlContent,
            Charset: "UTF-8",
          },
        },
      },
    })

    const result = await ses.send(command)

    console.log("[send-demo-request] Email sent successfully:", result.MessageId)

    return NextResponse.json(
      {
        success: true,
        messageId: result.MessageId,
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
