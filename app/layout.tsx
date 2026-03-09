import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { GoogleTagManager } from "@next/third-parties/google"

import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Loading from "@/components/loading"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NOMMY - El aliado de tu equipo de RRHH",
  description:
    "Herramienta SaaS para gestión de nómina y recursos humanos. Automatiza tus procesos de nómina con precisión y tranquilidad.",
  keywords:
    "nómina, recursos humanos, RRHH, payroll, SaaS, automatización, gestión de nómina, software de nómina, nómina electrónica, cumplimiento fiscal",
  icons: {
    icon: [{ url: "/nommy-logo-new.png", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId="G-YYRDPQQVKE" />
      <body className={`${inter.className} font-sans antialiased`}>
        <Suspense fallback={<Loading />}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}