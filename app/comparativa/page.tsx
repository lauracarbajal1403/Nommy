import type { Metadata } from "next"
import ComparativaClient from "./ComparativaClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Comparativa de Software de Nómina en la Nube para Empresas en México"
const DESCRIPTION =
  "Compara las soluciones de nómina en la nube disponibles en México: seguridad, conexión con el IMSS, movilidad y soporte. Guía práctica para elegir la mejor."
const URL = "/comparativa"
const IMAGE = "/blog34.jpeg"
const DATE_PUBLISHED = "2026-09-15"

const FAQ = [
  {
    q: "¿Qué ventajas tiene un software de nómina en la nube frente a uno instalado en un servidor local?",
    a: "Un sistema en la nube se actualiza automáticamente ante cambios normativos, es accesible desde cualquier dispositivo con internet, no depende de un servidor físico ni de un archivo que solo una persona controla, y suele integrar de forma directa trámites como el IDSE del IMSS.",
  },
  {
    q: "¿La nómina en la nube es segura para una empresa mexicana?",
    a: "Sí, siempre que la plataforma valide y respalde cada incidencia que impacta el cálculo, cifre la información y mantenga sesiones seguras con instituciones como el IMSS. Nommy, por ejemplo, protege las credenciales del IDSE y registra cada movimiento para que quede disponible en caso de auditoría.",
  },
  {
    q: "¿Cuánto tiempo toma migrar la nómina de una empresa a la nube?",
    a: "Depende de la plataforma y del número de colaboradores. Con Nommy, el proceso de alta de empresa y carga de colaboradores (manual o masiva vía Excel) permite tener la nómina operando en menos de 30 días.",
  },
  {
    q: "¿Un sistema de nómina en la nube se conecta con el IMSS automáticamente?",
    a: "No todas las plataformas lo hacen. Las más completas, como Nommy, envían altas, bajas y cambios de salario directo al IDSE con un clic, sin que el usuario entre manualmente al portal del gobierno.",
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
      name: "Comparativa de software de nómina en la nube para empresas mexicanas",
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
      <ComparativaClient />
    </>
  )
}
