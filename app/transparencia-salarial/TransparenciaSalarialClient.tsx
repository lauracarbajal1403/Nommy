"use client"
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"
import NominikChatbot from "@/app/nominik"

export default function TransparenciaSalarialPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-navy via-navy to-turquoise text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-turquoise/80 hover:text-turquoise text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Recursos
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Evita multas de hasta{" "}
            <span className="text-turquoise">$622,440 MXN</span>{" "}
            por no transparentar sueldos en vacantes
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="flex items-center gap-4">
              <Calendar className="w-4 h-4" />
              18 Mar 2026
            </span>
            <span className="flex items-center gap-4 px-4">
              <Clock className="w-4 h-4" />
              4 min de lectura
            </span>
          </div>
        </div>
      </section>

      {/* Cover image
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-12">
        <div className="rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-80 bg-gradient-to-br from-navy to-turquoise flex items-center justify-center">
          <img
            src="/portada-transparencia.jpg"
            alt="Transparencia salarial en México 2026"
            className="w-full h-full object-cover"
            onError={(e) => {
              // fallback gradient if image not found
              (e.target as HTMLImageElement).style.display = "none"
            }}
          />
        </div>
      </div>
       */}
      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8 pb-24">
        {/* Intro */}
        <p className="text-xl text-gray-700 leading-relaxed mb-10 font-medium border-l-4 border-turquoise pl-8">
          La transparencia salarial dejó de ser una recomendación y se está convirtiendo en una
          obligación real para las empresas en México. Durante 2026, el debate en el Senado volvió
          a tomar fuerza con nuevas propuestas de reforma a la Ley Federal del Trabajo (LFT),
          enfocadas en exigir que todas las vacantes incluyan información clara sobre el sueldo.
        </p>

        <p className="text-sm text-gray-400 mb-10 italic">
          Fuente: Senado de la República de México (2026).
        </p>

        {/* Alert box */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-12 flex gap-4 items-start">
          <span className="text-2xl">⚠️</span>
          <div>
            <p className="font-bold text-red-700 text-base mb-1">
              Multas de hasta $622,440 MXN
            </p>
            <p className="text-red-600 text-sm leading-relaxed">
              De aprobarse en su versión más estricta, las empresas que omitan esta información
              podrían enfrentar multas de hasta 5,000 veces la UMA, equivalente a{" "}
              <strong>$622,440 MXN en 2026</strong>.{" "}
              <span className="italic text-xs text-red-400">Fuente: INEGI (2026), actualización de la UMA.</span>
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-navy mb-4">
          Una reforma que busca cerrar brechas y evitar abusos
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Las nuevas iniciativas retoman esfuerzos previos, pero con un enfoque más contundente:
          combatir la opacidad salarial, reducir la desigualdad y eliminar prácticas engañosas en
          procesos de reclutamiento.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Hoy en día, uno de los principales problemas en el mercado laboral es la falta de
          claridad en las ofertas de trabajo. Esto no solo genera desconfianza, también provoca
          pérdida de tiempo para candidatos y empresas, además de abrir la puerta a prácticas
          poco éticas.
        </p>
        <p className="text-gray-600 leading-relaxed mb-2">
          De acuerdo con organizaciones civiles como{" "}
          <strong className="text-navy">Acción Ciudadana Frente a la Pobreza</strong>, más del
          50% de los trabajadores formales en México perciben ingresos por debajo de lo esperado
          para su nivel de experiencia, lo que refuerza la urgencia de establecer reglas más claras.
        </p>
        <p className="text-sm text-gray-400 mb-10 italic">
          Fuente: Acción Ciudadana Frente a la Pobreza (2025); INEGI (2025), ENOE.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold text-navy mb-6">
          ¿Qué cambiaría con la reforma en 2027?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Las propuestas más recientes contemplan que cualquier vacante publicada deberá incluir,
          de forma obligatoria:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {[
            { emoji: "💰", text: "El rango salarial (mínimo y máximo)" },
            { emoji: "📈", text: "Esquema de compensación variable (bonos, comisiones, etc.)" },
            { emoji: "📋", text: "Descripción clara del puesto y responsabilidades" },
            { emoji: "📄", text: "Tipo de contrato y condiciones laborales" },
            { emoji: "🕐", text: "Información sobre periodos de prueba o capacitación" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
            >
              <span className="text-xl">{item.emoji}</span>
              <p className="text-navy/80 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 leading-relaxed mb-2">
          Además, las autoridades laborales tendrían la facultad de solicitar la corrección
          inmediata o eliminación de vacantes que no cumplan con estos requisitos.
        </p>
        <p className="text-sm text-gray-400 mb-10 italic">
          Fuente: Senado de la República (2026).
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold text-navy mb-4">
          Transparencia salarial: una práctica global
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          México no está solo en este cambio. Países como{" "}
          <strong className="text-navy">Estados Unidos, España y Chile</strong> ya han
          implementado regulaciones similares, obligando a las empresas a publicar rangos salariales
          como parte de sus procesos de contratación.
        </p>
        <p className="text-gray-600 leading-relaxed mb-2">
          Más que una tendencia, se trata de una evolución del mercado laboral hacia modelos más
          justos, donde el talento puede tomar decisiones informadas desde el inicio.
        </p>
        <p className="text-sm text-gray-400 mb-10 italic">
          Fuente: OCDE (2025), reportes de transparencia salarial.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold text-navy mb-6">
          Impacto para empresas y Recursos Humanos
        </h2>

        <div className="space-y-6 mb-6">
          {[
            {
              num: "01",
              title: "Procesos de reclutamiento más estructurados",
              desc: "Las áreas de Recursos Humanos tendrán que definir rangos salariales claros desde el inicio, evitando improvisaciones durante entrevistas.",
              source: "Deloitte (2025), tendencias de capital humano.",
            },
            {
              num: "02",
              title: "Cambios en plataformas de empleo",
              desc: "Los sistemas internos y portales deberán adaptarse para mostrar esta información de manera obligatoria, lo que implica ajustes tecnológicos.",
              source: "LinkedIn Talent Solutions (2025).",
            },
            {
              num: "03",
              title: "Mayor enfoque en cumplimiento",
              desc: "El área de nómina y compliance jugará un rol clave para asegurar que cada vacante cumpla con la ley y evitar sanciones.",
              source: "KPMG (2025), cumplimiento laboral.",
            },
            {
              num: "04",
              title: "Mejora en la atracción de talento",
              desc: "Las empresas que transparentan sueldos generan más confianza, atraen mejores candidatos y reducen la rotación.",
              source: "Glassdoor (2025), tendencias de empleo.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-turquoise/10 text-turquoise font-extrabold text-sm flex items-center justify-center">
                {item.num}
              </span>
              <div>
                <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-1">{item.desc}</p>
                <p className="text-xs text-gray-400 italic">Fuente: {item.source}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 5 */}
        <div className="bg-gradient-to-br from-navy to-turquoise rounded-2xl py-12 px-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-3">
            Transparencia + tecnología = ventaja competitiva
          </h2>
          <p className="text-white/80 leading-relaxed mb-2">
            Más allá de evitar multas, este cambio representa una oportunidad. Las empresas que
            adopten la transparencia salarial de forma estratégica podrán posicionarse mejor en
            el mercado laboral.
          </p>
          <p className="text-white/80 leading-relaxed text-sm">
            La clave está en apoyarse en herramientas digitales que automaticen procesos, reduzcan
            errores y aseguren consistencia en la información.
          </p>
          <p className="text-xs text-white/40 mt-3 italic">
            Fuente: Deloitte (2025); McKinsey (2025), digitalización de RRHH.
          </p>
        </div>

        {/* Nommy CTA */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-12">
          <h2 className="text-2xl font-bold text-navy mb-2">
            Nommy: cumplimiento sin complicaciones
          </h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            En un entorno donde las regulaciones evolucionan constantemente, contar con tecnología
            adecuada ya no es opcional. Con Nommy puedes:
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Estandarizar rangos salariales por puesto",
              "Centralizar la información de nómina y compensaciones",
              "Evitar errores manuales en publicaciones",
              "Asegurar cumplimiento con la LFT",
              "Tomar decisiones basadas en datos reales",
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

          <p className="text-navy font-semibold text-sm mb-6 italic">
            Porque hoy, cumplir no solo es evitar sanciones, es construir confianza.
          </p>

          <p className="text-gray-600 text-sm mb-6">
            Haz que cada vacante juegue a tu favor, evita riesgos innecesarios y conviértete en
            la empresa que el talento sí quiere elegir.
          </p>

          <a
            href="/demo"
            className="inline-flex items-center gap-2 bg-turquoise hover:bg-navy text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 text-sm"
          >
            Agenda tu Demo
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-gray-100 ">
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