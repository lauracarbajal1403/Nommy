"use client"
import {
  ArrowLeft,
  Calendar,
  Clock,
  CheckCircle,
  ShieldCheck,
  Smartphone,
  FileSpreadsheet,
  Building2,
  Mail,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ScrollAnimation from "@/components/scroll-animation"

const CRITERIOS = [
  "Identificación biométrica real del colaborador, no solo un usuario y contraseña.",
  "Que funcione igual en oficina, sucursal y home office, sin depender de estar frente a un dispositivo físico.",
  "Registro de entradas, salidas y tiempos de comida, no solo el check-in del día.",
  "Evidencia exportable y lista para auditoría o inspección de la STPS.",
  "Cero mantenimiento, instalación o manuales técnicos por sucursal.",
  "Que no represente una inversión de hardware por cada punto de trabajo.",
]

const FEATURES_NOMMY = [
  "Check-in y check-out desde el celular, tanto en oficina como en home office, con la misma app.",
  "Registro de entradas y salidas del horario de comida, no solo del turno completo.",
  "Asistencia en tiempo real: RRHH ve entradas, salidas y ausencias al momento, sin esperar reportes manuales.",
  "Incidencias (retardos, permisos, faltas, vacaciones) automatizadas y centralizadas, sin hojas de Excel sueltas.",
  "Integración directa con el cálculo de nómina, sin captura manual ni doble trabajo.",
]

const FAQS = [
  {
    q: "¿Cuál es el mejor reloj checador biométrico para una empresa con varias sucursales?",
    a: "El que no depende de comprar un equipo por cada sucursal. Un checador basado en app, como el de Nommy, se activa en el celular de cada colaborador nuevo el mismo día que se incorpora, sin instalación ni logística de hardware.",
  },
  {
    q: "¿El checador biométrico funciona para empleados en home office?",
    a: "Sí. Con Nommy, el check-in y check-out se hacen desde la app móvil sin importar si el colaborador está en la oficina, en sucursal o trabajando desde casa.",
  },
  {
    q: "¿Qué exige la ley mexicana sobre el control de asistencia?",
    a: "La reforma que acompaña la transición a la jornada de 40 horas obliga, a partir de 2027, a llevar un registro electrónico de asistencia inalterable, con identificación biométrica, que permita comprobar horarios frente a la nómina. El incumplimiento puede sancionarse con multas de 250 a 5,000 UMA por trabajador.",
  },
  {
    q: "¿Cómo protege un reloj checador biométrico a la empresa ante la STPS?",
    a: "Genera evidencia exportable —como el Excel descargable de Nommy— con el detalle de entradas, salidas y descansos por colaborador, lista para comprobar el cumplimiento de la jornada ante una inspección o una demanda laboral.",
  },
  {
    q: "¿Cuánto tiempo toma implementar Nommy?",
    a: "Menos de 30 días, sin costo de implementación y con soporte 24/7.",
  },
]

export default function RelojChecadorClient() {
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

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <ScrollAnimation>
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-turquoise/10 text-turquoise px-3 py-1.5 rounded-full font-medium">
                <Building2 className="w-4 h-4" />
                Jornada 40 horas
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                Agosto 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                6 min de lectura
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
              ¿Cuál es el mejor reloj checador biométrico para tu negocio?
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Por qué es lo primero que debes implementar para transicionar a la jornada de 40 horas en México
            </p>

            <div className="relative w-full aspect-[1408/768] rounded-2xl overflow-hidden shadow-xl mb-8">
              <Image
                src="/agosto13.jpeg"
                alt="Reloj checador biométrico tradicional en la pared vs. check-in biométrico desde el celular con Nommy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </ScrollAnimation>

        {/* Intro */}
        <ScrollAnimation>
          <div className="prose prose-lg max-w-none mb-8 text-justify">
            <p className="text-gray-700 leading-relaxed">
              Si estás buscando &ldquo;cuál es el mejor reloj checador biométrico&rdquo;, lo más probable es
              que tu negocio esté sintiendo la presión de dos frentes al mismo tiempo: la reforma laboral que
              reduce gradualmente la jornada de 48 a 40 horas semanales en México, y la exigencia, cada vez
              más real, de comprobar con evidencia digital cómo se distribuyen esas horas. Resolver ambos
              frentes empieza en el mismo lugar: un sistema de control de asistencia biométrico, confiable y
              fácil de operar en todas tus sucursales.
            </p>
          </div>
        </ScrollAnimation>

        {/* Respuesta corta */}
        <ScrollAnimation>
          <div className="bg-turquoise/10 border-l-4 border-turquoise p-6 rounded-r-xl mb-12">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-turquoise flex-shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed mb-0">
                <strong className="text-navy">Respuesta corta:</strong> el mejor reloj checador biométrico no
                es un aparato: es una app de check-in con identificación biométrica que funciona igual en
                oficina, sucursal y home office, registra entradas, salidas y tiempos de comida, y genera
                evidencia exportable para comprobar el cumplimiento de la jornada ante la STPS. Esa es la
                propuesta de Nommy.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* La jornada de 40 horas */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy/5 to-turquoise/5 p-8 rounded-2xl border border-navy/10">
              <h2 className="text-3xl font-bold text-navy mb-6">
                La jornada de 40 horas ya es una realidad en México
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                La reforma laboral aprobada en 2026 establece una reducción progresiva de la jornada semanal
                máxima: de 48 horas hoy, hasta llegar a 40 horas hacia 2030, bajando gradualmente año con
                año. Como parte de esta transición, la ley obliga a las empresas a llevar un registro
                electrónico de asistencia que sea inalterable, con identificación verificable del
                colaborador (biometría) y que permita comprobar horarios de entrada, salida y descansos
                frente a la nómina. El incumplimiento contempla multas que van de 250 a 5,000 UMA por
                trabajador afectado.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify mb-0">
                En otras palabras: la ley ya no solo pide reducir horas, pide poder demostrar cómo se están
                controlando. Y eso es exactamente lo que hace un reloj checador biométrico.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Por qué el checador es lo primero */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-navy mb-6">
              Por qué el checador es lo primero que debes implementar
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8 text-justify">
              Antes de ajustar horarios, turnos o esquemas de trabajo híbrido, es necesario saber con
              precisión qué está pasando hoy: cuánto tiempo trabaja realmente cada colaborador, en qué
              sucursal, con o sin home office, y cuánto dura su hora de comida. Sin ese dato confiable,
              cualquier plan de transición a la jornada de 40 horas se construye sobre suposiciones. Por eso
              el control de asistencia biométrico no es un &ldquo;extra&rdquo; de RRHH: es la base sobre la
              que se diseña toda la transición, y es también la primera línea de defensa ante una revisión
              de la Secretaría del Trabajo y Previsión Social (STPS).
            </p>

            <div className="relative w-full aspect-[1408/768] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/agosto14.jpeg"
                alt="Colaboradora de RRHH usando una laptop Nommy en la oficina de Guadalajara"
                fill
                className="object-cover"
              />
            </div>
          </section>
        </ScrollAnimation>

        {/* Criterios */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-navy mb-6">
              ¿Qué debe tener el mejor reloj checador biométrico para tu negocio?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Antes de elegir uno, vale la pena comparar contra estos criterios:
            </p>
            <ul className="space-y-4">
              {CRITERIOS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-turquoise flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </ScrollAnimation>

        {/* Nommy features */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy to-turquoise p-8 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-8 h-8" />
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Nommy: el checador biométrico que vive en el celular de tus colaboradores
                </h2>
              </div>
              <p className="leading-relaxed mb-6 text-white/90">
                Con Nommy, el reloj checador no es una máquina en la pared: es una función dentro de la app
                móvil que cada colaborador ya trae en su propio dispositivo. Esto cambia por completo la
                ecuación frente a un reloj checador tradicional:
              </p>
              <ul className="space-y-3">
                {FEATURES_NOMMY.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-white" />
                    <span className="text-white/95">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </ScrollAnimation>

        {/* Respaldo STPS */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Tu respaldo ante una revisión de la STPS</h3>
                  <p className="text-gray-700 leading-relaxed mb-0 text-justify">
                    Uno de los mayores riesgos de la nueva exigencia de registro electrónico es llegar a una
                    inspección de la STPS —o a una demanda laboral— sin evidencia clara de los horarios
                    trabajados. Con Nommy, cada registro de asistencia queda respaldado y disponible en un
                    Excel descargable, con el detalle de entradas, salidas y descansos por colaborador. Ese
                    documento es prueba suficiente para comprobar el cumplimiento de la jornada ante
                    cualquier autoridad, y protege frente a reclamos de horas extra no registradas o jornadas
                    mal documentadas.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Comparativa */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-navy mb-6">
              Reloj checador físico vs. Nommy: la diferencia en el día a día
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Un reloj checador tradicional obliga a los colaboradores a compartir una misma máquina —algo
              poco higiénico en cualquier entorno de trabajo—, y a la empresa a invertir en un dispositivo,
              su instalación, mantenimiento y soporte técnico por cada sucursal que abra. Con Nommy no hay
              hardware que comprar, ni manuales de instalación, ni soporte especializado que contratar: el
              checador ya está en el teléfono de cada colaborador, en cualquier sucursal o esquema de
              trabajo, desde el primer día.
            </p>
          </section>
        </ScrollAnimation>

        {/* FAQ */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">
              Preguntas frecuentes sobre el reloj checador biométrico
            </h2>
            <div className="space-y-4">
              {FAQS.map((item) => (
                <div
                  key={item.q}
                  className="bg-white border-2 border-navy/10 rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-navy mb-2">{item.q}</h3>
                  <p className="text-gray-700 leading-relaxed mb-0">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <div className="bg-gradient-to-br from-turquoise via-turquoise to-navy p-8 rounded-2xl text-white text-center">
            <FileSpreadsheet className="w-10 h-10 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">¿Listo para dejar atrás el reloj checador físico?</h3>
            <p className="text-xl mb-8">
              Implementa Nommy en menos de 30 días, sin costo de implementación y con soporte 24/7.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e73b4d] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                ¡Demo Gratis!
              </Link>
              <a
                href="https://wa.me/523315179175"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy/30 border border-white/40 text-white px-6 py-4 rounded-full font-semibold hover:bg-navy/50 transition-all duration-300 inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp (33) 1517-9175
              </a>
              <a
                href="mailto:ventas@nommy.mx"
                className="bg-navy/30 border border-white/40 text-white px-6 py-4 rounded-full font-semibold hover:bg-navy/50 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                ventas@nommy.mx
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </article>
    </div>
  )
}
