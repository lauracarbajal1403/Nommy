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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nommy México",
  image: "https://www.nommy.mx/nommy-logo-new.png",
  "@id": "https://www.nommy.mx",
  url: "https://www.nommy.mx",
  telephone: "3315179175",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nelson 224",
    addressLocality: "Guadalajara",
    postalCode: "44690",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.67891,
    longitude: -103.3894906,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "19:00",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61578598203669",
    "https://www.instagram.com/nommymexico/",
    "https://www.youtube.com/@NommyM%C3%A9xico",
    "https://www.linkedin.com/company/108440909/",
    "https://www.nommy.mx",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="msvalidate.01" content="A11E650E247392D4DDC71DBC202F3E23" />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: linkedInScript1 }} />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: linkedInScript2 }} />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics gaId="AW-17894332131" />
        <GoogleTagManager gtmId="GTM-TFSH9C4P" />
        {/* LinkedIn noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
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