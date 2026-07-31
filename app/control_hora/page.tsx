import type { Metadata } from "next"
import ControlHoraClient from "./ControlHoraClient"
import WebPageJsonLd from "@/components/WebPageJsonLd"

const TITLE = "Control de Horarios y Asistencia en Tiempo Real"
const DESCRIPTION =
  "Configura horarios por empresa o colaborador, supervisa entradas y salidas en tiempo real y conecta la asistencia con el cálculo de nómina. Reportes de puntualidad con Nommy."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/control_hora",
  },
}

export default function Page() {
  return (
    <>
      <WebPageJsonLd name={TITLE} description={DESCRIPTION} url="/control_hora" />
      <ControlHoraClient />
    </>
  )
}
