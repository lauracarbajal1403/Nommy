import type { Metadata } from "next"
import ReformaClient from "./ReformaClient"

export const metadata: Metadata = {
  title: "Reformas laborales 2026: guía para empresas en México",
  description:
    "Jornada de 40 horas, registro digital obligatorio y nuevas reglas de cumplimiento: descubre las reformas laborales aprobadas en México en 2026 y cómo preparar a tu empresa.",
  alternates: {
    canonical: "/reforma",
  },
}

export default function Page() {
  return <ReformaClient />
}
