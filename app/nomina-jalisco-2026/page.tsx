import { Calendar, Clock, ArrowLeft, CheckCircle, AlertTriangle, FileText, Building2, TrendingUp, DollarSign, Users } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

export default function nomina() {
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
                Jalisco
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                06 Febrero 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                8 min de lectura
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              Nómina en Jalisco 2026: Conoce como  la Nueva Ley de 40 Horas y el SAT Impactan tu negocio
            </h1>

            <div className="bg-gradient-to-r from-turquoise to-navy p-8 rounded-2xl text-white shadow-xl">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                Si eres Empresario Jalisciense esta guía práctica es para ti: Te compartimos como la Nómina de 2026 Exige Estos 3 Cambios Inmediatos
              </h2>
            </div>
          </div>
        </ScrollAnimation>

        {/* Introducción */}
        <ScrollAnimation>
          <div className="prose prose-lg max-w-none mb-12 text-justify">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Introducción</h3>
                  <p className="text-gray-700 leading-relaxed mb-0 text-justify">
                    Si tienes empleados en Guadalajara, Zapopan, o cualquier municipio de Jalisco, febrero de 2026 marca un punto de inflexión. La combinación de la implementación real de la Ley Federal del Trabajo (40 horas) con los nuevos requisitos del SAT en nómina electrónica crea una tormenta perfecta de cumplimiento. Te explicamos cómo navegarla sin multas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Contexto */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy/5 to-turquoise/5 p-8 rounded-2xl border border-navy/10">
              <h2 className="text-3xl font-bold text-navy mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-turquoise" />
                El Contexto Jalisciense Especial
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Jalisco no es solo tequila y tech. Es el segundo estado con más controversias laborales (según el Tribunal Federal de Conciliación) y el tercero en recepción de observaciones del SAT por nómina electrónica. En 2026, esto se intensificará. Aquí te contamos los 3 cambios obligatorios que debes considerar
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Cambios */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-8 text-center">
              Los 3 Cambios Obligatorios (Enfocados en Jalisco)
            </h2>

            {/* Cambio 1 */}
            <div className="mb-12">
              <div className="bg-white border-2 border-turquoise rounded-2xl overflow-hidden shadow-lg p-8">
                <h3 className="text-2xl font-bold text-navy mb-4">
                  1. La Jornada de 40 Horas: Del Papel a la Nómina Real
                </h3>
                <p className="mb-3">
                  <strong>Situación Jalisco:</strong> Sectores como manufactura, logística en El Salto, y call centers en ZMG operan con turnos complejos.
                </p>
                <p className="mb-3">
                  <strong>Ejemplo concreto:</strong> Un operario en la Zona Industrial de El Salto que trabajaba 48 horas (6x8) ahora debe tener:
                </p>
                <ul className="list-disc ml-6 mb-3">
                  <li>Opción A: 5 días de 8 horas (40h semanales) + pago de prima dominical si trabaja los domingos.</li>
                  <li>Opción B: Esquema mixto con horas extras pagadas desde la hora 41 (no desde la 49 como antes).</li>
                </ul>
                <p className="mb-3">
                  <strong>Error común en Jalisco:</strong> Creer que el "día de descanso obligatorio" se puede compensar solo con pago. La Procuraduría de la Defensa del Trabajo (Profedet) en Guadalajara ya multa esto.
                </p>
                <p>
                  <strong>Solución práctica:</strong> Revisar contratos colectivos de trabajo (especialmente en sindicatos de construcción y alimentos) y ajustar software para calcular automáticamente el nuevo tope.
                </p>
              </div>
            </div>

            {/* Cambio 2 */}
            <div className="mb-12">
              <div className="bg-white border-2 border-navy rounded-2xl overflow-hidden shadow-lg p-8">
                <h3 className="text-2xl font-bold text-navy mb-4">
                  2. El SAT y la Nómina Electrónica 2.0: Vigilancia Estricta en Jalisco
                </h3>
                <p className="mb-3">
                  <strong>Novedad 2026:</strong> El Servicio de Administración Tributaria de la Región Occidente (con sede en GDL) prioriza auditorías a empresas que:
                </p>
                <ul className="list-disc ml-6 mb-3">
                  <li>Emiten CFDI de nómina con percepciones no registradas en el IMSS.</li>
                  <li>Tienen discrepancias entre lo pagado vía nómina electrónica y lo declarado en IMSS e INFONAVIT.</li>
                </ul>
                <p className="mb-3">
                  <strong>Caso típico Jalisco:</strong> Empresas que dan vales de despensa superiores a la UMA ($141.70 diarios en 2026) y no los registran como percepción. El SAT ahora cruza datos con tiendas afiliadas.
                </p>
                <p>
                  <strong>Recomendación urgente:</strong> Usar softwares como Nommy que genere recibos de nómina que contenga información completa como el CFDI entre otros aspecto relevantes.
                </p>
              </div>
            </div>

            {/* Cambio 3 */}
            <div className="mb-12">
              <div className="bg-white border-2 border-green-600 rounded-2xl overflow-hidden shadow-lg p-8">
                <h3 className="text-2xl font-bold text-navy mb-4">
                  3. El "Plus Jalisco": Prestaciones Locales que Impactan Nómina
                </h3>
                <p className="mb-3">
                  <strong>Reglamento Interior de Trabajo del Estado de Jalisco (actualizado 2025)</strong> exige:
                </p>
                <ul className="list-disc ml-6 mb-3">
                  <li><strong>Día de la Charreada (14 de septiembre):</strong> Día de descanso obligatorio pagado para todos los empleados del estado.</li>
                  <li><strong>Fondos de Ahorro:</strong> En 2026, deben reflejarse por separado en el CFDI de nómina, no como "otras percepciones".</li>
                  <li><strong>Teletrabajo en la ZMG:</strong> Si tienes empleados en 3 municipios distintos (ej: empleado vive en Tlajomulco, oficina en Zapopan, y trabaja desde casa), debes tener un anexo al contrato específico que detalle gastos de internet/energía. Estos no son salario, pero sí deducibles para la empresa.</li>
                </ul>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Checklist */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy to-turquoise p-8 rounded-2xl text-white">
              <h2 className="text-2xl font-bold mb-6">
                Aquí te dejamos este Checklist de Supervivencia para Jalisco (Febrero 2026)
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Revisar todos los contratos (especialmente en manufactura y construcción) para ajustar horarios a 40 horas.</li>
                <li>Capacitar a tu contador o externo en los nuevos lineamientos del SAT Occidente para nómina electrónica.</li>
                <li>Contratar un software de nómina para que calcule automáticamente:
                  <ul className="list-disc ml-6 mt-2">
                    <li>Prima dominical para sectores con turnos rotativos.</li>
                    <li>Día de la Charreada como día festivo obligatorio.</li>
                    <li>Límites de vales de despensa y fondos de ahorro.</li>
                  </ul>
                </li>
                <li>Documentar esquemas de teletrabajo según el Código del Trabajo de Jalisco.</li>
                <li>Realizar una auditoría previa cruzando nómina vs. IMSS antes del cierre de febrero.</li>
              </ul>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <div className="bg-gradient-to-br from-turquoise via-turquoise to-navy p-8 rounded-2xl text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Conoce Nommy
            </h3>
            <p className="text-xl mb-6">
              Conoce Nommy y compara como nuestra plataforma puede ayudarte a estar al día con las nuevas leyes en temas de nómina de acuerdo a la Ley 2026.
            </p>
            <Link
              href="/demo"
              className="bg-white text-navy px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              ¡Demo Gratis!
            </Link>
          </div>
        </ScrollAnimation>
      </article>
    </div>
  )
}

