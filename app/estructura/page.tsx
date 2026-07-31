import type { Metadata } from "next"
import EstructuraClient from "./EstructuraClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Estructura Organizacional: Cómo Ordenar tu Empresa"
const DESCRIPTION =
  "Descubre qué es una estructura organizacional, sus elementos clave y cómo Nommy ayuda a gestionar colaboradores, asistencia y expedientes para crecer con orden."

const FAQ = [
  {
    q: "¿Qué es una estructura organizacional?",
    a: "Es el modelo que define cómo se distribuyen las responsabilidades, la autoridad y la comunicación dentro de una empresa para mejorar la coordinación y el funcionamiento de los equipos.",
  },
  {
    q: "¿Por qué es importante una estructura organizacional?",
    a: "Porque ayuda a que cada colaborador conozca su función, mejora la comunicación interna, facilita la toma de decisiones y permite un crecimiento organizacional más eficiente.",
  },
  {
    q: "¿Qué problemas puede causar una mala estructura organizacional?",
    a: "Puede generar duplicidad de funciones, falta de comunicación, retrasos en las decisiones, baja productividad y dificultades para gestionar el talento.",
  },
  {
    q: "¿Cómo mejorar la estructura organizacional de una empresa?",
    a: "Es recomendable definir claramente los puestos, documentar responsabilidades, establecer procesos de comunicación y apoyarse en herramientas tecnológicas que centralicen la gestión del personal.",
  },
  {
    q: "¿Cómo puede ayudar Nommy?",
    a: "Nommy permite administrar colaboradores, asistencia, incidencias, vacaciones, expedientes digitales y comunicación interna desde una sola plataforma, facilitando una gestión de Recursos Humanos más organizada, eficiente y estratégica.",
  },
]

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/estructura",
  },
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        url="/estructura"
        image="/nuevoblog.jpeg"
        datePublished="2026-07-15"
        faq={FAQ}
      />
      <EstructuraClient />
    </>
  )
}
