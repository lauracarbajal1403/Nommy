"use client"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"

// ─── Industry Data ────────────────────────────────────────────────────────────

const industries = [
  {
    id: "restaurantes",
    label: "Restaurantes",
    emoji: "🍽️",
    headline: "Gestión sin estrés para tu equipo de cocina y sala",
    description:
      "Nómina automatizada, turnos partidos y empleados de tiempo parcial. Nommy lo maneja todo sin que tengas que tocar una hoja de Excel.",
    features: [
      { icon: "⏱️", title: "Turnos y horarios rotativos", desc: "Configura turnos de mañana, tarde y noche con cambios automáticos en nómina." },
      { icon: "📱", title: "Checador digital desde celular", desc: "Tus meseros y cocineros fichan desde su smartphone sin necesidad de hardware." },
      { icon: "💸", title: "Cálculo de complemento", desc: "Realiza el cálculo automático de complementos de nómina." },
      { icon: "📋", title: "Alta masiva de personal", desc: "En temporada alta, da de alta a decenas de colaboradores en minutos con plantillas Excel." },
      { icon: "🏛️", title: "Cumplimiento IMSS garantizado", desc: "Altas, bajas y modificaciones ante el IMSS sincronizadas en tiempo real vía IDSE." },
      { icon: "📊", title: "Reportes dinámicos", desc: "Visualiza los reportes de gastos de nómina." },
    ],
  },
  {
    id: "maquilas",
    label: "Maquilas",
    emoji: "🏭",
    headline: "Nómina a escala industrial, sin cuellos de botella",
    description:
      "Cientos de trabajadores, múltiples turnos y registro de asistencia. Nommy calcula y timbra tu nómina a velocidad industrial.",
    features: [
      { icon: "⚙️", title: "Nómina personalizada", desc: "Calcula remuneraciones variables por piezas producidas, bonos de producción y eficiencia." },
      { icon: "🔄", title: "3 turnos simultáneos", desc: "Gestiona turno matutino, vespertino y nocturno con recargos nocturnos automáticos." },
      { icon: "📦", title: "Alta masiva de operadores", desc: "Incorpora a cientos de operadores rápidamente con carga masiva y validación automática." },
      { icon: "🛡️", title: "Cumplimiento STPS y SAT", desc: "Genera layout de timbrado y cumple con todas las obligaciones fiscales y laborales vigentes." },
      { icon: "📉", title: "Control de ausentismo", desc: "Observa las faltas de tu equipo." },
      { icon: "🔗", title: "Conexión directa con IDSE", desc: "Movimientos afiliatorios al IMSS sin errores ni retrasos, desde la plataforma." },
    ],
  },
  {
    id: "callcenter",
    label: "Call Center",
    emoji: "🎧",
    headline: "Flexibilidad total para equipos dinámicos y remotos",
    description:
      "Agentes en home office, turnos escalonados y comisiones por desempeño. Nommy se adapta a la velocidad de tu operación.",
    features: [
      { icon: "🏠", title: "Nómina 100% remota", desc: "Gestiona a tus agentes desde cualquier lugar. Timbrado y dispersión sin ir a ninguna oficina." },
      { icon: "🎯", title: "Comisiones y bonos variables", desc: "Integra KPIs de ventas y calidad directamente en el cálculo de nómina de cada agente." },
      { icon: "📅", title: "Horarios escalonados", desc: "Programa turnos de entrada cada 15 o 30 minutos y registra asistencia con precisión." },
      { icon: "📊", title: "Reportes de productividad", desc: "Cruza datos de asistencia con desempeño para identificar a tus mejores talentos." },
      { icon: "⚡", title: "Alta velocidad de onboarding", desc: "Incorpora nuevos agentes en minutos. Ideal para campañas con contratación masiva." },
      { icon: "🔒", title: "Seguridad en el timbrado", desc: "Nommy valida y respalda cada incidencia que impacta tu nómina." },
    ],
  },
  {
    id: "empresas-grandes",
    label: "Empresas Grandes",
    emoji: "🏢",
    headline: "Control total para organizaciones complejas y multi-sitio",
    description:
      "Múltiples razones sociales, reportes dinámicos y cientos de empleados. Nommy centraliza todo sin perder el detalle.",
    features: [
      { icon: "🏗️", title: "Multi-empresa y multi-sitio", desc: "Administra varias razones sociales y sucursales desde un solo panel de control unificado." },
      { icon: "💼", title: "Reportes de gastos de nómina", desc: "Visualiza los gastos de nómina por departamento." },
      { icon: "📈", title: "Reportes ejecutivos", desc: "Tableros interactivos con indicadores clave para la dirección general y finanzas." },
      { icon: "🤖", title: "Reclutamiento con IA", desc: "Filtra candidatos automáticamente por competencias para cubrir vacantes a escala empresarial." },
      { icon: "✅", title: "NOM-035 integrada", desc: "Gestiona encuestas de clima y riesgo psicosocial cumpliendo la normativa vigente." },
      { icon: "🛡️", title: "Auditoría y evaluaciones", desc: "Genera evaluaciones y aplicalas desde Nommy." },
    ],
  },
  {
    id: "negocios",
    label: "Negocios y PyMEs",
    emoji: "🛍️",
    headline: "Todo el poder de una empresa grande, al alcance de tu PyME",
    description:
      "Porque no necesitas un departamento de RRHH para gestionar tu equipo como los grandes. Nommy es tu equipo digital.",
    features: [
      { icon: "🚀", title: "Reclutamiento con IA", desc: "Contrata candidatos automáticamente por competencias y perfil." },
      { icon: "💰", title: "Sin costo de implementación", desc: "Empieza a usar Nommy desde el primer día sin inversión inicial ni cargos ocultos." },
      { icon: "📱", title: "Fácil de usar", desc: "Interfaz intuitiva diseñada para que cualquier persona pueda calcular nómina sin ser experto." },
      { icon: "🎯", title: "Control de asistencia", desc: "Limita dónde pueden hacer check in tus empleados con geolocalización." },
      { icon: "🆘", title: "Soporte 24/7", desc: "Un equipo humano listo para ayudarte cuando más lo necesitas, sin chatbots frustrantes." },
      { icon: "📄", title: "Timbrado al instante", desc: "Genera CFDIs de nómina en segundos y compártelos automáticamente con tus colaboradores." },
    ],
  },
  {
    id: "despachos",
    label: "Despachos Contables",
    emoji: "📒",
    headline: "Gestiona a todos tus clientes desde un solo lugar",
    description:
      "Deja de saltar entre archivos y sistemas. Nommy te da una plataforma unificada para llevar la nómina de todos tus clientes con precisión y velocidad.",
    features: [
      { icon: "👥", title: "Multi-cliente centralizado", desc: "Administra la nómina de decenas de empresas desde un único acceso sin perder el control." },
      { icon: "⚡", title: "Cálculo express", desc: "Procesa nóminas de múltiples clientes en paralelo. Lo que antes tardaba horas, hoy son minutos." },
      { icon: "📤", title: "Entrega automatizada", desc: "Envía recibos de nómina a cada cliente automáticamente al cerrar el periodo." },
      { icon: "🔐", title: "Accesos diferenciados", desc: "Cada cliente ve solo su información. Control de permisos por empresa y por usuario." },
      { icon: "📑", title: "Reportes dinámicos", desc: "Visualiza información de nómina en tiempo real con gráficas." },
      { icon: "🤝", title: "Crece tu despacho", desc: "Incorpora más clientes sin aumentar tu equipo. Nommy escala contigo sin fricciones." },
    ],
  },
  {
    id: "rrhh",
    label: "Depto. de RRHH",
    emoji: "👔",
    headline: "Libera a tu equipo de RRHH de lo operativo",
    description:
      "Tu equipo de RRHH vale demasiado para pasarla capturando incidencias. Dales Nommy y deja que se enfoquen en lo que de verdad importa: las personas.",
    features: [
      { icon: "🗓️", title: "Gestión de incidencias automática", desc: "Vacaciones, permisos, incapacidades y horas extra registradas y calculadas automáticamente." },
      { icon: "🤖", title: "Reclutamiento con IA", desc: "Atrae, evalúa y selecciona candidatos con ayuda de inteligencia artificial en cada etapa." },
      { icon: "📊", title: "Canal corporativo", desc: "Publica comunicados, anuncios y actualizaciones importantes directamente desde Nommy." },
      { icon: "📋", title: "NOM-035 sin complicaciones", desc: "Lanza encuestas oficiales, analiza resultados y genera el plan de acción desde Nommy." },
      { icon: "📱", title: "Portal del empleado", desc: "Tus colaboradores consultan recibos, solicitan permisos y actualizan sus datos sin intermediarios." },
      { icon: "🏆", title: "Altas y bajas masivas", desc: "Gestiona altas y bajas de empleados sin perder tiempo en trámites." },
    ],
  },
  {
    id: "construccion",
    label: "Construcción",
    emoji: "🏗️",
    headline: "Nómina para obras en movimiento constante",
    description:
      "Personal temporal, múltiples obras y pagos semanales. Nommy se adapta al ritmo de la construcción sin complicaciones.",
    features: [
      { icon: "📅", title: "Configuración flexible de periodicidad", desc: "Configura diferentes periodicidades de pago según el tipo de contrato de cada trabajador." },
      { icon: "🗺️", title: "Horarios rotativos", desc: "Crea horarios rotativos para personal temporal o por obra sin perder control." },
      { icon: "⏰", title: "Horas extra automáticas", desc: "Calcula automáticamente tiempos extra, domingos y días festivos con los recargos correctos." },
      { icon: "📝", title: "Contratos temporales", desc: "Gestiona altas y bajas masivas de personal temporal sin trámites engorrosos." },
      { icon: "🔗", title: "Sincronización IMSS", desc: "Movimientos afiliatorios en tiempo real para todo tu personal activo en cada obra." },
      { icon: "📊", title: "Costo real por proyecto", desc: "Visualiza el costo total de mano de obra por proyecto para una mejor presupuestación." },
    ],
  },
]

// ─── Feature Card ─────────────────────────────────────────────────────────────

function FeatureCard({ icon, title, desc, index }) {
  return (
    <div
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="text-2xl mb-3">{icon}</div>
      <h4 className="font-bold text-[#274263] text-sm mb-1">{title}</h4>
      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function IndustryCarousel() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const scrollRef = useRef(null)
  const industry = industries[active]

  const handleSelect = (idx) => {
    if (idx === active) return
    setAnimating(true)
    setTimeout(() => {
      setActive(idx)
      setAnimating(false)
    }, 220)

    // scroll pill into view
    const container = scrollRef.current
    if (container) {
      const pills = container.querySelectorAll("button")
      const pill = pills[idx]
      if (pill) {
        const offset = pill.offsetLeft - container.clientWidth / 2 + pill.clientWidth / 2
        container.scrollTo({ left: offset, behavior: "smooth" })
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#274263] leading-tight">
            ¿Cómo beneficia{" "}
            <span style={{ color: "#00bcd4" }}>Nommy</span>{" "}
            a tu empresa?
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Selecciona tu industria y descubre las funciones diseñadas exactamente para ti.
          </p>
        </div>

        {/* Pill Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-4 mb-10 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {industries.map((ind, idx) => (
            <button
              key={ind.id}
              onClick={() => handleSelect(idx)}
              className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border"
              style={
                active === idx
                  ? {
                      background: "linear-gradient(90deg, #274263, #00bcd4)",
                      color: "#fff",
                      borderColor: "transparent",
                      boxShadow: "0 4px 16px rgba(0,188,212,0.3)",
                      transform: "scale(1.05)",
                    }
                  : {
                      background: "#fff",
                      color: "#274263",
                      borderColor: "#e5e7eb",
                    }
              }
            >
              <span>{ind.emoji}</span>
              <span>{ind.label}</span>
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div
          className="transition-all duration-200"
          style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(12px)" : "translateY(0)" }}
        >
          {/* Industry Hero */}
          <div
            className="rounded-3xl p-8 mb-8 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d3b6e 70%, #0a2a4a 100%)" }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,188,212,0.12) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
            />
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: "rgba(0,188,212,0.15)", border: "1px solid rgba(0,188,212,0.3)" }}
              >
                {industry.emoji}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ color: "#00bcd4", background: "rgba(0,188,212,0.1)", border: "1px solid rgba(0,188,212,0.25)" }}
                  >
                    {industry.label}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">{industry.headline}</h3>
                <p className="text-white text-base max-w-2xl">{industry.description}</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {industry.features.map((f, i) => (
              <FeatureCard key={i} index={i} {...f} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              ¿Quieres ver cómo funciona Nommy para{" "}
              <span className="font-semibold text-[#274263]">{industry.label.toLowerCase()}</span>?
            </p>
            <Link
              href="/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-6 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: "linear-gradient(90deg, #274263, #00bcd4)" }}
            >
              ¡DEMO GRATIS!
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}