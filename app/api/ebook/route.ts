import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, recipientEmail } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const internalRecipient = recipientEmail || "ventas@nommy.mx"

    // Email interno para ventas
    const internalHtml = `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">
          <div style="max-width:600px;margin:0 auto;background:white;border-radius:8px;overflow:hidden;">
            <div style="background:linear-gradient(135deg,#274263,#2DD4BF);color:white;padding:30px;text-align:center;">
              <h1 style="margin:0;">Nueva Descarga de Ebook</h1>
            </div>
            <div style="padding:30px;">
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${phone}</p>
              <p><strong>Empresa:</strong> ${company || "No especificada"}</p>
            </div>
            <div style="text-align:center;padding:20px;font-size:12px;color:#888;">
              Este lead descargó el ebook de multas de nómina 2026
            </div>
          </div>
        </body>
      </html>
    `

    // Email al usuario con el ebook
    const userHtml = `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">
          <div style="max-width:600px;margin:0 auto;background:white;border-radius:8px;overflow:hidden;">
            <div style="background:linear-gradient(135deg,#274263,#2DD4BF);color:white;padding:30px;text-align:center;">
              
              <h1 style="margin:0;">¡Tu ebook está listo!</h1>
            </div>
            <div style="padding:30px;">
              <p style="font-size:16px;">Hola <strong>${name}</strong>,</p>
              <p style="color:#555;">Gracias por tu interés. Aquí está tu guía de las multas de nómina con mayor peso en 2026.</p>

              <div style="text-align:center;margin:30px 0;">
                
                  href="https://drive.google.com/file/d/1fVzei9-wBwTwVzfu7mCJPsiLzbd5ltkm/view?usp=sharing"
                  style="background:linear-gradient(135deg,#274263,#2DD4BF);color:white;padding:14px 32px;border-radius:50px;text-decoration:none;font-weight:bold;font-size:16px;"
                >
                  📥 Descargar Ebook
                </a>
              </div>

              <p style="color:#555;font-size:14px;">
                Si tienes dudas o quieres una demo personalizada de Nommy, responde este correo o escríbenos a
                <a href="mailto:ventas@nommy.mx" style="color:#2DD4BF;">ventas@nommy.mx</a>.
              </p>
            </div>
            <div style="text-align:center;padding:20px;font-size:12px;color:#888;">
              © 2026 NOMMY · <a href="https://nommy.mx" style="color:#2DD4BF;">nommy.mx</a>
            </div>
          </div>
        </body>
      </html>
    `

    // Enviar ambos correos en paralelo
    const [internalResult, userResult] = await Promise.all([
      resend.emails.send({
        from: "<onboarding@resend.dev>",
        to: internalRecipient,
        subject: `Nueva descarga de ebook - ${name} (${company || email})`,
        html: internalHtml,
      }),
      resend.emails.send({
        from: "<onboarding@resend.dev>",
        to: email,
        subject: "Tu ebook: Guía de multas de nómina 2026 📊",
        html: userHtml,
      }),
    ])

    if (internalResult.error || userResult.error) {
      const err = internalResult.error || userResult.error
      console.error("[send-ebook] Resend error:", err)
      return NextResponse.json({ error: err?.message }, { status: 500 })
    }

    return NextResponse.json(
      { success: true, internalId: internalResult.data?.id, userId: userResult.data?.id },
      { status: 200 }
    )

  } catch (error) {
    console.error("[send-ebook] Error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to send email" },
      { status: 500 }
    )
  }
}