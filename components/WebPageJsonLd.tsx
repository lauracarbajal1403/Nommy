const BASE_URL = "https://www.nommy.mx"

const NOMMY_ORG = {
  "@type": "Organization" as const,
  "@id": `${BASE_URL}/#organization`,
  name: "Nommy",
  url: BASE_URL,
  logo: `${BASE_URL}/nommy-logo-new.png`,
}

const NOMMY_WEBSITE = {
  "@type": "WebSite" as const,
  "@id": `${BASE_URL}/#website`,
  name: "Nommy",
  url: BASE_URL,
  publisher: NOMMY_ORG,
}

type WebPageJsonLdProps = {
  name: string
  description: string
  url: string
}

export default function WebPageJsonLd({ name, description, url }: WebPageJsonLdProps) {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${BASE_URL}${url}`,
    inLanguage: "es-MX",
    isPartOf: NOMMY_WEBSITE,
    publisher: NOMMY_ORG,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
    />
  )
}
