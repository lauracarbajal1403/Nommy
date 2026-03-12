"use client"
import { useRef } from "react"

export default function RibbonBanner() {
  const trackRef = useRef<HTMLDivElement>(null)

  const text =
    "Este mes de marzo tenemos algo especial para ti: al contratar, obtienes un descuento extra en tu plan. Disponible por tiempo limitado. Aplican términos y condiciones*"

  const segments = Array.from({ length: 8 }, (_, i) => i)
  const copies = [0, 1] // duplicado para loop infinito

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        padding: "24px 0",
        position: "relative",
        background: "transparent",
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 120,
          background:
            "linear-gradient(to right, var(--ribbon-bg, #0a0f1e), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: 120,
          background:
            "linear-gradient(to left, var(--ribbon-bg, #0a0f1e), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Scrolling track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          width: "max-content",
          animation: "ribbonScroll 120s linear infinite", // más lento
        }}
        onMouseEnter={() => {
          if (trackRef.current)
            trackRef.current.style.animationPlayState = "paused"
        }}
        onMouseLeave={() => {
          if (trackRef.current)
            trackRef.current.style.animationPlayState = "running"
        }}
      >
        {copies.map((copy) => (
          <div key={copy} style={{ display: "flex" }}>
            {segments.map((i) => (
              <div
                key={`${copy}-${i}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: 58,
                  padding: "0 36px",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  whiteSpace: "nowrap",
                  userSelect: "none",
                  textTransform: "uppercase",
                  background:
                    i % 2 === 0
                      ? "linear-gradient(90deg, #00bcd4 0%, #1a5276 100%)"
                      : "linear-gradient(90deg, #1a5276 0%, #0d2b45 100%)",
                  color: i % 2 === 0 ? "#e8f8fa" : "#7ed6e0",
                  borderRight: "2px solid rgba(0,188,212,0.15)",
                }}
              >
                {text}
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ribbonScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}