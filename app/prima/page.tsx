"use client"
import { ArrowLeft, Calendar, Clock, ExternalLink, AlertTriangle, ShieldCheck } from "lucide-react"
import Link from "next/link"
import NominikChatbot from "@/app/nominik"

export default function PrimaDeRiesgoPage() {
  const sanciones = [
    {
      num: "01",
      title: "No presentar la determinación anual",
      desc: "Si una empresa está obligada a presentar la determinación anual de la prima de riesgo y no lo hace dentro del plazo establecido, puede ser acreedora a multas y otras medidas por parte de la autoridad.",
      icon: "📅",
    },
    {
      num: "02",
      title: "Presentar información incorrecta",
      desc: "Errores en el registro de accidentes de trabajo, incapacidades o datos de los colaboradores pueden provocar diferencias en el cálculo de la prima. Si el IMSS detecta inconsistencias, podrá realizar correcciones e imponer las sanciones correspondientes.",
      icon: "📝",
    },
    {
      num: "03",
      title: "Omitir riesgos de trabajo",
      desc: "No reportar accidentes o enfermedades laborales con el objetivo de disminuir la prima de riesgo puede derivar en revisiones, ajustes y multas por parte de la autoridad.",
      icon: "⚠️",
    },
    {
      num: "04",
      title: "No atender requerimientos del IMSS",
      desc: "Cuando el IMSS solicita información o documentación relacionada con la prima de riesgo, es importante responder en tiempo y forma. Ignorar estos requerimientos puede generar sanciones adicionales.",
      icon: "📬",
    },
  ]

  const comoEvitar = [
    "Mantener actualizados los registros de accidentes y enfermedades de trabajo",
    "Verificar periódicamente la información de los colaboradores",
    "Conservar la documentación que respalde el cálculo realizado",
    "Presentar la determinación anual dentro de los plazos establecidos",
    "Utilizar herramientas tecnológicas que reduzcan errores administrativos",
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-navy via-navy to-turquoise text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
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

          <span className="inline-block px-4 py-1.5 bg-turquoise/20 border border-turquoise/30 rounded-full text-sm font-semibold mb-6">
            Blog · Cumplimiento Patronal
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Prima de riesgo:{" "}
            <span className="text-turquoise">¿cuándo puede haber sanción?</span>
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              31 May 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              5 min de lectura
            </span>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">

        {/* Intro */}
        <p className="text-xl text-gray-700 leading-relaxed mb-4 font-medium border-l-4 border-turquoise pl-8">
          La prima de riesgo es el factor que utiliza el IMSS para determinar la cuota que las
          empresas deben pagar por el Seguro de Riesgos de Trabajo.
        </p>
        <p className="text-gray-500 leading-relaxed mb-3">
          Cada año, los patrones están obligados a revisar su siniestralidad laboral y, cuando
          corresponda, presentar la determinación de su prima de riesgo.
        </p>
        <p className="text-xs text-gray-400 italic mb-12">
          Fuente:{" "}
          <a
            href="https://www.imss.gob.mx/patrones/determinacionprima"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-turquoise transition-colors"
          >
            Instituto Mexicano del Seguro Social (IMSS)
          </a>
        </p>

        {/* Cuándo hay sanciones */}
        <h2 className="text-2xl font-bold text-navy mb-3">
          ¿Cuándo puede haber sanciones?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Existen cuatro situaciones principales en las que una empresa puede enfrentar
          multas o medidas por parte de la autoridad:
        </p>

        <div className="space-y-4 mb-4">
          {sanciones.map((item, i) => (
            <div
              key={i}
              className="flex gap-5 items-start border border-gray-100 rounded-2xl p-6 hover:border-red-200 hover:bg-red-50/40 transition-colors group"
            >
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-bold text-gray-300 group-hover:text-red-300 transition-colors">
                  {item.num}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 italic mb-12">
          Fuente:{" "}
          <a
            href="https://www.imss.gob.mx/patrones/determinacionprima"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-turquoise transition-colors"
          >
            Instituto Mexicano del Seguro Social (IMSS)
          </a>
        </p>

        {/* Alerta */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex gap-4 items-start">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 text-sm leading-relaxed">
            El IMSS tiene la facultad de realizar correcciones, ajustes y fiscalizaciones en
            cualquier momento. <strong>Cada error operativo, por pequeño que parezca,
            puede derivar en un proceso de revisión.</strong>
          </p>
        </div>

        {/* Cómo evitar */}
        <div className="bg-gradient-to-br from-navy to-turquoise rounded-2xl px-8 py-10 text-white mb-8 relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-turquoise/20 rounded-full blur-2xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-turquoise" />
              <h2 className="text-xl font-bold">¿Cómo evitar sanciones?</h2>
            </div>
            <ul className="space-y-3">
              {comoEvitar.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90 text-sm">
                  <span className="w-5 h-5 rounded-full bg-turquoise flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Párrafo cierre */}
        <div className="bg-turquoise/10 border-l-4 border-turquoise rounded-r-2xl px-8 py-6 mb-10">
          <p className="text-navy leading-relaxed text-sm">
            Cumplir correctamente con las obligaciones relacionadas con la prima de riesgo ayuda
            a evitar multas, diferencias ante el IMSS y procesos de fiscalización innecesarios.
            Una gestión adecuada también contribuye a mantener un mejor control de la{" "}
            <strong>seguridad laboral y de las obligaciones patronales.</strong>
          </p>
        </div>

        {/* CTA Nommy */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-10">
          <h2 className="text-xl font-bold text-navy mb-3">
            Centraliza todo con Nommy
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Con Nommy, las empresas pueden centralizar la información de nómina, movimientos
            afiliatorios y cumplimiento patronal en una sola plataforma, facilitando la
            administración y reduciendo riesgos por errores operativos.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 mb-8">
            {[
              { emoji: "🗂️", label: "Nómina centralizada" },
              { emoji: "🔗", label: "Movimientos afiliatorios" },
              { emoji: "✅", label: "Cumplimiento patronal" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 bg-white border border-gray-200 rounded-xl p-4 text-center"
              >
                <span className="text-2xl">{item.emoji}</span>
                <p className="text-navy text-xs font-semibold">{item.label}</p>
              </div>
            ))}
          </div>

          <a
            href="/demo"
            className="inline-flex items-center gap-2 bg-turquoise hover:bg-navy text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 text-sm"
          >
            Agenda tu demo hoy mismo
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Back */}
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