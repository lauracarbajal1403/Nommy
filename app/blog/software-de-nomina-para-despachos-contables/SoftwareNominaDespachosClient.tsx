"use client"
import { Calendar, Clock, ArrowLeft, Calculator, User, MessageCircle, Square } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

const monstruos = [
  {
    title: "1. El fantasma de las incidencias perdidas",
    text: "Faltas, retardos, permisos y vacaciones que nadie reportó a tiempo. Aparecen después del cálculo, cuando la nómina ya está lista, y te obligan a recalcular. Este fantasma vive en los chats, en los correos reenviados y en la libreta del supervisor de tu cliente.",
    label: "Cómo ahuyentarlo:",
    fix: "centraliza las incidencias en un solo lugar y haz que se integren directo al cálculo. Si los colaboradores de tus clientes checan entrada y salida desde su celular, la asistencia llega en tiempo real y deja de depender de que alguien se acuerde de mandarla.",
  },
  {
    title: "2. El zombi del trabajo repetitivo",
    text: "Capturar colaboradores uno por uno, copiar fórmulas de un archivo a otro, repetir el mismo proceso para cada razón social. El zombi no es peligroso por sí solo; lo es porque se multiplica con cada cliente que sumas.",
    label: "Cómo ahuyentarlo:",
    fix: "busca un flujo que sea igual para todos tus clientes y que permita la carga masiva de colaboradores con plantillas de Excel. Así, integrar a un cliente nuevo es cuestión de configurar, no de capturar.",
  },
  {
    title: "3. La pesadilla del portal del IMSS",
    text: "Entrar, iniciar sesión, capturar un alta, salir y repetir con la siguiente empresa. Las altas, bajas y modificaciones de salario son obligatorias y tienen plazos, así que no hay forma de esquivarlas.",
    label: "Cómo ahuyentarla:",
    fix: "una conexión directa con el IDSE te permite enviar los movimientos afiliatorios desde tu sistema de nómina, sin capturarlos de nuevo en el portal, y deja registro de cada uno para cualquier revisión.",
  },
  {
    title: "4. El vampiro del cierre a contrarreloj",
    text: "Este monstruo se alimenta de tus noches. Calcular, revisar, timbrar y preparar la dispersión de varios clientes el mismo día drena a cualquier equipo, y el cansancio es la puerta de entrada a los errores.",
    label: "Cómo ahuyentarlo:",
    fix: "automatiza el cálculo de percepciones y deducciones conforme a la normativa vigente, timbra desde la misma plataforma y genera los layouts bancarios listos para dispersar. Menos pasos manuales significa menos horas y menos errores.",
  },
  {
    title: "5. La maldición del finiquito de último minuto",
    text: "“Necesito el finiquito para hoy”. Una frase que cualquier nominista ha escuchado con escalofríos. Calcularlo a mano, armar los documentos y revisar que todo esté conforme a la ley mientras el resto de la nómina espera.",
    label: "Cómo romperla:",
    fix: "un sistema que genere finiquitos y liquidaciones en minutos, con la documentación completa, convierte una emergencia en un trámite más.",
  },
  {
    title: "6. El monstruo del reporte armado a mano",
    text: "Tus clientes quieren saber cuánto les costó la nómina, quién faltó y qué cambió. Si cada reporte implica copiar, pegar y cuadrar datos, este monstruo te roba horas que podrías dedicar a otro cliente.",
    label: "Cómo ahuyentarlo:",
    fix: "usa reportes dinámicos con filtros y exportación en distintos formatos. Así entregas información clara en minutos y la conviertes en un servicio de valor para tu cliente.",
  },
]

const tabla = [
  {
    monstruo: "Incidencias perdidas",
    solucion: "Incidencias centralizadas e integradas al cálculo, con checador desde el celular y asistencia en tiempo real",
  },
  {
    monstruo: "Trabajo repetitivo",
    solucion: "Flujo de 3 pasos por cliente: crear la empresa, agregar colaboradores (manual o con Excel) y timbrar",
  },
  {
    monstruo: "Portal del IMSS",
    solucion: "Conexión IDSE: altas, bajas y cambios de salario con un clic, con sesión segura y registro para auditorías",
  },
  {
    monstruo: "Cierre a contrarreloj",
    solucion: "Cálculo apegado a la normativa, cálculos inversos, timbrado y layouts bancarios listos para dispersión",
  },
  {
    monstruo: "Finiquito de último minuto",
    solucion: "Finiquitos y liquidaciones generados en minutos, con documentos completos conforme a la ley",
  },
  {
    monstruo: "Reporte armado a mano",
    solucion: "Reportes dinámicos con filtros, vistas personalizadas y exportación en distintos formatos",
  },
]

const test = [
  "Recalculas nóminas porque las incidencias llegaron tarde",
  "Capturas colaboradores uno por uno cuando entra un cliente nuevo",
  "Entras al portal del IMSS para cada movimiento de cada empresa",
  "Tu equipo se queda tarde en cada día de pago",
  "Un finiquito urgente detiene el resto de la nómina",
  "Armas los reportes de tus clientes copiando y pegando",
]

const faqs = [
  {
    q: "¿Qué es un software de nómina para despachos contables?",
    a: "Es una plataforma que permite calcular, timbrar y dispersar la nómina de varios clientes, además de gestionar incidencias, asistencia y movimientos ante el IMSS desde un solo lugar.",
  },
  {
    q: "¿Cómo puede un nominista atender más clientes sin trabajar más horas?",
    a: "Automatizando las tareas repetitivas: captura de incidencias, movimientos al IMSS, cálculo, timbrado y reportes. El tiempo que se libera se puede dedicar a revisar y a nuevos clientes.",
  },
  {
    q: "¿Cuánto tarda implementar Nommy en un despacho contable?",
    a: "La implementación toma menos de 30 días y no tiene costo.",
  },
  {
    q: "¿Nommy se conecta con el IMSS?",
    a: "Sí. Nommy se conecta con el IDSE para enviar altas, bajas y cambios de salario sin entrar manualmente al portal.",
  },
]

export default function SoftwareNominaDespachosClient() {
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

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Header */}
        <ScrollAnimation>
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-turquoise/10 text-turquoise px-3 py-1.5 rounded-full font-medium">
                <Calculator className="w-4 h-4" />
                Nómina | Despachos contables
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                30 Octubre 2026
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
              No hagas de tu despacho contable <span className="text-[#e73b4d]">una empresa de terror</span>: cómo
              atender más clientes de nómina en <span className="text-turquoise">menos tiempo</span>
            </h1>

            <img
              src="/despachos-terror-hero.jpg"
              alt="Nominista de un despacho contable revisando la nómina de varios clientes en un software de nómina, con decoración de temporada de Halloween"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </ScrollAnimation>

        {/* Introducción */}
        <ScrollAnimation>
          <div className="prose prose-lg max-w-none mb-12 text-justify">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Son las 11 de la noche de un día de pago. La luz del monitor es lo único encendido en la oficina, el
              WhatsApp no deja de sonar y todavía faltan tres clientes por timbrar. Si esta escena te resulta
              familiar, no estás viendo una película de terror: estás viviendo un cierre de nómina en un despacho
              contable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              La buena noticia es que no tiene que ser así. Un <strong>software de nómina para despachos contables</strong>{" "}
              puede quitarte de encima el trabajo repetitivo para que, como nominista, dediques tu tiempo a lo que sí
              requiere tu criterio y puedas atender más clientes sin vivir en modo pesadilla.
            </p>
          </div>
        </ScrollAnimation>

        {/* Casa embrujada */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
              ¿Tu despacho se siente como una <span className="text-[#e73b4d]">casa embrujada</span> en cada cierre de
              nómina?
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-justify mb-8">
              <p>
                La mayoría de los despachos no eligieron trabajar así. La operación se fue armando cliente por
                cliente: un Excel para uno, un acceso distinto para otro, incidencias que llegan por correo, por
                mensaje o en una hoja escaneada. Funciona mientras la cartera es pequeña.
              </p>
              <p>
                El problema aparece cuando creces. Cada cliente nuevo suma el mismo trabajo manual, y el equipo
                termina compensando con horas extra lo que los procesos no resuelven. Ahí es cuando el despacho
                empieza a sentirse como una casa embrujada: ruidos por todos lados, cosas que desaparecen y nadie
                quiere quedarse solo en la oficina el día de cierre.
              </p>
            </div>
            <img
              src="/despachos-terror-caos.jpg"
              alt="Contador de un despacho abrumado entre carpetas, hojas de Excel y notas adhesivas la noche de un cierre de nómina"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </section>
        </ScrollAnimation>

        {/* 6 monstruos */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-8">
              Los 6 <span className="text-turquoise">monstruos</span> que asustan a todo nominista
            </h2>
            <div className="space-y-8 text-justify">
              {monstruos.map((m) => (
                <div key={m.title}>
                  <h3 className="text-2xl font-bold text-navy mb-3">{m.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-3">{m.text}</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-navy">{m.label}</strong> {m.fix}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Exorciza */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy/5 to-turquoise/5 p-8 rounded-2xl border border-navy/10">
              <h2 className="text-3xl font-bold text-navy mb-6">
                Cómo un software de nómina para despachos contables{" "}
                <span className="text-turquoise">exorciza tu operación</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-justify">
                <p>
                  Todos los monstruos tienen algo en común: viven en procesos manuales, dispersos y repetidos por cada
                  cliente. Por eso el exorcismo no consiste en trabajar más rápido, sino en dejar de hacer a mano lo
                  que un sistema puede hacer por ti.
                </p>
                <p>
                  Un buen software de nómina para despachos contables reúne en un solo lugar el cálculo, el timbrado,
                  la dispersión, las incidencias, la asistencia y los movimientos ante el IMSS. El resultado es que el
                  tiempo de tu equipo deja de irse en capturar y corregir, y se dedica a revisar, asesorar y atender a
                  más clientes.
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Nommy aliado */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
              <span className="text-turquoise">Nommy</span>, el aliado del nominista para atender más clientes en
              menos tiempo
            </h2>
            <img
              src="/despachos-terror-nommy.jpg"
              alt="Dos noministas de un despacho contable revisando un tablero de nómina en un software de nómina"
              className="w-full h-80 object-cover rounded-2xl shadow-xl mb-8"
            />
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
              <Link href="/producto" className="text-turquoise font-semibold hover:underline">
                Nommy
              </Link>{" "}
              es una plataforma de recursos humanos y nómina hecha en México, en la que confían más de 7,500 empresas.
              Para un{" "}
              <a
                href="https://despachos.nommy.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-turquoise font-semibold hover:underline"
              >
                despacho contable
              </a>
              , su valor está en convertir cada uno de esos monstruos en un proceso controlado:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-navy/10 mb-6">
              <table className="w-full text-left text-lg">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Monstruo</th>
                    <th className="px-4 py-3 font-semibold">Cómo lo resuelve Nommy</th>
                  </tr>
                </thead>
                <tbody>
                  {tabla.map((row, i) => (
                    <tr key={row.monstruo} className={i % 2 === 0 ? "bg-white" : "bg-navy/5"}>
                      <td className="px-4 py-3 font-semibold text-navy align-top">{row.monstruo}</td>
                      <td className="px-4 py-3 text-gray-700 align-top">
                        {row.monstruo === "Portal del IMSS" ? (
                          <>
                            <Link href="/IDSE" className="text-turquoise font-semibold hover:underline">
                              Conexión IDSE
                            </Link>
                            : altas, bajas y cambios de salario con un clic, con sesión segura y registro para
                            auditorías
                          </>
                        ) : (
                          row.solucion
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-justify">
              Además, la implementación toma menos de 30 días, no tiene costo de implementación y cuentas con soporte
              24/7. Es decir: no tienes que detener la operación de tus clientes para cambiar de sistema.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Con Nommy, tu trabajo como nominista se vuelve más sencillo, y cada cliente nuevo se integra al mismo
              flujo en lugar de sumar otro monstruo a la casa. Conoce más sobre el{" "}
              <Link href="/calcula_nomina" className="text-turquoise font-semibold hover:underline">
                módulo de nómina
              </Link>
              , el{" "}
              <Link href="/control_hora" className="text-turquoise font-semibold hover:underline">
                control de asistencia
              </Link>{" "}
              y la{" "}
              <a
                href="https://idse.imss.gob.mx/imss/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-turquoise font-semibold hover:underline"
              >
                fuente oficial del IDSE
              </a>
              . Si gestionas varios clientes, también te puede servir{" "}
              <Link
                href="/blog/software-de-nomina-en-mexico-varios-clientes"
                className="text-turquoise font-semibold hover:underline"
              >
                qué buscar en un software de recursos humanos y nómina
              </Link>
              .
            </p>
          </section>
        </ScrollAnimation>

        {/* Test */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy to-turquoise p-8 rounded-2xl text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Test rápido: ¿tu despacho es una empresa de terror?</h2>
              <p className="text-lg mb-6">Marca las situaciones que vives con frecuencia:</p>
              <ul className="space-y-3 mb-6">
                {test.map((item) => (
                  <li key={item} className="flex gap-3 text-lg leading-relaxed">
                    <Square className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed mb-0">
                Si marcaste tres o más, tu despacho tiene visitas no deseadas. La buena noticia: todas tienen
                solución.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Preguntas frecuentes */}
        <ScrollAnimation>
          <section className="mb-16">
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
            <h2 className="text-3xl font-bold mb-4">Este cierre de nómina, que el único susto sea el de Halloween</h2>
            <p className="text-xl mb-6">
              Los monstruos de la nómina no desaparecen solos: se quedan mientras los procesos sigan siendo manuales.
              Con un software de nómina para despachos contables como Nommy, tu equipo deja de trabajar a contrarreloj
              y tu despacho puede crecer sin convertirse en una empresa de terror.
            </p>
            <p className="text-lg mb-6">
              Agenda una demo de Nommy para despachos contables y descubre cómo atender más clientes en menos tiempo.
              Escríbenos a{" "}
              <a href="mailto:ventas@nommy.mx" className="underline font-semibold">
                ventas@nommy.mx
              </a>{" "}
              o por WhatsApp al (33) 1517-9175.
            </p>
            <a
              href="https://wa.me/523315179175"
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
