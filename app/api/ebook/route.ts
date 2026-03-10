import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, lastName, email, phone, company } = body

    const { data, error } = await resend.emails.send({
      from: "NOMMY <onboarding@resend.dev>",
      to: "ventas@nommy.mx",
      subject: `Nuevo lead ebook - ${name} ${lastName || ""} (${company || email})`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">
            <div style="max-width:600px;margin:0 auto;background:white;border-radius:8px;overflow:hidden;">
              <div style="background:linear-gradient(135deg,#274263,#2DD4BF);color:white;padding:30px;text-align:center;">
                <h1 style="margin:0;">Nuevo lead — Ebook Multas 2026</h1>
              </div>
              <div style="padding:30px;">
                <p><strong>Nombre:</strong> ${name} ${lastName || ""}</p>
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
      `,
    })

    if (error) {
      console.error("[ebook] Resend error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })

  } catch (error) {
    console.error("[ebook] Error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to send email" },
      { status: 500 }
    )
  }
}