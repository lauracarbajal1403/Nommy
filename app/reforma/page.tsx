import type { Metadata } from "next"
import ReformaClient from "./ReformaClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Reformas laborales 2026: guía para empresas en México"
const DESCRIPTION =
  "Jornada de 40 horas, registro digital obligatorio y nuevas reglas de cumplimiento: descubre las reformas laborales aprobadas en México en 2026 y cómo preparar a tu empresa."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/reforma",
  },
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        url="/reforma"
        image="/30ab.png"
        datePublished="2026-04-30"
      />
      <ReformaClient />
    </>
  )
}
