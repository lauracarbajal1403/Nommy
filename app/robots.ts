import type { MetadataRoute } from "next"

// Bots de "answer engine" (citan contenido en respuestas de IA en tiempo real)
// y bots de entrenamiento de modelos: ambos permitidos explícitamente para
// maximizar la visibilidad de Nommy en búsqueda con IA (Google AI Overviews,
// ChatGPT, Perplexity, Bing Copilot, etc.).
const AI_USER_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "GoogleOther",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "CCBot",
  "Bytespider",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...AI_USER_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: "https://www.nommy.mx/sitemap.xml",
    host: "https://www.nommy.mx",
  }
}
