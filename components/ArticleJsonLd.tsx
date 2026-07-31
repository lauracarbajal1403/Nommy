const BASE_URL = "https://www.nommy.mx"
const ORG_ID = "https://www.nommy.mx/#organization"

const NOMMY_ORG = {
  "@type": "Organization" as const,
  "@id": ORG_ID,
  name: "Nommy",
  url: BASE_URL,
  logo: `${BASE_URL}/nommy-logo-new.png`,
}

type Faq = { q: string; a: string }

type ArticleJsonLdProps = {
  headline: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified?: string
  faq?: Faq[]
}

export default function ArticleJsonLd({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  faq,
}: ArticleJsonLdProps) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: `${BASE_URL}${image}`,
    url: `${BASE_URL}${url}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "es-MX",
    author: NOMMY_ORG,
    publisher: {
      ...NOMMY_ORG,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/nommy-logo-new.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}${url}`,
    },
  }

  const faqJsonLd = faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: {
            "@type": "Answer",
            text: a,
          },
        })),
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  )
}
