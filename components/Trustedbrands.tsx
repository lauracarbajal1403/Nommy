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

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section style={{
      padding: isMobile ? '32px 20px' : '48px 24px',
      backgroundColor: '#1a2e4a',
   
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{
          fontSize: '11px',
          fontWeight: 700,
          color: '#4db8a8',
          letterSpacing: '0.12em',
          marginBottom: '24px',
        }}>
          CONFÍAN EN NOMMY 
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isMobile ? '24px' : '40px',
          flexWrap: 'wrap',
        }}>
          {LOGOS.map((logo) => (
            <LogoCard key={logo.alt} src={logo.src} alt={logo.alt} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  )
}