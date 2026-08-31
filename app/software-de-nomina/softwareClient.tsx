"use client"
import {
  Calendar,
  Clock,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  Building2,
  Calculator,
  ClipboardList,
  Smartphone,
  Link2,
  ShieldCheck,
  Wallet,
} from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

const FEATURES = [
  {
    icon: Calculator,
    title: "Cálculo automático apegado a la normativa vigente",
    description:
      "Percepciones, deducciones y cálculos inversos que determinan automáticamente lo que corresponde a cada colaborador, sin fórmulas manuales en Excel.",
  },
  {
    icon: ClipboardList,
    title: "Incidencias centralizadas",
    description:
      "Faltas, permisos, retardos y vacaciones registradas y automatizadas en un solo lugar, en lugar de reportes en papel o mensajes sueltos de WhatsApp.",
  },
  {
    icon: Smartphone,
    title: "Checador digital sin hardware",
    description:
      "Que los colaboradores puedan fichar entrada y salida desde su celular, sin invertir en relojes checadores físicos.",
  },
  {
    icon: Link2,
    title: "Conexión directa con el IDSE del IMSS",
    description:
      "Altas, bajas y cambios de salario enviados con un clic, sin entrar manualmente al portal del gobierno ni reingresar credenciales cada vez.",
  },
  {
    icon: ShieldCheck,
    title: "Apoyo al cumplimiento de la NOM-035",
    description:
      "Encuestas oficiales y análisis de riesgos psicosociales integrados, no como un trámite aparte.",
  },
  {
    icon: Wallet,
    title: "Costo y tiempo de implementación accesibles",
    description:
      "Para una pyme, el costo de arranque y la curva de aprendizaje del equipo son tan importantes como las funciones del sistema.",
  },
]

const QUESTIONS_ELECCION = [
  "¿El cálculo de nómina se actualiza automáticamente con los cambios en la ley?",
  "¿La herramienta se conecta directamente con el IMSS o solo genera reportes que hay que subir manualmente?",
  "¿Los colaboradores tienen una app propia para consultar sus incidencias, o todo pasa por RH?",
  "¿Cuánto cuesta implementarla y cuánto tiempo toma tenerla funcionando?",
]

const FAQ = [
  {
    q: "¿Cuál es el mejor software de nómina para una pyme en México?",
    a: "El mejor software de nómina para una pyme es aquel que combina cálculo automático apegado a la ley, conexión directa con el IMSS a través del IDSE, checador digital sin necesidad de hardware, y un costo y tiempo de implementación accesibles. Nommy reúne estas características en una sola plataforma, con implementación en menos de 30 días y $0 de costo de implementación.",
  },
  {
    q: "¿Cuánto cuesta implementar un software de nómina en una pyme?",
    a: "El costo varía según el proveedor y el número de colaboradores. Algunas plataformas cobran cuotas de implementación adicionales al costo mensual; Nommy, por ejemplo, tiene $0 de costo de implementación para reducir la barrera de entrada de las pymes.",
  },
  {
    q: "¿El software de nómina se conecta directamente con el IMSS?",
    a: "Depende de la plataforma. Las soluciones más completas, como Nommy, envían altas, bajas y cambios de salario directo al IDSE del IMSS con un clic, sin que el usuario tenga que entrar manualmente al portal del gobierno.",
  },
  {
    q: "¿Un software de nómina ayuda a cumplir con la NOM-035?",
    a: "Sí, si la plataforma lo integra. Nommy incluye encuestas oficiales y estandarizadas, además de un análisis de resultados con guías de acción concretas para identificar y atender factores de riesgo psicosocial.",
  },
]

export default function SoftwareClient() {
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
                Nómina y RH
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                31 Agosto 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                5 min de lectura
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              El mejor software de nómina para pequeñas y medianas empresas en México
            </h1>

            <img
              src="/blog32.jpeg"
              alt="Dueña de pyme mexicana revisando el cálculo de nómina de su equipo en una laptop, usando un software de nómina en la nube"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </ScrollAnimation>

        {/* Introducción */}
        <ScrollAnimation>
          <div className="prose prose-lg max-w-none mb-12 text-justify">
            <p className="text-lg text-gray-700 leading-relaxed">
              Elegir el software de nómina adecuado es una de las decisiones que más tiempo, dinero y dolores de
              cabeza puede ahorrarle a una pyme mexicana. Entre el cálculo de percepciones y deducciones, el timbrado
              fiscal, los movimientos ante el IMSS y el cumplimiento de normas como la NOM-035, administrar la
              nómina a mano o con hojas de cálculo se vuelve un riesgo constante de errores, multas y horas
              perdidas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              En este blog repasamos qué características debe tener el mejor software de nómina para pequeñas y
              medianas empresas en México, cómo evaluarlo antes de contratarlo, y por qué más de 7,500 empresas
              mexicanas ya delegan su nómina en una plataforma como Nommy.
            </p>
          </div>
        </ScrollAnimation>

        {/* Por qué una pyme necesita un software especializado */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy/5 to-turquoise/5 p-8 rounded-2xl border border-navy/10">
              <h2 className="text-3xl font-bold text-navy mb-6">
                ¿Por qué una pyme necesita un software de nómina especializado?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                En una empresa pequeña o mediana, el área de RH suele ser un equipo reducido —a veces una sola
                persona— que además de la nómina atiende reclutamiento, incidencias, clima laboral y cumplimiento
                normativo. Cualquier error en el cálculo de nómina, un movimiento no reportado a tiempo al IMSS o
                una multa por incumplimiento de la NOM-035 tiene un impacto directo y desproporcionado en una
                organización de este tamaño.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Un software de nómina especializado no solo automatiza cálculos: centraliza incidencias, conecta
                directamente con trámites gubernamentales y libera al equipo de RH de tareas administrativas
                repetitivas para que pueda enfocarse en las personas.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* 6 características */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 text-center">
              6 características que debe tener el mejor software de nómina para pymes en México
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              No todas las soluciones de nómina están pensadas para la realidad de una pyme mexicana. Estos son los
              criterios que marcan la diferencia:
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white border-2 border-navy/10 rounded-2xl p-6 shadow-lg hover:border-turquoise transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-turquoise/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-turquoise" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Cómo elegir */}
        <ScrollAnimation>
          <section className="mb-16">
            <div className="bg-gradient-to-br from-navy to-turquoise p-8 rounded-2xl text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                Cómo elegir entre las opciones disponibles en México
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Antes de contratar cualquier plataforma, vale la pena hacerse cuatro preguntas:
              </p>
              <ul className="space-y-3 mb-6">
                {QUESTIONS_ELECCION.map((question) => (
                  <li key={question} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="leading-relaxed">{question}</span>
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed mb-0">
                Estas preguntas filtran rápido entre un sistema genérico de contabilidad adaptado a nómina y una
                plataforma diseñada específicamente para la gestión de RH en empresas mexicanas.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Nommy */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
              Nommy: una plataforma pensada para pymes mexicanas
            </h2>
            <div className="prose prose-lg max-w-none text-justify mb-10">
              <p className="text-lg text-gray-700 leading-relaxed">
                <Link href="/producto" className="text-turquoise font-semibold hover:underline">
                  Nommy
                </Link>{" "}
                es una suite de RRHH 360° con sede en Guadalajara, en la que más de 7,500 empresas en México ya
                confían el cálculo de su nómina. Además del cálculo automatizado, el timbrado y la dispersión,
                Nommy integra en una sola app el checador digital desde el celular, la conexión directa con el
                IDSE, el cumplimiento de la NOM-035, reclutamiento asistido con IA y reportes dinámicos en tiempo
                real.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Para una pyme, dos datos son especialmente relevantes: la implementación toma menos de 30 días y
                tiene un{" "}
                <Link href="/pricing" className="text-turquoise font-semibold hover:underline">
                  costo de implementación de $0
                </Link>
                , con soporte disponible 24/7.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-navy/10">
              <div className="text-6xl text-turquoise mb-4">&ldquo;</div>
              <blockquote className="text-xl text-gray-700 leading-relaxed mb-6">
                Desde que implementamos la App Móvil con el reloj digital, la gestión de incidencias de nuestros
                colaboradores se ha vuelto mucho más sencilla y precisa. Antes era complicado dar seguimiento a
                retrasos, permisos o ausencias; hoy todo se registra automáticamente y en tiempo real.
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/portada-12.jpeg"
                    alt="La Moresca logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-navy">Equipo de RH de La Moresca</p>
                  <p className="text-sm text-gray-500">Cliente Nommy</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* FAQ */}
        <ScrollAnimation>
          <section className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-8 text-center">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {FAQ.map((item) => (
                <div key={item.q} className="bg-navy/5 border border-navy/10 rounded-2xl p-6">
                  <h3 className="flex items-start gap-3 text-lg font-bold text-navy mb-2">
                    <HelpCircle className="w-5 h-5 text-turquoise flex-shrink-0 mt-1" />
                    {item.q}
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Conclusión + CTA */}
        <ScrollAnimation>
          <div className="bg-gradient-to-br from-turquoise via-turquoise to-navy p-8 rounded-2xl text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Conoce Nommy</h3>
            <p className="text-xl mb-6">
              Para una pyme mexicana, el mejor software de nómina no es necesariamente el que tiene más funciones,
              sino el que resuelve de forma directa el cálculo, las incidencias, el IMSS y el cumplimiento
              normativo, con una implementación rápida y accesible. Conoce a detalle cómo funciona Nommy y calcula
              el ahorro potencial para tu equipo de RH.
            </p>
            <Link
              href="/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e73b4d] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              ¡Demo Gratis!
            </Link>
          </div>
        </ScrollAnimation>
      </article>
    </div>
  )
}
