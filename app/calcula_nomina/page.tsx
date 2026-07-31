import type { Metadata } from "next"
import CalculaNominaClient from "./CalculaNominaClient"
import WebPageJsonLd from "@/components/WebPageJsonLd"

const TITLE = "Cálculo de Nómina Preciso, Rápido y Seguro"
const DESCRIPTION =
  "Calcula percepciones, deducciones, incidencias, finiquitos y liquidaciones sin errores. Nommy automatiza tu nómina con precisión, seguridad y cumplimiento normativo."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/calcula_nomina",
  },
}

export default function Page() {
  return (
    <>
      <WebPageJsonLd name={TITLE} description={DESCRIPTION} url="/calcula_nomina" />
      <CalculaNominaClient />
    </>
  )
}
