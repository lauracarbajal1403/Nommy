import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import Script from "next/script"

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
      <body className={`${inter.className} font-sans antialiased`}>
        {/* Google tag (gtag.js) - carga el script de Google Ads/GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17894332131"
          strategy="afterInteractive"
        />
        {/* Inicialización de gtag */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17894332131');
          `}
        </Script>

        <Suspense fallback={<Loading />}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}