"use client"
import { ArrowLeft, Calendar, Clock, ExternalLink, AlertTriangle } from "lucide-react"
import Link from "next/link"
import NominikChatbot from "@/app/nominik"

export default function SectoresImpactadosPage() {
  const sectoresImpacto = [
    {
      emoji: "🛒",
      title: "Retail (Comercio al por menor)",
      desc: "Tiendas y supermercados operan entre 10 y 14 horas diarias. Con menos horas por trabajador, requerirán rediseño de turnos, contrataciones adicionales o mayor automatización para mantener el servicio.",
    },
    {
      emoji: "🏭",
      title: "Manufactura e Industria",
      desc: "Operaciones continuas con cadenas de suministro críticas. Reducir 8 horas semanales por colaborador exige absorber horas extra, contratar más personal o acelerar la automatización para no perder competitividad.",
    },
    {
      emoji: "🏨",
      title: "Hospitalidad y Turismo",
      desc: "Hoteles y restaurantes operan 24/7 y en picos de alta demanda. El desafío será incorporar más colaboradores en cocina, recepción y servicio sin golpear drásticamente la rentabilidad del negocio.",
    },
    {
      emoji: "🚚",
      title: "Logística y Transporte",
      desc: "Redes que funcionan las 24 horas para entregas rápidas. La reforma obligará a rediseñar rutas y fortalecer la planeación de recursos humanos para evitar costosos retrasos en los envíos.",
    },
    {
      emoji: "🛡️",
      title: "Seguridad Privada",
      desc: "Cobertura permanente que no puede detenerse. Al disminuir las horas disponibles por guardia, las empresas del sector enfrentarán uno de los mayores incrementos en costos laborales para cubrir sus plantillas.",
    },
    {
      emoji: "🏥",
      title: "Salud y Centros Médicos",
      desc: "Hospitales y clínicas requieren personal continuo. La jornada reducida aumentará la necesidad de contratar personal médico y administrativo para evitar el agotamiento laboral y garantizar la atención.",
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

          <span className="inline-block px-4 py-1.5 bg-turquoise/20 border border-turquoise/30 rounded-full text-sm font-semibold mb-6">
            Blog · Análisis Laboral
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            ¿Qué sectores serán los más impactados por la{" "}
            <span className="text-turquoise">jornada laboral de 40 horas</span> en México?
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              15 Jun 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              6 min de lectura
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">

        {/* Intro */}
        <p className="text-xl text-gray-700 leading-relaxed mb-4 font-medium border-l-4 border-turquoise pl-8">
          Durante años, la semana laboral de 48 horas fue parte de la normalidad para miles de empresas mexicanas. Sin embargo, la reducción gradual hacia las 40 horas ya no es una posibilidad lejana.
        </p>
        <p className="text-gray-500 leading-relaxed mb-12">
          La conversación ya no gira únicamente en torno a si la reforma ocurrirá o no; la verdadera pregunta es: ¿Quién está preparado para enfrentarla y quién podría verse más afectado cuando entre en vigor? Aunque el cambio impactará a todo el país, existen sectores donde el efecto será mucho más profundo debido a la naturaleza continua de sus operaciones y la alta demanda de personal.
        </p>

        {/* Sección Destacada de Sectores */}
        <h2 className="text-2xl font-bold text-navy mb-2">
          Los sectores en la línea de fuego operativa
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Las industrias con horarios extendidos, turnos rotativos y dependencia crítica de mano de obra presencial enfrentarán los mayores retos de reestructuración:
        </p>

        <div className="space-y-4 mb-12">
          {sectoresImpacto.map((item, i) => (
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

        {/* Alert */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex gap-4 items-start">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-800 text-sm mb-1">
              El verdadero reto no son las 40 horas, es la productividad
            </p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Las organizaciones que continúen operando con procesos manuales, controles de asistencia en papel o incidencias en hojas de cálculo enfrentarán una transición caótica. La reducción laboral es, en realidad, una oportunidad forzada para eliminar ineficiencias ocultas.
            </p>
          </div>
        </div>

        {/* El verdadero desafío */}
        <h2 className="text-2xl font-bold text-navy mb-4">
          Prepararse hoy es más barato que reaccionar mañana
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          La llegada de las 40 horas representa uno de los cambios laborales más importantes de las últimas décadas en México. Ninguna organización estará completamente exenta, pero aquellas que comiencen desde hoy a optimizar procesos y digitalizar operaciones tendrán una ventaja competitiva masiva.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Las empresas que analicen sus turnos con anticipación, revisen cargas de trabajo y automaticen la administración de su capital humano no solo cumplirán sin fricciones con la ley, sino que operarán con mayor rentabilidad y orden.
        </p>

        {/* Stats band */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { num: "40h", label: "Nueva jornada laboral semanal" },
            { num: "6", label: "Sectores con impacto crítico" },
            { num: "0", label: "Margen de error en control de turnos" },
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
            Transformación con Certeza
          </p>
          <h2 className="text-2xl font-bold mb-4">
            En Nommy creemos que el cumplimiento laboral no debería ser complicado
          </h2>
          <p className="text-white/80 leading-relaxed mb-4 text-sm">
            Contar con información precisa sobre asistencia, turnos, incidencias y horas trabajadas permite tomar decisiones con anticipación, reducir riesgos de multas y adaptarse al nuevo marco legal con total tranquilidad.
          </p>
          <p className="text-white/80 leading-relaxed text-sm">
            Las 40 horas representan un desafío, sí, pero también una oportunidad invaluable para construir una empresa más eficiente, organizada y mejor preparada para el futuro. Los que empiezan hoy, dominan el mañana.
          </p>
        </div>

        {/* CTA box */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-10">
          <h2 className="text-xl font-bold text-navy mb-6">Optimiza tu operación con Nommy para el cambio de jornada:</h2>

          <ul className="space-y-3 mb-8">
            {[
              "Gestionar turnos rotativos complejos y coberturas sin errores",
              "Llevar un control de asistencia digitalizado y en tiempo real",
              "Automatizar el cálculo de incidencias y horas extra bajo la nueva ley",
              "Tomar decisiones preventivas basadas en datos precisos de personal",
              "Reducir riesgos operativos y blindar a tu empresa ante inspecciones",
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
              🎁 Recibe una asesoría gratuita y conoce cómo Nommy te ayuda con las 40 horas
            </p>
            <p className="text-gray-400 text-xs mt-1">Herramientas avanzadas de gestión de nómina, asistencia y RRHH.</p>
          </div>

          <p className="text-gray-600 text-sm mb-6 italic">
            ¿Qué tan preparada está tu empresa para el cambio de las 40 horas? No dejes el futuro de tu operación al azar ni a procesos del pasado.
          </p>

          <a
            href="/demo"
            className="inline-flex items-center gap-2 bg-turquoise hover:bg-navy text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 text-sm"
          >
            Agenda tu Asesoría Gratis
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