import { Calendar, Clock, ArrowLeft, CheckCircle, AlertTriangle, FileText, Building2, TrendingUp, DollarSign, Users } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

export default function NominaJalisco2026() {
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
                15 Enero 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                8 min de lectura
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              Nómina en Jalisco 2026: Conoce cómo la Nueva Ley de 40 Horas y el SAT Impactan tu Negocio
            </h1>

            <div className="bg-gradient-to-r from-turquoise to-navy p-8 rounded-2xl text-white shadow-xl">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                Si eres Empresario Jalisciense esta guía práctica es para ti: Te compartimos cómo la Nómina de 2026 Exige Estos 3 Cambios Inmediatos
              </h2>
            </div>
          </div>
        </ScrollAnimation>

        {/* Introduction */}
        <ScrollAnimation>
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-[#FFFF00]-50 border-l-4 border-[#FFFF00]-400 p-6 rounded-r-xl mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-[#FFFF00]-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Introducción: Gancho Local</h3>
                  <p className="text-gray-700 leading-relaxed mb-0">
                    Si tienes empleados en <strong>Guadalajara, Zapopan, o cualquier municipio de Jalisco</strong>, febrero de 2026 marca un punto de inflexión. La combinación de la implementación real de la Ley Federal del Trabajo (40 horas) con los nuevos requisitos del SAT en nómina electrónica crea una tormenta perfecta de cumplimiento. 
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Te explicamos cómo navegarla sin multas.
            </p>
          </div>
        </ScrollAnimation>

        {/* Context Section */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy/5 to-turquoise/5 p-8 rounded-2xl border border-navy/10">
              <h2 className="text-3xl font-bold text-navy mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-turquoise" />
                El Contexto Jalisciense Especial
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Jalisco no es solo tequila y tech. Es el <strong className="text-navy">segundo estado con más controversias laborales</strong> (según el Tribunal Federal de Conciliación) y el <strong className="text-navy">tercero en recepción de observaciones del SAT</strong> por nómina electrónica.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                En 2026, esto se intensificará. Aquí te contamos los <strong className="text-turquoise">3 cambios obligatorios</strong> que debes considerar.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Main Changes */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-8 text-center">
              Los 3 Cambios Obligatorios (Enfocados en Jalisco)
            </h2>

            {/* Change 1 */}
            <div className="mb-12">
              <div className="bg-white border-2 border-turquoise rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-turquoise to-turquoise/80 p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-turquoise">1</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      La Jornada de 40 Horas: Del Papel a la Nómina Real
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  {/* Situación Jalisco */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-turquoise" />
                      Situación Jalisco
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Sectores como <strong>manufactura, logística en El Salto, y call centers en ZMG</strong> operan con turnos complejos.
                    </p>
                  </div>

                  {/* Ejemplo Concreto */}
                  <div className="bg-[#0000FF]-50 border-l-4 border-[#0000FF]-500 p-6 rounded-r-xl mb-6">
                    <h4 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#0000FF]-600" />
                      Ejemplo concreto
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Un operario en la <strong>Zona Industrial de El Salto</strong> que trabajaba 48 horas (6×8) ahora debe tener:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl border border-[#0000FF]-200">
                        <p className="font-bold text-navy mb-2">Opción A:</p>
                        <p className="text-gray-700">
                          5 días de 8 horas (40h semanales) + pago de prima dominical si trabaja los domingos.
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-xl border border-[#0000FF]-200">
                        <p className="font-bold text-navy mb-2">Opción B:</p>
                        <p className="text-gray-700">
                          Esquema mixto con horas extras pagadas desde la hora 41 (no desde la 49 como antes).
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Error Común */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-6">
                    <h4 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      Error común en Jalisco
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Creer que el <strong>"día de descanso obligatorio"</strong> se puede compensar solo con pago. 
                      La Procuraduría de la Defensa del Trabajo (Profedet) en Guadalajara <strong className="text-red-600">ya multa esto</strong>.
                    </p>
                  </div>

                  {/* Solución */}
                  <div className="bg-[#008000]-50 border-l-4 border-[#008000]-500 p-6 rounded-r-xl">
                    <h4 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#008000]-600" />
                      Solución práctica
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Revisar contratos colectivos de trabajo (especialmente en sindicatos de construcción y alimentos) y 
                      ajustar software para calcular automáticamente el nuevo tope.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Change 2 */}
            <div className="mb-12">
              <div className="bg-white border-2 border-navy rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-navy to-navy/80 p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-navy">2</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      El SAT y la Nómina Electrónica 2.0: Vigilancia Estricta en Jalisco
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  {/* Novedad 2026 */}
                  <div className="bg-[#FFA500]-50 border-l-4 border-[#FFA500]-500 p-6 rounded-r-xl mb-6">
                    <h4 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-[#FFA500]-600" />
                      Novedad 2026
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      El Servicio de Administración Tributaria de la <strong>Región Occidente (con sede en GDL)</strong> prioriza auditorías a empresas que:
                    </p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#FFA500]-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          Emiten CFDI de nómina con percepciones no registradas en el IMSS.
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#FFA500]-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          Tienen discrepancias entre lo pagado vía nómina electrónica y lo declarado en IMSS e INFONAVIT.
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Caso Típico */}
                  <div className="bg-[#800080]-50 border-l-4 border-[#800080]-500 p-6 rounded-r-xl mb-6">
                    <h4 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-[#800080]-600" />
                      Caso típico Jalisco
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Empresas que dan vales de despensa superiores a la <strong>UMA ($141.70 diarios en 2026)</strong> y no los registran como percepción. 
                      <strong className="text-purple-700"> El SAT ahora cruza datos con tiendas afiliadas.</strong>
                    </p>
                  </div>
    
                  {/* Recomendación */}
                  <div className="bg-[#008000]-50 border-l-4 border-[#008000]-500 p-6 rounded-r-xl">
                    <h4 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#008000]-600" />
                      Recomendación urgente
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Usar softwares como <strong className="text-turquoise">Nommy</strong> que genere recibos de nómina que contenga información completa como el CFDI entre otros aspectos relevantes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Change 3 */}
            <div className="mb-12">
              <div className="bg-white border-2 border-[#008000] rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-[#008000] to-[#006400] p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-[#008000]">3</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      El "Plus Jalisco": Prestaciones Locales que Impactan Nómina
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong>Reglamento Interior de Trabajo del Estado de Jalisco (actualizado 2025)</strong> exige:
                  </p>

                  {/* Día de la Charreada */}
                  <div className="bg-navy-50 border-l-4 border-navy-500 p-6 rounded-r-xl mb-6">
                    <h4 className="text-xl font-bold text-navy mb-3">
                      🐎 Día de la Charreada (14 de septiembre)
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Día de descanso obligatorio pagado para todos los empleados del estado.
                    </p>
                  </div>

                  {/* Fondos de Ahorro */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-6">
                    <h4 className="text-xl font-bold text-navy mb-3">
                      💰 Fondos de Ahorro
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Muchas empresas jaliscienses los ofrecen como prestación competitiva. En 2026, deben reflejarse por separado en el CFDI de nómina, 
                      <strong className="text-blue-700"> no como "otras percepciones"</strong>.
                    </p>
                  </div>

                  {/* Teletrabajo */}
                  <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
                    <h4 className="text-xl font-bold text-navy mb-3">
                      🏠 Teletrabajo en la ZMG
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Si tienes empleados en 3 municipios distintos (ej: empleado vive en Tlajomulco, oficina en Zapopan, y trabaja desde casa), 
                      debes tener un anexo al contrato específico que detalle gastos de internet/energía.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Estos no son salario</strong>, pero sí deducibles para la empresa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Checklist Section */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy to-turquoise p-8 lg:p-10 rounded-2xl text-white shadow-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 flex items-center gap-3">
                <CheckCircle className="w-9 h-9" />
                Checklist de Supervivencia para Jalisco (Febrero 2026)
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 border-2 border-white rounded mt-1 flex-shrink-0"></div>
                    <p className="text-lg leading-relaxed">
                      Revisar todos los contratos (especialmente en manufactura y construcción) para ajustar horarios a 40 horas.
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 border-2 border-white rounded mt-1 flex-shrink-0"></div>
                    <p className="text-lg leading-relaxed">
                      Capacitar a tu contador o externo en los nuevos lineamientos del SAT Occidente para nómina electrónica.
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 border-2 border-white rounded mt-1 flex-shrink-0"></div>
                    <div>
                      <p className="text-lg leading-relaxed mb-2">
                        Contratar un software de nómina que calcule automáticamente:
                      </p>
                      <ul className="ml-6 space-y-1 text-white/90">
                        <li>• Prima dominical para sectores con turnos rotativos</li>
                        <li>• Día de la Charreada como día festivo obligatorio</li>
                        <li>• Límites de vales de despensa y fondos de ahorro</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 border-2 border-white rounded mt-1 flex-shrink-0"></div>
                    <p className="text-lg leading-relaxed">
                      Documentar esquemas de teletrabajo según el Código del Trabajo de Jalisco.
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 border-2 border-white rounded mt-1 flex-shrink-0"></div>
                    <p className="text-lg leading-relaxed">
                      Realizar una auditoría previa cruzando nómina vs. IMSS antes del cierre de febrero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation>
          <div className="bg-gradient-to-br from-turquoise via-turquoise to-navy p-8 lg:p-12 rounded-2xl text-white text-center shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-10 h-10" />
              <h3 className="text-3xl lg:text-4xl font-bold">
                Conoce Nommy
              </h3>
            </div>
            <p className="text-xl lg:text-2xl opacity-95 mb-8 max-w-3xl mx-auto leading-relaxed">
              Compara cómo nuestra plataforma puede ayudarte a estar al día con las nuevas leyes en temas de nómina de acuerdo a la Ley 2026
            </p>
            <Link
              href="/demo"
              className="inline-block bg-white text-navy px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Solicitar Demo Gratis
            </Link>
          </div>
        </ScrollAnimation>
      </article>
    </div>
  )
}