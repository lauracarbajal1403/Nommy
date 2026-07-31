import type { Metadata } from "next"
import JornadaClient from "./JornadaClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Jornada de 40 Horas: Cómo Preparar tu Empresa en RRHH"
const DESCRIPTION =
  "La reducción a 40 horas semanales exige nuevos controles en nómina y asistencia. Descubre el impacto para RRHH y cómo Nommy automatiza el cumplimiento."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/jornada",
  },
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        url="/jornada"
        image="/reforma1.PNG"
        datePublished="2026-05-15"
      />
      <JornadaClient />
    </>
  )
}
