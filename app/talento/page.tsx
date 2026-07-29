import type { Metadata } from "next"
import TalentoClient from "./TalentoClient"

export const metadata: Metadata = {
  title: "Retención de Talento: Beneficios y Prima de Riesgo IMSS",
  description:
    "Beneficios flexibles, Prima de Riesgo IMSS y el impacto fiscal: tres claves para retener talento y blindar el cumplimiento de nómina de tu empresa este 2026.",
  alternates: {
    canonical: "/talento",
  },
}

export default function Page() {
  return <TalentoClient />
}
