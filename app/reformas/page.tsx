import type { Metadata } from "next"
import ReformasClient from "./ReformasClient"

export const metadata: Metadata = {
  title: "Reformas laborales 2027-2030 y su impacto en la nómina",
  description:
    "Más de 40 reformas laborales y fiscales redefinirán la nómina en México entre 2027 y 2030: jornada reducida, límites a horas extra y nuevas obligaciones de cumplimiento.",
  alternates: {
    canonical: "/reformas",
  },
}

export default function Page() {
  return <ReformasClient />
}
