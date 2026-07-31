import type { Metadata } from "next"
import ReformasClient from "./ReformasClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Reformas laborales 2027-2030 y su impacto en la nómina"
const DESCRIPTION =
  "Más de 40 reformas laborales y fiscales redefinirán la nómina en México entre 2027 y 2030: jornada reducida, límites a horas extra y nuevas obligaciones de cumplimiento."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/reformas",
  },
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        url="/reformas"
        image="/0.png"
        datePublished="2026-04-15"
      />
      <ReformasClient />
    </>
  )
}
