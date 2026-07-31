"use client"
import {
  Calendar,
  Clock,
  ArrowLeft,
  FileText,
  CheckCircle,
  AlertTriangle,
  ShieldCheck,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

const PLAZOS = [
  { rango: "De 1 a 50", dias: "3" },
  { rango: "De 51 a 100", dias: "5" },
  { rango: "De 101 a 300", dias: "7" },
  { rango: "De 301 a 500", dias: "9" },
  { rango: "Más de 500", dias: "11" },
]

const CHECKLIST = [
  "CFDI 4.0 vigente con Complemento de Nómina 1.2",
  "RFC, nombre exacto, código postal fiscal, régimen fiscal y uso de CFDI del trabajador",
  "CURP, NSS, antigüedad, tipo de contrato, tipo de jornada y periodicidad de pago",
  "Registro patronal, cuando aplique",
  "Percepciones y deducciones con su clave SAT correcta",
  "Totales cuadrados entre percepciones, deducciones e importe final",
  "Timbrado dentro del plazo de la Regla 2.7.5.1",
  "Entrega real del comprobante al trabajador",
  "Sistema actualizado a la Revisión E, vigente desde enero de 2026",
]

const FAQS = [
  {
    q: "¿Es obligatorio si tengo un solo empleado?",
    a: "Sí, aplica sin importar el tamaño de la empresa.",
  },
  {
    q: "¿Qué pasa si no timbro a tiempo?",
    a: "El SAT puede negar la deducibilidad del gasto y aplicar multas por cada comprobante fuera de plazo.",
  },
  {
    q: "¿Qué es lo que más rechaza el SAT?",
    a: "Datos del receptor mal capturados y descuadres entre percepciones, deducciones e importe total.",
  },
]

export default function RequisitosClient() {
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
            Volver a Recursos
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <ScrollAnimation>
          <div className="mb-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-10 lg:py-12 bg-gradient-to-br from-navy/[0.06] via-turquoise/[0.06] to-navy/[0.03] rounded-3xl border border-navy/10">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-turquoise/15 text-navy px-3 py-1.5 rounded-full font-medium">
                <FileText className="w-4 h-4" />
                Cumplimiento fiscal
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                
                31 de Julio 2026
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                <Clock className="w-4 h-4 text-navy/60" />
                5 min de lectura
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              Requisitos del <span className="text-turquoise">Recibo de Nómina Electrónico</span> en México:{" "}
              <span className="bg-navy text-white px-2 rounded-md whitespace-nowrap">Checklist 2026</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Si eres director, gerente o líder de RRHH, o simplemente estás familiarizado con el término
              "nómina", ya sabes que un recibo mal emitido no es un error menor: puede significar una deducción
              rechazada, un CFDI que el SAT no reconoce, o una auditoría que te quita meses de tranquilidad.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Aquí reunimos todo lo que el SAT exige hoy para que un recibo de nómina electrónico sea válido,
              actualizado a los cambios vigentes desde enero de 2026 — de lo más básico a lo más específico,
              hasta llegar al checklist que te llevarás de aquí.
            </p>
          </div>
        </ScrollAnimation>

        <section className="pt-2 pb-14">
          <img
            src="/portadaestructura.png"
            alt="Colaboradora revisando el dashboard de nómina de Nommy"
            className="w-full rounded-xl shadow-lg"
          />
        </section>

        {/* Qué es */}
        <ScrollAnimation>
          <section className="mb-14">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4 flex items-center gap-3">
              <FileText className="w-7 h-7 text-turquoise" />
              ¿Qué es <span className="text-turquoise">realmente</span> el recibo de nómina electrónico?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Es un <strong>CFDI tipo "Nómina"</strong> sobre la versión 4.0, al que se le agrega el{" "}
              <strong>Complemento de Nómina 1.2</strong>: el módulo donde vive toda la información específica
              del pago (percepciones, deducciones, antigüedad, tipo de contrato).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lo que muchas empresas no ven, o deciden ignorar, es que este documento cumple dos obligaciones al
              mismo tiempo: la <strong>Ley Federal del Trabajo</strong>, que exige un comprobante desglosado para
              el trabajador, y la <strong>LISR</strong>, que obliga al patrón a emitir un comprobante fiscal por
              cada pago, sea un empleado o mil. Cuando RRHH gestiona esto a mano, es fácil que se le escape
              alguno de los dos frentes por el clásico "error humano" — y ahí empieza el riesgo real. Automatizar
              este proceso, como lo hace Nommy, es la forma más directa de cumplir ambas obligaciones sin que tu
              equipo tenga que memorizar cada regla del SAT.
            </p>
          </section>
        </ScrollAnimation>

        {/* Datos que el SAT exige */}
        <ScrollAnimation>
          <section className="mb-14">
            <div className="bg-gradient-to-br from-turquoise/10 to-blue-50 p-8 rounded-2xl border-2 border-turquoise/20">
              <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3">
                <AlertTriangle className="w-7 h-7 text-navy" />
                Los datos que el <span className="bg-navy text-white px-2 rounded-md">SAT exige</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Toda factura electrónica en México necesita RFC del trabajador, nombre exacto (igual a su
                Constancia de Situación Fiscal), código postal fiscal, régimen fiscal del receptor (605 para
                empleados) y uso del CFDI.
              </p>
              <div className="bg-white rounded-xl p-5 border-l-4 border-navy/30">
                <p className="text-gray-700 leading-relaxed">
                  Un solo dato mal capturado —un código postal desactualizado, una coma de más— ya es suficiente
                  para que se rechace al timbrar. Con Nommy, esto se valida automáticamente antes de llegar a ese
                  punto. Pero esto es solo la capa general; donde la mayoría de las empresas se pierde es en lo
                  siguiente.
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <section className="pt-2 pb-14">
          <img
            src="/blogestructura.png"
            alt="Panel de gestión de horarios en la plataforma Nommy"
            className="w-full rounded-xl shadow-lg"
          />
        </section>

        {/* Complemento de Nómina 1.2 */}
        <ScrollAnimation>
          <section className="mb-14">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
              Lo específico del Complemento de Nómina 1.2
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Estos datos ya no son genéricos de facturación, son propios de la relación laboral: CURP y NSS,
              tipo de jornada y de contrato, antigüedad (en formato técnico específico), periodicidad de pago,
              registro patronal (si aplica), y cada percepción o deducción con su clave exacta del catálogo del
              SAT.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ese último punto es el que más dolores de cabeza genera: usar la clave incorrecta —o dejarla
              genérica— es motivo de rechazo, y memorizar el catálogo completo del SAT es, honestamente, una
              tarea casi imposible para una sola persona. <strong>Nommy asigna estas claves de forma
              automática.</strong> Y aún hay una regla más que casi nadie ve venir hasta que ya es tarde.
            </p>
          </section>
        </ScrollAnimation>

        {/* El cuadre */}
        <ScrollAnimation>
          <section className="mb-14">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-navy mb-4">
                El cuadre que nadie te dice hasta que te rechazan un comprobante
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Percepciones y otros pagos deben coincidir exactamente con el importe total, y las deducciones
                con el descuento registrado. Un peso de diferencia y el CFDI simplemente no se timbra — casi
                siempre se descubre justo el día de pago, sin margen para corregir con calma. Automatizar este
                cuadre, como hace Nommy, evita que ese descuadre llegue siquiera al momento de timbrar.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        <section className="pt-2 pb-14">
          <img
            src="/blog3estructura.png"
            alt="De la nómina en papel al dashboard organizado de Nommy"
            className="w-full rounded-xl shadow-lg"
          />
        </section>

        {/* Regla 2.7.5.1 */}
        <ScrollAnimation>
          <section className="mb-14">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4 flex items-center gap-3">
              <Clock className="w-7 h-7 text-turquoise" />
              ¿Cuándo tienes que timbrar? La Regla 2.7.5.1
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Según la Regla 2.7.5.1 de la Resolución Miscelánea Fiscal, el plazo para timbrar el CFDI de nómina
              —contado a partir de la fecha de pago— depende del número de trabajadores o asimilados a salarios
              que tenga el contribuyente:
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-5 py-3 font-semibold">Número de trabajadores o asimilados a salarios</th>
                    <th className="px-5 py-3 font-semibold">Día hábil</th>
                  </tr>
                </thead>
                <tbody>
                  {PLAZOS.map(({ rango, dias }, i) => (
                    <tr key={rango} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3 text-gray-700 border-t border-gray-100">{rango}</td>
                      <td className="px-5 py-3 text-gray-700 border-t border-gray-100 font-semibold">{dias}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-r-xl">
              <p className="text-gray-700 leading-relaxed">
                Lo que casi nadie considera: la fecha que cuenta fiscalmente es la <strong>del pago</strong>, no
                la del timbrado. Pasarte del plazo puede hacer que el SAT niegue la deducibilidad — la empresa
                termina pagando más impuestos por un simple atraso administrativo. Con Nommy, el timbrado ocurre
                dentro del plazo de forma automática, según el rango de trabajadores que le corresponda a cada
                empresa.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Revisión E */}
        <ScrollAnimation>
          <section className="mb-14">
            <div className="bg-gradient-to-br from-navy/5 to-blue-50 p-8 rounded-2xl border-2 border-navy/20">
              <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3">
                <ShieldCheck className="w-7 h-7 text-navy" />
                Lo nuevo para 2026: la Revisión E ya está vigente
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Desde enero de 2026, el SAT endureció las reglas con la <strong>Revisión E</strong>: el tope del
                subsidio al empleo subió de <strong>$475 a $628</strong>, se crearon claves específicas para días
                de descanso laborado, y ya no se puede dejar en cero el importe gravado y exento a la vez. Si tu
                sistema no está actualizado, tus CFDIs pueden empezar a rechazarse sin previo aviso. Nommy se
                actualiza automáticamente ante estos cambios.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Checklist */}
        <ScrollAnimation>
          <section className="mb-14">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4">El checklist que te llevas de aquí</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Con todo lo anterior, ya tienes el conocimiento para que tu nómina no se rechace en 2026. Esto es
              lo que debes revisar, sí o sí, antes de cada timbrado. Guárdalo, imprímelo, pásalo a tu equipo.
              Pero ten presente algo importante: <strong>esta lista está sujeta a cambio</strong>. El SAT ajusta
              catálogos, topes y validaciones prácticamente cada año, como acaba de pasar con la Revisión E. Por
              eso, la forma más segura de no tener que revisar este checklist a mano cada enero es contratar una
              plataforma que lo haga por ti: con Nommy, cada vez que el SAT mueve una regla, la actualizamos
              nosotros, y tu nómina simplemente sigue timbrando sin interrupciones.
            </p>

            <div className="bg-navy rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-turquoise font-bold text-lg">nommy</span>
              </div>
              <h3 className="text-white text-lg font-semibold mb-5">Checklist de una nómina completa en 2026</h3>
              <ul className="space-y-3">
                {CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 border-turquoise" />
                    <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/50 text-xs mt-6 pt-4 border-t border-white/10">
                Comprobar los datos antes de implementar este checklist, los datos mostrados son recabados en
                2026.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* FAQ */}
        <ScrollAnimation>
          <section className="mb-14">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6 flex items-center gap-3">
              <HelpCircle className="w-7 h-7 text-turquoise" />
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <p className="font-semibold text-navy mb-2">{q}</p>
                  <p className="text-gray-700 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className="pt-2 pb-14">
            <img
              src="/blog2estructura.png"
              alt="Equipo de RRHH revisando la nómina en tablet con Nommy"
              className="w-full rounded-xl shadow-lg"
            />
          </section>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <div className="bg-gradient-to-br from-turquoise to-navy p-8 lg:p-10 rounded-2xl text-white shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                  Cumplir esto a mano, mes tras mes, es un riesgo que crece
                </h2>
                <p className="text-lg opacity-90 leading-relaxed">
                  Nommy automatiza cada punto de este checklist para que tu equipo de RRHH deje de vivir con la
                  ansiedad de "¿se me habrá pasado algo?" en cada periodo de pago.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="mb-6">¿Quieres ver cómo se vería tu proceso de nómina sin estos pendientes?</p>
              <Link
                href="/demo"
                className="inline-block bg-white text-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                AGENDA TU DEMO
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </article>
    </div>
  )
}