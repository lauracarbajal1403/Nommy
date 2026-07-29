import type { Metadata } from "next"
import PrimaClient from "./PrimaClient"

export const metadata: Metadata = {
  title: "Prima de Riesgo: ¿Cuándo Sanciona el IMSS a tu Empresa?",
  description:
    "Conoce las 4 situaciones que pueden generar sanciones del IMSS por la prima de riesgo, cómo evitarlas y cómo Nommy centraliza tu cumplimiento patronal.",
  alternates: {
    canonical: "/prima",
  },
}

export default function Page() {
  return <PrimaClient />
}
