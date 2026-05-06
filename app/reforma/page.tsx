"use client"
import { ArrowLeft, Calendar, Clock, ExternalLink, AlertTriangle, CheckCircle, ShieldCheck, Users, FileText } from "lucide-react"
import Link from "next/link"
import NominikChatbot from "@/app/nominik"
import Image from "next/image"

export default function reformaPage() {
  const jornadaTransicion = [
    { label: "Jornada actual", horas: "48h", pct: 100, desc: "Esquema vigente hasta ahora" },
    { label: "Transición 2026", horas: "En análisis", pct: 75, desc: "Empresas en preparación interna" },
    { label: "Meta final", horas: "40h", pct: 55, desc: "Objetivo de la reforma aprobada" },
  ]

  const reformasClave = [
    {
      emoji: "⏱️",
      title: "Reducción de jornada a 40 horas semanales",
      desc: "Implementación progresiva que obliga a rediseñar turnos, cargas de trabajo y métricas de productividad basadas en resultados.",
    },
    {
      emoji: "🖥️",
      title: "Registro digital obligatorio de jornada",
      desc: "Los controles manuales y listas en papel representan un riesgo creciente. Las empresas deben contar con sistemas que documenten entradas, salidas y horas extra.",
    },
    {
      emoji: "🚫",
      title: "Prohibición de prácticas discriminatorias",
      desc: "Se fortalece la prohibición de listas negras laborales y se exige profesionalizar los procesos de selección con criterios objetivos y protección de datos.",
    },
    {
      emoji: "⚖️",
      title: "Trabajo digno y clima laboral",
      desc: "Nuevas obligaciones en igualdad, prevención de acoso y ambientes sanos. Las empresas deben construir políticas activas más allá del cumplimiento básico.",
    },
    {
      emoji: "📋",
      title: "Mayor presión en cumplimiento patronal",
      desc: "Altas y bajas ante IMSS, SBC correcto, timbrado puntual y contratos actualizados. Errores pequeños pueden convertirse en sanciones relevantes.",
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
            Reformas aprobadas en México:{" "}
            <span className="text-turquoise">lo que toda empresa debe saber en 2026</span>
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              7 min de lectura
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">

        {/* Intro */}
        <p className="text-xl text-gray-700 leading-relaxed mb-4 font-medium border-l-4 border-turquoise pl-8">
          Durante 2026, México ha impulsado cambios laborales importantes que transforman la manera
          en que las empresas administran su operación, su talento y el cumplimiento normativo.
        </p>
        <p className="text-gray-500 leading-relaxed mb-12">
          Estas reformas no solo impactan al área de Recursos Humanos, también afectan finanzas,
          nómina, productividad, planeación estratégica y clima organizacional. Para muchas compañías,
          adaptarse ya no es opcional.
        </p>

        {/* Imagen 30a */}
        <div className="rounded-2xl overflow-hidden mb-4 border border-gray-100 shadow-sm">
          <Image
            src="/30a.png"
            alt="Reformas laborales 2026 — visión general"
            width={800}
            height={450}
            className="w-full object-cover"
          />
        </div>
        <p className="text-xs text-gray-400 italic text-center mb-12">
          Principales reformas laborales aprobadas en México durante 2026.
        </p>

        {/* Jornada laboral — visual timeline */}
        <h2 className="text-2xl font-bold text-navy mb-2">
          1. Reducción de la jornada laboral a 40 horas semanales
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Uno de los cambios más comentados es la aprobación para avanzar hacia una jornada máxima
          de 40 horas semanales. La implementación es progresiva, pero desde 2026 muchas empresas
          ya comenzaron procesos de análisis y preparación interna.
        </p>

        <div className="bg-gray-50 rounded-2xl px-8 py-10 mb-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-turquoise/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <p className="text-turquoise font-semibold text-sm uppercase tracking-widest mb-8">
            Transición de jornada laboral
          </p>
          <div className="space-y-5">
            {jornadaTransicion.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="text-navy font-bold text-xs w-28 flex-shrink-0 leading-tight">{item.label}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-turquoise to-turquoise/70 rounded-full flex items-center px-4 transition-all"
                    style={{ width: `${item.pct}%` }}
                  >
                    <span className="text-white font-extrabold text-sm">{item.horas}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alert */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex gap-4 items-start">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-800 text-sm mb-1">
              ¿Qué implica para las empresas?
            </p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Rediseño de turnos, revisión de cargas de trabajo, mayor control de horas extra,
              posible contratación adicional y nuevas métricas de productividad basadas en
              resultados. Los sectores de manufactura, retail y atención al cliente deben
              prepararse con mayor anticipación.
            </p>
          </div>
        </div>

        {/* Reformas clave */}
        <h2 className="text-2xl font-bold text-navy mb-2">
          Las reformas más relevantes de 2026
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Además de la jornada, se incorporan obligaciones que elevan significativamente el nivel
          de control, trazabilidad y cumplimiento que las empresas deben garantizar:
        </p>

        <div className="space-y-4 mb-12">
          {reformasClave.map((item, i) => (
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

        {/* Imagen 31a */}
        <div className="rounded-2xl overflow-hidden mb-4 border border-gray-100 shadow-sm">
          <Image
            src="/31a.png"
            alt="Impacto de las reformas laborales en las empresas"
            width={800}
            height={450}
            className="w-full object-cover"
          />
        </div>
        <p className="text-xs text-gray-400 italic text-center mb-12">
          Cómo impactan las nuevas regulaciones en la operación y cumplimiento empresarial.
        </p>

        {/* El verdadero desafío */}
        <h2 className="text-2xl font-bold text-navy mb-4">
          ¿Qué deben hacer las empresas desde ahora?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Ante este nuevo panorama laboral, lo recomendable es actuar con anticipación. El reto no
          está solo en entender las reformas, sino en aplicarlas correctamente todos los días.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Pequeños errores administrativos — una hora mal registrada, un cálculo sin revisar, un
          dato incompleto — se acumulan con el tiempo y se convierten en multas, conflictos laborales
          y desorden que impacta a toda la empresa.
        </p>

        {/* Stats band */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { num: "40h", label: "Meta de jornada semanal máxima" },
            { num: "5", label: "Áreas clave impactadas por las reformas" },
            { num: "0", label: "Margen de error ante inspecciones laborales" },
          ].map((s, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100">
              <p className="text-3xl font-extrabold text-turquoise mb-1">{s.num}</p>
              <p className="text-xs text-gray-500 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Pasos de acción */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            { icon: <FileText className="w-5 h-5 text-turquoise" />, title: "Diagnóstico interno", desc: "Analizar jornada actual, productividad, rotación, incidencias y cumplimiento." },
            { icon: <ShieldCheck className="w-5 h-5 text-turquoise" />, title: "Automatización", desc: "Digitalizar asistencia, incidencias, vacaciones y nómina." },
            { icon: <Users className="w-5 h-5 text-turquoise" />, title: "Capacitación", desc: "Actualizar a líderes, RH y administración sobre nuevas obligaciones." },
            { icon: <CheckCircle className="w-5 h-5 text-turquoise" />, title: "Cultura organizacional", desc: "Medir bienestar, comunicación y satisfacción del talento." },
          ].map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-5 flex gap-3 items-start">
              <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-navy text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nommy highlight block */}
        <div className="bg-gradient-to-br from-navy to-turquoise rounded-2xl px-8 py-12 text-white mb-8">
          <p className="text-turquoise/80 font-semibold text-sm uppercase tracking-widest mb-4">
            El aliado estratégico
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Nommy te ayuda a adaptarte sin complicaciones
          </h2>
          <p className="text-white/80 leading-relaxed mb-4 text-sm">
            Las reformas seguirán evolucionando y operar manualmente cada vez será más complejo.
            Con Nommy, tu empresa puede automatizar la nómina, controlar incidencias, gestionar
            asistencia, reducir errores y mantenerse preparada ante cambios legales.
          </p>
          <p className="text-white/80 leading-relaxed text-sm">
            Cumplir con la ley no tiene por qué ser complicado. Con la tecnología correcta,
            también puede ser una ventaja competitiva.
          </p>
        </div>

        {/* CTA box */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-10">
          <h2 className="text-xl font-bold text-navy mb-6">Con Nommy puedes:</h2>

          <ul className="space-y-3 mb-8">
            {[
              "Automatizar la nómina y evitar errores de cálculo",
              "Controlar incidencias y asistencia con registro digital",
              "Mantenerte actualizado ante cambios legales automáticamente",
              "Obtener visibilidad en tiempo real de toda la operación",
              "Reducir la carga operativa que consume tiempo y energía",
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
              🎁 Recibe hasta 60 días gratis y prepárate para lo que viene
            </p>
            <p className="text-gray-400 text-xs mt-1">Aplican términos y condiciones.</p>
          </div>

          <p className="text-gray-600 text-sm mb-6 italic">
            En una nueva era donde la nómina es estratégica, contar con Nommy no es solo una
            ventaja, es la forma de trabajar con certeza, crecer sin fricción y mantenerse
            siempre un paso adelante.
          </p>

          <a
            href="/demo"
            className="inline-flex items-center gap-2 bg-turquoise hover:bg-navy text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 text-sm"
          >
            Agenda tu Demo
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