"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import confetti from "canvas-confetti"

export default function FloatingDiscount() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const show = setTimeout(() => {
      setVisible(true)
      fireConfetti()
    }, 2000)
    const hide = setTimeout(() => setVisible(false), 10000)
    return () => { clearTimeout(show); clearTimeout(hide) }
  }, [])

  function fireConfetti() {
    // Ráfaga desde la izquierda
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors: ["#2dd4bf", "#0f766e", "#ffffff", "#facc15", "#f472b6"],
    })
    // Ráfaga desde la derecha
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors: ["#2dd4bf", "#0f766e", "#ffffff", "#facc15", "#f472b6"],
    })
    // Tercer disparo central con un pequeño delay
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
        width: 0,
        height: 0,
        borderLeft: "14px solid transparent",
        borderRight: "14px solid transparent",
        borderTop: "16px solid #0f766e",
      }} />

      {/* Burbuja nube — 600 × 400 */}
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
        {/* Botón cerrar */}
        <button
          onClick={() => { setVisible(false); setTimeout(() => setDismissed(true), 500) }}
          className="bg-navy hover:bg-turquoise transition"
          style={{
            position: "absolute",
            top: "10px",
            right: "12px",
            border: "none",
            borderRadius: "50%",
            width: "22px",
            height: "22px",
            cursor: "pointer",
            color: "white",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
          className="bg-navy hover:bg-turquoise text-white font-bold px-6 py-3 rounded-full text-center transition"
          style={{ fontSize: "18px", marginTop: "16px", textDecoration: "none" }}
        >
          ▶ ¡Agenda tu demo hoy!
        </Link>

        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", margin: "10px 0 0", textAlign: "center" }}>
          Aplican términos y condiciones
        </p>
      </div>
    </div>
  )
}