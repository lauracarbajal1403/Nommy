"use client"
import { ArrowLeft, Calendar, Clock, ExternalLink, AlertTriangle } from "lucide-react"
import Link from "next/link"
import NominikChatbot from "@/app/nominik"

export default function Jornada40HorasPage() {
  const impactos = [
    { emoji: "⏱️", label: "Cálculo de horas extra" },
    { emoji: "📋", label: "Control de asistencia" },
    { emoji: "🔄", label: "Planeación de turnos" },
    { emoji: "💰", label: "Costos operativos" },
    { emoji: "📈", label: "Productividad del equipo" },
    { emoji: "⚖️", label: "Cumplimiento legal" },
    { emoji: "🗂️", label: "Gestión de incidencias" },
    { emoji: "💳", label: "Pago correcto de nómina" },
  ]

  const exigenciasRH = [
    { icon: "🎯", label: "Mayor control" },
    { icon: "✅", label: "Menos margen de error" },
    { icon: "⚡", label: "Respuestas más rápidas" },
    { icon: "📡", label: "Información en tiempo real" },
    { icon: "🤖", label: "Automatización de procesos" },
  ]

  const pasos = [
    {
      num: "01",
      title: "Digitaliza procesos de RH",
      desc: "Automatizar tareas repetitivas permitirá ahorrar tiempo y reducir errores humanos. Desde incidencias hasta cálculo de nómina, todo debe fluir de forma más inteligente.",
    },
    {
      num: "02",
      title: "Ten visibilidad completa de la información",
      desc: "Con jornadas más controladas será indispensable saber exactamente quién trabajó, cuántas horas, qué incidencias hubo y cuánto debe pagarse. La información centralizada evita retrabajos y conflictos internos.",
    },
    {
      num: "03",
      title: "Automatiza cálculos y cumplimiento",
      desc: "Las reformas laborales implican mayor atención al cumplimiento normativo. Un sistema automatizado ayuda a disminuir errores en pagos, deducciones y obligaciones patronales.",
    },
    {
      num: "04",
      title: "Mejora la experiencia del colaborador",
      desc: "Los colaboradores buscan procesos rápidos, pagos claros y transparencia. La tecnología también mejora la percepción interna de la empresa y fortalece la confianza del equipo.",
    },
  ]

  const beneficios = [
    "Ahorrar tiempo",
    "Reducir errores",
    "Mejorar la organización",
    "Optimizar costos",
    "Facilitar auditorías",
    "Mantener cumplimiento laboral",
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

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            ¿Cómo prepararse para la jornada de{" "}
            <span className="text-turquoise">40 horas</span>{" "}
            sin afectar la operación de tu empresa?
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              15 May 2026
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
        <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium border-l-4 border-turquoise pl-8">
          México se prepara para uno de los cambios laborales más importantes de la última
          década: la reducción de la jornada laboral a 40 horas semanales.
        </p>
        <p className="text-gray-500 leading-relaxed mb-4">
          Y aunque para muchos colaboradores representa una mejora en la calidad de vida, para
          las empresas también significa un gran reto operativo, administrativo y financiero.
        </p>
        <p className="text-gray-500 leading-relaxed mb-12">
          La realidad es que muchas organizaciones todavía manejan procesos manuales, cálculos
          en Excel y controles poco eficientes. Con una jornada más corta, los márgenes de error
          se vuelven todavía más peligrosos.
        </p>

        {/* Frase destacada */}
        <div className="bg-turquoise/10 border-l-4 border-turquoise rounded-r-2xl px-8 py-6 mb-12">
          <p className="text-navy font-semibold text-lg leading-relaxed">
            "No se trata solo de trabajar menos horas, sino de administrar mejor el tiempo,
            los recursos y la nómina."
          </p>
        </div>

        {/* Impacto */}
        <h2 className="text-2xl font-bold text-navy mb-3">
          ¿Qué impacto tendrá esta reforma en las empresas?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          La transición a las 40 horas puede generar cambios importantes en áreas como:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {impactos.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl p-4 text-center hover:border-turquoise/40 hover:bg-turquoise/5 transition-colors"
            >
              <span className="text-2xl">{item.emoji}</span>
              <p className="text-navy/80 text-xs font-medium leading-snug">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Alert */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-12 flex gap-4 items-start">
          <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm leading-relaxed">
            Un pequeño error en jornadas, horas trabajadas o pagos puede convertirse en{" "}
            <strong>multas, inconformidad laboral o pérdidas económicas</strong>. Las empresas
            que no cuenten con herramientas digitales enfrentarán mayor presión operativa.
          </p>
        </div>

        {/* Lo que exige RH */}
        <h2 className="text-2xl font-bold text-navy mb-4">
          Lo que Recursos Humanos deberá garantizar
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Si hoy una empresa tarda horas revisando incidencias o corrigiendo errores de nómina,
          con este nuevo esquema la presión operativa será todavía mayor. Las áreas de RH
          tendrán que trabajar con:
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {exigenciasRH.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 bg-navy text-white text-sm font-medium px-4 py-2 rounded-full"
            >
              <span>{item.icon}</span>
              {item.label}
            </span>
          ))}
        </div>

        {/* Cómo prepararse */}
        <h2 className="text-2xl font-bold text-navy mb-8">
          ¿Cómo prepararse a partir de ahora?
        </h2>

        <div className="space-y-6 mb-12">
          {pasos.map((item, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-turquoise/10 text-turquoise font-extrabold text-sm flex items-center justify-center border border-turquoise/20">
                {item.num}
              </span>
              <div className="border-b border-gray-100 pb-6 flex-1">
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nommy no es opcional — gran bloque */}
        <div className="bg-gradient-to-br from-navy via-navy to-turquoise rounded-2xl px-8 py-12 text-white mb-8 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-turquoise/20 rounded-full blur-2xl" />
          <div className="relative z-10">
            <p className="text-turquoise font-semibold text-sm uppercase tracking-widest mb-4">
              El momento de actuar es ahora
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              Nommy ya no es opcional
            </h2>
            <p className="text-white/80 leading-relaxed mb-6 text-sm">
              Las empresas que mejor se adapten a esta nueva etapa serán aquellas que entiendan
              que Recursos Humanos ya no puede depender de procesos manuales.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {beneficios.map((b, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2.5">
                  <span className="w-4 h-4 rounded-full bg-turquoise flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/90 text-xs font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-10">
          <h2 className="text-xl font-bold text-navy mb-3">
            Nommy nació preparado para el futuro laboral
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Con los cambios laborales acercándose, las empresas necesitan herramientas que les
            permitan evolucionar sin complicaciones. Con Nommy puedes optimizar la gestión de
            nómina, automatizar procesos y mantener mayor control operativo en una etapa donde
            la eficiencia será clave.
          </p>

          <div className="bg-turquoise/10 border border-turquoise/20 rounded-xl px-5 py-4 mb-8">
            <p className="text-navy font-semibold text-sm leading-relaxed">
              Prepararse para las 40 horas no solo significa reorganizar horarios. También
              significa <strong>recibir el pago de nómina a tiempo, automatizada, completa
              y sin errores.</strong>
            </p>
          </div>

          <a
            href="/demo"
            className="inline-flex items-center gap-2 bg-turquoise hover:bg-navy text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 text-sm"
          >
            Agenda tu Demo
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