import type { Metadata } from "next"
import ProdClient from "./ProdClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Aspectos clave para fortalecer tu gestión de nómina en 2026"
const DESCRIPTION =
  "Salario mínimo, jornada de 40 horas, prestaciones y la RMF 2026: los cambios laborales y fiscales que impactarán tu nómina este año, explicados por Nommy."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/prod",
  },
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        url="/prod"
        image="/portada.png"
        datePublished="2026-01-06"
      />
      <ProdClient />
    </>
  )
}
