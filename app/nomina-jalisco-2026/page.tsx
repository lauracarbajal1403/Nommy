import type { Metadata } from "next"
import NominaJalisco2026Client from "./NominaJalisco2026Client"

export const metadata: Metadata = {
  title: "Nómina en Jalisco 2026: Ley de 40 Horas y Nuevo SAT",
  description:
    "Guía práctica para empresas en Jalisco: cómo la jornada de 40 horas, la vigilancia del SAT en nómina electrónica y las prestaciones locales impactan tu nómina en 2026.",
  alternates: {
    canonical: "/nomina-jalisco-2026",
  },
}

export default function Page() {
  return <NominaJalisco2026Client />
}
