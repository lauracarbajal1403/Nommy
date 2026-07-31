import type { Metadata } from "next"
import PrimaClient from "./PrimaClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Prima de Riesgo: ¿Cuándo Sanciona el IMSS a tu Empresa?"
const DESCRIPTION =
  "Conoce las 4 situaciones que pueden generar sanciones del IMSS por la prima de riesgo, cómo evitarlas y cómo Nommy centraliza tu cumplimiento patronal."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/prima",
  },
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        url="/prima"
        image="/prima.jpeg"
        datePublished="2026-05-31"
      />
      <PrimaClient />
    </>
  )
}
