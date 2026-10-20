"use client"
import { Calendar, Clock, ArrowLeft, Calculator, User, MessageCircle, CheckSquare } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

const problemas = [
  {
    title: "Un acceso distinto por cliente.",
    text: "Usuarios, contraseñas y versiones diferentes que solo una persona del equipo domina.",
  },
  {
    title: "Incidencias que llegan por WhatsApp, correo o papel.",
    text: "Faltas, retardos, permisos y vacaciones se capturan a mano, tarde y con margen de error.",
  },
  {
    title: "Movimientos al IMSS uno por uno.",
    text: "Altas, bajas y modificaciones de salario se hacen entrando al portal cada vez.",
  },
  {
    title: "Reportes armados a mano.",
    text: "Cada cierre implica copiar, pegar y cuadrar información para entregarla al cliente.",
  },
  {
    title: "Dependencia de personas clave.",
    text: "Si quien lleva a un cliente se ausenta, nadie más sabe dónde está todo.",
  },
]

const checklist = [
  "Permite administrar varias empresas o razones sociales desde una sola cuenta",
  "Calcula, timbra y genera layouts de dispersión conforme a la normativa vigente",
  "Se conecta con el IDSE para altas, bajas y modificaciones de salario",
  "Centraliza incidencias y las integra al cálculo de nómina",
  "Ofrece checador desde el celular para los colaboradores",
  "Genera reportes por cliente y permite exportarlos",
  "Tiene carga masiva de colaboradores",
  "Implementación en semanas, no meses, y soporte disponible cuando lo necesitas",
]

const beneficios = [
  {
    title: "Un flujo simple por cliente:",
    text: "creas la empresa, agregas a sus colaboradores (manual o con Excel) y timbras la nómina.",
  },
  {
    title: "Nómina completa:",
    text: "cálculo apegado a la normativa, cálculos inversos, finiquitos y liquidaciones, timbrado y layouts bancarios.",
  },
  {
    title: "Conexión IDSE:",
    text: "movimientos ante el IMSS con un clic y registro listo para auditorías.",
  },
  {
    title: "Asistencia e incidencias:",
    text: "checador desde el celular, horarios por empresa o colaborador, e incidencias integradas a la nómina.",
  },
  {
    title: "Reportes dinámicos:",
    text: "tableros con filtros y exportación para entregar información clara a cada cliente.",
  },
  {
    title: "Implementación en menos de 30 días, sin costo de implementación y con soporte 24/7.",
    text: "",
  },
]

const faqs = [
  {
    q: "¿Qué es un software de recursos humanos y nómina?",
    a: "Es una plataforma que integra el cálculo y timbrado de la nómina con procesos de RH como asistencia, incidencias, movimientos ante el IMSS y reportes, para gestionarlos desde un solo lugar.",
  },
  {
    q: "¿Puedo gestionar la nómina de varias empresas en un mismo software?",
    a: "Sí, siempre que la plataforma permita dar de alta varias empresas o razones sociales. Es el criterio más importante para un despacho contable.",
  },
  {
    q: "¿Cuánto tarda en implementarse un software de nómina en México?",
    a: "Depende del proveedor. En Nommy, la implementación toma menos de 30 días y no tiene costo.",
  },
  {
    q: "¿El software se conecta con el IMSS?",
    a: "Los sistemas más completos se conectan con el IDSE para enviar altas, bajas y cambios de salario sin entrar manualmente al portal. Nommy incluye esta conexión.",
  },
]

export default function SoftwareNominaClientesClient() {
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
                <Calculator className="w-4 h-4" />
                Nómina | Gestión
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                17 Octubre 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />7 min de lectura
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                Equipo Nommy
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              Software de Recursos Humanos y Nómina en México: qué buscar si gestionas{" "}
              <span className="text-turquoise">varios clientes</span> a la vez
            </h1>

            <img
              src="/Imag1_bloggy_17_09_26.jpeg"
              alt="Contador revisando la nómina de varias empresas en un solo software de nómina en México"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </ScrollAnimation>

        {/* Introducción */}
        <ScrollAnimation>
          <div className="prose prose-lg max-w-none mb-12 text-justify">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Si tu despacho procesa la nómina de cinco, diez o treinta empresas, ya sabes que el problema no es
              calcularla: es <strong>gestionarla</strong>. Cada cliente tiene su propia razón social, sus horarios,
              sus incidencias, sus movimientos ante el IMSS y sus fechas de pago. Cuando cada uno vive en una
              herramienta, un Excel o un acceso distinto, el trabajo crece al mismo ritmo que tu cartera.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Elegir un <strong>software de nómina en México</strong> pensado para una sola empresa no resuelve eso.
              En esta guía te contamos qué buscar en un <strong>software de recursos humanos y nómina</strong> cuando
              tu reto es administrar varios clientes a la vez, sin multiplicar horas, errores ni riesgos.
            </p>
          </div>
        </ScrollAnimation>

        {/* El problema */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy/5 to-turquoise/5 p-8 rounded-2xl border border-navy/10">
              <h2 className="text-3xl font-bold text-navy mb-6">
                El <span className="text-turquoise">problema</span> de gestionar la nómina de varios clientes con
                herramientas <span className="text-[#e73b4d]">separadas</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La mayoría de los despachos contables no planearon su operación: la fueron armando cliente por
                cliente. El resultado suele verse así:
              </p>
              <ul className="space-y-3 mb-6">
                {problemas.map((p) => (
                  <li key={p.title} className="flex gap-3 text-lg text-gray-700 leading-relaxed">
                    <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-turquoise" />
                    <span>
                      <strong className="text-navy">{p.title}</strong> {p.text}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                El costo real no está en una sola nómina. Está en repetir el mismo proceso manual por cada empresa,
                cada periodo, todo el año. Y en el riesgo de una multa o un error de timbrado que termina afectando tu
                relación con el cliente.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Qué debe tener */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
              Qué debe tener un software de nómina en México si{" "}
              <span className="text-turquoise">administras múltiples empresas</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              No todos los sistemas están hechos para escalar. Estos son los criterios que separan una herramienta
              para una empresa de una plataforma para un despacho.
            </p>

            <div className="space-y-8 text-justify">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-3">
                  1. Varias empresas y razones sociales en una sola plataforma
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Lo primero es poder dar de alta a cada cliente como una empresa independiente dentro del mismo
                  sistema, con sus colaboradores, horarios y configuración propios. Así tu equipo trabaja con un solo
                  acceso y un solo flujo, sin saltar entre herramientas. Busca también carga masiva de colaboradores
                  con plantillas de Excel: cuando sumas un cliente nuevo, no deberías capturar a cada persona a mano.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-navy mb-3">2. Cálculo, timbrado y dispersión sin retrabajo</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  El corazón de cualquier{" "}
                  <Link href="/calcula_nomina" className="text-turquoise font-semibold hover:underline">
                    software de nómina
                  </Link>{" "}
                  es calcular percepciones y deducciones conforme a la normativa vigente. Para un despacho, además,
                  importa que el proceso sea el mismo para todos los clientes: calcular, timbrar y generar los layouts
                  bancarios para la dispersión. Suma puntos si incluye cálculos inversos y genera finiquitos y
                  liquidaciones en minutos, con la documentación completa.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-navy mb-3">
                  3. Conexión con el IDSE para movimientos ante el IMSS
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Si administras decenas de colaboradores de distintas empresas, entrar al portal del IMSS para cada
                  movimiento no escala. Un buen sistema envía altas, bajas y cambios de salario directo al{" "}
                  <a
                    href="https://idse.imss.gob.mx/imss/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-turquoise font-semibold hover:underline"
                  >
                    IDSE
                  </a>
                  , mantiene la sesión de forma segura y deja registro de cada movimiento para cualquier auditoría.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-navy mb-3">4. Incidencias y asistencia centralizadas</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Las incidencias son la principal fuente de errores en la nómina. Busca una plataforma donde faltas,
                  retardos, permisos y vacaciones se registren en un solo lugar y se integren directo al cálculo. Si
                  además los colaboradores de tus clientes pueden checar entrada y salida desde su celular, eliminas
                  la captura manual y la necesidad de un reloj checador físico en cada empresa.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-navy mb-3">5. Reportes por cliente para rendir cuentas</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Tus clientes esperan claridad: cuánto costó la nómina, quién faltó, qué cambió. Un software con{" "}
                  <Link href="/reportes_dina" className="text-turquoise font-semibold hover:underline">
                    reportes dinámicos
                  </Link>
                  , filtros y exportación en distintos formatos te permite entregar esa información en minutos y
                  convertirla en un servicio de valor, no en una tarea extra.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-navy mb-3">6. Implementación rápida y soporte real</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cambiar de sistema da miedo cuando tienes clientes que pagar cada semana o quincena. Pregunta cuánto
                  tarda la implementación, cuánto cuesta y qué tipo de soporte recibirás. Un proveedor que acompaña la
                  migración y responde cuando lo necesitas vale tanto como las funciones del sistema.
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Checklist */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy to-turquoise p-8 rounded-2xl text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Checklist rápido para evaluar un software de recursos humanos y nómina
              </h2>
              <p className="text-lg mb-6">Antes de decidir, revisa que la plataforma cumpla con esto:</p>
              <ul className="space-y-3 mb-6">
                {checklist.map((item) => (
                  <li key={item} className="flex gap-3 text-lg leading-relaxed">
                    <CheckSquare className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed mb-0">
                Si la herramienta que usas hoy no cumple con la mayoría, probablemente tu equipo está compensando con
                horas extra lo que el sistema no resuelve.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Cómo Nommy ayuda */}
        <ScrollAnimation>
          <section className="mb-16">
            <img
              src="/img2_bloggy_17_09_26.jpeg"
              alt="Contadora abrumada por hojas de Excel y carpetas de distintos clientes en su escritorio"
              className="w-full h-80 object-cover rounded-2xl shadow-xl mb-8"
            />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
              Cómo <span className="text-turquoise">Nommy</span> ayuda a despachos contables a escalar sin{" "}
              <span className="text-[#e73b4d]">multiplicar</span> el trabajo
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
              <Link href="/producto" className="text-turquoise font-semibold hover:underline">
                Nommy
              </Link>{" "}
              es una plataforma de recursos humanos y nómina hecha en México, en la que ya confían más de 7,500
              empresas. Para{" "}
              <a
                href="https://despachos.nommy.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-turquoise font-semibold hover:underline"
              >
                despachos contables
              </a>
              , su valor está en reunir en un solo lugar todo lo que hoy vive disperso:
            </p>
            <ul className="space-y-3 mb-6">
              {beneficios.map((b) => (
                <li key={b.title} className="flex gap-3 text-lg text-gray-700 leading-relaxed">
                  <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-turquoise" />
                  <span>
                    {b.title === "Conexión IDSE:" ? (
                      <Link href="/IDSE" className="text-navy font-bold hover:text-turquoise">
                        {b.title}
                      </Link>
                    ) : (
                      <strong className="text-navy">{b.title}</strong>
                    )}{" "}
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              El resultado: tu equipo deja de repetir procesos y puede atender más clientes con la misma estructura.
              La nómina deja de ser un cuello de botella y se convierte en un servicio que puedes escalar.
            </p>
          </section>
        </ScrollAnimation>

        {/* Preguntas frecuentes */}
        <ScrollAnimation>
          <section className="mb-16">
            <img
              src="/img3_bloggy-17_09_26.jpeg"
              alt="Plataforma en la nube conectando la nómina, asistencia y reportes de varias empresas"
              className="w-full h-80 object-cover rounded-2xl shadow-xl mb-8"
            />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="bg-navy/5 border border-navy/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-navy mb-2">{f.q}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Conclusión + CTA */}
        <ScrollAnimation>
          <div className="bg-gradient-to-br from-turquoise via-turquoise to-navy p-8 rounded-2xl text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Tu despacho puede atender más clientes sin trabajar más horas</h2>
            <p className="text-xl mb-6">
              Si hoy gestionas la nómina de varios clientes con herramientas separadas, el siguiente cliente que sumes
              también sumará trabajo manual. Con un software de nómina en México diseñado para escalar, cada cliente
              nuevo se integra al mismo flujo.
            </p>
            <p className="text-lg mb-6">
              Agenda una demo para despachos contables: escríbenos por WhatsApp al (33) 1767-5670.
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
