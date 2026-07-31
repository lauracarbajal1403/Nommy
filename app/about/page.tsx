import type { Metadata } from "next"
import AboutClient from "./AboutClient"
import WebPageJsonLd from "@/components/WebPageJsonLd"

const TITLE = "Nuestra Historia, Misión y Equipo detrás de Nommy"
const DESCRIPTION =
  "Conoce la misión, visión, valores y al equipo detrás de Nommy, la plataforma que automatiza la nómina y los RRHH sin perder el lado humano de las empresas."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/about",
  },
}

export default function Page() {
  return (
    <>
      <WebPageJsonLd name={TITLE} description={DESCRIPTION} url="/about" />
      <AboutClient />
    </>
  )
}
