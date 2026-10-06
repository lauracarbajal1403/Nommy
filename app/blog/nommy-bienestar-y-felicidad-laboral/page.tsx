import type { Metadata } from "next"
import BienestarClient from "./BienestarClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Cómo Nommy hace más feliz al equipo: ventajas para el ambiente laboral"
const DESCRIPTION =
  "Descubre cómo Nommy simplifica la nómina, la asistencia y el bienestar del equipo, y mejora la felicidad y el clima laboral de tus colaboradores."
const URL = "/blog/nommy-bienestar-y-felicidad-laboral"
const IMAGE = "/bienestar-laboral-1.jpg"
const DATE_PUBLISHED = "2026-09-18"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "bienestar laboral",
    "clima laboral",
    "felicidad en el trabajo",
    "software de nómina",
    "RH digital",
    "NOM-035",
    "nommy",
    "nómina",
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
    section: "Recursos Humanos",
    tags: ["nommy", "nómina", "bienestar laboral", "NOM-035", "clima laboral", "RH digital"],
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
      name: "Cómo Nommy hace más feliz al equipo",
      item: `https://www.nommy.mx${URL}`,
    },
  ],
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        url={URL}
        image={IMAGE}
        datePublished={DATE_PUBLISHED}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BienestarClient />
    </>
  )
}
