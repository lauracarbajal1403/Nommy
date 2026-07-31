import type { Metadata } from "next"
import SectoresClient from "./SectoresClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Sectores más afectados por la jornada de 40 horas"
const DESCRIPTION =
  "Retail, manufactura, hospitalidad, logística, seguridad y salud son los sectores con mayor impacto ante la reducción a 40 horas semanales en México. Descubre cómo prepararte."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/sectores",
  },
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        url="/sectores"
        image="/reforma3.PNG"
        datePublished="2026-06-15"
      />
      <SectoresClient />
    </>
  )
}
