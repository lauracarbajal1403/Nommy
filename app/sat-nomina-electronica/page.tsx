import { Calendar, Clock, ArrowLeft, Shield, AlertTriangle, CheckCircle, XCircle, Database, FileSearch, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

export default function SATNominaElectronica() {
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
              <span className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 px-3 py-1.5 rounded-full font-medium">
                <Shield className="w-4 h-4" />
                SAT · Cumplimiento
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                10 Enero 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                4 min de lectura
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              El SAT y la Nómina Electrónica 2.0: Vigilancia Estricta en Jalisco
            </h1>

            <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 rounded-2xl text-white shadow-xl">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-10 h-10 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                    Alerta de Cumplimiento 2026
                  </h2>
                  <p className="text-lg opacity-95 leading-relaxed">
                    El Servicio de Administración Tributaria de la Región Occidente intensifica auditorías. 
                    Descubre si tu empresa está en la mira.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Main Content */}
        <ScrollAnimation>
          <section className="mb-12">
            <div className="bg-gradient-to-br from-navy/5 to-red-50 p-8 rounded-2xl border-2 border-red-200 mb-8">
              <h2 className="text-3xl font-bold text-navy mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-red-600" />
                Novedad 2026: Prioridades del SAT en Jalisco
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El <strong className="text-navy">Servicio de Administración Tributaria de la Región Occidente</strong> (con sede en Guadalajara) 
                está priorizando auditorías a empresas que:
              </p>
            </div>

            {/* Priority Items */}
            <div className="space-y-6 mb-12">
              {/* Priority 1 */}
              <div className="bg-white border-2 border-red-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-red-600">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy mb-3">
                      CFDI de Nómina con Percepciones No Registradas
                    </h3>
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <p className="text-gray-700 leading-relaxed">
                        <strong className="text-red-700">Emiten CFDI de nómina con percepciones no registradas en el IMSS.</strong>
                      </p>
                      <p className="text-gray-600 mt-2 text-sm">
                        El SAT cruza automáticamente esta información y detecta inconsistencias en tiempo real.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Priority 2 */}
              <div className="bg-white border-2 border-orange-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-orange-600">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy mb-3">
                      Discrepancias entre Nómina e Instituciones
                    </h3>
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                      <p className="text-gray-700 leading-relaxed">
                        <strong className="text-orange-700">Tienen discrepancias entre lo pagado vía nómina electrónica 
                        y lo declarado en IMSS e INFONAVIT.</strong>
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-sm">
                        <Database className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-600">Cruce automático de bases de datos entre instituciones</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Typical Case in Jalisco */}
        <ScrollAnimation>
          <section className="mb-12">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <FileSearch className="w-10 h-10 text-yellow-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-2">
                    Caso Típico en Jalisco
                  </h2>
                  <p className="text-gray-600">El error más común que está generando auditorías</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-yellow-500 mb-6">
                <h3 className="text-xl font-bold text-navy mb-4">El Problema:</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Empresas que dan <strong className="text-yellow-700">vales de despensa superiores a la UMA</strong> ($141.70 diarios en 2026) 
                  y <strong className="text-red-600">no los registran como percepción</strong>.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy mb-2">Nueva detección automática:</p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        El SAT ahora <strong>cruza datos con tiendas afiliadas</strong> para verificar el monto real 
                        de vales entregados vs. lo declarado en nómina.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example Comparison */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-6 h-6 text-red-600" />
                    <h4 className="font-bold text-red-900">Incorrecto</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Vales de $200/día sin registro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Nómina no refleja percepción</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Discrepancia detectada por SAT</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-green-900">Correcto</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">•</span>
                      <span>Vales registrados como percepción</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">•</span>
                      <span>CFDI refleja monto completo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">•</span>
                      <span>Total alineación SAT-IMSS</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Urgent Recommendation */}
        <ScrollAnimation>
          <section className="mb-12">
            <div className="bg-gradient-to-br from-turquoise to-navy p-8 lg:p-10 rounded-2xl text-white shadow-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                    Recomendación Urgente
                  </h2>
                  <p className="text-lg opacity-95 leading-relaxed mb-6">
                    Protege tu empresa de auditorías y multas con tecnología especializada
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Solución Profesional:</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Usar software especializado como <strong className="text-yellow-300">Nommy</strong> que genere recibos 
                  de nómina con información completa, incluyendo:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>CFDI completo</strong> con todas las percepciones declaradas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Sincronización automática</strong> con IMSS e INFONAVIT</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Validación en tiempo real</strong> de discrepancias</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Cumplimiento automático</strong> con regulaciones 2026</span>
                  </li>
                </ul>

                <Link
                  href="/demo"
                  className="inline-block bg-white text-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Solicitar Demo de Nommy
                </Link>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Key Takeaways */}
        <ScrollAnimation>
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-navy mb-6">Puntos Clave a Recordar</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-turquoise rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-gray-700">SAT Región Occidente está intensificando auditorías en 2026</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-turquoise rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-gray-700">Cruces automáticos entre CFDI, IMSS e INFONAVIT</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-turquoise rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-gray-700">Vales de despensa y UMA deben registrarse como percepción</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-turquoise rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <p className="text-gray-700">Software especializado es clave para cumplimiento</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Share Section */}
        
      </article>
    </div>
  )
}
