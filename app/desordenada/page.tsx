import type { Metadata } from "next"
import DesordenadaClient from "./DesordenadaClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Nommy: el costo oculto de una nómina desordenada"
const DESCRIPTION =
  "Errores de nómina erosionan la confianza y elevan la rotación: hasta 50% renunciaría. Descubre cómo Nommy pone orden en tu nómina y evita estos riesgos."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/desordenada",
  },
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        url="/desordenada"
        image="/desordenada.png"
        datePublished="2026-03-31"
      />
      <DesordenadaClient />
    </>
  )
}
