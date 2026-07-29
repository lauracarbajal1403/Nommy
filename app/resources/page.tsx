import type { Metadata } from "next"
import ResourcesClient from "./ResourcesClient"

export const metadata: Metadata = {
  title: "Recursos para potenciar la gestión de RRHH y nómina",
  description: "Ebooks gratuitos, guías y artículos sobre nómina, reformas laborales, cumplimiento fiscal y gestión de talento para equipos de Recursos Humanos en México.",
  alternates: {
    canonical: "/resources",
  },
}

export default function Page() {
  return <ResourcesClient />
}
