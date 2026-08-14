"use client"
import Link from "next/link"
import { useEffect, useState, useRef, FormEvent } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollAnimation from "@/components/scroll-animation"
import NominikChatbot from "@/app/nominik"
import NommyCalculator from "@/components/NommyCalculator"
import emailjs from "@emailjs/browser"
import FloatingDiscount from "@/components/FloatingDiscount"

import TrustedBrands from "@/components/Trustedbrands";

const PHRASES = ["gestionar tu talento", "reducir errores", "ahorrar tiempo", "optimizar tu nómina"];

const METRICS_DATA = [
  {
    id: 'timbres_3m',
    icon: FileCheck2,
    prefix: '≈ ',
    value: '3 Millones',
    label: 'Timbres de recibos procesados',
    sublabel: 'Sin un solo error fiscal ni interrupción operativa desde 2014',
    highlightText: '+2.99M de recibos respaldados ante el SAT',
  },
  {
    id: 'ahorro_horas',
    icon: Clock,
    prefix: '',
    value: '15 minutos',
    label: 'Para calcular y dispersar tu nómina',
    sublabel: 'Reduciendo un 90% el tiempo manual por periodo de pago',
    highlightText: 'Ahorras hasta 12 horas hombre por semana',
  },
  {
    id: 'clientes_activos',
    icon: Building2,
    prefix: '',
    value: '+880',
    label: 'Empresas confían en Nommy',
    sublabel: 'Procesando la nómina de miles de colaboradores en México',
    highlightText: 'Crecimiento sostenido año con año',
  },
  {
    id: 'cero_multas',
    icon: ShieldCheck,
    prefix: '',
    value: '100%',
    label: 'Cumplimiento normativo SAT e IMSS',
    sublabel: 'Actualización automática con las reformas laborales más recientes',
    highlightText: 'Cero multas ni recargos fiscales',
  },
  {
    id: 'roi_meses',
    icon: TrendingUp,
    prefix: '',
    value: '30 días',
    label: 'Para generar retorno de inversión',
    sublabel: 'Recuperación de inversión por eliminación de errores y tiempos muertos',
    highlightText: 'Implementación guiada en menos de 5 días',
  },
  {
    id: 'adopcion_app',
    icon: Users,
    prefix: '',
    value: '96%',
    label: 'Tasa de adopción de colaboradores',
    sublabel: 'Descargan sus recibos de nómina y solicitan vacaciones desde su celular',
    highlightText: 'Reducción del 85% en tickets de atención a RH',
  },
];
function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [breakpoint])
  return isMobile
}

function AnimatedPhrase() {
  const [displayText, setDisplayText] = useState(PHRASES[0]);
  const [isErasing, setIsErasing] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(PHRASES[0].length);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!isErasing && charIndex === PHRASES[phraseIndex].length) {
      timeout = setTimeout(() => setIsErasing(true), 9000);
    } else if (isErasing && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (isErasing && charIndex === 0) {
      const next = (phraseIndex + 1) % PHRASES.length;
      setPhraseIndex(next);
      setIsErasing(false);
    } else if (!isErasing && charIndex < PHRASES[phraseIndex].length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isErasing, phraseIndex]);

  useEffect(() => {
    setDisplayText(PHRASES[phraseIndex].slice(0, charIndex));
  }, [charIndex, phraseIndex]);

  return (
    <span className="relative inline-block">
      <span>{displayText}</span>
      <span className="inline-block w-[3px] h-[1em] bg-white ml-[2px] align-middle"
        style={{ animation: "blink 0.75s step-end infinite" }} />
      <span className="absolute left-0 -bottom-2 h-2 rounded-full rotate-[-1deg]"
        style={{ width: "100%", background: "var(--turquoise, #2dd4bf)", transition: "width 0.1s" }} />
      <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
    </span>
  );
}


export default function HomeClient() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
  })
  const isMobile = useIsMobile()

  // Frase del hero que se intercala entre dos mensajes
  const [heroSlide, setHeroSlide] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setHeroSlide((s) => (s + 1) % 2), 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="overflow-hidden">

      <style>{`
        @keyframes heroFade {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-fade { animation: heroFade 0.6s ease; }
      `}</style>

      <NominikChatbot />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-navy to-turquoise overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left text-white">
              {/* Logo encima del título */}

              <h1 className="sr-only">Nommy: Plataforma de RRHH y gestión de nómina en México</h1>

              {/* ── Frase que se intercala ── */}
              <div key={heroSlide} className="hero-fade">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 min-h-[150px] lg:min-h-[190px]">
                  {heroSlide === 0 ? (
                    <>
                      Una{" "}
                      <span className="text-turquoise text-4xl sm:text-5xl lg:text-6xl">plataforma de RRHH</span>{" "}
                      360° que simplifica la gestión de talento
                    </>
                  ) : (
                    <>
                      Cierra tu nómina quincenal en menos de
                      <span className="block text-turquoise text-6xl sm:text-7xl lg:text-8xl mt-2">10 mins</span>
                    </>
                  )}
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-xl min-h-[3.5em]">
                  {heroSlide === 0 ? (
                    <>Digitaliza tu gestión de talento sin procesos largos ni complicaciones en <strong>menos de 30 días</strong></>
                  ) : (
                    <>Calculo realizado a partir de 50 colaboradores</>
                  )}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/demo" target="_blank" rel="noopener noreferrer"
                  className="bg-turquoise hover:bg-navy text-white font-bold px-6 py-3 rounded-full text-center transition">
                  ¡Agenda tu DEMO!
                </Link>
                <Link href="/demo" target="_blank" rel="noopener noreferrer"
                  className="bg-navy hover:bg-turquoise text-white font-bold px-6 py-3 rounded-full text-center transition">
                  ▶ Ver como funciona
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium">
                <div className="flex items-center gap-2"><Check className="text-turquoise w-5 h-5" /><span>0 Costo implementación</span></div>
                <div className="flex items-center gap-2"><Check className="text-turquoise w-5 h-5" /><span>Soporte 24/7</span></div>
              </div>
            </div>

            {/* ── Hero image: mobile vs desktop ── */}
            {isMobile ? (
              <div style={{ display: "flex", justifyContent: "center", paddingTop: 8 }}>

                  <img
                    src="/Conjunto.png"
                    alt="Dashboard de NOMMY en celular"
                    style={{ width: "100%", maxWidth: 280, borderRadius: 20, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                  />

              </div>
            ) : (
              <div className="relative w-full max-w-2xl mx-auto lg:mx-0" style={{ minHeight: "500px" }}>
                {/* Tablet - atrás */}

                    <img src="/Conjunto.png" alt="Dashboard de NOMMY en tablet" className="w-full rounded-xl shadow-2xl" />

              </div>
            )}

          </div>
        </div>

      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">Todo lo que necesitas</h2>
            <p className="text-lg text-turquoise max-w-2xl mx-auto">
              Centraliza la gestión de nómina, talento y más beneficios en una <span className="font-semibold">sola experiencia.</span>
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-8">
            {[
              { img: "/estrategia.png", title: "Optimiza tu estrategia de nómina con Nommy", desc: "Nommy automatiza procesos de nómina tediosos reduciendo errores, centralizando toda tu gestión de los colaboradores en una sola plataforma intuitiva." },
              { img: "/mov.png", title: "Sincronización de movimientos afiliatorios en tiempo", desc: "Optimiza tu carga fiscal cumpliendo con todas las normativas del SAT y leyes laborales vigentes." },
              { img: "/ia.png", title: "Reclutamiento con Nommy IA", desc: "El match perfecto entre tu empresa y el talento que buscas." },
            ].map((card, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <img src={card.img} alt={`Ícono: ${card.title}`} className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-turquoise text-lg mb-3">{card.title}</h3>
                <p className="text-sm text-navy leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustedBrands/>
      <NommyCalculator />

      {/* Resultados / Métricas */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-[#f8fafc] relative">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-tight leading-tight">
            <span className="text-turquoise font-medium">MÁS EXPERIENCIA. MÁS NÓMINAS. </span>{' '}
            <span className="font-bold text-navy block sm:inline mt-1 sm:mt-0">
              MÁS CONFIANZA.
            </span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto">
            La experiencia de Nommy se mide en millones de operaciones procesadas con precisión y respaldo.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {METRICS_DATA.map((item) => {
              const Icon = item.icon
              const isSelected = selectedMetricId === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedMetricId(item.id)}
                  className={`group relative text-left px-5 sm:px-6 py-6 transition-all duration-300 flex flex-col items-center text-center rounded-xl bg-white border ${
                    isSelected
                      ? 'shadow-lg shadow-turquoise/10 ring-2 ring-turquoise scale-[1.02] border-transparent'
                      : 'border-slate-200/80 hover:shadow-md'
                  }`}
                >
                  <Icon className="w-7 h-7 text-turquoise mb-3" />

                  <div className="text-3xl sm:text-4xl font-extrabold text-turquoise tracking-tight">
                    <span className="text-xl font-semibold opacity-75">{item.prefix}</span>
                    {item.value}
                  </div>

                  <p className="mt-3 text-sm font-semibold text-navy leading-snug">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 leading-snug">
                    {item.sublabel}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 w-full text-[11px] text-slate-500 font-medium flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-turquoise shrink-0" />
                    <span>{item.highlightText}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-14 text-center border-t border-slate-200/80 pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-navy bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-turquoise" />
            <span>Garantía de Cero Multas por Timbrado SAT e IMSS</span>
          </div>

          <Link
            href="/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-turquoise hover:bg-navy text-white font-bold text-xs tracking-wide shadow-md transition transform hover:-translate-y-0.5 inline-flex items-center group"
          >
            Solicitar Demostración de Impacto
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
      


      {/* Enterprise Trust Metrics */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-gradient-to-br from-slate-950 to-slate-900 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* HEADER SECTION */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>Garantía de Solidez Fiscal & Seguridad de Marca</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Más de {' '} de timbres procesados. La experiencia de Nommy habla por nosotros.
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                 3 millones
              </span>
            </h2>

            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Años de experiencia, miles de operaciones y empresas que confían en una nómina precisa, rápida y segura.
            </p>
          </div>

          {/* 4 ENTERPRISE METRIC CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* CARD 1: TIMBRES ACUMULADOS */}
            <div className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 p-6 rounded-2xl space-y-3 transition group relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  2014 - 2025
                </span>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-emerald-400 transition">
                  ≈ 3.0 M
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">
                  Timbres de Recibos
                </p>
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                Total acumulado de recibos de nómina timbrados de forma exacta sin discrepancias con el SAT.
              </p>
            </div>

            {/* CARD 2: CLIENTES ACTIVOS */}
            <div className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl space-y-3 transition group relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                  Crecimiento Sustentable
                </span>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-cyan-400 transition">
                  881
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">
                  Empresas Clientes
                </p>
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                Empresas activas en México que procesan la nómina de sus equipos cada semana y quincena.
              </p>
            </div>

            {/* CARD 3: EMPLEADOS IMSS */}
            <div className="bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 p-6 rounded-2xl space-y-3 transition group relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Database className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
                  IMSS & INFONAVIT
                </span>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-blue-400 transition">
                  6,202
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">
                  Empleados Gestionados
                </p>
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                Colaboradores registrados con avisos afiliatorios y cálculo preciso de amortizaciones.
              </p>
            </div>

            {/* CARD 4: DISPONIBILIDAD Y CERO ERRORES */}
            <div className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 p-6 rounded-2xl space-y-3 transition group relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                  Garantía 100%
                </span>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-amber-400 transition">
                  0 Multas
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">
                  Riesgo Fiscal Cero
                </p>
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                Garantía por contrato de actualización con las normativas fiscales vigentes del CFF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* +15 años de experiencia */}
      <section className="relative py-20 bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slide-in-left">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-turquoise">+15 años de experiencia</span>{" "}
                <span className="text-white">en la industria de RRHH</span>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Miles de nóminas procesadas con precisión y respaldo.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        {/* Logo inferior izquierdo */}
      </section>

      {/* +15 años de experiencia */}
      <section className="relative py-20 bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slide-in-left">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-turquoise">+15 años de experiencia</span>{" "}
                <span className="text-white">en la industria de RRHH</span>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Miles de nóminas procesadas con precisión y respaldo.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        {/* Logo inferior izquierdo */}
      </section>

      <section className="relative bg-gradient-to-br from-navy to-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            <ScrollAnimation animation="slide-in-left">
              <div className="space-y-8 text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  En optimizar procesos, reducir errores y ahorrar costos
                </h2>
                <div className="space-y-4">
                  {[
                    "Nómina precisa y timbrada automáticamente",
                    "Gestión con registro inteligente de incidencias",
                    "Conexión directa con IDSE",
                    "Reclutamiento avanzado impulsado con IA",
                    "Todo tu control en un solo sistema",
                  ].map((benefit, index) => (
                    <ScrollAnimation key={index} delay={index * 200}>
                      <div className="flex items-center space-x-3 group">
                        <img src="/Icono.png" alt={benefit} className="w-6 h-6 flex-shrink-0" />
                        <span className="text-lg text-white">{benefit}</span>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-in-right">
              <div className="relative flex justify-center">
                <img src="/dashi.png" alt="Dashboard nommy" className="w-full-mx-auto" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>





      {/* Steps */}
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Simple, rápido y seguro</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Olvida las implementaciones eternas. Con Nommy, estarás operativo en lo que tardas en leer esto.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <img src="/Monofinal.png" alt="Proceso simple Nommy" className="w-full max-w-sm" />
            </div>
            <div className="space-y-8">
              {[
                { n: 1, title: "Crea tu empresa", desc: "Ingresa los datos de la empresa la cual deseas realizar el cálculo de nómina." },
                { n: 2, title: "Agrega a tus colaboradores", desc: "Carga de manera manual o masiva el listado de tus colaboradores en minutos usando nuestras plantillas de Excel." },
                { n: 3, title: "Timbrado de Nómina", desc: "Obtén los layouts bancarios para desarrollar el respectivo timbrado de tu nómina y listo así de fácil es calcular tu nómina con Nommy." },
              ].map((step) => (
                <div key={step.n} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-turquoise flex items-center justify-center font-bold">{step.n}</div>
                  <div>
                    <h3 className="font-semibold mb-1 text-2xl">{step.title}</h3>
                    <p className="text-white/80 text-xl leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              ¿Eres de los que hacen que las cosas pasen?{" "}
              <span className="text-turquoise">Nosotros también.</span>
            </h2>
            <p className="mt-4 text-lg text-turquoise max-w-3xl mx-auto">
              Ya seas la mente que decide, las manos que ejecutan o el motor que lo hace posible. Te acompañamos en los focos y en el día a día.
            </p>
          </div>
        </div>
        <div className="bg-turquoise py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "01", href: "https://rrhh.nommy.mx", title: "Líderes RRHH", desc: "Convierte procesos en estrategia y talento en imparable." },
                { n: "02", href: "https://empresas.nommy.mx", title: "Dueño de empresa", desc: "Tu empresa, tu visión, tu control. Sin sorpresas." },
                { n: "03", href: "https://negocios.nommy.mx", title: "Alas para tu negocio", desc: "Es momento de despegar de la mano de Nommy." },
                { n: "04", href: "https://despachos.nommy.mx", title: "Despachos Contables", desc: "Unifica la gestión de tus clientes, controla la rentabilidad por proyecto y haz crecer tu equipo sin perder de vista los plazos clave." },
              ].map((card, i, arr) => (
                <a
                  key={card.n}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-8 text-white border-white/20 ${i < arr.length - 1 ? "lg:border-r" : ""}`}
                >
                  <div className="text-white/70 font-semibold mb-6">{card.n}</div>
                  <h3 className="font-bold text-xl text-white mb-2">{card.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{card.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-20 bg-gradient-to-br from-navy to-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollAnimation>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              Control <span className="text-turquoise">TOTAL</span> sin curva técnica
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Únete a cientos de empresas que confían en NOMMY para gestionar su nómina de manera eficiente y sin curva de aprendizaje.
            </p>
            <Link href="/demo" target="_blank" rel="noopener noreferrer"
              className="bg-white text-navy px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center group btn-shadow">
              ¡DEMO GRATIS!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

    </div>
  )
}
