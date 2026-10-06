"use client"
import { Calendar, Clock, ArrowLeft, Users, User, MessageCircle } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

export default function BienestarClient() {
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
                <Users className="w-4 h-4" />
                Recursos Humanos
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                18 Septiembre 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />5 min de lectura
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                Equipo Nommy
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              Cómo <span className="text-turquoise">Nommy</span> hace más feliz al equipo: ventajas para el
              ambiente laboral
            </h1>

            <img
              src="/bienestar-laboral-1.jpg"
              alt="Equipo de trabajo sonriendo y conversando alrededor de una mesa en una oficina luminosa"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </ScrollAnimation>

        {/* Introducción */}
        <ScrollAnimation>
          <div className="prose prose-lg max-w-none mb-12 text-justify">
            <p className="text-lg text-gray-700 leading-relaxed">
              Cuando pensamos en qué hace feliz a un colaborador, casi siempre imaginamos sueldo, prestaciones o un
              buen ambiente de equipo. Pero hay algo más cotidiano que también pesa: cómo se siente al lidiar con
              los procesos de Recursos Humanos. Un checador que falla, un permiso que tarda días en aprobarse, dudas
              sobre el recibo de nómina o trámites que solo se resuelven yendo en persona a RH generan pequeñas
              frustraciones que, sumadas, desgastan la relación laboral.{" "}
              <Link href="/producto" className="text-turquoise font-semibold hover:underline">
                Nommy
              </Link>{" "}
              se creó para resolver justo eso: una plataforma que simplifica la nómina, la asistencia y el
              bienestar del equipo, y que termina teniendo un efecto directo en qué tan a gusto se siente cada
              persona en su trabajo.
            </p>
          </div>
        </ScrollAnimation>

        {/* Menos trámites */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy/5 to-turquoise/5 p-8 rounded-2xl border border-navy/10">
              <h2 className="text-3xl font-bold text-navy mb-6">Menos trámites, más tiempo para las personas</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Con Nommy, el colaborador registra su entrada y salida desde su propio celular, sin depender de un
                reloj checador físico que se descompone o de una fila para fichar. Si necesita registrar un
                permiso, una falta justificada o solicitar vacaciones, lo hace directamente desde la app, en el
                momento, sin ir a tocar la puerta de RH ni esperar a que alguien tenga tiempo de atenderlo. Eso no
                solo ahorra minutos: elimina la sensación de que pedir algo tan básico como un día libre es un
                proceso complicado. Cuando la gente siente que tiene control sobre sus propios tiempos, sin fricción
                ni dependencia de terceros, el trabajo deja de sentirse como un lugar de trámites y empieza a
                sentirse como un lugar donde confían en ella.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Transparencia */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">Transparencia que genera confianza</h2>
            <img
              src="/bienestar-laboral-2.jpg"
              alt="Colaboradora sonriente registrando su entrada al trabajo desde la app en su celular"
              className="w-full h-80 object-cover rounded-2xl shadow-xl mb-8"
            />
            <div className="prose prose-lg max-w-none text-justify">
              <p className="text-lg text-gray-700 leading-relaxed">
                Pocas cosas inquietan tanto a un colaborador como no entender por qué su pago varía de un mes a
                otro, o enterarse tarde de un error en su recibo. Nommy calcula percepciones y deducciones apegado a
                la normativa vigente, centraliza cada incidencia que afecta la nómina (faltas, permisos, retardos,
                vacaciones) y realiza el timbrado y la dispersión con validación automática, lo que reduce
                drásticamente los errores humanos. El colaborador puede consultar su recibo al instante, sin esperar
                a que alguien de RH se lo envíe o le explique un descuento. Esa claridad, sostenida mes con mes,
                construye algo que ningún bono puede comprar por sí solo: la certeza de que la empresa le paga bien y
                a tiempo.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* NOM-035 */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy to-turquoise p-8 rounded-2xl text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">Bienestar psicosocial real, no solo cumplimiento</h2>
              <p className="text-lg leading-relaxed mb-0 text-justify">
                La{" "}
                <Link href="/norma" className="text-white font-semibold underline hover:no-underline">
                  NOM-035
                </Link>{" "}
                suele verse como un requisito más que cumplir, pero bien aplicada es una herramienta genuina de
                cuidado. Con Nommy, la empresa aplica encuestas oficiales y estandarizadas a todo el equipo,
                identifica factores de riesgo psicosocial como sobrecarga de trabajo, liderazgo tóxico o ambientes
                de tensión, y recibe guías de acción concretas para atenderlos, no solo un reporte que se archiva.
                Cuando un colaborador ve que su empresa realmente pregunta cómo se siente, y después actúa sobre esas
                respuestas, el mensaje que recibe es claro: aquí importan las personas, no solo los resultados. Ese
                tipo de atención es de las que más influyen en si alguien decide quedarse o buscar otro lugar.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* RH más humano */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
              Un equipo de RH más <span className="text-turquoise">humano</span>, no solo más eficiente
            </h2>
            <img
              src="/bienestar-laboral-3.jpg"
              alt="Responsable de RH conversando de forma cercana con un colaborador en una sala tranquila"
              className="w-full h-80 object-cover rounded-2xl shadow-xl mb-8"
            />
            <div className="prose prose-lg max-w-none text-justify">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hay un beneficio indirecto que muchas veces se olvida: cuando RH deja de perseguir papeleo, tiene
                tiempo para las personas. Al automatizar la nómina, la conexión con el{" "}
                <Link href="/IDSE" className="text-turquoise font-semibold hover:underline">
                  IDSE del IMSS
                </Link>
                , los{" "}
                <Link href="/reportes_dina" className="text-turquoise font-semibold hover:underline">
                  reportes dinámicos
                </Link>{" "}
                y el registro de incidencias, Nommy libera al equipo de RH de tareas repetitivas y manuales. Ese
                tiempo recuperado se puede invertir en algo que ninguna herramienta reemplaza: escuchar a un
                colaborador, resolver un conflicto a tiempo, o simplemente estar presente cuando alguien lo
                necesita. Un área de RH que opera así deja de ser vista como una oficina de trámites y empieza a
                sentirse como un verdadero aliado del equipo.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Conclusión + CTA */}
        <ScrollAnimation>
          <div className="bg-gradient-to-br from-turquoise via-turquoise to-navy p-8 rounded-2xl text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Un colaborador que se siente cuidado, trabaja mejor</h2>
            <p className="text-xl mb-6">
              La felicidad laboral no se construye con un solo gran gesto, sino con la suma de pequeñas certezas:
              que le pagan bien y a tiempo, que puede resolver un trámite sin fricción, que la empresa realmente se
              preocupa por cómo se siente. Nommy no reemplaza el liderazgo ni la cultura de una empresa, pero le
              quita de encima todo lo operativo que suele opacarlos, dejando espacio para que las personas y no el
              papeleo sean el centro del ambiente laboral.
            </p>
            <p className="text-lg mb-6">
              ¿Quieres ver cómo se vería esto en tu empresa? Escríbenos por WhatsApp al (33) 1767-5670 y agenda una
              demo sin costo.
            </p>
            <a
              href="https://wa.me/523317675670"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e73b4d] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Agenda tu demo por WhatsApp
            </a>
          </div>
        </ScrollAnimation>
      </article>
    </div>
  )
}
