import type { Metadata } from "next"
import InteligenciaClient from "./InteligenciaClient"

export const metadata: Metadata = {
  title: "Reclutamiento con Inteligencia Artificial para RRHH",
  description:
    "Automatiza el reclutamiento con IA: diseño de perfiles de puesto, calificación inteligente de candidatos y decisiones respaldadas por datos objetivos, con Nommy.",
  alternates: {
    canonical: "/inteligencia",
  },
}

export default function Page() {
  return <InteligenciaClient />
}
