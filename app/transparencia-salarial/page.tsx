import type { Metadata } from "next"
import TransparenciaSalarialClient from "./TransparenciaSalarialClient"

export const metadata: Metadata = {
  title: "Transparencia salarial: evita multas de $622,440 MXN",
  description:
    "El Senado analiza una reforma a la LFT que obligaría a publicar el rango salarial en cada vacante. Conoce las multas de hasta $622,440 MXN y cómo preparar a tu empresa.",
  alternates: {
    canonical: "/transparencia-salarial",
  },
}

export default function Page() {
  return <TransparenciaSalarialClient />
}
