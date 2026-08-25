"use client"

const LOGOS = [
  { src: "/Simplytech.png",         alt: "Simplytech"    },
  { src: "/Ricatto.png",            alt: "Ricatto"       },
  { src: "/MXHEALTH.png",           alt: "MX Health"     },
  { src: "/Logo-intela.png",        alt: "Intela"        },
  { src: "/Novogas.png",            alt: "Novogas"       },
  { src: "/Logo_Alertyx_white.png", alt: "Alertyx"       },
  { src: "/Logo.png",               alt: "Logo"          },
  { src: "/Bizhub.png",             alt: "Bizhub"        },
  { src: "/Linkepro.png",           alt: "Linkepro"      },
  { src: "/Factor.png",             alt: "Factor"        },
  { src: "/BrisSandoval.png",       alt: "Bris Sandoval" },
  { src: "/Abogados.png",           alt: "Abogados"      },
  { src: "/Clarioblanco.png",       alt: "Clarioblanco"  },
  { src: "/moresca.png",            alt: "Moresca"       },
  { src: "/Napoles.png",            alt: "Napoles"       },
  { src: "/BP.png",                 alt: "BP"            },
]

export default function TrustedBrands() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .trusted-section {
          padding: 60px 0;
          background-color: #1b2436;
          overflow: hidden;
        }
        .trusted-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 32px;
          padding: 0 16px;
          text-align: center;
        }
        .trusted-label {
          margin: 0;
          font-size: 34px;
          font-weight: 800;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .trusted-label-uno {
          margin: 0;
          font-size: 34px;
          font-weight: 500;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .trusted-label-white { color: #ffffff; }
        .trusted-label-teal  { color: #2dd4bf; }
        .trusted-subtitle {
          margin: 0;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.4;
          color: #9aa6ba;
        }
        .trusted-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: 1px solid rgba(45,212,191,0.55);
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: 600;
          color: #2dd4bf;
          letter-spacing: 0.04em;
          margin-top: 4px;
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
        .logo-slot {
          width: 140px;
          height: 88px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 40px;
        }
        .logo-slot img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0.35;
          filter: grayscale(1);
          transition: opacity 0.2s;
        }
        .logo-slot img:hover {
          opacity: 0.8;
        }
        @media (max-width: 767px) {
          .trusted-section { padding: 32px 0; }
          .trusted-label { font-size: 22px; }
          .trusted-subtitle { font-size: 13px; }
          .logo-slot { width: 110px; height: 64px; margin-right: 28px; }
        }
      `}</style>

      <section className="trusted-section">
        <div className="trusted-header">
          <p className="trusted-label-uno">
            <span className="trusted-label-white">A lo largo de más de</span><span className="bg-white text-navy font-bold "> 15 años de trayectoria</span>
          </p>
          <p className="trusted-label">
            <span className="trusted-label-white">+7,500 EMPRESAS </span>
            <span className="trusted-label-teal">CONFÍAN SU NÓMINA A NOMMY,</span>
          </p>
          <p className="trusted-subtitle">
            En todo México, convertimos startups en empresas consolidadas.
          </p>
        </div>

        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div className="logo-track">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div key={i} className="logo-slot">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}