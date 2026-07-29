import type { Metadata } from "next"
import TerminosClient from "./TerminosClient"

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso",
  description:
    "Consulta los términos y condiciones de uso de Nommy: registro, precios, cancelaciones, devoluciones, garantías de nómina y propiedad intelectual de la plataforma.",
  alternates: {
    canonical: "/terminos",
  },
}

export default function Page() {
  return <TerminosClient />
}
