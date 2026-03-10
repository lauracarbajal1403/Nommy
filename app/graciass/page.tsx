"use client"
import { Button } from "@/components/ui/button"
import { Check, Phone, Linkedin, Facebook, Instagram } from "lucide-react"
import { useState, type FormEvent } from "react"
export default function ThankYouPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    empresa: "",
    giro: "",
    puesto: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [showThanksModal, setShowThanksModal] = useState(false)

  const scrollToDemo = () => {
    const formSection = document.getElementById("demo-form")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  setIsLoading(true)
  setMessage("")

  try {
    const response = await fetch("/api/send-demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (response.ok) {
      // Abrir página de agradecimiento en nueva pestaña
      window.open('/gracias', '_blank')
      
      // Limpiar formulario
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        empresa: "",
        giro: "",
        puesto: "",
      })
    } else {
      setMessage(data.error || "Hubo un error al agendar el demo. Por favor intenta de nuevo.")
    }
    } catch (error) {
      setMessage("Error al enviar la solicitud. Por favor intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C5F6F] via-[#35778B] to-[#3D8FA5] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        <div className="w-24 h-24 bg-[#4FD1C5] rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <Check className="w-16 h-16 text-white" strokeWidth={3} />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#2C5F6F] mb-6">¡Gracias por tu interés en Nommy!</h1>

        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Recibirás un correo con el Ebook en los próximos minutos.
        </p>

        <div className="bg-gradient-to-r from-[#4FD1C5]/20 to-[#2C5F6F]/20 rounded-2xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-[#2C5F6F] mb-4">¿Por qué Nommy es tu mejor opción?</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#4FD1C5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">1</span>
              </div>
              <p className="text-gray-700">
                Automatiza <span className="font-bold text-[#2C5F6F]">tu nómina</span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#4FD1C5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">2</span>
              </div>
              <p className="text-gray-700">
                Centraliza <span className="font-bold text-[#2C5F6F]">la gestión</span> de tu empresa
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#4FD1C5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">3</span>
              </div>
              <p className="text-gray-700">
                Reduce el estrés <span className="font-bold text-[#2C5F6F]">de tu equipo</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-gray-600 mb-4">¿Tienes alguna pregunta urgente?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/523315179175"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="mailto:ventas@nommy.mx"
              className="inline-flex items-center justify-center gap-2 bg-[#4FD1C5] hover:bg-[#3DB9AD] text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg"
            >
              📧 Email
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-600 mb-4">Síguenos en nuestras redes sociales</p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/nommy-m%C3%A9xico-a797a1376/?trk=public-profile-join-page"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#4db8c4] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61578598203669"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#4db8c4] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>

            <a
              href="https://www.instagram.com/nommymexico/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#4db8c4] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        <div className="mt-8">
          <Button
            onClick={() => window.close()}
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-full"
          >
            Cerrar esta página
          </Button>
        </div>
      </div>
    </div>
  )
}
