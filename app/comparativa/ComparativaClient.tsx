"use client"
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  Building2,
  ShieldCheck,
  Link2,
  Smartphone,
  BarChart3,
  Headset,
} from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

const CRITERIA = [
  {
    icon: ShieldCheck,
    title: "Seguridad y respaldo del timbrado y la dispersión",
    description:
      "Cada incidencia que impacta la nómina debe quedar validada y respaldada, no solo calculada.",
  },
  {
    icon: Link2,
    title: "Integración directa con el IDSE del IMSS",
    description:
      "Altas, bajas y cambios de salario sincronizados automáticamente, sin doble captura ni reingreso de credenciales.",
  },
  {
    icon: Smartphone,
    title: "Movilidad real para el colaborador",
    description:
      "Una app donde el colaborador pueda fichar su asistencia y consultar o registrar incidencias (permisos, faltas, vacaciones) desde su celular, sin depender de hardware físico.",
  },
  {
    icon: BarChart3,
    title: "Reportes en tiempo real",
    description:
      "Tableros dinámicos con filtros por área, exportables, que permitan tomar decisiones sin esperar a que RH arme un reporte manual.",
  },
  {
    icon: Headset,
    title: "Soporte y tiempo de implementación",
    description:
      "Una plataforma en la nube debe poder implementarse en semanas, no meses, y contar con soporte disponible cuando surge un problema, no solo en horario de oficina.",
  },
]

const CONTRASTS = [
  { before: "Checador físico en la oficina", after: "Check-in desde el celular" },
  { before: "Solicitud de vacaciones o permisos en papel", after: "Registro de incidencias dentro de la app" },
  { before: "Trámite manual en el portal del IMSS", after: "Sincronización automática vía IDSE" },
]

const FAQ = [
  {
    q: "¿Qué ventajas tiene un software de nómina en la nube frente a uno instalado en un servidor local?",
    a: "Un sistema en la nube se actualiza automáticamente ante cambios normativos, es accesible desde cualquier dispositivo con internet, no depende de un servidor físico ni de un archivo que solo una persona controla, y suele integrar de forma directa trámites como el IDSE del IMSS.",
  },
  {
    q: "¿La nómina en la nube es segura para una empresa mexicana?",
    a: "Sí, siempre que la plataforma valide y respalde cada incidencia que impacta el cálculo, cifre la información y mantenga sesiones seguras con instituciones como el IMSS. Nommy, por ejemplo, protege las credenciales del IDSE y registra cada movimiento para que quede disponible en caso de auditoría.",
  },
  {
    q: "¿Cuánto tiempo toma migrar la nómina de una empresa a la nube?",
    a: "Depende de la plataforma y del número de colaboradores. Con Nommy, el proceso de alta de empresa y carga de colaboradores (manual o masiva vía Excel) permite tener la nómina operando en menos de 30 días.",
  },
  {
    q: "¿Un sistema de nómina en la nube se conecta con el IMSS automáticamente?",
    a: "No todas las plataformas lo hacen. Las más completas, como Nommy, envían altas, bajas y cambios de salario directo al IDSE con un clic, sin que el usuario entre manualmente al portal del gobierno.",
  },
]

export default function ComparativaClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-navy/5 border-b border-navy/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/resources"
            className="inline-flex items-center text-navy hover:text-turquoise transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Bloggy
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollAnimation>
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-turquoise/10 text-turquoise px-3 py-1.5 rounded-full font-medium">
                <Building2 className="w-4 h-4" />
                Nómina y RH
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                15 Septiembre 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                6 min de lectura
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              Comparativa de Software de Nómina en la Nube para Empresas en México
            </h1>

            <img
              src="/blog34.jpeg"
              alt="Equipo de RH de una empresa mexicana consultando un dashboard de nómina en la nube desde una tablet en la oficina"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </ScrollAnimation>

        {/* Introducción */}
        <ScrollAnimation>
          <div className="prose prose-lg max-w-none mb-12 text-justify">
            <p className="text-lg text-gray-700 leading-relaxed">
              Cada vez más empresas en México están migrando su nómina de sistemas locales o de hojas de cálculo
              hacia plataformas en la nube. La razón es simple: un sistema en la nube centraliza el cálculo, el
              timbrado, la dispersión y los trámites ante el IMSS en un solo lugar, accesible desde cualquier
              dispositivo y sin depender de un servidor físico o de un archivo que solo una persona sabe editar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pero no todas las soluciones de nómina en la nube ofrecen el mismo nivel de integración. Esta
              comparativa te da criterios clave para evaluar opciones y entender dónde se posiciona Nommy frente a
              ellos.
            </p>
          </div>
        </ScrollAnimation>

        {/* Qué significa nómina en la nube */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy/5 to-turquoise/5 p-8 rounded-2xl border border-navy/10">
              <h2 className="text-3xl font-bold text-navy mb-6">¿Qué significa realmente "nómina en la nube"?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Un sistema de nómina en la nube no es solo una versión web de un programa de escritorio. Implica que
                el cálculo, el almacenamiento de la información y las conexiones con terceros —como el IMSS o el
                SAT— ocurren en servidores remotos, accesibles en tiempo real desde una computadora o desde el
                celular, con actualizaciones automáticas cuando cambia la normativa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Esto es especialmente relevante en México, donde la nómina depende de trámites gubernamentales que
                cambian con frecuencia: timbrado fiscal ante el SAT, movimientos ante el IMSS a través del IDSE, y
                obligaciones como la NOM-035.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* 5 criterios */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 text-center">
              5 criterios para comparar soluciones de nómina en la nube
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              Al comparar plataformas, estos son los puntos que marcan una diferencia real en el día a día de un
              equipo de RH:
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {CRITERIA.map((criterio) => (
                <div
                  key={criterio.title}
                  className="bg-white border-2 border-navy/10 rounded-2xl p-6 shadow-lg hover:border-turquoise transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-turquoise/10 flex items-center justify-center mb-4">
                    <criterio.icon className="w-6 h-6 text-turquoise" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{criterio.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{criterio.description}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Nube vs procesos tradicionales */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6 text-center">
              Nube vs. procesos tradicionales: el contraste más común
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <img
                src="/agosto12.jpeg"
                alt="Colaboradora haciendo check-in de asistencia desde su celular en lugar de usar un checador físico"
                className="w-full h-72 object-cover rounded-2xl shadow-xl"
              />
              <div className="space-y-4">
                {CONTRASTS.map((item) => (
                  <div
                    key={item.before}
                    className="bg-navy/5 border border-navy/10 rounded-2xl p-4 flex items-center gap-4"
                  >
                    <span className="text-gray-500 line-through decoration-2 flex-1">{item.before}</span>
                    <ArrowRight className="w-5 h-5 text-turquoise flex-shrink-0" />
                    <span className="text-navy font-semibold flex-1">{item.after}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-justify">
              <p className="text-lg text-gray-700 leading-relaxed">
                El cambio que más valoran los equipos de RH al migrar a la nube no es solo dejar de usar Excel: es
                dejar de depender de procesos manuales que ya tienen una alternativa digital directa. Este
                contraste —proceso manual o físico frente a su equivalente centralizado en la nube— es, en la
                práctica, la comparación más útil para decidir si conviene migrar.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Nommy */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy to-turquoise p-8 rounded-2xl text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">Dónde se posiciona Nommy en esta comparativa</h2>
              <p className="text-lg leading-relaxed mb-4">
                <Link href="/producto" className="text-white font-semibold underline hover:no-underline">
                  Nommy
                </Link>{" "}
                es una suite de RRHH 360° en la nube, con más de 7,500 empresas mexicanas usándola para calcular su
                nómina. Cubre los cinco criterios anteriores: timbrado y dispersión con validación y respaldo de
                cada incidencia, conexión directa y segura con el IDSE del IMSS, app móvil para que el colaborador
                fiche su asistencia y registre incidencias sin hardware, reportes dinámicos con tableros
                interactivos, e implementación en menos de{" "}
                <Link href="/pricing" className="text-white font-semibold underline hover:no-underline">
                  30 días con soporte 24/7 y $0 de costo de implementación
                </Link>
                .
              </p>
              <p className="leading-relaxed mb-0">
                A diferencia de adaptar un sistema contable genérico a nómina, Nommy centraliza en una sola
                plataforma nómina, asistencia, IDSE, reclutamiento con IA, NOM-035 y reportes, pensada
                específicamente para empresas mexicanas de distintos giros: restaurantes, maquilas, call centers,
                despachos contables y departamentos de RH de empresas grandes y pymes.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* FAQ */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-8 text-center">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {FAQ.map((item) => (
                <div key={item.q} className="bg-navy/5 border border-navy/10 rounded-2xl p-6">
                  <h3 className="flex items-start gap-3 text-lg font-bold text-navy mb-2">
                    <HelpCircle className="w-5 h-5 text-turquoise flex-shrink-0 mt-1" />
                    {item.q}
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Conclusión + CTA */}
        <ScrollAnimation>
          <div className="bg-gradient-to-br from-turquoise via-turquoise to-navy p-8 rounded-2xl text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Conoce Nommy</h3>
            <p className="text-xl mb-6">
              Migrar la nómina a la nube deja de ser una decisión solo tecnológica cuando se evalúa con los
              criterios correctos: seguridad del timbrado, integración real con el IMSS, movilidad para el
              colaborador, reportes en tiempo real y una implementación accesible. Conoce el detalle de cómo Nommy
              cubre cada uno de estos puntos y calcula el ahorro potencial para tu equipo de RH.
            </p>
            <Link
              href="/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e73b4d] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              ¡Demo Gratis!
            </Link>
          </div>
        </ScrollAnimation>
      </article>
    </div>
  )
}
