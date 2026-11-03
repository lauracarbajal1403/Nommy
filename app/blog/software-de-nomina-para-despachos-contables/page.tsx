import type { Metadata } from "next"
import SoftwareNominaDespachosClient from "./SoftwareNominaDespachosClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Software de nómina para despachos contables | Nommy"
const HEADLINE =
  "No hagas de tu despacho contable una empresa de terror: cómo atender más clientes de nómina en menos tiempo"
const DESCRIPTION =
  "¿Cierres de nómina de terror? Descubre cómo un software de nómina para despachos contables te ayuda a atender más clientes en menos tiempo."
const URL = "/blog/software-de-nomina-para-despachos-contables"
const IMAGE = "/despachos-terror-hero.jpg"
const DATE_PUBLISHED = "2026-10-30"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "software de nómina para despachos contables",
    "nómina para despachos contables",
    "nominista",
    "nómina de varios clientes",
    "timbrado de nómina",
    "incidencias de nómina",
    "IDSE IMSS",
    "finiquitos y liquidaciones",
    "cierre de nómina",
    "nommy",
  ],
  authors: [{ name: "Equipo Nommy" }],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "article",
    publishedTime: DATE_PUBLISHED,
    authors: ["Equipo Nommy"],
    section: "Nómina",
    tags: ["nommy", "nómina", "despachos contables", "nominista", "software de nómina", "IDSE"],
    images: [IMAGE],
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.nommy.mx/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.nommy.mx/resources" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Software de nómina para despachos contables",
      item: `https://www.nommy.mx${URL}`,
    },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es un software de nómina para despachos contables?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es una plataforma que permite calcular, timbrar y dispersar la nómina de varios clientes, además de gestionar incidencias, asistencia y movimientos ante el IMSS desde un solo lugar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puede un nominista atender más clientes sin trabajar más horas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Automatizando las tareas repetitivas: captura de incidencias, movimientos al IMSS, cálculo, timbrado y reportes. El tiempo que se libera se puede dedicar a revisar y a nuevos clientes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda implementar Nommy en un despacho contable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La implementación toma menos de 30 días y no tiene costo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Nommy se conecta con el IMSS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Nommy se conecta con el IDSE para enviar altas, bajas y cambios de salario sin entrar manualmente al portal.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={HEADLINE}
        description={DESCRIPTION}
        url={URL}
        image={IMAGE}
        datePublished={DATE_PUBLISHED}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SoftwareNominaDespachosClient />
    </>
  )
}
