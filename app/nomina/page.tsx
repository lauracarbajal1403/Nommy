import type { Metadata } from "next"
import NominaClient from "./NominaClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Encuestas de Clima Laboral: la Herramienta Clave para RRHH"
const DESCRIPTION =
  "El clima laboral es un KPI estratégico. Conoce qué miden estas encuestas, para qué sirven y cómo Nommy ayuda a tu equipo de RRHH a detectar riesgos con datos reales."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nomina",
  },
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        url="/nomina"
        image="/portada.jpg"
        datePublished="2026-02-18"
      />
      <NominaClient />
    </>
  )
}
