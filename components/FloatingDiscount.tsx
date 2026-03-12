"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import confetti from "canvas-confetti"

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [breakpoint])
  return isMobile
}

export default function FloatingDiscount() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const show = setTimeout(() => {
      setVisible(true)
      fireConfetti()
    }, 2000)
    const hide = setTimeout(() => setVisible(false), 10000)
    return () => { clearTimeout(show); clearTimeout(hide) }
  }, [])

  function fireConfetti() {
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors: ["#2dd4bf", "#0f766e", "#ffffff", "#facc15", "#f472b6"],
    })
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors: ["#2dd4bf", "#0f766e", "#ffffff", "#facc15", "#f472b6"],
    })
    setTimeout(() => {
      confetti({
        particleCount: 40,
        angle: 90,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
        colors: ["#2dd4bf", "#0f766e", "#ffffff", "#facc15", "#f472b6"],
        scalar: 1.2,
      })
    }, 200)
  }

  if (dismissed) return null

  // ── Mobile: bottom sheet ──────────────────────────────────────────────────
  if (isMobile) {
    return (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.45s cubic-bezier(0.34, 1.3, 0.64, 1)",
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <div style={{
          background: "linear-gradient(135deg, #0f766e, #2dd4bf)",
          borderRadius: "24px 24px 0 0",
          padding: "28px 24px 36px",
          boxShadow: "0 -8px 40px rgba(45, 212, 191, 0.4)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}>
          {/* Drag handle */}
          <div style={{
            width: 40, height: 4, borderRadius: 2,
            backgroundColor: "rgba(255,255,255,0.4)",
            marginBottom: 20,
          }} />

          {/* Botón cerrar */}
          <button
            onClick={() => { setVisible(false); setTimeout(() => setDismissed(true), 500) }}
            style={{
              position: "absolute",
              top: 16, right: 16,
              border: "none", borderRadius: "50%",
              width: 28, height: 28,
              cursor: "pointer",
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "white",
              fontSize: "14px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >✕</button>

          <p style={{
            color: "rgba(255,255,255,0.85)", fontSize: "14px",
            margin: "0 0 4px", fontWeight: 500, textAlign: "center",
          }}>
            Oferta limitada
          </p>

          <p style={{
            color: "white", fontSize: "42px", fontWeight: 700,
            margin: "0 0 4px", lineHeight: 1.1, textAlign: "center",
          }}>
            Descuento<br />hasta 60% 🎉
          </p>

          <Link
            href="/demo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 20,
              backgroundColor: "#0f172a",
              color: "white",
              fontWeight: 700,
              fontSize: "16px",
              padding: "14px 32px",
              borderRadius: "999px",
              textDecoration: "none",
              width: "100%",
              textAlign: "center",
              display: "block",
              boxSizing: "border-box",
            }}
          >
            ▶ ¡Agenda tu demo hoy!
          </Link>

          <p style={{
            color: "rgba(255,255,255,0.65)", fontSize: "11px",
            margin: "12px 0 0", textAlign: "center",
          }}>
            Aplican términos y condiciones*
          </p>
        </div>
      </div>
    )
  }

  // ── Desktop: modal centrado (original) ────────────────────────────────────
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: visible
          ? "translate(-50%, -50%) scale(1)"
          : "translate(-50%, -50%) scale(0.8)",
        zIndex: 9999,
        transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Cola de la nube */}
      <div style={{
        position: "absolute",
        bottom: "-14px",
        right: "36px",
        width: 0, height: 0,
        borderLeft: "14px solid transparent",
        borderRight: "14px solid transparent",
        borderTop: "16px solid #0f766e",
      }} />

      {/* Burbuja */}
      <div style={{
        background: "linear-gradient(135deg, #0f766e, #2dd4bf)",
        borderRadius: "24px",
        padding: "40px 56px",
        boxShadow: "0 16px 48px rgba(45, 212, 191, 0.45)",
        width: "600px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        boxSizing: "border-box",
      }}>
        <button
          onClick={() => { setVisible(false); setTimeout(() => setDismissed(true), 500) }}
          style={{
            position: "absolute", top: "10px", right: "12px",
            border: "none", borderRadius: "50%",
            width: "22px", height: "22px",
            cursor: "pointer",
            backgroundColor: "rgba(255,255,255,0.2)",
            color: "white", fontSize: "12px",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >✕</button>

        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "20px", margin: "0 0 6px", fontWeight: 500, textAlign: "center" }}>
          Oferta limitada
        </p>
        <p style={{ color: "white", fontSize: "60px", fontWeight: 700, margin: "0 0 4px", lineHeight: 1.1, textAlign: "center" }}>
          Descuento<br />hasta 60% 🎉
        </p>

        <Link
          href="/demo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#0f172a", color: "white",
            fontWeight: 700, fontSize: "18px",
            padding: "12px 24px", borderRadius: "999px",
            textDecoration: "none", marginTop: "16px",
          }}
        >
          ▶ ¡Agenda tu demo hoy!
        </Link>

        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", margin: "10px 0 0", textAlign: "center" }}>
          Aplican términos y condiciones*
        </p>
      </div>
    </div>
  )
}