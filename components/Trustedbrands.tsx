"use client"
import { useEffect, useRef, useState } from "react"

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

// Split into two rows
const ROW_A = LOGOS.slice(0, 6)
const ROW_B = LOGOS.slice(6, 12)

// ── Animated Counter ──────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const step = target / (duration / 16)
          let current = 0
          const timer = setInterval(() => {
            current = Math.min(current + step, target)
            setCount(Math.floor(current))
            if (current >= target) clearInterval(timer)
          }, 16)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

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
          ? "rgba(45,212,191,0.12)"
          : "rgba(255,255,255,0.05)",
        border: `1px solid ${hovered ? "rgba(45,212,191,0.5)" : "rgba(255,255,255,0.08)"}`,
        transform: hovered ? "translateY(-4px) scale(1.04)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? "0 8px 32px rgba(45,212,191,0.18), 0 0 0 1px rgba(45,212,191,0.15)"
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
            ? "brightness(0) invert(1) drop-shadow(0 0 6px rgba(45,212,191,0.6))"
            : "brightness(0) invert(1)",
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.35s, filter 0.35s",
        }}
      />
    </div>
  )
}

// ── Marquee Row ───────────────────────────────────────────────────────────────
function MarqueeRow({
  logos,
  duration = "38s",
  reverse = false,
}: {
  logos: typeof LOGOS
  duration?: string
  reverse?: boolean
}) {
  // Triple-duplicate for seamless loop
  const items = [...logos, ...logos, ...logos]
  const animName = reverse ? "marqueeRev" : "marqueeFwd"

  return (
    <div
      style={{
        overflow: "hidden",
        maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        marginBottom: 12,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `${animName} ${duration} linear infinite`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"
        }}
      >
        {items.map((logo, i) => (
          <LogoCard key={`${logo.alt}-${i}`} src={logo.src} alt={logo.alt} />
        ))}
      </div>

      <style>{`
        @keyframes marqueeRev {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqueeRevReverse {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        @keyframes marqueeRev { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        @keyframes marqueeRevRev { 0% { transform: translateX(-33.333%); } 100% { transform: translateX(0); } }
        @keyframes marqueeRev { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        @keyframes marqueeRevrev { 0%{transform:translateX(-33.333%)} 100%{transform:translateX(0)} }
        @keyframes marqueeRev  { 0%{transform:translateX(0)}         100%{transform:translateX(-33.333%)} }
        @keyframes marqueeRevR { 0%{transform:translateX(-33.333%)} 100%{transform:translateX(0)}        }
        @keyframes marqueeRev { 0%{transform:translateX(0)} 100%{transform:translateX(-33.333%)} }
        @keyframes marqueeRevX{ 0%{transform:translateX(-33.333%)} 100%{transform:translateX(0)} }
      `}</style>
    </div>
  )
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function TrustedBrands() {
  return (
    <section
      style={{
        backgroundColor: "#060f1e",
        padding: "96px 0 80px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle mesh glow background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(45,212,191,0.07) 0%, transparent 70%)",
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

        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.55)", maxWidth: 540, margin: "0 auto", lineHeight: 1.6 }}>
          Descubre porqué{" "}
          <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>todos eligen Nommy</strong>{" "}
          para gestionar su nómina con confianza.
        </p>

        
      </div>

      {/* ── Divider line ── */}
      <div style={{
        width: "100%", height: 1, marginBottom: 36,
        background: "linear-gradient(to right, transparent, rgba(45,212,191,0.2) 30%, rgba(45,212,191,0.2) 70%, transparent)",
      }} />

      {/* ── Two-row marquee ── */}
      <style>{`
        @keyframes marqueeRev { 0%{transform:translateX(0)} 100%{transform:translateX(-33.333%)} }
        @keyframes marqueeFwd { 0%{transform:translateX(-33.333%)} 100%{transform:translateX(0)} }
      `}</style>

      {/* Row 1 — left */}
      <div style={{ overflow: "hidden", maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)", marginBottom: 12 }}>
        <div
          style={{ display: "flex", width: "max-content", animation: "marqueeRev 38s linear infinite" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused" }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running" }}
        >
          {[...ROW_A, ...ROW_A, ...ROW_A].map((logo, i) => (
            <LogoCard key={`a-${logo.alt}-${i}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>

      {/* Row 2 — right */}
      <div style={{ overflow: "hidden", maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)" }}>
        <div
          style={{ display: "flex", width: "max-content", animation: "marqueeFwd 44s linear infinite" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused" }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running" }}
        >
          {[...ROW_B, ...ROW_B, ...ROW_B].map((logo, i) => (
            <LogoCard key={`b-${logo.alt}-${i}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}