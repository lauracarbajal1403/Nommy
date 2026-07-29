import type { Metadata } from "next"
import SectoresClient from "./SectoresClient"

export const metadata: Metadata = {
  title: "Sectores más afectados por la jornada de 40 horas",
  description:
    "Retail, manufactura, hospitalidad, logística, seguridad y salud son los sectores con mayor impacto ante la reducción a 40 horas semanales en México. Descubre cómo prepararte.",
  alternates: {
    canonical: "/sectores",
  },
}

export default function Page() {
  return <SectoresClient />
}
