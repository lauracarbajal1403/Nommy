"use client"

import type React from "react"
import  NominikChatbot  from "@/app/nominik"
import { useState } from "react"
import Link from "next/link"
import { Calculator, RefreshCw, FileText, CheckCircle } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function LandingPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    source: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/send-contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: "alejandro.finol@nommy.mx",
          formType: "contact-form",
        }),
      })

      if (response.ok) {
        console.log("Contact form sent successfully to alejandro.finol@nommy.mx")
        setIsSubmitted(true)
      } else {
        console.error("Failed to send contact form")
        // Still show success to user, but log the error
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Error sending contact form:", error)
      // Still show success to user, but log the error
      setIsSubmitted(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const problems = [
    {
      icon: Calculator,
      title: "Cálculos manuales",
    },
    {
      icon: RefreshCw,
      title: "Correcciones constantes",
    },
    {
      icon: FileText,
      title: "Informes repetitivos para cumplir con normativas",
    },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-turquoise/10 to-navy/10">
      
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-20 h-20 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-navy mb-4">¡Gracias por tu interés!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Nuestro equipo se pondrá en contacto contigo pronto para programar tu demo y activar tus 2 meses gratis.
          </p>
          <Link href="/" className="btn-primary">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 flex items-center bg-gradient-to-br from-white via-turquoise/5 to-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left space-y-8">
                {/* NOMMY Text Logo */}
                <div className="mb-8">
                  <img src="/nommy-text-logo.png" alt="NOMMY" className="h-20 lg:h-28 mx-auto lg:mx-0" />
                </div>

                <h1 className="text-2xl lg:text-4xl font-bold text-navy mb-8">
                  Contrata Nommy y recibe 2 meses gratis
                </h1>

                <button
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-secondary text-lg px-8 py-4 hover:animate-pulse group"
                >
                  <span className="group-hover:animate-bounce">Solicita tu DEMO</span>
                </button>
              </div>

              {/* Right Column - Desktop Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/pantallazo-inicial.png"
                  alt="Nommy platform on desktop"
                  className="w-full max-w-lg lg:max-w-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-navy text-center mb-12">Empieza a simplificar tu nómina</h2>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="card max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">
                      Apellido *
                    </label>
                    <input
                      type="text"
                      id="apellido"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent"
                      placeholder="+52 55 1234 5678"
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
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Dónde nos encontraste? *
                  </label>
                  <select
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="instagram">Instagram</option>
                    <option value="redes-sociales">Redes sociales</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="recomendacion">Recomendación</option>
                    <option value="evento">Evento</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <button type="submit" className="w-full btn-primary text-lg py-4 group">
                  <span className="group-hover:animate-pulse">Enviar</span>
                </button>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-br from-turquoise/10 to-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-navy text-center mb-12">
              3 cosas que te están quitando tiempo en la gestión de nómina
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <div className="card text-center">
                  <div className="w-16 h-16 bg-turquoise bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <problem.icon className="w-8 h-8 text-turquoise" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{problem.title}</h3>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Creamos una plataforma de nómina para empresas que exigen precisión, eficiencia y cumplimiento.
            </h2>
            <p className="text-xl text-gray-200 mb-8">Conoce Nommy hoy y obtén 2 meses gratis</p>
            <Link
              href="/pricing"
              className="bg-white text-navy px-8 py-4 rounded-full font-bold text-lg hover:scale-110 hover:-translate-y-1 hover:rotate-1 transition-all duration-300 inline-block btn-shadow group"
            >
              <span className="group-hover:animate-bounce">Solicita una demo</span>
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Credibility Banner */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Companies Stat */}
              <div className="flex items-center justify-center space-x-4 group">
                <div className="w-12 h-12 bg-turquoise bg-opacity-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                </div>
                <div className="text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-navy">+750 empresas</div>
                  <div className="text-gray-600">ya confían en Nommy</div>
                </div>
              </div>

              {/* Experience Stat */}
              <div className="flex items-center justify-center space-x-4 group">
                <div className="w-12 h-12 bg-navy bg-opacity-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                </div>
                <div className="text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-navy">10 años</div>
                  <div className="text-gray-600">revolucionando la nómina digital en México</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <NominikChatbot />
    </div>
  )
}
