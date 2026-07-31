import type { Metadata } from "next"
import TalentoClient from "./TalentoClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Retención de Talento: Beneficios y Prima de Riesgo IMSS"
const DESCRIPTION =
  "Beneficios flexibles, Prima de Riesgo IMSS y el impacto fiscal: tres claves para retener talento y blindar el cumplimiento de nómina de tu empresa este 2026."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/talento",
  },
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        url="/talento"
        image="/portada1.png"
        datePublished="2026-02-23"
      />
      <TalentoClient />
    </>
  )
}
