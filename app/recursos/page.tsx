"use client"
import { ArrowLeft, Calendar, Clock, ExternalLink, Sparkles } from "lucide-react"
import Link from "next/link"
import NominikChatbot from "@/app/nominik"

export default function IANoReemplazaraRRHHPage() {
  const areasEnfoque = [
    {
      emoji: "🌱",
      title: "Desarrollo del talento",
      desc: "Identificar potencial, diseñar planes de crecimiento y acompañar a cada colaborador en su camino profesional dentro de la empresa.",
    },
    {
      emoji: "📚",
      title: "Capacitación",
      desc: "Diseñar y dar seguimiento a programas de formación que respondan a las necesidades reales del equipo y del negocio.",
    },
    {
      emoji: "💚",
      title: "Bienestar laboral",
      desc: "Detectar señales de agotamiento, promover el equilibrio y construir entornos de trabajo saludables para las personas.",
    },
    {
      emoji: "🤝",
      title: "Retención de colaboradores",
      desc: "Entender por qué se quedan o se van los talentos clave, y actuar a tiempo con estrategias genuinas de permanencia.",
    },
    {
      emoji: "🏢",
      title: "Cultura organizacional",
      desc: "Reforzar valores, fomentar la comunicación y construir una identidad de equipo que ninguna herramienta puede replicar sola.",
    },
    {
      emoji: "🧭",
      title: "Liderazgo",
      desc: "Guiar equipos, resolver conflictos y tomar decisiones estratégicas que requieren criterio, empatía y experiencia humana.",
    },
  ]

  const referencias = [
    { texto: "Microsoft Work Trend Index 2024", url: "https://www.microsoft.com/worklab/work-trend-index" },
    { texto: "Deloitte Human Capital Trends", url: "https://www2.deloitte.com" },
    { texto: "LinkedIn Future of Recruiting Report", url: "https://business.linkedin.com/talent-solutions" },
    { texto: "OCDE – Artificial Intelligence and the Labour Market", url: "https://www.oecd.org" },
    { texto: "IBM – Global AI Adoption Index", url: "https://www.ibm.com/reports/ai-adoption" },
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
            ¿La <span className="text-turquoise">Inteligencia Artificial</span> reemplazará a Recursos Humanos?
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              30 Jun 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              4 min de lectura
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">

        {/* Intro */}
        <p className="text-xl text-gray-700 leading-relaxed mb-4 font-medium border-l-4 border-turquoise pl-8">
          Cada vez que aparece una nueva tecnología surge la misma pregunta: "¿La Inteligencia Artificial reemplazará a Recursos Humanos?"
        </p>
        <p className="text-gray-500 leading-relaxed mb-2">
          La respuesta corta es no.
        </p>
        <p className="text-gray-500 leading-relaxed mb-12">
          La Inteligencia Artificial está transformando la manera en que trabajan los equipos de RRHH, pero no puede sustituir el criterio humano, la empatía, la toma de decisiones ni la construcción de una cultura organizacional. Lo que sí está ocurriendo es que las empresas están dejando de invertir tiempo en tareas repetitivas para dedicarlo a aquello que realmente genera valor: las personas.
        </p>

        {/* RRHH y tareas administrativas */}
        <h2 className="text-2xl font-bold text-navy mb-4">
          Recursos Humanos dedica demasiadas horas a tareas administrativas
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          En muchas empresas mexicanas, el área de Recursos Humanos no solo recluta talento. También administra incidencias, vacaciones, contratos, expedientes, asistencia, nómina y cumplimiento laboral.
        </p>
        <p className="text-gray-600 leading-relaxed mb-2">
          Cuando estos procesos se realizan manualmente, el tiempo operativo aumenta y el margen de error también. La automatización no elimina estas responsabilidades, simplemente ayuda a ejecutarlas con mayor rapidez y precisión.
        </p>
        <p className="text-xs text-gray-400 italic mb-10">
          Referencia: <a href={referencias[1].url} target="_blank" rel="noopener noreferrer" className="text-turquoise hover:underline">{referencias[1].texto}</a>
        </p>

        {/* Reclutamiento */}
        <h2 className="text-2xl font-bold text-navy mb-4">
          El reclutamiento es un gran ejemplo
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Uno de los mayores mitos es pensar que la IA contratará empleados. En realidad, la Inteligencia Artificial puede revisar cientos o miles de currículums en minutos, detectar coincidencias con una vacante, eliminar duplicados e identificar perfiles que cumplen ciertos requisitos.
        </p>
        <p className="text-gray-600 leading-relaxed mb-2">
          Pero la decisión final sigue dependiendo de las personas. La entrevista, la evaluación cultural, la negociación salarial y la contratación continúan siendo responsabilidades del equipo de Recursos Humanos.
        </p>
        <p className="text-xs text-gray-400 italic mb-10">
          Referencia: <a href={referencias[2].url} target="_blank" rel="noopener noreferrer" className="text-turquoise hover:underline">{referencias[2].texto}</a>
        </p>

        {/* Sección de áreas - tarjetas */}
        <h2 className="text-2xl font-bold text-navy mb-2">
          Automatizar no significa deshumanizar
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Cuando un equipo deja de invertir horas capturando incidencias o revisando hojas de cálculo, puede dedicar ese tiempo a actividades con mayor impacto:
        </p>

        <div className="space-y-4 mb-4">
          {areasEnfoque.map((item, i) => (
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
        <p className="text-xs text-gray-400 italic mb-12">
          Referencia: <a href={referencias[3].url} target="_blank" rel="noopener noreferrer" className="text-turquoise hover:underline">{referencias[3].texto}</a>
        </p>

        {/* Highlight box - Nommy */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex gap-4 items-start">
          <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-800 text-sm mb-1">
              ¿Qué papel juega Nommy?
            </p>
            <p className="text-amber-700 text-sm leading-relaxed">
              En Nommy creemos que la tecnología debe trabajar para las personas, no reemplazarlas. Nuestra plataforma automatiza procesos como la administración de incidencias, control de asistencia, gestión documental, cálculo de nómina y reportes, para que el equipo de Recursos Humanos pueda enfocarse en aquello que ninguna Inteligencia Artificial puede hacer: escuchar, desarrollar talento y tomar decisiones estratégicas.
            </p>
          </div>
        </div>

        {/* La IA es una herramienta */}
        <h2 className="text-2xl font-bold text-navy mb-4">
          La IA es una herramienta, no un reemplazo
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Así como una calculadora no reemplazó a los contadores, la Inteligencia Artificial no reemplazará a los departamentos de Recursos Humanos. Las empresas seguirán necesitando profesionales capaces de comprender a las personas, resolver conflictos, fortalecer la cultura organizacional y liderar el cambio.
        </p>
        <p className="text-gray-600 leading-relaxed mb-2">
          La diferencia es que ahora contarán con herramientas que les permitirán hacerlo mejor y en menos tiempo.
        </p>
        <p className="text-xs text-gray-400 italic mb-10">
          Referencia: <a href={referencias[4].url} target="_blank" rel="noopener noreferrer" className="text-turquoise hover:underline">{referencias[4].texto}</a>
        </p>

        {/* Stats band */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { num: "0", label: "Reemplazo del criterio humano" },
            { num: "+6", label: "Áreas estratégicas con foco humano" },
            { num: "100%", label: "Procesos administrativos automatizables" },
          ].map((s, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100">
              <p className="text-3xl font-extrabold text-turquoise mb-1">{s.num}</p>
              <p className="text-xs text-gray-500 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Nommy highlight block */}
        <div className="bg-gradient-to-br from-navy to-turquoise rounded-2xl px-8 py-12 text-white mb-8">
          <p className="text-turquoise/80 font-semibold text-sm uppercase tracking-widest mb-4">
            Tecnología al servicio de las personas
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Nommy no sustituye a Recursos Humanos, lo potencia
          </h2>
          <p className="text-white/80 leading-relaxed mb-4 text-sm">
            La verdadera pregunta es: ¿tu equipo de RR. HH. está aprovechando la tecnología para dedicar más tiempo a las personas y menos a las tareas repetitivas?
          </p>
          <p className="text-white/80 leading-relaxed text-sm">
            En Nommy creemos que el futuro no consiste en reemplazar al talento humano, sino en darle las herramientas para que genere un mayor impacto dentro de las organizaciones. Ese es el verdadero valor de la Inteligencia Artificial aplicada a Recursos Humanos.
          </p>
        </div>

        {/* CTA box */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-10">
          <h2 className="text-xl font-bold text-navy mb-6">Dale a tu equipo de RRHH las herramientas para enfocarse en las personas:</h2>

          <ul className="space-y-3 mb-8">
            {[
              "Automatizar la administración de incidencias, vacaciones y expedientes",
              "Llevar un control de asistencia digitalizado y en tiempo real",
              "Calcular nómina y reportes sin procesos manuales ni hojas de cálculo",
              "Liberar tiempo del equipo para desarrollo de talento y cultura organizacional",
              "Tomar decisiones estratégicas basadas en datos precisos de personal",
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
              🎁 Agenda tu demo gratuita y descubre cómo Nommy potencia a tu equipo de RRHH
            </p>
            <p className="text-gray-400 text-xs mt-1">Herramientas avanzadas de gestión de nómina, asistencia y RRHH.</p>
          </div>

          <p className="text-gray-600 text-sm mb-6 italic">
            ¿Tu equipo de RR. HH. está aprovechando la tecnología para dedicar más tiempo a las personas? No dejes esa ventaja al azar ni a procesos del pasado.
          </p>

          <a
            href="/demo"
            className="inline-flex items-center gap-2 bg-turquoise hover:bg-navy text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 text-sm"
          >
            Agenda tu DEMO
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