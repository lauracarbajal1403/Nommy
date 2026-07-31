import type { MetadataRoute } from "next"

const BASE_URL = "https://www.nommy.mx"

type Entry = {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
}

const ENTRIES: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/demo", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/producto", priority: 0.8, changeFrequency: "monthly" },
  { path: "/resources", priority: 0.7, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/recursos", priority: 0.6, changeFrequency: "monthly" },
  { path: "/nomina", priority: 0.6, changeFrequency: "monthly" },
  { path: "/nomina-jalisco-2026", priority: 0.6, changeFrequency: "monthly" },
  { path: "/reforma", priority: 0.6, changeFrequency: "monthly" },
  { path: "/reformas", priority: 0.6, changeFrequency: "monthly" },
  { path: "/prima", priority: 0.6, changeFrequency: "monthly" },
  { path: "/jornada", priority: 0.6, changeFrequency: "monthly" },
  { path: "/transparencia-salarial", priority: 0.6, changeFrequency: "monthly" },
  { path: "/talento", priority: 0.6, changeFrequency: "monthly" },
  { path: "/sectores", priority: 0.6, changeFrequency: "monthly" },
  { path: "/estructura", priority: 0.6, changeFrequency: "monthly" },
  { path: "/desordenada", priority: 0.6, changeFrequency: "monthly" },
  { path: "/prod", priority: 0.6, changeFrequency: "monthly" },
  { path: "/control_hora", priority: 0.6, changeFrequency: "monthly" },
  { path: "/IDSE", priority: 0.6, changeFrequency: "monthly" },
  { path: "/norma", priority: 0.6, changeFrequency: "monthly" },
  { path: "/reportes_dina", priority: 0.6, changeFrequency: "monthly" },
  { path: "/calcula_nomina", priority: 0.6, changeFrequency: "monthly" },
  { path: "/inteligencia", priority: 0.6, changeFrequency: "monthly" },
  { path: "/requisitos", priority: 0.6, changeFrequency: "monthly" },
  { path: "/landing", priority: 0.5, changeFrequency: "monthly" },
  { path: "/terminos", priority: 0.3, changeFrequency: "yearly" },
  { path: "/aviso", priority: 0.3, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return ENTRIES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
