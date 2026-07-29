import type { Metadata } from "next"
import IdseClient from "./IdseClient"

export const metadata: Metadata = {
  title: "Conexión IDSE: Sincroniza Movimientos ante el IMSS",
  description:
    "Envía altas, bajas y cambios de salario directo al IDSE sin entrar a la plataforma del IMSS. Sesión activa y segura, cumplimiento normativo y descarga de layouts con Nommy.",
  alternates: {
    canonical: "/IDSE",
  },
}

export default function Page() {
  return <IdseClient />
}
