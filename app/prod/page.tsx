import type { Metadata } from "next"
import ProdClient from "./ProdClient"

export const metadata: Metadata = {
  title: "Aspectos clave para fortalecer tu gestión de nómina en 2026",
  description: "Salario mínimo, jornada de 40 horas, prestaciones y la RMF 2026: los cambios laborales y fiscales que impactarán tu nómina este año, explicados por Nommy.",
  alternates: {
    canonical: "/prod",
  },
}

export default function Page() {
  return <ProdClient />
}
