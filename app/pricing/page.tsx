import type { Metadata } from "next"
import PricingClient from "./PricingClient"

export const metadata: Metadata = {
  title: "Planes y Precios de Nommy: Basic, Essential y Enterprise",
  description:
    "Compara los planes Basic, Essential y Enterprise de Nommy: precios por colaborador, funciones y beneficios para elegir el plan ideal para tu empresa.",
  alternates: {
    canonical: "/pricing",
  },
}

export default function Page() {
  return <PricingClient />
}
