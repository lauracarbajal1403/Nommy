import type { Metadata } from "next"
import InteligenciaClient from "./InteligenciaClient"
import WebPageJsonLd from "@/components/WebPageJsonLd"

const TITLE = "Reclutamiento con Inteligencia Artificial para RRHH"
const DESCRIPTION =
  "Automatiza el reclutamiento con IA: diseño de perfiles de puesto, calificación inteligente de candidatos y decisiones respaldadas por datos objetivos, con Nommy."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/inteligencia",
  },
}

export default function Page() {
  return (
    <>
      <WebPageJsonLd name={TITLE} description={DESCRIPTION} url="/inteligencia" />
      <InteligenciaClient />
    </>
  )
}
