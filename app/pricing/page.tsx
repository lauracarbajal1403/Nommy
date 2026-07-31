import type { Metadata } from "next"
import PricingClient from "./PricingClient"
import WebPageJsonLd from "@/components/WebPageJsonLd"

const TITLE = "Planes y Precios de Nommy: Basic, Essential y Enterprise"
const DESCRIPTION =
  "Compara los planes Basic, Essential y Enterprise de Nommy: precios por colaborador, funciones y beneficios para elegir el plan ideal para tu empresa."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/pricing",
  },
}

export default function Page() {
  return (
    <>
      <WebPageJsonLd name={TITLE} description={DESCRIPTION} url="/pricing" />
      <PricingClient />
    </>
  )
}
