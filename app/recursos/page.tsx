import type { Metadata } from "next"
import RecursosClient from "./RecursosClient"

export const metadata: Metadata = {
  title: "¿La Inteligencia Artificial reemplazará a Recursos Humanos?",
  description: "La IA transforma el trabajo de RRHH, pero no sustituye el criterio humano. Descubre qué tareas automatiza y en qué debe enfocarse tu equipo, según Nommy.",
  alternates: {
    canonical: "/recursos",
  },
}

export default function Page() {
  return <RecursosClient />
}
