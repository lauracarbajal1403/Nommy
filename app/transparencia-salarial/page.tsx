import type { Metadata } from "next"
import TransparenciaSalarialClient from "./TransparenciaSalarialClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Transparencia salarial: evita multas de $622,440 MXN"
const DESCRIPTION =
  "El Senado analiza una reforma a la LFT que obligaría a publicar el rango salarial en cada vacante. Conoce las multas de hasta $622,440 MXN y cómo preparar a tu empresa."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/transparencia-salarial",
  },
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        url="/transparencia-salarial"
        image="/imagen2.png"
        datePublished="2026-03-18"
      />
      <TransparenciaSalarialClient />
    </>
  )
}
