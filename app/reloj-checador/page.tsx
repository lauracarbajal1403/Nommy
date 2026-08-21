import type { Metadata } from "next"
import RelojChecadorClient from "./relojClient"
import ArticleJsonLd from "@/components/ArticleJsonLd"

const TITLE = "Mejor Reloj Checador Biométrico en México | Nommy"
const DESCRIPTION =
  "¿Cuál es el mejor reloj checador biométrico para tu negocio? Descubre por qué el checador desde el celular es clave para la jornada de 40 horas y cómo te protege ante la STPS."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/reloj-checador",
  },
}

const FAQ = [
  {
    q: "¿Cuál es el mejor reloj checador biométrico para una empresa con varias sucursales?",
    a: "El que no depende de comprar un equipo por cada sucursal. Un checador basado en app, como el de Nommy, se activa en el celular de cada colaborador nuevo el mismo día que se incorpora, sin instalación ni logística de hardware.",
  },
  {
    q: "¿El checador biométrico funciona para empleados en home office?",
    a: "Sí. Con Nommy, el check-in y check-out se hacen desde la app móvil sin importar si el colaborador está en la oficina, en sucursal o trabajando desde casa.",
  },
  {
    q: "¿Qué exige la ley mexicana sobre el control de asistencia?",
    a: "La reforma que acompaña la transición a la jornada de 40 horas obliga, a partir de 2027, a llevar un registro electrónico de asistencia inalterable, con identificación biométrica, que permita comprobar horarios frente a la nómina. El incumplimiento puede sancionarse con multas de 250 a 5,000 UMA por trabajador.",
  },
  {
    q: "¿Cómo protege un reloj checador biométrico a la empresa ante la STPS?",
    a: "Genera evidencia exportable —como el Excel descargable de Nommy— con el detalle de entradas, salidas y descansos por colaborador, lista para comprobar el cumplimiento de la jornada ante una inspección o una demanda laboral.",
  },
  {
    q: "¿Cuánto tiempo toma implementar Nommy?",
    a: "Menos de 30 días, sin costo de implementación y con soporte 24/7.",
  },
]

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline="¿Cuál es el mejor reloj checador biométrico para tu negocio?"
        description={DESCRIPTION}
        url="/reloj-checador"
        image="/agosto13.jpeg"
        datePublished="2026-08-21"
        faq={FAQ}
      />
      <RelojChecadorClient />
    </>
  )
}
