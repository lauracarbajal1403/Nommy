import type { Metadata } from "next"
import TerminosClient from "./TerminosClient"
import WebPageJsonLd from "@/components/WebPageJsonLd"

const TITLE = "Términos y Condiciones de Uso"
const DESCRIPTION =
  "Consulta los términos y condiciones de uso de Nommy: registro, precios, cancelaciones, devoluciones, garantías de nómina y propiedad intelectual de la plataforma."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/terminos",
  },
}

export default function Page() {
  return (
    <>
      <WebPageJsonLd name={TITLE} description={DESCRIPTION} url="/terminos" />
      <TerminosClient />
    </>
  )
}
