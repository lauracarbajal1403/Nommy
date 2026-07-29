import type { Metadata } from "next"
import DesordenadaClient from "./DesordenadaClient"

export const metadata: Metadata = {
  title: "Nommy: el costo oculto de una nómina desordenada",
  description: "Errores de nómina erosionan la confianza y elevan la rotación: hasta 50% renunciaría. Descubre cómo Nommy pone orden en tu nómina y evita estos riesgos.",
  alternates: {
    canonical: "/desordenada",
  },
}

export default function Page() {
  return <DesordenadaClient />
}
