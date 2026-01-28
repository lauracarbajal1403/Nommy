"use client"

import type React from "react"
import type { FormEvent } from "react"
import { useState } from "react"
import { CheckCircle } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    phone: "",
    message: "",
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
    const response = await fetch("/api/send-demo-request", {
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
        name: "",
        email: "",
        company: "",
        employees: "",
        phone: "",
        message: "",
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
    <div className="py-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-turquoise/15 to-navy/15 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-turquoise">Solicita tu Demo Gratuita</h1>
            <p className="text-xl text-turquoise opacity-90 max-w-3xl mx-auto">
              Descubre cómo NOMMY puede transformar la gestión de nómina en tu empresa. Agenda una demostración
              personalizada con nuestro equipo.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollAnimation>
              <div className="card">
                <h2 className="text-2xl font-bold text-navy mb-6">Cuéntanos sobre tu empresa</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent"
                        placeholder="tu@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    <div>
                      <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                        Número de empleados *
                      </label>
                      <select
                        id="employees"
                        name="employees"
                        value={formData.employees}
                        onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="1-10">1-10 empleados</option>
                        <option value="11-50">11-50 empleados</option>
                        <option value="51-100">51-100 empleados</option>
                        <option value="101-500">101-500 empleados</option>
                        <option value="500+">Más de 500 empleados</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent"
                      placeholder="+52 55 1234 5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Cuéntanos sobre tus necesidades
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent"
                      placeholder="Describe los desafíos actuales en tu gestión de nómina..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-turquoise hover:bg-[#274263] rounded-full text-white w-full text-lg py-4 shadow-nommy hover:shadow-nommy-lg transition-all duration-300 transform hover:scale-110 font-semibold group hover:rotate-2"
                  >
                    <span className="group-hover:animate-pulse">¡Agenda tu DEMO!</span>
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    * Campos obligatorios. Nos pondremos en contacto contigo en 24 horas.
                  </p>
                </form>
              </div>
            </ScrollAnimation>
            <div className="flex flex-col space-y-8">
              <div className="card bg-turquoise bg-opacity-5 p-4">
                <h3 className="text-xl font-bold text-navy mb-4">¿Por qué elegir NOMMY?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-turquoise mr-3" />
                    <span className="text-gray-700">Implementación sin costo en menos de 30 días*</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-turquoise mr-3" />
                    <span className="text-gray-700">Soporte técnico en español 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-turquoise mr-3" />
                    <span className="text-gray-700">Cumplimiento fiscal automático</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-turquoise mr-3" />
                    <span className="text-gray-700">Hasta el 80% menos tiempo en cálculo de nómina*</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-700 text-xs font-bold">*Aplican términos y condiciones</span>
                  </li>
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">¿Qué incluye tu demo?</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-turquoise bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <img src="/3232.png" alt="Checklist" className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">Análisis personalizado</h3>
                      <p className="text-gray-600">
                        Revisaremos tus procesos actuales y te mostraremos cómo NOMMY puede optimizar tu gestión de
                        nómina específicamente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-turquoise bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <img src="/3232.png" alt="Checklist" className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">Demostración en vivo</h3>
                      <p className="text-gray-600">
                        Verás la plataforma en acción con datos similares a los de tu empresa, incluyendo cálculos de
                        nómina y generación de reportes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-turquoise bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <img src="/3232.png" alt="Checklist" className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-2">Plan de implementación</h3>
                      <p className="text-gray-600">
                        Te ayudaremos a crear un plan detallado para migrar tu proceso actual a NOMMY sin
                        interrupciones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
