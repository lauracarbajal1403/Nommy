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
  keywords: "nómina, recursos humanos, RRHH, payroll, SaaS, automatización",
  icons: {
    icon: [
      {
        url: "/nommy-icon.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased`}>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TFSH9C4P');
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
