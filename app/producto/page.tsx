import type { Metadata } from "next"
import ProductoClient from "./ProductoClient"

export const metadata: Metadata = {
  title: "Plataforma de Nómina, IDSE y Reclutamiento con IA de Nommy",
  description:
    "Calcula, timbra y dispersa nómina, conecta con el IMSS (IDSE), recluta con IA y cumple la NOM-035, todo en una sola plataforma Nommy para tu equipo de RRHH.",
  alternates: {
    canonical: "/producto",
  },
}

export default function Page() {
  return <ProductoClient />
}
