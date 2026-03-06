import { Calendar, Clock, ArrowLeft, Shield, TrendingUp, AlertTriangle, CheckCircle, XCircle, FileSearch, Zap, Database, DollarSign } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

export default function Talento() {
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
              <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-medium">
                <Shield className="w-4 h-4" />
                Retención de talento
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                23 Febrero 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                4 min de lectura
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              Retención de talento y decisiones que realmente impactan tu empresa
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Febrero no es solo un mes de seguimiento operativo — es un punto clave para tomar decisiones que pueden definir la estabilidad del resto del año. Mientras muchas empresas se enfocan únicamente en cumplir obligaciones administrativas, las organizaciones más sólidas están evaluando cómo fortalecer su propuesta de valor hacia el talento y cómo estructurar correctamente sus costos laborales sin comprometer rentabilidad.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hoy el talento no solo busca salario: busca equilibrio, crecimiento y estabilidad financiera. Cuando una empresa entiende esto, deja de ver los beneficios como gasto y comienza a verlos como inversión estratégica — una estructura bien diseñada puede reducir rotación, mejorar compromiso y elevar productividad de manera sostenible.
            </p>
          </div>
        </ScrollAnimation>

        {/* Intro highlight */}
        <ScrollAnimation>
          <div className="bg-gradient-to-br from-navy/5 to-blue-50 p-8 rounded-2xl border-2 border-blue-200 mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-blue-600" />
              Tres temas que impactan la competitividad de tu empresa este febrero
            </h2>
            <p className="text-gray-700 leading-relaxed">
              En Nommy creemos que febrero es el momento ideal para revisar estas áreas clave: los beneficios que realmente retienen talento, el cumplimiento de la Prima de Riesgo IMSS y el impacto fiscal de los beneficios flexibles.
            </p>
          </div>
        </ScrollAnimation>

        {/* ── SECCIÓN 1: Beneficios ── */}
        <ScrollAnimation>
          <section className="mb-12">
            <div className="space-y-6">
              <div className="bg-white border-2 border-blue-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-navy mb-3">
                      Beneficios que realmente retienen talento
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Los beneficios tradicionales ya no marcan diferencia por sí solos. Hoy el verdadero diferenciador está en cómo se diseñan, comunican y administran — un esquema flexible y bien estructurado transmite estabilidad, cuidado y visión de largo plazo.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <p className="text-gray-700 leading-relaxed">
                        La flexibilidad laboral, los esquemas financieros complementarios y los planes de desarrollo profesional alineados al crecimiento del negocio generan mayor compromiso y fortalecen la cultura organizacional, especialmente en un mercado donde la movilidad laboral sigue siendo alta.
                      </p>
                    </div>
                    <div className="mt-4 flex items-start gap-3">
                      <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm">Las empresas que estructuran beneficios con intención estratégica logran mayor control sobre el costo por empleado y una mejor proyección financiera anual.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── SECCIÓN 2: Prima de Riesgo ── */}
              <div className="bg-white border-2 border-orange-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-orange-600">2</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-navy mb-1">
                      Prima de Riesgo de Trabajo IMSS
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">Una obligación que no debe subestimarse</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Febrero es el mes límite para determinar y presentar la Prima de Riesgo de Trabajo ante el IMSS. Aunque muchas organizaciones lo ven como un trámite más, tiene impacto directo en las cuotas obrero patronales y en la estabilidad financiera del ejercicio.
                    </p>
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-4">
                      <p className="text-gray-700 leading-relaxed">
                        <strong className="text-orange-700">La prima se calcula con base en la siniestralidad del año anterior.</strong> Un análisis incorrecto o la omisión en su presentación puede generar recargos, multas y ajustes que afectan el flujo, además de abrir la puerta a revisiones innecesarias por parte de la autoridad.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Database className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm">Una gestión preventiva de riesgos laborales reduce accidentes, mejora el clima organizacional y disminuye costos futuros — convirtiendo esta obligación en una oportunidad estratégica.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── SECCIÓN 3: Impacto Fiscal ── */}
              <div className="bg-white border-2 border-red-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-red-600">3</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-navy mb-3">
                      El impacto fiscal de los beneficios flexibles
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Un beneficio mal estructurado puede convertirse en un riesgo fiscal. Es fundamental entender cómo se clasifican y cómo impactan en la deducción y en el costo real por empleado — no todos los conceptos se tratan igual ante la autoridad y una clasificación incorrecta puede generar ajustes importantes.
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <p className="text-gray-700 leading-relaxed">
                        Diferenciar correctamente entre <strong className="text-red-700">previsión social, beneficio exento y remuneración en especie</strong> permite evitar contingencias, mantener orden contable y proteger el margen operativo. El entorno fiscal es cada vez más preciso — la claridad en la estructura de beneficios ya no es opcional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Caso típico Jalisco */}
        <ScrollAnimation>
          <section className="mb-12">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <FileSearch className="w-10 h-10 text-yellow-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-1">
                    Caso Típico en Jalisco
                  </h2>
                  <p className="text-gray-600 text-sm">El error más común que está generando contingencias fiscales</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-yellow-500 mb-6">
                <h3 className="text-xl font-bold text-navy mb-4">El Problema:</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Empresas que otorgan <strong className="text-yellow-700">vales de despensa superiores al límite de la UMA</strong> ($141.70 diarios en 2026) y <strong className="text-red-600">no los registran como percepción</strong> en nómina.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy mb-1 text-sm">Detección automática:</p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        El SAT ahora <strong>cruza datos con tiendas afiliadas</strong> para verificar el monto real de vales entregados vs. lo declarado en nómina.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-6 h-6 text-red-600" />
                    <h4 className="font-bold text-red-900">Incorrecto</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {["Vales de $200/día sin registro", "Nómina no refleja percepción", "Discrepancia detectada por SAT"].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-green-900">Correcto</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {["Vales registrados como percepción", "CFDI refleja monto completo", "Total alineación SAT–IMSS"].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
       
          <section className="py-10 flex flex-wrap items-center">
            <img src="/imagen1.png" alt="Gráfica de impacto fiscal" className="w-full rounded-xl shadow-lg">
            </img>
           </section> 
        
        {/* Conclusión */}
        <ScrollAnimation>
          <section className="mb-12">
            <div className="bg-gradient-to-br from-navy/5 to-blue-50 p-8 rounded-2xl border-2 border-navy/20">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Febrero es estrategia, no solo cumplimiento
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cumplir es indispensable, pero competir exige algo más — revisar cómo estás invirtiendo en tu equipo, cómo estás proyectando tus obligaciones y qué tan estructurados están tus procesos internos. Una empresa reactiva siempre estará apagando incendios; una empresa organizada puede anticiparse y crecer con mayor estabilidad.
              </p>
              <p className="text-gray-700 leading-relaxed">
                En Nommy ayudamos a empresas de 1 a 19 colaboradores a tener claridad sobre su nómina, sus costos laborales y su cumplimiento — integrando tecnología y estructura para que cada decisión esté respaldada por información real y no por suposiciones.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Key Takeaways */}
        <ScrollAnimation>
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-navy mb-6">Puntos Clave a Recordar</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Los beneficios flexibles bien estructurados reducen rotación y mejoran productividad.",
                "Febrero es el mes límite para presentar la Prima de Riesgo de Trabajo ante el IMSS.",
                "Vales de despensa sobre la UMA deben registrarse como percepción en nómina.",
                "Software especializado garantiza alineación entre CFDI, IMSS e INFONAVIT.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-turquoise rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className="py-10 flex-justify-center">
            <img src="/imagen2.png" alt="Gráfica de impacto fiscal" className="w-full rounded-xl shadow-lg">
            </img>
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
                  Gestiona nómina y cumplimiento con claridad
                </h2>
                <p className="text-lg opacity-90 leading-relaxed">
                  Cuando el talento se gestiona con estrategia y el cumplimiento se maneja con orden, la empresa no solo opera mejor — se vuelve más competitiva.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              
              <ul className="space-y-3 mb-6">
                {[
                  ["CFDI completo", "con todas las percepciones declaradas"],
                  ["Sincronización automática", "con IMSS e INFONAVIT"],
                  ["Validación en tiempo real", "de discrepancias"],
                  ["Cumplimiento automático", "con regulaciones 2026"],
                ].map(([bold, rest]) => (
                  <li key={bold} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>{bold}</strong> {rest}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                DEMO GRATIS
              </Link>
            </div>
          </div>
        </ScrollAnimation>

      </article>
    </div>
  )
}