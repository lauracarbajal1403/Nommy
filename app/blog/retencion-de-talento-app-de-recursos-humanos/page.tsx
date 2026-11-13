import type { Metadata } from "next"
import RetencionTalentoClient from "./RetencionTalentoClient"
import { FAQ } from "./faq"
import ArticleJsonLd from "@/components/ArticleJsonLd"

// El layout agrega " | Nommy" al título mediante el template.
const TITLE = "Retención de Talento en México: 6 Estrategias"
const DESCRIPTION =
  "La rotación empieza en lo básico. Descubre 6 estrategias de retención de talento y cómo la app de Nommy mejora la experiencia de tu equipo."
const URL = "/blog/retencion-de-talento-app-de-recursos-humanos"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline="Retención de talento en México: cómo una app de RH ayuda a que tu equipo se quede"
        description={DESCRIPTION}
        url={URL}
        image="/celular.png"
        datePublished="2026-11-13"
        faq={FAQ.map(([q, a]) => ({ q, a }))}
      />
      <RetencionTalentoClient />
    </>
  )
}
