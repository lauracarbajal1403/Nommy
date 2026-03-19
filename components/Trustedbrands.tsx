"use client"
import { useState, useEffect } from "react"

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
function LogoCard({ src, alt, isMobile }: { src: string; alt: string; isMobile: boolean }) {
  return (
    <img
      key={alt}
      src={src}
      alt={alt}
      style={{
        height: isMobile ? '28px' : '36px',
        width: 'auto',
        objectFit: 'contain',
        opacity: 0.55,
        filter: 'grayscale(1)',
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '0.55')}
    />
  )
}

// ── Trusted Brands ────────────────────────────────────────────────────────────
export default function TrustedBrands() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section style={{ padding: isMobile ? '32px 0' : '60px 0', backgroundColor: '#1b2436', overflow: 'hidden' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.12em', marginBottom: '28px', textAlign: 'center' }}>
          EMPRESAS QUE YA TRANSFORMARON SU NÓMINA
        </p>
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .logo-track {
            display: flex;
            align-items: center;
            width: max-content;
            animation: marquee 28s linear infinite;
          }
          .logo-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div className="logo-track">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div key={i} style={{
                width: isMobile ? '120px' : '160px',
                height: isMobile ? '56px' : '72px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: isMobile ? '40px' : '64px',
              }}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    opacity: 0.35,
                    filter: 'grayscale(1)',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.35')}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}