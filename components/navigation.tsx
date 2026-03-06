"use client"
import { useState, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

// ── Mega-menu data ────────────────────────────────────────────────────────────
const nominaCol1 = [
  { icon: "💬", title: "¿Por qué elegir Nommy?", desc: "Conoce porqué Nommy es la mejor opción para tu empresa.", badge: null, href: "/producto" },
  { icon: "📄", title: "Sistema de nómina", desc: "Cálculos de nómina automatizados.", badge: "Actualizado", href: "/calcula_nomina" },
  { icon: "💰", title: "Cálculo PTU", desc: "Calcula el PTU en tiempo y forma.", badge: "Actualizado", href: "/calcula_nomina" },
  { icon: "🖨️", title: "Timbrado Ilimitado", desc: "Automatiza el timbrado de tus recibos.", badge: null, href: "/calcula_nomina"  },
  { icon: "🔗", title: "Conexión IDSE", desc: "Envía movimientos afiliatorios al IMSS.", badge: null, href: "/IDSE"},
  { icon: "📤", title: "Descarga Layouts de recibos", desc: "Obtén en segundos los layouts oficiales de recibos listos para su validación y respaldo. ", badge: null, href: "/IDSE" },
]

const nominaCol2 = [
  { icon: "🧮", title: "Cálculos inversos", desc: "Optimiza el cálculo de tu nómina con la flexibilidad de los cálculos inversos.", badge: "Nuevo", href: "/calcula_nomina" },
  { icon: "🏥", title: "Finiquitos y liquidaciones en minutos", desc: "Resuelve de forma sencilla cualquier escenario de finiquito o liquidación.", badge: "Nuevo", href: "/calcula_nomina" },
  { icon: "🧾", title: "Timbrado de nómina", desc:"Automatiza el timbrado de tus recibos de nómina.", badge: "Nuevo", href: "/calcula_nomina" },
  { icon: "🛡️", title: "Incidencias", desc: "Centraliza todas tus incidencias.", badge: "Nuevo", href: "/calcula_nomina" },
  { icon: "🏦", title: "Percepciones y deducciones sin errores", desc: "Elimina errores con Nommy.", badge: null, href: "/calcula_nomina" },
  { icon: "🏠", title: "Control INFONAVIT", desc: "Gestiona los créditos INFONAVIT.", badge: null, href: "/calcula_nomina" },
]

const masSoluciones = [
  { icon:  <img src="/NommyAI.png" alt="Reclutamiento" width={32} height={32} />, title: "Reclutamiento asistido por IA", desc: "Diseña perfiles de puestos con IA.", badge: "Destacado", href:"/inteligencia" },
  { icon: "📊", title: "NOM-035", desc: "Cumple con encuestas oficiales.", badge: "Destacado", href:"/norma" },
  { icon: "📋", title: "Control de horarios", desc: "Reporte de prenómina en minutos.", badge: null, href:"/control_hora" },
  { icon: "🧾", title: "Reportes dinámicos", desc: "Visualización y análisis de resultados.", badge: null, href:"/reportes_dina" },
  { icon: "✅", title: "Canales corporativos", desc: "Publica anuncios, beneficios y comunicados desde Nommy.", badge: null, href:"/norma" },
]

// ── Nosotros menu data ────────────────────────────────────────────────────────
const nosotrosItems = [
  {
    icon: "🎯",
    title: "Nuestra misión",
    desc: "Conoce el propósito que nos impulsa a transformar la gestión de nómina en México.",
    href: "/about#mision",
  },
  {
    icon: "💎",
    title: "Nuestros valores",
    desc: "Los principios que guían cada decisión y definen nuestra cultura de trabajo.",
    href: "/about#valores",
  },
  {
    icon: "👥",
    title: "Conoce nuestro equipo",
    desc: "Las personas detrás de Nommy que trabajan cada día para simplificar tu nómina.",
    href: "/about#equipo",
  },
]

// ── Precios menu data ─────────────────────────────────────────────────────────
const preciosItems = [
  {
    icon: "🗂️",
    title: "Planes",
    desc: "Explora nuestros planes diseñados para empresas de todos los tamaños.",
    href: "/pricing#planes",
  },
  {
    icon: "⚖️",
    title: "Compara planes",
    desc: "Encuentra el plan ideal comparando funciones, límites y beneficios lado a lado.",
    href: "/pricing#comparar",
  },
  {
    icon: "❓",
    title: "Preguntas frecuentes",
    desc: "Resuelve tus dudas sobre facturación, contratos, soporte y más.",
    href: "/pricing#faq",
  },
]

// ── ÚNICO CAMBIO: href ahora es opcional ──────────────────────────────────────
type Item = { icon: string; title: string; desc: string; badge: string | null; href?: string }

function Badge({ label }: { label: string }) {
  const isNuevo = label === "Nuevo"
  return (
    <span
      style={{
        fontSize: "10px",
        fontWeight: 600,
        padding: "2px 7px",
        borderRadius: "999px",
        backgroundColor: isNuevo ? "#ccfbf1" : "#dbeafe",
        color: isNuevo ? "#0f766e" : "#1d4ed8",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  )
}

function MenuColumn({ title, items, dimTitle = false }: { title: string; items: Item[]; dimTitle?: boolean }) {
  return (
    <div style={{ minWidth: 220 }}>
      <p
        style={{
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: dimTitle ? "transparent" : "#94a3b8",
          marginBottom: 8,
          userSelect: "none",
        }}
      >
        {dimTitle ? " " : title}
      </p>
      {items.map((item) => (
        // ── ÚNICO CAMBIO: <div> → <a> con href ───────────────────────────────
        <a
          key={item.title}
          href={item.href ?? "#"}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            padding: "8px 10px",
            borderRadius: 8,
            cursor: "pointer",
            transition: "background 0.15s",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f0fdfa" }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent" }}
        >
          <span style={{ fontSize: 18, lineHeight: 1.4, flexShrink: 0 }}>{item.icon}</span>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#0f172a" }}>{item.title}</span>
              {item.badge && <Badge label={item.badge} />}
            </div>
            <p style={{ fontSize: "12px", color: "#64748b", margin: 0, marginTop: 2 }}>{item.desc}</p>
          </div>
        </a>
      ))}
    </div>
  )
}

function MegaMenu() {
  return (
    <>
      <div style={{ display: "flex", gap: 32 }}>
        <MenuColumn title="Nómina" items={nominaCol1} />
        <MenuColumn title="&nbsp;" items={nominaCol2} dimTitle />
        <MenuColumn title="Más soluciones" items={masSoluciones} />
      </div>
    </>
  )
}

// ── Simple Dropdown Menu (Nosotros / Precios) ─────────────────────────────────
type SimpleItem = { icon: string; title: string; desc: string; href?: string }

function SimpleDropdown({ items }: { items: SimpleItem[] }) {
  return (
    <div style={{ minWidth: 300 }}>
      {items.map((item) => (
        <a
           key={item.title}
            href={item.href ?? "#"}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              padding: "8px 10px",
              borderRadius: 8,
              cursor: "pointer",
              transition: "background 0.15s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f0fdfa" }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent" }}
        >
          <span style={{ fontSize: 22, lineHeight: 1.3, flexShrink: 0 }}>{item.icon}</span>
          <div>
            <p style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: "#0f172a" }}>{item.title}</p>
            <p style={{ margin: 0, marginTop: 2, fontSize: "12px", color: "#64748b", lineHeight: 1.4 }}>{item.desc}</p>
          </div>
        </a>
      ))}
    </div>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showProductMenu, setShowProductMenu] = useState(false)
  const [showBloggyMenu, setShowBloggyMenu] = useState(false)
  const [showNosotrosMenu, setShowNosotrosMenu] = useState(false)
  const [showPreciosMenu, setShowPreciosMenu] = useState(false)
  const pathname = usePathname()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const blogTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const nosotrosTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const preciosTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isActiveLink = (href: string) => pathname === href

  const handleProductEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setShowProductMenu(true)
  }
  const handleProductLeave = () => {
    timeoutRef.current = setTimeout(() => setShowProductMenu(false), 150)
  }

  const handleBloggyEnter = () => {
    if (blogTimeoutRef.current) clearTimeout(blogTimeoutRef.current)
    setShowBloggyMenu(true)
  }
  const handleBloggyLeave = () => {
    blogTimeoutRef.current = setTimeout(() => setShowBloggyMenu(false), 150)
  }

  const handleNosotrosEnter = () => {
    if (nosotrosTimeoutRef.current) clearTimeout(nosotrosTimeoutRef.current)
    setShowNosotrosMenu(true)
  }
  const handleNosotrosLeave = () => {
    nosotrosTimeoutRef.current = setTimeout(() => setShowNosotrosMenu(false), 150)
  }

  const handlePreciosEnter = () => {
    if (preciosTimeoutRef.current) clearTimeout(preciosTimeoutRef.current)
    setShowPreciosMenu(true)
  }
  const handlePreciosLeave = () => {
    preciosTimeoutRef.current = setTimeout(() => setShowPreciosMenu(false), 150)
  }

  const navLinkStyle = (href: string) => ({
    fontSize: "14px",
    fontWeight: 500,
    color: isActiveLink(href) ? "#0d9488" : "#334155",
    textDecoration: "none",
    padding: "4px 0",
    borderBottom: isActiveLink(href) ? "2px solid #0d9488" : "2px solid transparent",
    transition: "color 0.2s, border-color 0.2s",
    cursor: "pointer",
    background: "none",
    border: "none",
    fontFamily: "inherit",
  } as React.CSSProperties)

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#fff",
        borderBottom: "1px solid #f1f5f9",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center">
          <Image src="/nommy-logo-new.png" alt="NOMMY" width={16} height={16} className="h-4 w-auto" priority />
          <Image src="/nommy-text-new.png" alt="nommy" width={32} height={32} className="h-8 w-auto" priority />
        </Link>

        {/* Desktop Menu */}
        <div
          className="md:flex hidden"
          style={{ display: "flex", alignItems: "center", gap: 32 }}
        >
          {/* Nosotros — dropdown trigger */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={handleNosotrosEnter}
            onMouseLeave={handleNosotrosLeave}
          >
            <button
              style={{
                ...navLinkStyle("/nosotros"),
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Nosotros
              <ChevronDown
                size={14}
                style={{
                  transition: "transform 0.2s",
                  transform: showNosotrosMenu ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {showNosotrosMenu && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 16px)",
                  left: 0,
                  backgroundColor: "#fff",
                  borderRadius: 16,
                  boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                  padding: 20,
                  border: "1px solid #f1f5f9",
                  zIndex: 100,
                  minWidth: 340,
                }}
                onMouseEnter={handleNosotrosEnter}
                onMouseLeave={handleNosotrosLeave}
              >
                <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", marginBottom: 12, marginTop: 0 }}>
                  Nosotros
                </p>
                <SimpleDropdown items={nosotrosItems} />
              </div>
            )}
          </div>

          {/* Producto — mega menu trigger */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={handleProductEnter}
            onMouseLeave={handleProductLeave}
          >
            <button
              style={{
                ...navLinkStyle("/producto"),
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Producto
              <ChevronDown
                size={14}
                style={{
                  transition: "transform 0.2s",
                  transform: showProductMenu ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {showProductMenu && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 16px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#fff",
                  borderRadius: 16,
                  boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                  padding: 24,
                  border: "1px solid #f1f5f9",
                  zIndex: 100,
                  minWidth: 760,
                }}
                onMouseEnter={handleProductEnter}
                onMouseLeave={handleProductLeave}
              >
                <MegaMenu />
              </div>
            )}
          </div>

          {/* Precios — dropdown trigger */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={handlePreciosEnter}
            onMouseLeave={handlePreciosLeave}
          >
            <button
              style={{
                ...navLinkStyle("/precios"),
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Precios
              <ChevronDown
                size={14}
                style={{
                  transition: "transform 0.2s",
                  transform: showPreciosMenu ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {showPreciosMenu && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 16px)",
                  left: 0,
                  backgroundColor: "#fff",
                  borderRadius: 16,
                  boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                  padding: 20,
                  border: "1px solid #f1f5f9",
                  zIndex: 100,
                  minWidth: 340,
                }}
                onMouseEnter={handlePreciosEnter}
                onMouseLeave={handlePreciosLeave}
              >
                <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", marginBottom: 12, marginTop: 0 }}>
                  Precios
                </p>
                <SimpleDropdown items={preciosItems} />
              </div>
            )}
          </div>

          {/* Bloggy — mega menu trigger */}
          

          
          <Link href="/resources" className="flex flex-col items-center">
              <Image src = "/bloggyy.png" alt="Bloggy"  className="inline-block w-16 mr-2"/>
          </Link>
          
          <Link
                href="/demo"
                className="block mx-3 my-2 px-6 py-3 rounded-full font-medium text-center transition-all duration-300 shadow-lg"
                style={{ backgroundColor: "#152132", color: "#ffffff" }}
                onClick={() => setIsOpen(false)}
              >
                ¡DEMO GRATIS!
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "#0f172a" }}
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            backgroundColor: "#fff",
            borderTop: "1px solid #f1f5f9",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {[
            { href: "/nosotros", label: "Nosotros" },
            { href: "/producto", label: "Producto" },
            { href: "/precios", label: "Precios" },
            { href: "/blog", label: "Bloggy" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              style={{
                padding: "12px 0",
                fontSize: "16px",
                fontWeight: 500,
                color: "#334155",
                textDecoration: "none",
                borderBottom: "1px solid #f8fafc",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="/demo"
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            style={{
              marginTop: 12,
              padding: "12px 0",
              fontSize: "16px",
              fontWeight: 600,
              color: "#0d9488",
              textDecoration: "none",
              textAlign: "center",
              border: "2px solid #0d9488",
              borderRadius: 8,
            }}
          >
            ¡Agenda tu DEMO!
          </a>
        </div>
      )}
    </nav>
  )
}