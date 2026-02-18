"use client"
import { X, Calendar, Clock, ArrowLeft, CheckCircle, AlertTriangle, FileText, BarChart3, TrendingUp, Users, Heart, ClipboardCheck } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import { useState } from "react";


export default function ClimaLaboralPage() {
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  
  // 1. Estado unificado para el formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  // 2. Función que maneja el envío de datos y la descarga
  const handleProcessAction = async (e) => {
    e.preventDefault()
    
    if (formData.name.trim().length < 3) {
      alert("Por favor, ingresa tu nombre completo")
      return
    }

    setIsLoading(true)
    setMessage("")

    try {
      // ENVIAR A LA API (Tu servicio de correo)
      const response = await fetch("/api/send-contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: "Descarga de Guía Clima Laboral",
          message: `El usuario ${formData.name} ha descargado la guía.`
        }),
      })

      if (response.ok) {
        // EJECUTAR DESCARGA AUTOMÁTICA
        const link = document.createElement('a')
        link.href = '/guia.jpg' 
        link.download = 'Guia_Nominik_Clima_Laboral.jpg'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Limpiar y cerrar
        setShowModal(false)
        setFormData({ name: "", email: "" })
        
        // Opcional: Redirigir o mostrar éxito
        // window.open('/gracias', '_blank')
      } else {
        const data = await response.json()
        setMessage(data.error || "Hubo un error. Intenta de nuevo.")
      }
    } catch (error) {
      setMessage("Error al procesar la solicitud.")
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      {/* MODAL DE REGISTRO */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-navy"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-navy mb-2">¡Casi listo!</h3>
            <p className="text-gray-600 mb-6">
              Ingresa tus datos para habilitar la descarga de la guía estratégica.
            </p>

            <form onSubmit={handleProcessAction} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Nombre Completo</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Ej. Juan Pérez"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 outline-none text-navy"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Correo Corporativo</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="nombre@empresa.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 outline-none text-navy"
                />
              </div>

              {message && <p className="text-red-500 text-sm">{message}</p>}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-turquoise text-navy font-bold py-4 rounded-xl hover:bg-navy hover:text-white transition-all shadow-lg disabled:opacity-50"
              >
                {isLoading ? "Procesando..." : "Confirmar y Descargar"}
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <div className="bg-navy/5 border-b border-navy/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/resources" 
              className="inline-flex items-center text-navy hover:text-turquoise transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Bloggy
            </Link>
          </div>
        </div>

        {/* Hero Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ScrollAnimation>
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-turquoise/10 text-turquoise px-3 py-1.5 rounded-full font-medium">
                  <Users className="w-4 h-4" />
                  RRHH Estratégico
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  18 Febrero 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  10 min de lectura
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
                Encuestas de Clima Laboral: La herramienta estratégica que tu departamento de RRHH no puede ignorar
              </h1>

              <div className="bg-gradient-to-r from-turquoise to-navy p-8 rounded-2xl text-white shadow-xl">
                <p className="text-xl lg:text-2xl font-medium leading-relaxed italic">
                  "Si no estás midiendo el clima laboral como un KPI, tu forma de gestionar a tus colaboradores no es la más acertada."
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Introducción */}
          <ScrollAnimation>
            <div className="prose prose-lg max-w-none mb-12 text-justify">
              <p className="text-gray-700 leading-relaxed text-lg">
                El clima laboral ha dejado de ser un tema "suave" para convertirse en un <strong>indicador crítico de desempeño organizacional</strong>. Productividad, rotación, compromiso e innovación están directamente correlacionados con cómo se sienten las personas dentro de tu organización.
              </p>
            </div>
          </ScrollAnimation>

          {/* ¿Qué son? */}
          <ScrollAnimation>
            <section className="mb-16">
              <div className="bg-gray-50 p-8 rounded-2xl border border-navy/10">
                <h2 className="text-3xl font-bold text-navy mb-6 flex items-center gap-3">
                  <ClipboardCheck className="w-8 h-8 text-turquoise" />
                  ¿Qué son las encuestas de clima laboral?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Son instrumentos estructurados de medición que evalúan la percepción de los colaboradores respecto a su entorno de trabajo. <strong>No miden "felicidad superficial"</strong>, miden variables críticas:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Liderazgo y estilo de gestión",
                    "Comunicación interna",
                    "Cultura organizacional",
                    "Reconocimiento y compensación",
                    "Carga de trabajo",
                    "Desarrollo profesional",
                    "Confianza organizacional"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-navy font-medium">
                      <CheckCircle className="w-5 h-5 text-turquoise" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollAnimation>

          {/* Para qué sirven */}
          <ScrollAnimation>
            <section className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-8 text-center">
                ¿Para qué sirven? Genera Inteligencia Estratégica
              </h2>
              <div className="grid gap-6">
                <div className="bg-white border-2 border-turquoise rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-navy mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500" /> Detectar focos rojos
                  </h3>
                  <p className="text-gray-600">Identifica altos niveles de rotación o bajo desempeño antes de que exploten.</p>
                </div>
                <div className="bg-white border-2 border-navy rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-navy mb-2 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-turquoise" /> Decisiones basadas en datos
                  </h3>
                  <p className="text-gray-600">Evita operar por intuición; permite priorizar con evidencia cuantitativa.</p>
                </div>
                <div className="bg-white border-2 border-turquoise rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-navy mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" /> Reducir costos ocultos
                  </h3>
                  <p className="text-gray-600">Minimiza el impacto financiero de la desmotivación y los conflictos internos.</p>
                </div>
              </div>
            </section>
          </ScrollAnimation>

          {/* Guía Rápida CTA */}
          <ScrollAnimation>
            <div className="bg-navy text-white p-8 rounded-2xl mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Guía rápida de desarrollo</h3>
                <p className="opacity-80">Optimiza los tiempos de tu equipo de RRHH con nuestra metodología.</p>
              </div>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-turquoise text-navy font-bold py-3 px-6 rounded-xl hover:bg-white transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <FileText className="w-5 h-5" /> Descargar Guía Gratis
              </button>
            </div>
          </ScrollAnimation>

          {/* Nommy Section */}
          <ScrollAnimation>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-navy mb-8">Cómo Nommy impulsa el clima laboral</h2>
              <div className="space-y-4">
                {[
                  { t: "Creación en minutos", d: "Encuestas personalizadas por dimensiones o áreas." },
                  { t: "Garantiza anonimato real", d: "Genera confianza absoluta en tus colaboradores." },
                  { t: "Dashboards en tiempo real", d: "Visualiza indicadores claros y comparativos históricos." },
                  { t: "Visión 360° del talento", d: "Integra clima con ausentismo, desempeño y nómina." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 border-b border-gray-100">
                    <div className="bg-turquoise/20 p-2 rounded-lg h-fit">
                      <Heart className="w-6 h-6 text-turquoise" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy">{item.t}</h4>
                      <p className="text-gray-600">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollAnimation>

          {/* Conclusión & Final CTA */}
          <ScrollAnimation>
            <div className="bg-gradient-to-br from-turquoise via-turquoise to-navy p-10 rounded-3xl text-white text-center shadow-2xl mt-12 py-20">
              <h3 className="text-3xl font-bold mb-6">
                Haz que tu próxima encuesta sea una decisión estratégica
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                No te compliques con análisis interminables en Excel. Convierte el clima laboral en un KPI gestionable hoy mismo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center py-20">
                <Link
                  href="/demo"
                  className="bg-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg"
                >
                  Solicitar Demo Nommy
                </Link>
                <button 
                  onClick={() => setShowModal(true)}
                  className="bg-white text-navy font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <FileText className="w-5 h-5" /> Descargar Guía Gratis
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </article>
      </div>
    </>
  )
}