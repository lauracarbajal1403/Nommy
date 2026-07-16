"use client"
import { ArrowLeft, Calendar, Clock, ExternalLink, AlertTriangle } from "lucide-react"
import Link from "next/link"
import NominikChatbot from "@/app/nominik"

export default function EstructuraOrganizacionalPage() {
  const beneficiosEstructura = [
    {
      emoji: "🧩",
      title: "Roles y responsabilidades claras",
      desc: "Cuando cada colaborador conoce sus funciones, disminuyen la confusión, los retrabajos y los conflictos entre áreas.",
    },
    {
      emoji: "🎯",
      title: "Reclutamiento más preciso",
      desc: "Definir correctamente cada puesto permite atraer candidatos con el perfil adecuado y acelerar los procesos de selección.",
    },
    {
      emoji: "📊",
      title: "Evaluaciones de desempeño más objetivas",
      desc: "Las responsabilidades claras facilitan medir resultados y establecer indicadores de desempeño alineados con cada posición.",
    },
    {
      emoji: "📈",
      title: "Planes de crecimiento y sucesión",
      desc: "Una estructura organizacional ayuda a identificar oportunidades de desarrollo interno y preparar futuros líderes dentro de la empresa.",
    },
    {
      emoji: "🤝",
      title: "Mejor colaboración entre áreas",
      desc: "La claridad en las funciones mejora la comunicación y fortalece el trabajo en equipo.",
    },
  ]

  const faqs = [
    {
      q: "¿Qué es una estructura organizacional?",
      a: "Es el modelo que define cómo se distribuyen las responsabilidades, la autoridad y la comunicación dentro de una empresa para mejorar la coordinación y el funcionamiento de los equipos.",
    },
    {
      q: "¿Por qué es importante una estructura organizacional?",
      a: "Porque ayuda a que cada colaborador conozca su función, mejora la comunicación interna, facilita la toma de decisiones y permite un crecimiento organizacional más eficiente.",
    },
    {
      q: "¿Qué problemas puede causar una mala estructura organizacional?",
      a: "Puede generar duplicidad de funciones, falta de comunicación, retrasos en las decisiones, baja productividad y dificultades para gestionar el talento.",
    },
    {
      q: "¿Cómo mejorar la estructura organizacional de una empresa?",
      a: "Es recomendable definir claramente los puestos, documentar responsabilidades, establecer procesos de comunicación y apoyarse en herramientas tecnológicas que centralicen la gestión del personal.",
    },
    {
      q: "¿Cómo puede ayudar Nommy?",
      a: "Nommy permite administrar colaboradores, asistencia, incidencias, vacaciones, expedientes digitales y comunicación interna desde una sola plataforma, facilitando una gestión de Recursos Humanos más organizada, eficiente y estratégica.",
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-navy via-navy to-turquoise text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-turquoise/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-white/5 blur-2xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-turquoise/80 hover:text-turquoise text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Recursos
          </Link>

      

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            ¿Tu empresa está creciendo o solo{" "}
            <span className="text-turquoise">sumando personas</span>?
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              15 Jul 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              5 min de lectura
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">

        {/* Intro */}
        <p className="text-xl text-gray-700 leading-relaxed mb-4 font-medium border-l-4 border-turquoise pl-8">
          Contratar más colaboradores no siempre significa que una empresa está creciendo de forma saludable.
        </p>
        <p className="text-gray-500 leading-relaxed mb-12">
          Cuando el crecimiento no va acompañado de una estructura organizacional clara, es común que aparezcan problemas como falta de comunicación, duplicidad de funciones, retrasos en la toma de decisiones y una disminución en la productividad. Una estructura organizacional bien definida permite que cada colaborador conozca su función, sus responsabilidades y la forma en que contribuye a los objetivos de la empresa, brindando a Recursos Humanos las herramientas necesarias para gestionar el talento de manera estratégica y preparar a la organización para crecer de forma ordenada.
        </p>

        {/* Qué es */}
        <h2 className="text-2xl font-bold text-navy mb-4">
          ¿Qué es una estructura organizacional?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Una estructura organizacional es el modelo que define cómo se distribuyen las responsabilidades, la autoridad y la comunicación dentro de una empresa. Su objetivo es establecer con claridad quién realiza cada función, cómo interactúan las distintas áreas y quién toma las decisiones.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Cuando todos los colaboradores conocen su rol, los procesos se vuelven más eficientes, se reducen los errores y la organización puede adaptarse mejor al crecimiento.
        </p>

        {/* Elementos */}
        <h2 className="text-2xl font-bold text-navy mb-4">
          Elementos de una estructura organizacional
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Una estructura organizacional suele incluir:
        </p>
        <ul className="space-y-3 mb-12">
          {[
            "Puestos y responsabilidades definidas",
            "Líneas de autoridad y reporte",
            "Distribución de funciones por área",
            "Procesos de comunicación interna",
            "Niveles de toma de decisiones",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-navy/80 text-sm">
              <span className="w-5 h-5 rounded-full bg-turquoise flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* Por qué importa a RRHH - tarjetas */}
        <h2 className="text-2xl font-bold text-navy mb-2">
          ¿Por qué una estructura organizacional es importante para Recursos Humanos?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Para el área de Capital Humano, contar con una estructura organizacional sólida facilita la administración del talento y permite que los procesos sean más eficientes desde la contratación hasta el desarrollo profesional:
        </p>

        <div className="space-y-4 mb-12">
          {beneficiosEstructura.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 items-start border border-gray-100 rounded-xl p-5 hover:border-turquoise/30 hover:bg-turquoise/5 transition-colors"
            >
              <span className="text-2xl flex-shrink-0">{item.emoji}</span>
              <div>
                <h3 className="font-bold text-navy text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats band */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { num: "47%", label: "De colaboradores entiende claramente su rol (Gallup)" },
            { num: "23%", label: "Más rentabilidad con equipos comprometidos" },
            { num: "5", label: "Elementos clave de toda estructura organizacional" },
          ].map((s, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100">
              <p className="text-3xl font-extrabold text-turquoise mb-1">{s.num}</p>
              <p className="text-xs text-gray-500 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 italic mb-12 -mt-8">
          Fuentes: Gallup y Society for Human Resource Management (SHRM).
        </p>

        {/* Alert - señales */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex gap-4 items-start">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-800 text-sm mb-2">
              Señales de que tu empresa necesita mejorar su estructura organizacional
            </p>
            <ul className="text-amber-700 text-sm leading-relaxed space-y-1">
              <li>• Los colaboradores no saben a quién acudir</li>
              <li>• Existen funciones duplicadas</li>
              <li>• Las decisiones tardan demasiado en aprobarse</li>
              <li>• Hay confusión sobre las responsabilidades</li>
              <li>• Los equipos trabajan de forma aislada</li>
              <li>• Recursos Humanos dedica demasiado tiempo a resolver problemas operativos</li>
            </ul>
          </div>
        </div>

        {/* El verdadero desafío */}
        <h2 className="text-2xl font-bold text-navy mb-4">
          Más que un organigrama, un aliado estratégico
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Hoy en día, una estructura organizacional eficiente va mucho más allá de un organigrama. Las empresas necesitan herramientas que centralicen la información, automaticen procesos y permitan administrar el talento desde una sola plataforma.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Una estructura organizacional sólida permite que las personas trabajen con claridad, los líderes tomen mejores decisiones y Recursos Humanos se convierta en un aliado estratégico del negocio. Más que definir jerarquías, una estructura bien diseñada impulsa la productividad, mejora la colaboración entre áreas y prepara a la empresa para crecer de manera ordenada y sostenible.
        </p>

        {/* Nommy highlight block */}
        <div className="bg-gradient-to-br from-navy to-turquoise rounded-2xl px-8 py-12 text-white mb-12">
          <p className="text-turquoise/80 font-semibold text-sm uppercase tracking-widest mb-4">
            Orden y Claridad Organizacional
          </p>
          <h2 className="text-2xl font-bold mb-4">
            ¿Cómo ayuda Nommy a fortalecer la estructura organizacional?
          </h2>
          <p className="text-white/80 leading-relaxed mb-4 text-sm">
            Con Nommy, Recursos Humanos puede gestionar colaboradores, asistencia, incidencias, vacaciones, expedientes digitales y comunicación interna en un solo lugar.
          </p>
          <p className="text-white/80 leading-relaxed text-sm">
            Esto facilita mantener la información actualizada, optimizar procesos y brindar mayor claridad a toda la organización, ayudando a tu empresa a crecer de forma ordenada y sostenible.
          </p>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-navy mb-6">
          Preguntas frecuentes sobre estructura organizacional
        </h2>
        <div className="space-y-4 mb-12">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl p-5 hover:border-turquoise/30 transition-colors"
            >
              <h3 className="font-bold text-navy text-sm mb-2">{item.q}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* CTA box */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-10">
          <h2 className="text-xl font-bold text-navy mb-6">Fortalece la estructura organizacional de tu empresa con Nommy:</h2>

          <ul className="space-y-3 mb-8">
            {[
              "Gestionar colaboradores, roles y expedientes desde una sola plataforma",
              "Llevar un control de asistencia e incidencias digitalizado y en tiempo real",
              "Centralizar vacaciones y comunicación interna sin procesos dispersos",
              "Facilitar evaluaciones de desempeño con información precisa y actualizada",
              "Preparar a tu empresa para crecer de forma ordenada y sostenible",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-navy/80 text-sm">
                <span className="w-5 h-5 rounded-full bg-turquoise flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-turquoise/10 border border-turquoise/20 rounded-xl px-5 py-4 mb-8">
            <p className="text-navy font-bold text-sm">
              🎁 Recibe una asesoría gratuita y conoce cómo Nommy ordena la estructura de tu empresa
            </p>
            <p className="text-gray-400 text-xs mt-1">Herramientas avanzadas de gestión de nómina, asistencia y RRHH.</p>
          </div>

          <p className="text-gray-600 text-sm mb-6 italic">
            ¿Tu empresa está creciendo con orden o solo sumando personas? No dejes la estructura de tu organización al azar.
          </p>

          <a
            href="/demo"
            className="inline-flex items-center gap-2 bg-turquoise hover:bg-navy text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 text-sm"
          >
            Agenda tu DEMO Gratis
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-turquoise hover:text-navy font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver más artículos
          </Link>
        </div>
      </article>

      <NominikChatbot />
    </div>
  )
}