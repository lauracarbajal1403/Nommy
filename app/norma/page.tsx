import type { Metadata } from "next"
import NormaClient from "./NormaClient"
import WebPageJsonLd from "@/components/WebPageJsonLd"

const TITLE = "NOM-035: Evaluación de Riesgos Psicosociales"
const DESCRIPTION =
  "Aplica encuestas oficiales de NOM-035 a toda tu organización, analiza resultados y actúa para prevenir riesgos psicosociales, garantizando cumplimiento normativo con Nommy."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/norma",
  },
}

export default function Page() {
  return (
    <>
      <WebPageJsonLd name={TITLE} description={DESCRIPTION} url="/norma" />
      <NormaClient />
    </>
  )
}
