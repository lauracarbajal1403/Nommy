import type { Metadata } from "next"
import CalculaNominaClient from "./CalculaNominaClient"

export const metadata: Metadata = {
  title: "Cálculo de Nómina Preciso, Rápido y Seguro",
  description:
    "Calcula percepciones, deducciones, incidencias, finiquitos y liquidaciones sin errores. Nommy automatiza tu nómina con precisión, seguridad y cumplimiento normativo.",
  alternates: {
    canonical: "/calcula_nomina",
  },
}

export default function Page() {
  return <CalculaNominaClient />
}
