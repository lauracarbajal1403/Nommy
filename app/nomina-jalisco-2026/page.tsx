import type { Metadata } from "next"
import NominaJalisco2026Client from "./NominaJalisco2026Client"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Nómina en Jalisco 2026: Ley de 40 Horas y Nuevo SAT"
const DESCRIPTION =
  "Guía práctica para empresas en Jalisco: cómo la jornada de 40 horas, la vigilancia del SAT en nómina electrónica y las prestaciones locales impactan tu nómina en 2026."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nomina-jalisco-2026",
  },
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        url="/nomina-jalisco-2026"
        image="/bloggy.jpg"
        datePublished="2026-02-06"
      />
      <NominaJalisco2026Client />
    </>
  )
}
