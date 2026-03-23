"use client"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"

// ── Mega-menu data ────────────────────────────────────────────────────────────
const nominaCol1 = [
  { icon: "💬", title: "Herramienta todo el uno", desc: "Conoce las funcionalidades de Nommy.", badge: null, href: "/producto" },
  { icon: "📄", title: "Sistema de nómina", desc: "Cálculos de nómina automatizados.", badge: "Actualizado", href: "/calcula_nomina" },
  { icon: "💰", title: "Cálculo PTU", desc: "Calcula el PTU en tiempo y forma.", badge: "Actualizado", href: "/calcula_nomina" },
  { icon: "🖨️", title: "Timbrado Ilimitado", desc: "Automatiza el timbrado de tus recibos.", badge: null, href: "/calcula_nomina" },
  { icon: "🔗", title: "Conexión IDSE", desc: "Envía movimientos afiliatorios al IMSS.", badge: null, href: "/IDSE" },
  { icon: "📤", title: "Descarga Layouts de recibos", desc: "Obtén en segundos los layouts oficiales de recibos listos para su validación y respaldo.", badge: null, href: "/IDSE" },
]

const nominaCol2 = [
  { icon: "🧮", title: "Cálculos inversos", desc: "Optimiza el cálculo de tu nómina con la flexibilidad de los cálculos inversos.", badge: "Nuevo", href: "/calcula_nomina" },
  { icon: "🏥", title: "Finiquitos y liquidaciones en minutos", desc: "Resuelve de forma sencilla cualquier escenario de finiquito o liquidación.", badge: "Nuevo", href: "/calcula_nomina" },
  { icon: "🧾", title: "Timbrado de nómina", desc: "Automatiza el timbrado de tus recibos de nómina.", badge: "Nuevo", href: "/calcula_nomina" },
  { icon: "🛡️", title: "Incidencias", desc: "Centraliza todas tus incidencias.", badge: "Nuevo", href: "/calcula_nomina" },
  { icon: "🏦", title: "Percepciones y deducciones sin errores", desc: "Elimina errores con Nommy.", badge: null, href: "/calcula_nomina" },
  { icon: "🏠", title: "Control INFONAVIT", desc: "Gestiona los créditos INFONAVIT.", badge: null, href: "/calcula_nomina" },
]

const masSoluciones = [
  { image: "/NommyAI.png", title: "Reclutamiento asistido por IA", desc: "Diseña perfiles de puestos con IA.", badge: "Destacado", href: "/inteligencia" },
  { icon: "📊", title: "NOM-035", desc: "Cumple con encuestas oficiales.", badge: "Destacado", href: "/norma" },
  { icon: "📋", title: "Control de horarios", desc: "Reporte de prenómina en minutos.", badge: null, href: "/control_hora" },
  { icon: "🧾", title: "Reportes dinámicos", desc: "Visualización y análisis de resultados.", badge: null, href: "/reportes_dina" },
  { icon: "✅", title: "Canales corporativos", desc: "Publica anuncios, beneficios y comunicados desde Nommy.", badge: null, href: "/norma" },
]

const nosotrosItems = [
  { icon: "💬", title: "¿Por qué elegir Nommy?", desc: "Conoce porqué Nommy es la mejor opción para tu empresa.", badge: null, href: "/about" },
  { icon: "🎯", title: "Nuestra misión", desc: "Conoce el propósito que nos impulsa a transformar la gestión de nómina en México.", href: "/about#mision" },
  { icon: "💎", title: "Nuestros valores", desc: "Los principios que guían cada decisión y definen nuestra cultura de trabajo.", href: "/about#valores" },
  { icon: "👥", title: "Conoce nuestro equipo", desc: "Las personas detrás de Nommy que trabajan cada día para simplificar tu nómina.", href: "/about#equipo" },
]

const preciosItems = [
  { icon: "🗂️", title: "Planes", desc: "Explora nuestros planes diseñados para empresas de todos los tamaños.", href: "/pricing#planes" },
  { icon: "⚖️", title: "Compara planes", desc: "Encuentra el plan ideal comparando funciones, límites y beneficios lado a lado.", href: "/pricing#comparar" },
  { icon: "❓", title: "Preguntas frecuentes", desc: "Resuelve tus dudas sobre facturación, contratos, soporte y más.", href: "/pricing#faq" },
]

type Item = { icon?: string; image?: string; title: string; desc: string; badge: string | null; href?: string }
type SimpleItem = { icon: string; title: string; desc: string; href?: string }
type MobileSection = { label: string; items: SimpleItem[] }

// ── Hook: detecta si es mobile ────────────────────────────────────────────────
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [breakpoint])

  return isMobile
}

// ── Badge ─────────────────────────────────────────────────────────────────────
function Badge({ label }: { label: string }) {
  const isNuevo = label === "Nuevo"
  return (
    <span style={{
      fontSize: "10px", fontWeight: 600, padding: "2px 7px", borderRadius: "999px",
      backgroundColor: isNuevo ? "#ccfbf1" : "#dbeafe",
      color: isNuevo ? "#0f766e" : "#1d4ed8",
      whiteSpace: "nowrap",
    }}>
      {label}
    </span>
  )
}

// ── Desktop components ────────────────────────────────────────────────────────
function MenuColumn({ title, items, dimTitle = false }: { title: string; items: Item[]; dimTitle?: boolean }) {
  return (
    <div style={{ minWidth: 220 }}>
      <p style={{
        fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em",
        color: dimTitle ? "transparent" : "#94a3b8", marginBottom: 8, userSelect: "none",
      }}>
        {dimTitle ? " " : title}
      </p>
      {items.map((item) => (
        <a key={item.title} href={item.href ?? "#"}
          style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 10px", borderRadius: 8, cursor: "pointer", transition: "background 0.15s", textDecoration: "none" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f0fdfa" }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent" }}
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              width={24}
              height={24}
              style={{ width: 24, height: 24, objectFit: "contain", flexShrink: 0, borderRadius: 4 }}
            />
          ) : (
            <span style={{ fontSize: 18, lineHeight: 1.4, flexShrink: 0 }}>{item.icon}</span>
          )}
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
    <div style={{ display: "flex", gap: 32 }}>
      <MenuColumn title="Nómina" items={nominaCol1} />
      <MenuColumn title="&nbsp;" items={nominaCol2} dimTitle />
      <MenuColumn title="Más soluciones" items={masSoluciones} />
    </div>
  )
}

function SimpleDropdown({ items }: { items: SimpleItem[] }) {
  return (
    <div style={{ minWidth: 300 }}>
      {items.map((item) => (
        <a key={item.title} href={item.href ?? "#"}
          style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 10px", borderRadius: 8, cursor: "pointer", transition: "background 0.15s", textDecoration: "none" }}
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

// ── Mobile Accordion ──────────────────────────────────────────────────────────
function MobileAccordion({ section, onClose }: { section: MobileSection; onClose: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: "1px solid #f1f5f9" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 0", background: "none", border: "none", cursor: "pointer",
          fontSize: "16px", fontWeight: 600, color: "#0f172a",
        }}
      >
        <span>{section.label}</span>
        <ChevronRight size={18} style={{
          color: "#94a3b8", transition: "transform 0.2s",
          transform: open ? "rotate(90deg)" : "rotate(0deg)",
        }} />
      </button>

      {open && (
        <div style={{ paddingBottom: 8 }}>
          {section.items.map((item) => (
            <a key={item.title} href={item.href ?? "#"} onClick={onClose}
              style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 8px", borderRadius: 10, textDecoration: "none", transition: "background 0.15s" }}
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
      )}
    </div>
  )
}

const productoMobileItems: SimpleItem[] = [
  ...nominaCol1,
  ...nominaCol2,
  { icon: "🤖", title: "Reclutamiento asistido por IA", desc: "Diseña perfiles de puestos con IA.", href: "/inteligencia" },
  { icon: "📊", title: "NOM-035", desc: "Cumple con encuestas oficiales.", href: "/norma" },
  { icon: "📋", title: "Control de horarios", desc: "Reporte de prenómina en minutos.", href: "/control_hora" },
  { icon: "🧾", title: "Reportes dinámicos", desc: "Visualización y análisis de resultados.", href: "/reportes_dina" },
  { icon: "✅", title: "Canales corporativos", desc: "Publica anuncios, beneficios y comunicados desde Nommy.", href: "/norma" },
]

const mobileSections: MobileSection[] = [
  { label: "Nosotros", items: nosotrosItems },
  { label: "Producto", items: productoMobileItems },
  { label: "Precios", items: preciosItems },
  { label: "Bloggy", items: [{ icon: "📝", title: "Blog", desc: "Artículos y recursos sobre nómina y RRHH.", href: "/resources" }] },
]

// ── Demo Button ───────────────────────────────────────────────────────────────
function DemoButton({ href, mobile = false }: { href: string; mobile?: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        padding: hovered
          ? (mobile ? "9px 20px" : "12px 30px")
          : (mobile ? "8px 16px" : "10px 24px"),
        borderRadius: "999px",
        backgroundColor: hovered ? "#152132" : "#4abdb9",
        color: "#ffffff",
        fontSize: mobile ? "13px" : (hovered ? "15px" : "14px"),
        fontWeight: 700,
        textDecoration: "none",
        whiteSpace: "nowrap",
        letterSpacing: "0.02em",
        boxShadow: hovered
          ? "0 6px 20px rgba(13,148,136,0.45)"
          : "0 4px 14px rgba(0,0,0,0.15)",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        transition: "all 0.25s cubic-bezier(0.34, 1.4, 0.64, 1)",
      }}
    >
      ¡DEMO GRATIS!
    </a>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showProductMenu, setShowProductMenu] = useState(false)
  const [showNosotrosMenu, setShowNosotrosMenu] = useState(false)
  const [showPreciosMenu, setShowPreciosMenu] = useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const nosotrosTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const preciosTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isActiveLink = (href: string) => pathname === href

  const handleProductEnter = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setShowProductMenu(true) }
  const handleProductLeave = () => { timeoutRef.current = setTimeout(() => setShowProductMenu(false), 150) }
  const handleNosotrosEnter = () => { if (nosotrosTimeoutRef.current) clearTimeout(nosotrosTimeoutRef.current); setShowNosotrosMenu(true) }
  const handleNosotrosLeave = () => { nosotrosTimeoutRef.current = setTimeout(() => setShowNosotrosMenu(false), 150) }
  const handlePreciosEnter = () => { if (preciosTimeoutRef.current) clearTimeout(preciosTimeoutRef.current); setShowPreciosMenu(true) }
  const handlePreciosLeave = () => { preciosTimeoutRef.current = setTimeout(() => setShowPreciosMenu(false), 150) }

  const navLinkStyle = (href: string) => ({
    fontSize: "14px", fontWeight: 500,
    color: isActiveLink(href) ? "#0d9488" : "#334155",
    textDecoration: "none", padding: "4px 0",
    borderBottom: isActiveLink(href) ? "2px solid #0d9488" : "2px solid transparent",
    transition: "color 0.2s, border-color 0.2s",
    cursor: "pointer", background: "none", border: "none", fontFamily: "inherit",
  } as React.CSSProperties)

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      backgroundColor: "#fff", borderBottom: "1px solid #f1f5f9",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image src="/nommy-logo-new.png" alt="NOMMY" width={16} height={16} style={{ height: 16, width: "auto" }} priority />
          <Image src="/nommy-text-new.png" alt="nommy" width={32} height={32} style={{ height: 32, width: "auto" }} priority />
        </Link>

        {/* ── Desktop Menu ── */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {/* Nosotros */}
            <div style={{ position: "relative" }} onMouseEnter={handleNosotrosEnter} onMouseLeave={handleNosotrosLeave}>
              <button style={{ ...navLinkStyle("/nosotros"), display: "flex", alignItems: "center", gap: 4 }}>
                Nosotros
                <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: showNosotrosMenu ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              {showNosotrosMenu && (
                <div style={{ position: "absolute", top: "calc(100% + 16px)", left: 0, backgroundColor: "#fff", borderRadius: 16, boxShadow: "0 8px 40px rgba(0,0,0,0.12)", padding: 20, border: "1px solid #f1f5f9", zIndex: 100, minWidth: 340 }}
                  onMouseEnter={handleNosotrosEnter} onMouseLeave={handleNosotrosLeave}>
                  <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", marginBottom: 12, marginTop: 0 }}>Nosotros</p>
                  <SimpleDropdown items={nosotrosItems} />
                </div>
              )}
            </div>

            {/* Producto */}
            <div style={{ position: "relative" }} onMouseEnter={handleProductEnter} onMouseLeave={handleProductLeave}>
              <button style={{ ...navLinkStyle("/producto"), display: "flex", alignItems: "center", gap: 4 }}>
                Producto
                <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: showProductMenu ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              {showProductMenu && (
                <div style={{ position: "absolute", top: "calc(100% + 16px)", left: "50%", transform: "translateX(-50%)", backgroundColor: "#fff", borderRadius: 16, boxShadow: "0 8px 40px rgba(0,0,0,0.12)", padding: 24, border: "1px solid #f1f5f9", zIndex: 100, minWidth: 760 }}
                  onMouseEnter={handleProductEnter} onMouseLeave={handleProductLeave}>
                  <MegaMenu />
                </div>
              )}
            </div>

            {/* Precios */}
            <div style={{ position: "relative" }} onMouseEnter={handlePreciosEnter} onMouseLeave={handlePreciosLeave}>
              <button style={{ ...navLinkStyle("/precios"), display: "flex", alignItems: "center", gap: 4 }}>
                Precios
                <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: showPreciosMenu ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              {showPreciosMenu && (
                <div style={{ position: "absolute", top: "calc(100% + 16px)", left: 0, backgroundColor: "#fff", borderRadius: 16, boxShadow: "0 8px 40px rgba(0,0,0,0.12)", padding: 20, border: "1px solid #f1f5f9", zIndex: 100, minWidth: 340 }}
                  onMouseEnter={handlePreciosEnter} onMouseLeave={handlePreciosLeave}>
                  <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", marginBottom: 12, marginTop: 0 }}>Precios</p>
                  <SimpleDropdown items={preciosItems} />
                </div>
              )}
            </div>

            {/* Bloggy */}
            <Link href="/resources" style={{ display: "flex", alignItems: "center" }}>
              <Image src="/bloggyy.png" alt="Bloggy" width={64} height={24} style={{ width: 64, height: "auto", marginRight: 8 }} />
            </Link>

            <DemoButton href="/demo" />
          </div>
        )}

        {/* ── Mobile: Demo + Hamburger ── */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <DemoButton href="/demo" mobile />
            <button onClick={() => setIsOpen(!isOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#4abdb9", padding: 4, display: "flex", alignItems: "center" }}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        )}
      </div>

      {/* ── Mobile Drawer ── */}
      {isMobile && isOpen && (
        <div style={{
          backgroundColor: "#fff", borderTop: "1px solid #f1f5f9",
          padding: "8px 24px 24px", display: "flex", flexDirection: "column",
          maxHeight: "80vh", overflowY: "auto",
        }}>
          {mobileSections.map((section) => (
            <MobileAccordion key={section.label} section={section} onClose={() => setIsOpen(false)} />
          ))}
        </div>
      )}
    </nav>
  )
}