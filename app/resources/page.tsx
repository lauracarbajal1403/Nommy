"use client"
import { useState, FormEvent } from "react"
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import emailjs from "@emailjs/browser"
import ScrollAnimation from "@/components/scroll-animation"
import NominikChatbot from "@/app/nominik"

import RibbonBanner from "@/components/cinta"
export default function ResourcesPage() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [emailError, setEmailError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (e.target.name === "email") setEmailError("")
  }

  const validateEmailDomain = async (email: string): Promise<boolean> => {
    const domain = email.split("@")[1]
    if (!domain) return false

    try {
      const res = await fetch(`https://dns.google/resolve?name=${domain}&type=MX`)
      const data = await res.json()
      return Array.isArray(data.Answer) && data.Answer.length > 0
    } catch {
      return false
    }
  }

  const handleEmailBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value
    if (!email || !email.includes("@")) return

    const valid = await validateEmailDomain(email)
    if (!valid) {
      setEmailError("El dominio de este email no parece válido. Verifica que sea un correo empresarial real.")
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    // Validar dominio antes de enviar
    const domainValid = await validateEmailDomain(formData.email)
    if (!domainValid) {
      setEmailError("El dominio de este email no parece válido. Verifica que sea un correo empresarial real.")
      setIsLoading(false)
      return
    }

    try {
      await fetch("/api/ebook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
        }),
      })

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      window.open('/graciass', '_blank')
      setFormData({ name: "", lastName: "", email: "", company: "", phone: "" })

    } catch (error) {
      console.log("EmailJS error completo:", error)
      setMessage("Error al enviar. Por favor intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  const resources = [
    {
      title: "Evita multas de hasta $622,440 MXN  por no transparentar sueldos en vacantes",
      description: "Descubre cómo evitar multas.",
      category: "Blog",
      icon: BookOpen,
      image: "/imagen2.png",
      link: "/transparencia-salarial",
      readTime: "4 min de lectura",
      date: "18 Mar 2026",
    },
    {
      title: "Retención de talento y decisiones que realmente impactan a tu empresa",
      description: "Descubre los beneficios que retienen el talento.",
      category: "Blog",
      icon: BookOpen,
      image: "/portada1.png",
      link: "/talento",
      readTime: "4 min de lectura",
      date: "23 Feb 2026",
    },
    {
      title: "Encuestas de clima laboral",
      description: "La herramienta estratégica que tu departamento de RRHH no puede ignorar.",
      category: "Blog",
      icon: BookOpen,
      image: "/portada.jpg",
      link: "/nomina",
      readTime: "3 min de lectura",
      date: "18 Feb 2026",
    },
    {
      title: "Nómina en Jalisco 2026",
      description: "Si eres empresario Jalisciense esta guía práctica es para ti. Te compartimos cómo la nómina de 2026 exige estos 3 cambios inmediatos.",
      category: "Blog",
      icon: BookOpen,
      image: "/bloggy.jpg",
      link: "/nomina-jalisco-2026",
      readTime: "5 min de lectura",
      date: "6 Feb 2026",
    },
    {
      title: "Aspectos clave para fortalecer tu gestión de nómina en 2026",
      description: "Conoce los aspectos clave que fortalecerán tu gestión de nómina en 2026. Desde la automatización hasta el cumplimiento normativo, descubre cómo optimizar tus procesos y garantizar la satisfacción de tus empleados.",
      category: "Blog",
      icon: BookOpen,
      image: "/portada.png",
      link: "/prod",
      readTime: "8 min de lectura",
      date: "06 Ene 2026",
    },
  ];

  const ArticleCard = ({ resource, isFeatured }) => (
    <Link href={resource.link}>
      <article className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group cursor-pointer mb-8">
        <div className="grid md:grid-cols-2">
          <div className="relative h-84 overflow-hidden">
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {isFeatured && (
              <span className="absolute top-6 left-6 bg-turquoise text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ⭐ Nuevo Blog
              </span>
            )}
          </div>

          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {resource.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {resource.readTime}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-turquoise transition-colors">
              {resource.title}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {resource.description}
            </p>

            <div className="flex items-center text-turquoise font-bold gap-2 group-hover:gap-3 transition-all">
              <span>Leer artículo completo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 flex items-center text-white bg-gradient-to-br from-navy via-navy to-turquoise">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-turquoise/20 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-turquoise/30">
            Centro de Recursos
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Recursos para potenciar tu gestión de <span className="text-turquoise">RRHH</span>
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Aprende, mejora y mantente actualizado con contenido especializado para tu empresa.
          </p>
        </div>
      </section>

      <section className="relative py-20 bg-white" id="ebook">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <p className="text-turquoise font-semibold text-sm uppercase tracking-widest mb-3">Ebook Gratuito</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-8">
                La guía de las multas de nómina con mayor peso en 2026{" "}
                <span className="text-turquoise">y cómo evitarlas con Nommy</span>
              </h2>
              <h3 className="text-xl font-bold text-navy mb-6">¿Qué encontrarás en este descargable?</h3>
              <div className="space-y-5">
                {[
                  { emoji: "📊", title: "Las multas de nómina más comunes en 2026", desc: "conoce las sanciones que más están afectando a las empresas y cuánto pueden llegar a costar." },
                  { emoji: "⚠️", title: "Los errores que las provocan", desc: "descubre qué fallas en timbrado, movimientos ante el IMSS o declaraciones pueden generar sanciones." },
                  { emoji: "📑", title: "Buenas prácticas para evitar multas", desc: "recomendaciones claras para mantener tu nómina en regla y evitar problemas con el SAT o el IMSS." },
                  { emoji: "🚀", title: "Cómo prevenir errores con Nommy", desc: "automatiza cálculos, timbrado y reportes para reducir riesgos y mantener tu operación en cumplimiento." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-turquoise/10 flex items-center justify-center text-lg">{item.emoji}</div>
                    <p className="text-navy/80 text-base leading-relaxed">
                      <strong className="text-navy">{item.title}:</strong> {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-navy text-center mb-6">
                Obtén tu ebook gratis completando el formulario a continuación.
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange}
                    placeholder="Nombre*" required
                    className="w-full bg-blue-50 border border-blue-100 rounded-full px-4 py-3 text-sm text-navy placeholder-navy/50 focus:outline-none focus:ring-2 focus:ring-turquoise"
                  />
                  <input
                    type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                    placeholder="Apellido*" required
                    className="w-full bg-blue-50 border border-blue-100 rounded-full px-4 py-3 text-sm text-navy placeholder-navy/50 focus:outline-none focus:ring-2 focus:ring-turquoise"
                  />
                </div>

                {/* Email con validación DNS/MX */}
                <div>
                  <input
                    type="email" name="email" value={formData.email}
                    onChange={handleChange}
                    onBlur={handleEmailBlur}
                    placeholder="Email Empresarial*" required
                    className={`w-full bg-blue-50 border rounded-full px-4 py-3 text-sm text-navy placeholder-navy/50 focus:outline-none focus:ring-2 focus:ring-turquoise ${
                      emailError ? "border-red-400 focus:ring-red-300" : "border-blue-100"
                    }`}
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs mt-1 px-4">{emailError}</p>
                  )}
                </div>

                <input
                  type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  placeholder="Teléfono (+52 10 dígitos)*" required
                  className="w-full bg-blue-50 border border-blue-100 rounded-full px-4 py-3 text-sm text-navy placeholder-navy/50 focus:outline-none focus:ring-2 focus:ring-turquoise"
                />
                <input
                  type="text" name="company" value={formData.company} onChange={handleChange}
                  placeholder="Empresa*" required
                  className="w-full bg-blue-50 border border-blue-100 rounded-full px-4 py-3 text-sm text-navy placeholder-navy/50 focus:outline-none focus:ring-2 focus:ring-turquoise"
                />

                {message && <p className="text-red-500 text-sm text-center">{message}</p>}

                <button
                  type="submit" disabled={isLoading || !!emailError}
                  className="w-full bg-turquoise hover:bg-navy text-white font-bold py-3 rounded-full text-base transition-colors duration-200 disabled:opacity-60"
                >
                  {isLoading ? "Verificando..." : "¡Descargar!"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
      <RibbonBanner/>
      {/* Contenedor de Artículos */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {resources.map((item, index) => (
            <ScrollAnimation key={index}>
              <ArticleCard
                resource={item}
                isFeatured={index === 0}
              />
            </ScrollAnimation>
          ))}
        </div>
      </main>

      <NominikChatbot />
    </div>
  );
}