import type { Metadata } from "next"
import RecursosClient from "./RecursosClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "¿La Inteligencia Artificial reemplazará a Recursos Humanos?"
const DESCRIPTION =
  "La IA transforma el trabajo de RRHH, pero no sustituye el criterio humano. Descubre qué tareas automatiza y en qué debe enfocarse tu equipo, según Nommy."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/recursos",
  },
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        url="/recursos"
        image="/junio.jpeg"
        datePublished="2026-06-30"
      />
      <RecursosClient />
    </>
  )
}
