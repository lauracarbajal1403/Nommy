"use client"
import { useRef, useState } from "react"

// ── Logos ──────────────────────────────────────────────────────────────────────
const LOGOS = [
  { src: "/Simplytech.png",        alt: "Simplytech"    },
  { src: "/Ricatto.png",           alt: "Ricatto"       },
  { src: "/MXHEALTH.png",          alt: "MX Health"     },
  { src: "/Logo-intela.png",       alt: "Intela"        },
  { src: "/Novogas.png",           alt: "Novogas"       },
  { src: "/Logo_Alertyx_white.png",alt: "Alertyx"       },
  { src: "/Logo.png",              alt: "Logo"          },
  { src: "/Bizhub.png",            alt: "Bizhub"        },
  { src: "/Linkepro.png",          alt: "Linkepro"      },
  { src: "/Factor.png",            alt: "Factor"        },
  { src: "/BrisSandoval.png",      alt: "Bris Sandoval" },
  { src: "/Abogados.png",          alt: "Abogados"      },
]

// ── Logo Card ─────────────────────────────────────────────────────────────────
function LogoCard({ src, alt }: { src: string; alt: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 148,
        height: 88,
        margin: "0 12px",
        flexShrink: 0,
        borderRadius: 16,
        padding: "16px 20px",
        boxSizing: "border-box",
        cursor: "default",
        transition: "background 0.35s, border-color 0.35s, transform 0.35s, box-shadow 0.35s",
        background: hovered
          ? "rgba(255,255,255,0.2)"
          : "rgba(255,255,255,0.1)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)"}`,
        transform: hovered ? "translateY(-4px) scale(1.04)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? "0 8px 32px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.25)"
          : "none",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: "100%",
          maxHeight: 46,
          objectFit: "contain",
          filter: hovered
            ? "brightness(0) invert(1) drop-shadow(0 0 6px rgba(255,255,255,0.5))"
            : "brightness(0) invert(1)",
          opacity: hovered ? 1 : 0.65,
          transition: "opacity 0.35s, filter 0.35s",
        }}
      />
    </div>
  )
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function TrustedBrands() {
  return (
    <section
      style={{
        backgroundColor: "#0d9488",
        padding: "96px 0 80px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 70%)",
      }} />

      {/* ── Heading ── */}
      <div style={{ maxWidth: 900, margin: "0 auto 56px", padding: "0 24px", textAlign: "center", position: "relative" }}>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.15,
          color: "#ffffff", margin: "0 0 20px",
          letterSpacing: "-0.02em",
        }}>
          Únete a las empresas que ya confían en Nommy
        </h2>

        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", maxWidth: 540, margin: "0 auto", lineHeight: 1.6 }}>
          Descubre porqué{" "}
          <strong style={{ color: "#ffffff", fontWeight: 600 }}>todos eligen Nommy</strong>{" "}
          para gestionar su nómina con confianza.
        </p>
      </div>

      {/* ── Divider line ── */}
      <div style={{
        width: "100%", height: 1, marginBottom: 36,
        background: "linear-gradient(to right, transparent, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.25) 70%, transparent)",
      }} />

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>

      {/* ── Single row marquee ── */}
      <div style={{
        overflow: "hidden",
        maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}>
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marqueeScroll 40s linear infinite",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused" }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running" }}
        >
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <LogoCard key={`${logo.alt}-${i}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}