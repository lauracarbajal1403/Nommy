import type { Metadata } from "next"
import DemoClient from "./DemoClient"

export const metadata: Metadata = {
  title: "Solicita una Demo Gratuita y Personalizada de Nommy",
  description:
    "Agenda una demostración gratuita y personalizada de Nommy: descubre cómo automatizar tu nómina, ahorrar tiempo y cumplir con el IMSS y el SAT sin errores.",
  alternates: {
    canonical: "/demo",
  },
}

export default function Page() {
  return <DemoClient />
}
