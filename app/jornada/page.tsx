import type { Metadata } from "next"
import JornadaClient from "./JornadaClient"

export const metadata: Metadata = {
  title: "Jornada de 40 Horas: Cómo Preparar tu Empresa en RRHH",
  description:
    "La reducción a 40 horas semanales exige nuevos controles en nómina y asistencia. Descubre el impacto para RRHH y cómo Nommy automatiza el cumplimiento.",
  alternates: {
    canonical: "/jornada",
  },
}

export default function Page() {
  return <JornadaClient />
}
