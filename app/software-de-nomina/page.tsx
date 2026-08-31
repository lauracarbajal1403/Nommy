import type { Metadata } from "next"
import SoftwareClient from "./softwareClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Mejor Software de Nómina para PyMEs en México (2026) | Nommy"
const DESCRIPTION =
  "Descubre qué debe tener el mejor software de nómina para pymes en México: cálculo automático, checador digital, IDSE y NOM-035. Guía completa + FAQ."
const URL = "/software-de-nomina"
const IMAGE = "/nommy-desktop-dashboard.png"
const DATE_PUBLISHED = "2026-08-31"

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

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
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
      name: "Mejor software de nómina para pymes en México",
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
        faq={FAQ}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SoftwareClient />
    </>
  )
}
