import type { Metadata } from "next"
import ReportesDinaClient from "./ReportesDinaClient"
import WebPageJsonLd from "@/components/WebPageJsonLd"

const TITLE = "Reportes Dinámicos e Interactivos de Nómina"
const DESCRIPTION =
  "Visualiza tu nómina y gestión laboral con tableros interactivos, filtros dinámicos y análisis en tiempo real. Exporta reportes para decisiones estratégicas más rápidas con Nommy."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/reportes_dina",
  },
}

export default function Page() {
  return (
    <>
      <WebPageJsonLd name={TITLE} description={DESCRIPTION} url="/reportes_dina" />
      <ReportesDinaClient />
    </>
  )
}
