import type { Metadata } from "next"
import LandingClient from "./LandingClient"
import WebPageJsonLd from "@/components/WebPageJsonLd"

const TITLE = "Contrata Nommy y Recibe 2 Meses Gratis"
const DESCRIPTION =
  "Solicita una demo de Nommy, la plataforma de nómina y RRHH que ya usan más de 750 empresas en México, y activa 2 meses gratis al contratar."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/landing",
  },
}

export default function Page() {
  return (
    <>
      <WebPageJsonLd name={TITLE} description={DESCRIPTION} url="/landing" />
      <LandingClient />
    </>
  )
}
