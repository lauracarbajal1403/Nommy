import type { Metadata } from "next"
import RequisitosClient from "./requisitosClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Requisitos del Recibo de Nómina Electrónico en México: Checklist 2026"
const DESCRIPTION =
  "Guía completa de los requisitos que el SAT exige para el CFDI de nómina en 2026: datos fiscales, Complemento de Nómina 1.2, plazos de timbrado y la Revisión E, con checklist descargable."

const FAQ = [
  {
    q: "¿Es obligatorio si tengo un solo empleado?",
    a: "Sí, aplica sin importar el tamaño de la empresa.",
  },
  {
    q: "¿Qué pasa si no timbro a tiempo?",
    a: "El SAT puede negar la deducibilidad del gasto y aplicar multas por cada comprobante fuera de plazo.",
  },
  {
    q: "¿Qué es lo que más rechaza el SAT?",
    a: "Datos del receptor mal capturados y descuadres entre percepciones, deducciones e importe total.",
  },
]

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/requisitos",
  },
}

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={TITLE}
        description={DESCRIPTION}
        url="/requisitos"
        image="/portadaestructura.png"
        datePublished="2026-07-31"
        faq={FAQ}
      />
      <RequisitosClient />
    </>
  )
}
