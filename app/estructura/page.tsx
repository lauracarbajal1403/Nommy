import type { Metadata } from "next"
import EstructuraClient from "./EstructuraClient"

export const metadata: Metadata = {
  title: "Estructura Organizacional: Cómo Ordenar tu Empresa",
  description:
    "Descubre qué es una estructura organizacional, sus elementos clave y cómo Nommy ayuda a gestionar colaboradores, asistencia y expedientes para crecer con orden.",
  alternates: {
    canonical: "/estructura",
  },
}

export default function Page() {
  return <EstructuraClient />
}
