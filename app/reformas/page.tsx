"use client"
import { ArrowLeft, Calendar, Clock, ExternalLink, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"
import NominikChatbot from "@/app/nominik"

export default function ReformasLaboralesPage() {
  const jornada = [
    { year: "2027", horas: "46", pct: 85 },
    { year: "2028", horas: "44", pct: 75 },
    { year: "2029", horas: "42", pct: 65 },
    { year: "2030", horas: "40", pct: 55 },
  ]

  const nuevasObligaciones = [
    {
      emoji: "🖥️",
      title: "Registro electrónico obligatorio",
      desc: "Sistemas confiables que documenten de forma precisa las horas trabajadas, eliminando prácticas informales y reduciendo el margen de error ante inspecciones.",
    },
    {
      emoji: "⏱️",
      title: "Límite de 12 horas extra por semana",
      desc: "Obliga a una planeación mucho más estratégica de los recursos humanos, evitando la sobrecarga laboral y asegurando el cumplimiento normativo.",
    },
    {
      emoji: "💸",
      title: "Pago doble y hasta triple por excedentes",
      desc: "Errores en el cálculo o control de horas extra pueden traducirse en costos elevados y acumulativos para las empresas.",
    },
    {
      emoji: "⚖️",
      title: "Igualdad salarial y prevención de violencia",
      desc: "Procesos transparentes y estructuras salariales bien definidas, alineadas con criterios de equidad y cumplimiento legal.",
    },
    {
      emoji: "📱",
      title: "Regulación de plataformas digitales",
      desc: "Nuevas categorías de trabajo y responsabilidades que amplían el alcance de la regulación laboral a esquemas antes poco supervisados.",
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
            Blog · Reformas Laborales
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Las nuevas reglas del juego:{" "}
            <span className="text-turquoise">reformas laborales 2027–2030</span>{" "}
            y su impacto en la nómina
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              13 Abr 2026
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
          México está entrando en una etapa de transformación donde más de 40 reformas laborales,
          fiscales y operativas impactarán directamente la forma en que las empresas gestionan
          su talento.
        </p>
        <p className="text-gray-500 leading-relaxed mb-12">
          No se trata de cambios aislados, sino de una evolución estructural que redefine el
          cumplimiento y la operación empresarial. Durante años, la nómina fue vista como un
          proceso operativo que simplemente debía ejecutarse, pero ese panorama ha cambiado
          por completo.
        </p>

        {/* Jornada laboral — visual timeline */}
        <h2 className="text-2xl font-bold text-navy mb-2">
          La transformación clave: jornada laboral y nuevas reglas
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Uno de los ejes principales es la reducción progresiva de la jornada laboral, un cambio
          que redefine toda la estructura operativa de las empresas:
        </p>

        <div className="bg-gray-50 to-navy/90 rounded-2xl px-8 py-10 mb-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-turquoise/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <p className="text-turquoise font-semibold text-sm uppercase tracking-widest mb-8">
            Reducción progresiva · horas semanales
          </p>
          <div className="space-y-5">
            {jornada.map((item) => (
              <div key={item.year} className="flex items-center gap-4">
                <span className="text-white font-bold text-sm w-10 flex-shrink-0">{item.year}</span>
                <div className="flex-1 bg-white/10 rounded-full h-8 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-turquoise to-turquoise/70 rounded-full flex items-center px-4 transition-all"
                    style={{ width: `${item.pct}%` }}
                  >
                    <span className="text-white font-extrabold text-sm">{item.horas}h</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-xs mt-6 italic">
            Fuente: Actualización legislativa laboral en México; Consolide, Jornada laboral 40h DOF.
          </p>
        </div>

        {/* Alert */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex gap-4 items-start">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-800 text-sm mb-1">
              El mismo salario, menos horas
            </p>
            <p className="text-amber-700 text-sm leading-relaxed">
              Las empresas deberán mantener el mismo salario con menos horas trabajadas, lo que
              representa un reto directo en productividad, eficiencia y control de recursos.
              Cualquier desviación en horas extra impacta directamente en los costos operativos.
            </p>
          </div>
        </div>

        {/* Nuevas obligaciones */}
        <h2 className="text-2xl font-bold text-navy mb-2">
          Nuevas obligaciones que elevan el cumplimiento
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Además de la jornada, se incorporan obligaciones que elevan significativamente el
          nivel de control, trazabilidad y cumplimiento que las empresas deben garantizar:
        </p>

        <div className="space-y-4 mb-12">
          {nuevasObligaciones.map((item, i) => (
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

        <p className="text-sm text-gray-400 italic mb-12">
          Fuentes: Mijares; Consolide, DOF; Siigo México; El Economista — reformas laborales en México.
        </p>

        {/* El verdadero desafío */}
        <h2 className="text-2xl font-bold text-navy mb-4">
          El verdadero desafío: adaptarse sin margen de error
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          El reto ya no está en entender las reformas, sino en aplicarlas correctamente todos
          los días. Esto implica dejar atrás procesos manuales y operar con mayor orden y
          claridad, porque hoy no basta con calcular la nómina y asumir que está bien.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Muchos errores comienzan siendo pequeños y pasan desapercibidos: una hora mal
          registrada, un cálculo que no se revisó a tiempo o un dato incompleto. Con el tiempo
          se acumulan y se convierten en problemas mayores — multas, conflictos laborales y
          desorden que impacta a toda la empresa.
        </p>

        {/* Stats band */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { num: "40+", label: "Reformas laborales y fiscales" },
            { num: "3×", label: "Pago por horas excedentes" },
            { num: "12h", label: "Límite semanal de horas extra" },
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
            El aliado estratégico
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Nommy para dominar la nueva era de la nómina
          </h2>
          <p className="text-white/80 leading-relaxed mb-4 text-sm">
            Ante un entorno en constante cambio, seguir operando la nómina como antes ya no es
            una opción. Las empresas necesitan herramientas que no solo resuelvan, sino que den
            tranquilidad todos los días.
          </p>
          <p className="text-white/80 leading-relaxed text-sm">
            Nommy no solo se adapta a las nuevas regulaciones, se anticipa a ellas, permitiendo
            a las empresas mantenerse actualizadas sin rehacer procesos ni preocuparse por cada
            cambio legal.
          </p>
        </div>

        {/* CTA box */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-10">
          <h2 className="text-xl font-bold text-navy mb-6">Con Nommy puedes:</h2>

          <ul className="space-y-3 mb-8">
            {[
              "Automatizar cálculos y evitar errores en horas extra",
              "Registrar electrónicamente la jornada laboral",
              "Asegurar cumplimiento normativo actualizado",
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