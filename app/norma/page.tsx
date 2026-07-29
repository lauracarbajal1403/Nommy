import type { Metadata } from "next"
import NormaClient from "./NormaClient"

export const metadata: Metadata = {
  title: "NOM-035: Evaluación de Riesgos Psicosociales",
  description:
    "Aplica encuestas oficiales de NOM-035 a toda tu organización, analiza resultados y actúa para prevenir riesgos psicosociales, garantizando cumplimiento normativo con Nommy.",
  alternates: {
    canonical: "/norma",
  },
}

export default function Page() {
  return <NormaClient />
}
