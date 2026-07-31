import type { Metadata } from "next"
import IdseClient from "./IdseClient"
import WebPageJsonLd from "@/components/WebPageJsonLd"

const TITLE = "Conexión IDSE: Sincroniza Movimientos ante el IMSS"
const DESCRIPTION =
  "Envía altas, bajas y cambios de salario directo al IDSE sin entrar a la plataforma del IMSS. Sesión activa y segura, cumplimiento normativo y descarga de layouts con Nommy."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/IDSE",
  },
}

export default function Page() {
  return (
    <>
      <WebPageJsonLd name={TITLE} description={DESCRIPTION} url="/IDSE" />
      <IdseClient />
    </>
  )
}
