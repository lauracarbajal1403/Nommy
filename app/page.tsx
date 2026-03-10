"use client"
import Link from "next/link"
import { useEffect, useState, FormEvent } from "react";
import { ArrowRight, Check } from 'lucide-react'
import ScrollAnimation from "@/components/scroll-animation"
import NominikChatbot from "@/app/nominik"
import NommyCalculator from "@/components/NommyCalculator"

const PHRASES = ["gestionar tu talento", "reducir errores", "ahorrar tiempo", "optimizar tu nómina"];

function AnimatedPhrase() {
  const [displayText, setDisplayText] = useState(PHRASES[0]);
  const [isErasing, setIsErasing] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(PHRASES[0].length);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!isErasing && charIndex === PHRASES[phraseIndex].length) {
      timeout = setTimeout(() => setIsErasing(true), 2500);
    } else if (isErasing && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (isErasing && charIndex === 0) {
      const next = (phraseIndex + 1) % PHRASES.length;
      setPhraseIndex(next);
      setIsErasing(false);
    } else if (!isErasing && charIndex < PHRASES[phraseIndex].length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isErasing, phraseIndex]);

  useEffect(() => {
    setDisplayText(PHRASES[phraseIndex].slice(0, charIndex));
  }, [charIndex, phraseIndex]);

  return (
    <span className="relative inline-block">
      <span>{displayText}</span>
      <span className="inline-block w-[3px] h-[1em] bg-white ml-[2px] align-middle"
        style={{ animation: "blink 0.75s step-end infinite" }} />
      <span className="absolute left-0 -bottom-2 h-2 rounded-full rotate-[-1deg]"
        style={{ width: "100%", background: "var(--turquoise, #2dd4bf)", transition: "width 0.1s" }} />
      <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
    </span>
  );
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      const response = await fetch("/api/ebook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        window.open('/gracias', '_blank')
        setFormData({ name: "", lastName: "", email: "", company: "", phone: "" })
      } else {
        setMessage(data.error || "Hubo un error. Por favor intenta de nuevo.")
      }
    } catch (error) {
      setMessage("Error al enviar la solicitud. Por favor intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="overflow-hidden">
      <NominikChatbot />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-navy to-turquoise overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                La plataforma integral <br />para{" "}<AnimatedPhrase />
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-xl">
                Centraliza nómina, control de asistencia, y beneficios en una sola plataforma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/demo" target="_blank" rel="noopener noreferrer"
                  className="bg-turquoise hover:bg-navy text-white font-bold px-6 py-3 rounded-full text-center transition">
                  ¡DEMO GRATIS!
                </Link>
                <Link href="/demo" target="_blank" rel="noopener noreferrer"
                  className="bg-navy hover:bg-turquoise text-white font-bold px-6 py-3 rounded-full text-center transition">
                  ▶ Ver como funciona
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium">
                <div className="flex items-center gap-2"><Check className="text-turquoise w-5 h-5" /><span>$0 Costo implementación</span></div>
                <div className="flex items-center gap-2"><Check className="text-turquoise w-5 h-5" /><span>Soporte 24/7</span></div>
              </div>
            </div>
            <div className="relative w-full max-w-2xl mx-auto lg:mx-0" style={{ minHeight: "500px" }}>

              {/* Tablet */}
              <div className="absolute bottom-0 right-0 z-10 w-[85%]">
                <img src="/Tablet.png" alt="Dashboard de NOMMY en tablet" className="w-full rounded-xl shadow-2xl" />
              </div>

              {/* Celular - sin ScrollAnimation para probar */}
              <div className="absolute top-0 left-0 z-20 w-[50%]">
                <img src="/Cel.png" alt="Dashboard de NOMMY en celular" className="w-full rounded-xl shadow-xl" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">Todo lo que necesitas</h2>
            <p className="text-lg text-turquoise max-w-2xl mx-auto">
              Centraliza la gestión de nómina, talento y más beneficios en una <span className="font-semibold">sola experiencia.</span>
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-8">
            {[
              { img: "/estrategia.png", title: "Optimiza tu estrategia de nómina con Nommy", desc: "Nommy automatiza procesos de nómina tediosos reduciendo errores, centralizando toda tu gestión de los colaboradores en una sola plataforma intuitiva." },
              { img: "/mov.png", title: "Sincronización de movimientos afiliatorios en tiempo", desc: "Optimiza tu carga fiscal cumpliendo con todas las normativas del SAT y leyes laborales vigentes." },
              { img: "/ia.png", title: "Reclutamiento con Nommy IA", desc: "El match perfecto entre tu empresa y el talento que buscas." },
            ].map((card, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <img src={card.img} className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-turquoise text-lg mb-3">{card.title}</h3>
                <p className="text-sm text-navy leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NommyCalculator />

      {/* ---- EBOOK SECTION ---- 
      <section className="relative py-20 bg-white">
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
                <input
                  type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="Email Empresarial*" required
                  className="w-full bg-blue-50 border border-blue-100 rounded-full px-4 py-3 text-sm text-navy placeholder-navy/50 focus:outline-none focus:ring-2 focus:ring-turquoise"
                />
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
                  type="submit" disabled={isLoading}
                  className="w-full bg-turquoise hover:bg-navy text-white font-bold py-3 rounded-full text-base transition-colors duration-200 disabled:opacity-60"
                >
                  {isLoading ? "Enviando..." : "¡Descargar!"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
      */}
      {/* Tool Showcase */}
      <section className="relative py-20 bg-gradient-to-br from-turquoise/10 to-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-in-left">
              <div className="space-y-6 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise">
                  Más que una herramienta, somos un equipo que te respalda
                </h2>
                <Link href="/demo" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center group">
                  ¡DEMO GRATIS!
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-in-right">
              <div className="relative">
                <img src="/pc-nommy-s.png" alt="Dashboard de NOMMY" className="w-full rounded-xl" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-navy to-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            <ScrollAnimation animation="slide-in-left">
              <div className="space-y-8 text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  En optimizar procesos, reducir errores y ahorrar costos
                </h2>
                <div className="space-y-4">
                  {[
                    "Nómina precisa y timbrada automáticamente",
                    "Gestión con registro inteligente de incidencias",
                    "Conexión directa con IDSE",
                    "Reclutamiento avanzado impulsado con IA",
                    "Todo tu control en un solo sistema",
                  ].map((benefit, index) => (
                    <ScrollAnimation key={index} delay={index * 200}>
                      <div className="flex items-center space-x-3 group">
                        <img src="/Icono.png" className="w-6 h-6 flex-shrink-0" />
                        <span className="text-lg text-white">{benefit}</span>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-in-right">
              <div className="relative flex justify-center">
                <img src="/dashi.png" alt="Dashboard nommy" className="w-full-mx-auto" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Simple, rápido y seguro</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Olvida las implementaciones eternas. Con Nommy, estarás operativo en lo que tardas en leer esto.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <img src="/Monofinal.png" alt="Proceso simple Nommy" className="w-full max-w-sm" />
            </div>
            <div className="space-y-8">
              {[
                { n: 1, title: "Crea tu empresa", desc: "Ingresa los datos de la empresa la cual deseas realizar el cálculo de nómina." },
                { n: 2, title: "Agrega a tus colaboradores", desc: "Carga de manera manual o masiva el listado de tus colaboradores en minutos usando nuestras plantillas de Excel." },
                { n: 3, title: "Timbrado de Nómina", desc: "Obtén los layouts bancarios para desarrollar el respectivo timbrado de tu nómina y listo así de fácil es calcular tu nómina con Nommy." },
              ].map((step) => (
                <div key={step.n} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-turquoise flex items-center justify-center font-bold">{step.n}</div>
                  <div>
                    <h3 className="font-semibold mb-1 text-2xl">{step.title}</h3>
                    <p className="text-white/80 text-xl leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              ¿Eres de los que hacen que las cosas pasen?{" "}
              <span className="text-turquoise">Nosotros también.</span>
            </h2>
            <p className="mt-4 text-lg text-turquoise max-w-3xl mx-auto">
              Ya seas la mente que decide, las manos que ejecutan o el motor que lo hace posible. Te acompañamos en los focos y en el día a día.
            </p>
          </div>
        </div>
        <div className="bg-turquoise py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "01", title: "Líderes RRHH", desc: "Convierte procesos en estrategia y talento en imparable." },
                { n: "02", title: "Dueño de empresa", desc: "Tu empresa, tu visión, tu control. Sin sorpresas." },
                { n: "03", title: "Alas para tu negocio", desc: "Es momento de despegar de la mano de Nommy." },
                { n: "04", title: "Despachos Contables", desc: "Unifica la gestión de tus clientes, controla la rentabilidad por proyecto y haz crecer tu equipo sin perder de vista los plazos clave." },
              ].map((card, i, arr) => (
                <div key={card.n} className={`p-8 text-white border-white/20 ${i < arr.length - 1 ? "lg:border-r" : ""}`}>
                  <div className="text-white/70 font-semibold mb-6">{card.n}</div>
                  <h3 className="font-bold text-xl text-white mb-2">{card.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-20 bg-gradient-to-br from-navy to-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollAnimation>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              Control <span className="text-turquoise">TOTAL</span> sin curva técnica
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Únete a cientos de empresas que confían en NOMMY para gestionar su nómina de manera eficiente y sin curva de aprendizaje.
            </p>
            <Link href="/demo" target="_blank" rel="noopener noreferrer"
              className="bg-white text-navy px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center group btn-shadow">
              ¡DEMO GRATIS!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

    </div>
  )
}