import type { Metadata } from "next"
import ControlHoraClient from "./ControlHoraClient"

export const metadata: Metadata = {
  title: "Control de Horarios y Asistencia en Tiempo Real",
  description:
    "Configura horarios por empresa o colaborador, supervisa entradas y salidas en tiempo real y conecta la asistencia con el cálculo de nómina. Reportes de puntualidad con Nommy.",
  alternates: {
    canonical: "/control_hora",
  },
}

export default function Page() {
  return <ControlHoraClient />
}
