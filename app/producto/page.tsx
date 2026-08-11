import type { Metadata } from "next"
import ProductoClient from "./ProductoClient"
import WebPageJsonLd from "@/components/WebPageJsonLd"

const TITLE = "Plataforma de Nómina, IDSE y Reclutamiento con IA | Nommy"
const DESCRIPTION =
  "Plataforma de nómina para empresas en México: calcula, timbra y dispersa; conecta con el IMSS vía IDSE; recluta con IA y cumple la NOM-035, todo en Nommy."

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
