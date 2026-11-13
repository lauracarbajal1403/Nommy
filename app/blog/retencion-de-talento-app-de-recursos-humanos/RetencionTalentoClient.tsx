"use client"
import { Calendar, Clock, ArrowLeft, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import { FAQ } from "./faq"

const CAUSAS = [
  ["Errores en la nómina.", "Un descuento injustificado o un pago incompleto rompe la confianza más rápido que cualquier otra cosa."],
  ["Falta de transparencia.", "El colaborador no sabe cómo se registraron sus faltas, retardos o vacaciones, y siente que las reglas cambian según quién las aplique."],
  ["Trámites lentos.", "Pedir un permiso implica buscar a alguien de RH, llenar un papel y esperar."],
  ["Mal clima laboral.", "Cargas excesivas, conflictos o liderazgo poco claro que nadie mide ni atiende."],
  ["Una mala contratación desde el inicio.", "Personas que no encajaban con el puesto y se van en los primeros meses."],
]

const COMPARATIVA = [
  ["Checar entrada", "Fila en el reloj checador físico", "Check-in desde el celular"],
  ["Pedir un permiso o vacaciones", "Buscar a RH y llenar un formato", "Registro de la incidencia desde la app"],
  ["Revisar retardos y faltas", "Dudas el día de pago", "Consulta en tiempo real"],
  ["Recibir la nómina", "Errores por captura manual", "Cálculo con incidencias integradas"],
  ["Opinar sobre el clima laboral", "Nadie pregunta", "Encuestas NOM-035 con plan de acción"],
]

const linkCls = "text-turquoise font-medium underline hover:text-navy"

export default function RetencionTalento() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-navy/5 border-b border-navy/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/resources" className="inline-flex items-center text-navy hover:text-turquoise transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Recursos
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollAnimation>
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-medium">
                <Users className="w-4 h-4" />
                Recursos Humanos | Gestión de talento
              </span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />13 Noviembre 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />7 min de lectura</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              Retención de talento en México: cómo una app de RH ayuda a que tu equipo se quede
            </h1>
          </div>
          <img
            src="/celular.png"
            alt="Colaboradora usando la app de Nommy en su celular como parte de una estrategia de retención de talento"
            className="w-full rounded-xl shadow-lg mb-8"
          />
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Cada vez que un colaborador renuncia, tu empresa paga dos veces: primero en el tiempo y dinero que cuesta reclutar y capacitar a alguien nuevo, y después en la productividad que se pierde mientras esa persona aprende. Por eso la <strong>retención de talento</strong> ya no es un tema exclusivo de grandes corporativos. Es una prioridad para cualquier negocio que quiera crecer con un equipo estable.
            </p>
            <p>
              La buena noticia es que muchas renuncias no se deciden por una gran oferta externa, sino por pequeñas fricciones diarias: un pago que llegó mal, un permiso que nadie registró, un retardo que se descontó sin explicación. En esta guía te compartimos <strong>estrategias de retención de personal</strong> que puedes aplicar desde hoy, y cómo una app de recursos humanos como Nommy te ayuda a sostenerlas sin cargar más trabajo a tu equipo de RH.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className="my-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4">Por qué se va la gente (y casi nunca es solo por el sueldo)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El salario importa, pero rara vez es la única razón. En la práctica, estas son algunas de las causas más comunes detrás de una renuncia:
            </p>
            <ul className="space-y-3 mb-6">
              {CAUSAS.map(([b, t]) => (
                <li key={b} className="flex items-start gap-3 text-gray-700">
                  <span className="text-turquoise font-bold">•</span>
                  <span><strong className="text-navy">{b}</strong> {t}</span>
                </li>
              ))}
            </ul>
            <img src="/enojo.jpg" alt="Causas comunes de renuncia: errores de nómina, trámites lentos y mal clima laboral" className="w-full rounded-xl shadow-lg mb-6" />
            <p className="text-gray-700 leading-relaxed">
              La mayoría de estos puntos tiene algo en común: son procesos de RH que, cuando se hacen a mano, generan errores y desconfianza. Ahí es donde la tecnología marca la diferencia.
            </p>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">6 estrategias de retención de talento que puedes aplicar con tecnología</h2>
            <div className="space-y-6">
              <Estrategia n={1} titulo="Paga bien, a tiempo y sin errores">
                La forma más básica de cuidar a tu equipo es pagarle correctamente. Un sistema que calcula percepciones y deducciones conforme a la normativa vigente, y que integra las incidencias directo al cálculo, reduce los errores que generan reclamos. Con Nommy, el{" "}
                <Link href="/calcula_nomina" className={linkCls}>cálculo de nómina</Link>, el timbrado y la dispersión se hacen en un solo flujo, y cada incidencia que impacta la nómina queda validada y respaldada.
              </Estrategia>
              <Estrategia n={2} titulo="Haz transparentes las incidencias y la asistencia">
                Cuando el colaborador ve en tiempo real sus entradas, salidas, retardos y permisos, desaparecen las sorpresas el día de pago. Nommy centraliza el registro de faltas, permisos, retardos, ausencias y vacaciones en un solo lugar, con reportes de puntualidad y cumplimiento de horarios que también le dan claridad al supervisor.{" "}
                <Link href="/control_hora" className={linkCls}>Conoce el control de asistencia</Link>.
              </Estrategia>
              <Estrategia n={3} titulo="Dale autonomía al colaborador desde su celular">
                Nadie quiere hacer fila para checar o buscar a RH para pedir un permiso. Con la{" "}
                <Link href="/control_hora" className={linkCls}>app móvil de Nommy</Link>, los colaboradores registran su entrada y salida desde el celular, sin reloj checador físico, y pueden registrar y consultar sus incidencias en tiempo real. Menos papel, menos esperas y más sensación de control sobre su propio trabajo.
                <span className="block border-l-4 border-gray-300 pl-4 italic text-gray-600 mt-4">
                  &ldquo;Desde que implementamos la App Móvil con el reloj digital, la gestión de incidencias de nuestros colaboradores se ha vuelto mucho más sencilla y precisa.&rdquo; — Gerencia de RRHH, La Moresca
                </span>
              </Estrategia>
              <Estrategia n={4} titulo="Escucha a tu equipo con la NOM-035">
                La{" "}
                <a href="https://www.gob.mx/stps" target="_blank" rel="noopener noreferrer" className={linkCls}>NOM-035</a>{" "}
                no es solo una obligación legal: es una herramienta para detectar a tiempo los factores que desgastan a tu equipo. Nommy permite aplicar las encuestas oficiales a toda la organización, analizar los resultados e identificar factores de riesgo psicosocial con guías de acción concretas.{" "}
                <Link href="/norma" className={linkCls}>Descubre cómo cumplir con la NOM-035</Link>. Escuchar y actuar es una de las estrategias de retención más efectivas.
              </Estrategia>
              <Estrategia n={5} titulo="Contrata mejor desde el inicio">
                La retención empieza antes del primer día. Con el{" "}
                <Link href="/inteligencia" className={linkCls}>reclutamiento asistido por IA</Link>{" "}
                de Nommy, diseñas perfiles de puesto, calificas candidatos de forma objetiva según su experiencia y habilidades, y comparas resultados por competencias. La decisión final es tuya, pero respaldada con datos.
              </Estrategia>
              <Estrategia n={6} titulo="Mide para anticiparte">
                Lo que no se mide no se puede mejorar. Los reportes dinámicos de Nommy te permiten ver asistencia, incidencias y gastos de nómina por área, con filtros y exportación. Así detectas patrones, como un área con ausencias frecuentes, antes de que se conviertan en renuncias. Calcula cuánto podrías ahorrar en{" "}
                <Link href="/pricing" className={linkCls}>nuestra calculadora de ahorro</Link>.
              </Estrategia>
            </div>
            <img src="/grupo-profesional.png" alt="Equipo de trabajo consultando la app de Nommy: check-in, permisos, recibo de nómina, encuesta de clima y reportes" className="w-full rounded-xl shadow-lg mt-8" />
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">Antes y después: la experiencia del colaborador con Nommy</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-gray-300 text-sm">
                <thead className="bg-gray-100 text-navy">
                  <tr>
                    <th className="p-3 border border-gray-300">Momento</th>
                    <th className="p-3 border border-gray-300">Antes</th>
                    <th className="p-3 border border-gray-300">Con la app de Nommy</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {COMPARATIVA.map(([m, a, d]) => (
                    <tr key={m}>
                      <td className="p-3 border border-gray-300 font-medium">{m}</td>
                      <td className="p-3 border border-gray-300">{a}</td>
                      <td className="p-3 border border-gray-300">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">Preguntas frecuentes</h2>
            <div className="space-y-5">
              {FAQ.map(([q, a]) => (
                <div key={q}>
                  <h3 className="font-bold text-navy mb-1">{q}</h3>
                  <p className="text-gray-700 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="bg-gradient-to-br from-turquoise to-navy p-8 lg:p-10 rounded-2xl text-white shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-white/20 rounded-full p-3"><CheckCircle className="w-8 h-8" /></div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">Un equipo estable empieza por una buena experiencia diaria</h2>
                <p className="text-lg opacity-90 leading-relaxed">
                  La retención de talento no depende de grandes beneficios, sino de que cada día de trabajo sea justo, claro y sencillo. Cuando el pago llega bien, las reglas son transparentes y el equipo se siente escuchado, quedarse es la decisión natural.
                </p>
              </div>
            </div>
            <Link
              href="/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              Agenda una demo de Nommy
            </Link>
          </div>
        </ScrollAnimation>
      </article>
    </div>
  )
}

function Estrategia({ n, titulo, children }: { n: number; titulo: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-md">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
          <span className="font-bold text-blue-600">{n}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-navy mb-2">{titulo}</h3>
          <div className="text-gray-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}
