import { Calendar, Clock, ArrowLeft, CheckCircle, AlertCircle, MapPin, Briefcase, Home, FileText, ListChecks, Sparkles } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

export default function PlusJaliscoPrestaciones() {
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
              <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full font-medium">
                <MapPin className="w-4 h-4" />
                Prestaciones · Jalisco
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                5 Enero 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                6 min de lectura
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              El "Plus Jalisco": Prestaciones Locales que Impactan tu Nómina
            </h1>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl text-white shadow-xl">
              <div className="flex items-start gap-4">
                <Sparkles className="w-10 h-10 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                    Conoce cómo está siendo impactada tu nómina
                  </h2>
                  <p className="text-lg opacity-95 leading-relaxed">
                    Descubre las prestaciones específicas de Jalisco que debes incluir en tu nómina 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Introduction */}
        <ScrollAnimation>
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl mb-8">
              <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                <FileText className="w-6 h-6 text-purple-600" />
                Reglamento Interior de Trabajo del Estado de Jalisco
              </h3>
              <p className="text-gray-700 leading-relaxed mb-0">
                La actualización 2025 del Reglamento establece nuevas obligaciones que impactan directamente 
                tu nómina. A continuación, te explicamos las 3 prestaciones clave que debes implementar.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* 3 Key Benefits */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-8 text-center">
              Las 3 Prestaciones Obligatorias
            </h2>

            {/* Benefit 1: Día de la Charreada */}
            <div className="mb-12">
              <div className="bg-white border-2 border-pink-400 rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-pink-600">1</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      Día de la Charreada (14 de Septiembre)
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-xl mb-6">
                    <h4 className="text-xl font-bold text-navy mb-3">Obligación Legal</h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      <strong className="text-pink-700">Día de descanso obligatorio pagado</strong> para todos 
                      los empleados del estado de Jalisco.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border-2 border-green-300 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <h4 className="font-bold text-green-900">Qué Hacer</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 font-bold">•</span>
                          <span>Registrar en calendario laboral</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 font-bold">•</span>
                          <span>Pagar salario completo del día</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 font-bold">•</span>
                          <span>Incluir en contratos laborales</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="w-6 h-6 text-amber-600" />
                        <h4 className="font-bold text-amber-900">Importante</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Si el empleado trabaja este día, debe pagarse <strong>doble</strong> más prima dominical 
                        si corresponde.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 2: Fondos de Ahorro */}
            <div className="mb-12">
              <div className="bg-white border-2 border-blue-400 rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-blue-600">2</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      Fondos de Ahorro: Nueva Clasificación en CFDI
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-6">
                    <h4 className="text-xl font-bold text-navy mb-3">Cambio Importante en 2026</h4>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      Muchas empresas jaliscienses ofrecen <strong className="text-blue-700">fondos de ahorro</strong> como 
                      prestación competitiva para atraer talento.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <p className="text-gray-700 font-semibold">
                        ⚠️ En 2026, deben reflejarse <strong className="text-blue-700">por separado</strong> en el CFDI de nómina, 
                        <strong className="text-red-600"> NO como "otras percepciones"</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5">
                      <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                        ❌ Incorrecto
                      </h4>
                      <div className="bg-white p-4 rounded-lg border border-red-200">
                        <p className="text-sm text-gray-600 mb-2">Concepto en CFDI:</p>
                        <p className="font-mono text-sm text-red-700">
                          "Otras percepciones: $500"
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 border-2 border-green-300 rounded-xl p-5">
                      <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                        ✅ Correcto
                      </h4>
                      <div className="bg-white p-4 rounded-lg border border-green-200">
                        <p className="text-sm text-gray-600 mb-2">Concepto en CFDI:</p>
                        <p className="font-mono text-sm text-green-700">
                          "Fondo de ahorro: $500"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 3: Teletrabajo */}
            <div className="mb-12">
              <div className="bg-white border-2 border-turquoise rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-turquoise to-navy p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-turquoise">3</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      Teletrabajo en la ZMG: Gastos Deducibles
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <div className="bg-turquoise/10 border-l-4 border-turquoise p-6 rounded-r-xl mb-6">
                    <h4 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                      <Home className="w-6 h-6 text-turquoise" />
                      Situación Especial: Múltiples Municipios
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      Si tienes empleados en <strong>3 municipios distintos</strong>, por ejemplo:
                    </p>
                    <div className="bg-white p-5 rounded-lg space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          📍
                        </div>
                        <p className="text-gray-700"><strong>Vive en:</strong> Tlajomulco</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-navy text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          🏢
                        </div>
                        <p className="text-gray-700"><strong>Oficina en:</strong> Zapopan</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          💻
                        </div>
                        <p className="text-gray-700"><strong>Trabaja desde:</strong> Casa (Home Office)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 mb-6">
                    <h4 className="text-xl font-bold text-navy mb-3">Requisito Obligatorio</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Debes tener un <strong className="text-yellow-700">anexo al contrato específico</strong> que detalle:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Gastos de internet proporcionados</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Gastos de energía eléctrica cubiertos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Equipo de trabajo proporcionado</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                    <h4 className="text-xl font-bold text-navy mb-3">Beneficio Fiscal</h4>
                    <p className="text-gray-700 leading-relaxed">
                      ✅ Estos gastos <strong className="text-green-700">NO son salario</strong>, pero <strong className="text-green-700">SÍ son deducibles</strong> para la empresa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      
        <section className="bg-navy/5 py-12">
            <Link href="/demo">
            <img
                src="/Blog.jpg"
                alt="Blog Image"
                className="w-full max-w-4xl mx-auto rounded-xl shadow-lg cursor-pointer"
            />
            </Link>
        </section>
    
        {/* Checklist Section */}
        <ScrollAnimation>
          <section className="mb-12">
            <div className="bg-gradient-to-br from-navy via-turquoise to-purple-600 p-8 lg:p-10 rounded-2xl text-white shadow-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <ListChecks className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                    Checklist de Supervivencia para Jalisco
                  </h2>
                  <p className="text-lg opacity-95">Febrero 2026</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="space-y-4">
                  <label className="flex items-start gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-white/30" />
                    <span className="flex-1 leading-relaxed">
                      <strong>Revisar contratos laborales</strong> (especialmente manufactura y construcción) para ajustar horarios a 40 horas
                    </span>
                  </label>

                  <label className="flex items-start gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-white/30" />
                    <span className="flex-1 leading-relaxed">
                      <strong>Capacitar a tu contador</strong> o externo en los nuevos lineamientos del SAT Occidente para nómina electrónica
                    </span>
                  </label>

                  <label className="flex items-start gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-white/30" />
                    <span className="flex-1 leading-relaxed">
                      <strong>Contratar software de nómina</strong> que calcule automáticamente:
                      <ul className="mt-2 ml-4 space-y-1 text-sm opacity-90">
                        <li>• Prima dominical para sectores con turnos rotativos</li>
                        <li>• Día de la Charreada como día festivo obligatorio</li>
                        <li>• Límites de vales de despensa y fondos de ahorro</li>
                      </ul>
                    </span>
                  </label>

                  <label className="flex items-start gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-white/30" />
                    <span className="flex-1 leading-relaxed">
                      <strong>Documentar esquemas de teletrabajo</strong> según el Código del Trabajo de Jalisco
                    </span>
                  </label>

                  <label className="flex items-start gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-white/30" />
                    <span className="flex-1 leading-relaxed">
                      <strong>Realizar auditoría previa</strong> cruzando nómina vs. IMSS antes del cierre de febrero
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA Nommy */}
        <ScrollAnimation>
          <div className="bg-gradient-to-br from-turquoise to-navy p-8 lg:p-12 rounded-2xl text-white text-center shadow-2xl mb-12">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <p className="text-sm font-semibold">Solución Todo-en-Uno</p>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Conoce Nommy
              </h3>
              
              <p className="text-xl opacity-95 mb-8 leading-relaxed">
                Compara cómo nuestra plataforma puede ayudarte a estar al día con las nuevas leyes 
                en temas de nómina de acuerdo a la <strong>Ley 2026</strong>
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Cálculo automático de prestaciones</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">CFDI completo y actualizado</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Cumplimiento 100% garantizado</p>
                </div>
              </div>

              <Link
                href="/demo"
                className="inline-block bg-white text-navy px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Solicitar Demo
              </Link>
            </div>
          </div>
        </ScrollAnimation>

        {/* Share Section */}
        
      </article>
    </div>
  )
}
