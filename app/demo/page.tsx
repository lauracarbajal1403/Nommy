import type { Metadata } from "next"
import DemoClient from "./DemoClient"
import WebPageJsonLd from "@/components/WebPageJsonLd"

const TITLE = "Solicita una Demo Gratuita y Personalizada de Nommy"
const DESCRIPTION =
  "Agenda una demostración gratuita y personalizada de Nommy: descubre cómo automatizar tu nómina, ahorrar tiempo y cumplir con el IMSS y el SAT sin errores."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/demo",
  },
}

export default function Page() {
  return (
    <>
      <WebPageJsonLd name={TITLE} description={DESCRIPTION} url="/demo" />
      <DemoClient />
    </>
  )
}
