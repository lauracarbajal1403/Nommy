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
      <div
        ref={trackRef}
        style={{
          display: "flex",
          width: "max-content",
          animation: "ribbonScroll 120s linear infinite",
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
                  background: i % 2 === 0 ? "#00bcd4" : "#1a5276",
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