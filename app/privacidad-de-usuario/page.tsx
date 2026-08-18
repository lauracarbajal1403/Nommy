import type { Metadata } from "next"
import AvisoClient from "./privacidadClient"
import WebPageJsonLd from "@/components/WebPageJsonLd"

const TITLE = "Aviso de Privacidad de Usuario"
const DESCRIPTION =
  "Aviso de privacidad de usuario de Nommy: qué datos personales recabamos de empleados y empresas, para qué los usamos y cómo ejercer tus derechos ARCO conforme a la ley mexicana."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/privacidad-de-usuario",
  },
}

export default function Page() {
  return (
    <>
      <WebPageJsonLd name={TITLE} description={DESCRIPTION} url="/aviso" />
      <AvisoClient />
    </>
  )
}
