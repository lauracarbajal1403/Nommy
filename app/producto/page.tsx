import type { Metadata } from "next"
import ProductoClient from "./ProductoClient"
import WebPageJsonLd from "@/components/WebPageJsonLd"

const TITLE = "Plataforma de Nómina, IDSE y Reclutamiento con IA de Nommy"
const DESCRIPTION =
  "Calcula, timbra y dispersa nómina, conecta con el IMSS (IDSE), recluta con IA y cumple la NOM-035, todo en una sola plataforma Nommy para tu equipo de RRHH."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/producto",
  },
}

export default function Page() {
  return (
    <>
      <WebPageJsonLd name={TITLE} description={DESCRIPTION} url="/producto" />
      <ProductoClient />
    </>
  )
}
