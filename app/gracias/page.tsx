import type { Metadata } from "next"
import GraciasClient from "./GraciasClient"

export const metadata: Metadata = {
  title: "Gracias por tu Interés en Nommy",
  description:
    "Hemos recibido tu solicitud de demo. El equipo de Nommy se pondrá en contacto contigo en menos de 24 horas para agendar tu demostración personalizada.",
  alternates: {
    canonical: "/gracias",
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function Page() {
  return <GraciasClient />
}
