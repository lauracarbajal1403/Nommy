import type { Metadata } from "next"
import AboutClient from "./AboutClient"

export const metadata: Metadata = {
  title: "Nuestra Historia, Misión y Equipo detrás de Nommy",
  description:
    "Conoce la misión, visión, valores y al equipo detrás de Nommy, la plataforma que automatiza la nómina y los RRHH sin perder el lado humano de las empresas.",
  alternates: {
    canonical: "/about",
  },
}

export default function Page() {
  return <AboutClient />
}
