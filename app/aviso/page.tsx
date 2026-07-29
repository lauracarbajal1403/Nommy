import type { Metadata } from "next"
import AvisoClient from "./AvisoClient"

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Aviso de privacidad de Nommy: qué datos personales recabamos de empleados y empresas, para qué los usamos y cómo ejercer tus derechos ARCO conforme a la ley mexicana.",
  alternates: {
    canonical: "/aviso",
  },
}

export default function Page() {
  return <AvisoClient />
}
