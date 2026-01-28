import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, apellido, telefono, email, source, recipientEmail } = body

    const emailContent = `
      Nuevo contacto desde landing page de NOMMY:
      
      Nombre: ${nombre} ${apellido}
      Email: ${email}
      Teléfono: ${telefono}
      Fuente: ${source}
    `

    // Here you would integrate with your email service (SendGrid, Nodemailer, etc.)
    console.log(`Sending contact form to ${recipientEmail}:`, emailContent)

    // For now, we'll just log the email content
    // In production, you would implement actual email sending here

    return NextResponse.json({ success: true, message: "Contact form sent successfully" })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, error: "Failed to send contact form" }, { status: 500 })
  }
}
