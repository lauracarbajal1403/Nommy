import type { Metadata } from "next"
import SoftwareNominaClientesClient from "./SoftwareNominaClientesClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Software de Nómina en México para Despachos | Nommy"
const HEADLINE = "Software de Recursos Humanos y Nómina en México: qué buscar si gestionas varios clientes a la vez"
const DESCRIPTION =
  "¿Gestionas la nómina de varios clientes? Descubre qué buscar en un software de recursos humanos y nómina para escalar sin multiplicar el trabajo."
const URL = "/blog/software-de-nomina-en-mexico-varios-clientes"
const IMAGE = "/Imag1_bloggy_17_09_26.jpeg"
const DATE_PUBLISHED = "2026-10-17"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "software de nómina en méxico",
    "software de recursos humanos y nómina",
    "nómina para despachos contables",
    "software de nómina multiempresa",
    "gestión de nómina de varios clientes",
    "timbrado de nómina",
    "IDSE IMSS",
    "razones sociales",
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
    tags: ["nommy", "nómina", "despachos contables", "software de nómina", "IDSE", "multiempresa"],
    images: [IMAGE],
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://www.nommy.mx/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.nommy.mx/resources",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Software de nómina en México para varios clientes",
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
      name: "¿Qué es un software de recursos humanos y nómina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es una plataforma que integra el cálculo y timbrado de la nómina con procesos de RH como asistencia, incidencias, movimientos ante el IMSS y reportes, para gestionarlos desde un solo lugar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo gestionar la nómina de varias empresas en un mismo software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, siempre que la plataforma permita dar de alta varias empresas o razones sociales. Es el criterio más importante para un despacho contable.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda en implementarse un software de nómina en México?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del proveedor. En Nommy, la implementación toma menos de 30 días y no tiene costo.",
      },
    },
    {
      "@type": "Question",
      name: "¿El software se conecta con el IMSS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los sistemas más completos se conectan con el IDSE para enviar altas, bajas y cambios de salario sin entrar manualmente al portal. Nommy incluye esta conexión.",
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
      <SoftwareNominaClientesClient />
    </>
  )
}
