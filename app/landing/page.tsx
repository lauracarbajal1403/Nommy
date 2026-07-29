import type { Metadata } from "next"
import LandingClient from "./LandingClient"

export const metadata: Metadata = {
  title: "Contrata Nommy y Recibe 2 Meses Gratis",
  description:
    "Solicita una demo de Nommy, la plataforma de nómina y RRHH que ya usan más de 750 empresas en México, y activa 2 meses gratis al contratar.",
  alternates: {
    canonical: "/landing",
  },
}

export default function Page() {
  return <LandingClient />
}
