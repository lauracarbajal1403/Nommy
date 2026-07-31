import HomeClient from "./HomeClient"
import WebPageJsonLd from "@/components/WebPageJsonLd"

export default function Page() {
  return (
    <>
      <WebPageJsonLd
        name="Nommy - El aliado de tu equipo de RRHH"
        description="Herramienta SaaS para gestión de nómina y recursos humanos. Automatiza tus procesos de nómina con precisión y tranquilidad."
        url="/"
      />
      <HomeClient />
    </>
  )
}
