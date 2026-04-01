import { Calendar, Clock, ArrowLeft, AlertTriangle, TrendingUp, CheckCircle, FileSearch, Zap, BarChart2, Users, RefreshCw } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

export default function Radiografia() {
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
                <AlertTriangle className="w-4 h-4" />
                Gestión de nómina
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                31 Marzo 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                4 min de lectura
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              Radiografía de una empresa desordenada
            </h1>

            <p className="text-xl text-gray-500 italic leading-relaxed mb-4 border-l-4 border-navy/20 pl-4">
              Todo empieza con "no pasa nada".
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Hay algo peligroso en las empresas que no están rotas, pero tampoco están bien, porque el desorden no llega de golpe — se instala lento, casi invisible. Empieza con una frase que todos han dicho alguna vez: <em>"no pasa nada"</em>: un ajuste pequeño en Excel, un cálculo manual "solo por esta vez", un pago que salió raro pero se corrige después.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Y sí, ese día no pasa nada.
            </p>
          </div>
        </ScrollAnimation>

        {/* Intro highlight */}
        <ScrollAnimation>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-200 mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3">
              <AlertTriangle className="w-7 h-7 text-red-500" />
              El desorden silencioso que nadie ve venir
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Poco a poco la nómina deja de ser un proceso claro y se vuelve un sistema improvisado: archivos duplicados, fórmulas que solo una persona entiende, datos que se pasan de un lugar a otro. Y aunque todo parece funcionar, la realidad es otra.
            </p>
          </div>
        </ScrollAnimation>

        {/* Stat 1 */}
        <ScrollAnimation>
          <section className="mb-8">
            <div className="bg-white border-2 border-red-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <BarChart2 className="w-7 h-7 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-red-600">~80%</span>
                    <span className="text-gray-500 text-sm">de precisión promedio en nómina</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    En promedio la precisión de la nómina ronda apenas el 80%, lo que significa que <strong>cerca de 20 de cada 100 colaboradores</strong> pueden tener algún problema con su pago.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r-lg">
                    <p className="text-gray-600 text-sm italic">
                      No suena grave hasta que te toca — ahí empiezan los síntomas: un colaborador recibe menos, otro detecta un descuento extraño, Recursos Humanos empieza a explicar, Finanzas revisa contra reloj.
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    Fuente: FirmSuggest. <em>Cómo los registros precisos de nómina impulsan la satisfacción de los empleados</em>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Emotional insight */}
        <ScrollAnimation>
          <div className="mb-8 p-6 rounded-2xl bg-navy/5 border border-navy/10">
            <p className="text-gray-700 leading-relaxed text-lg">
              El equipo se acostumbra a <strong>resolver errores en lugar de prevenirlos</strong>. Y es justo en ese punto que el problema deja de ser técnico y se vuelve emocional — porque el sueldo no es solo dinero, es estabilidad, es confianza.
            </p>
          </div>
        </ScrollAnimation>

        {/* Stats 2 & 3 */}
        <ScrollAnimation>
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-orange-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-orange-600">+50%</span>
                    <p className="text-gray-500 text-sm">consideraría renunciar</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm mb-3">
                  Más del 50% de los empleados consideraría irse si los errores de nómina continúan.
                </p>
                <p className="text-xs text-gray-400">
                  Fuente: HR Morning. <em>Errores de nómina que le cuestan empleados a las empresas</em>
                </p>
              </div>

              <div className="bg-white border-2 border-yellow-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-yellow-600">~50%</span>
                    <p className="text-gray-500 text-sm">pierde confianza en la empresa</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm mb-3">
                  Casi la mitad perdería la confianza en su empresa después de errores repetidos.
                </p>
                <p className="text-xs text-gray-400">
                  Fuente: Magnet HR Group. <em>Cómo los errores de nómina afectan la confianza y la moral de los empleados</em>
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Rotación section */}
        <ScrollAnimation>
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-50 to-slate-100 border-2 border-gray-300 rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <RefreshCw className="w-10 h-10 text-gray-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-1">
                    El ciclo más caro que nadie conecta
                  </h2>
                  <p className="text-gray-500 text-sm">La rotación que nadie le atribuye a la nómina</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                La rotación no siempre se va quien tuvo el error — <strong>se va quien lo vio</strong>, quien empezó a dudar, quien entendió que si algo tan básico falla, lo demás también puede fallar.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { step: "1", label: "Contratar", color: "bg-slate-200 text-slate-700" },
                  { step: "2", label: "Capacitar", color: "bg-slate-300 text-slate-800" },
                  { step: "3", label: "Volver a empezar", color: "bg-slate-400 text-slate-900" },
                ].map(({ step, label, color }) => (
                  <div key={step} className={`${color} rounded-xl p-4 text-center`}>
                    <div className="text-3xl font-bold mb-1">{step}</div>
                    <div className="font-semibold">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white rounded-xl p-5 border-l-4 border-slate-500">
                <p className="text-gray-700 leading-relaxed">
                  Lo más fuerte es que <strong>desde afuera todo sigue "bien"</strong>: los pagos salen, los reportes existen y nadie habla del fondo — hasta que alguien decide hacer algo distinto.
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Images */}
        <section className="py-10 flex flex-wrap items-center">
          <img src="/enojo.jpg" alt="Gráfica de impacto fiscal" className="w-full rounded-xl shadow-lg" />
        </section>

        {/* Conclusión */}
        <ScrollAnimation>
          <section className="mb-12">
            <div className="bg-gradient-to-br from-navy/5 to-blue-50 p-8 rounded-2xl border-2 border-navy/20">
              <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3">
                <FileSearch className="w-7 h-7 text-navy" />
                Ordenar empieza con reconocer
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ordenar una empresa no empieza con tecnología — empieza con reconocer que ese <em>"no pasa nada"</em> sí estaba pasando.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Y es justo ahí donde entra Nommy, no como una herramienta más sino como un punto de quiebre.
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
                "El desorden en nómina se instala lento — un error pequeño hoy puede convertirse en rotación mañana.",
                "Solo el 80% de precisión promedio en nómina significa que 1 de cada 5 colaboradores puede tener un problema.",
                "Más del 50% de empleados consideraría irse si los errores de nómina continúan.",
                "Nommy no solo automatiza — pone orden donde antes había incertidumbre.",
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
            <img src="/hombre.jpg" alt="Gráfica de impacto fiscal" className="w-full rounded-xl shadow-lg" />
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
                  Inicia con Nommy y recibe hasta 60 días gratis
                </h2>
                <p className="text-lg opacity-90 leading-relaxed">
                  Cuando la nómina se vuelve precisa, los errores dejan de ser parte del proceso. Los equipos dejan de reaccionar y empiezan a operar con claridad.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <ul className="space-y-3 mb-6">
                {[
                  ["Nómina precisa", "los errores dejan de ser parte del proceso"],
                  ["RR.HH. recupera su enfoque", "en las personas, no en apagar incendios"],
                  ["Confianza restaurada", "desde el primer pago correcto"],
                  ["Sistema confiable", "sobre el que se construye toda la empresa"],
                ].map(([bold, rest]) => (
                  <li key={bold} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>{bold}</strong> — {rest}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                INICIA CON NOMMY — 60 DÍAS GRATIS
              </Link>
            </div>
          </div>
        </ScrollAnimation>

      </article>
    </div>
  )
}