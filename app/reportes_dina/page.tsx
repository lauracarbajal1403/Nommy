import type { Metadata } from "next"
import ReportesDinaClient from "./ReportesDinaClient"

export const metadata: Metadata = {
  title: "Reportes Dinámicos e Interactivos de Nómina",
  description:
    "Visualiza tu nómina y gestión laboral con tableros interactivos, filtros dinámicos y análisis en tiempo real. Exporta reportes para decisiones estratégicas más rápidas con Nommy.",
  alternates: {
    canonical: "/reportes_dina",
  },
}

export default function Page() {
  return <ReportesDinaClient />
}
