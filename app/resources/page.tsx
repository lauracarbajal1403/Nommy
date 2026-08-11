import type { Metadata } from "next"
import ResourcesClient from "./ResourcesClient"

export const metadata: Metadata = {
  title: "Blog de Nómina, RRHH y Cumplimiento Laboral México | Nommy",
  description: "Guías, checklists y noticias sobre nómina, IDSE, NOM-035 y gestión de RRHH en México, escritas por el equipo de Nommy para ayudarte a decidir mejor.",
  alternates: {
    canonical: "/resources",
  },
}

export default function Page() {
  return <ResourcesClient />
}
