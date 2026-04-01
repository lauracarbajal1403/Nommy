import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google"

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

const linkedInScript1 = `
  _linkedin_partner_id = "8802034";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
`

const linkedInScript2 = `
  (function(l) {
    if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
    window.lintrk.q=[]}
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript"; b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);
  })(window.lintrk);
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: linkedInScript1 }} />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: linkedInScript2 }} />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <GoogleAnalytics gaId="AW-17894332131" />
        <GoogleTagManager gtmId="GTM-TFSH9C4P" />
        {/* LinkedIn noscript */}
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} alt=""
            src="https://px.ads.linkedin.com/collect/?pid=8802034&fmt=gif"
          />
        </noscript>

        <Suspense fallback={<Loading />}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}