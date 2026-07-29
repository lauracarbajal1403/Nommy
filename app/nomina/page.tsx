import type { Metadata } from "next"
import NominaClient from "./NominaClient"

export const metadata: Metadata = {
  title: "Encuestas de Clima Laboral: la Herramienta Clave para RRHH",
  description:
    "El clima laboral es un KPI estratégico. Conoce qué miden estas encuestas, para qué sirven y cómo Nommy ayuda a tu equipo de RRHH a detectar riesgos con datos reales.",
  alternates: {
    canonical: "/nomina",
  },
}

export default function Page() {
  return <NominaClient />
}
