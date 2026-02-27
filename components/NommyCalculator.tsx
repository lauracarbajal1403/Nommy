"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Check } from "lucide-react"

// ─── Calculation Logic ────────────────────────────────────────────────────────

function calcGastosOmision(salario, colaboradores) {
  const nomina = salario * colaboradores * 12
  return nomina * 0.167
}

function calcAhorroProductividad(colaboradores) {
  const base = Math.floor(colaboradores / 70) * 3035
  const extras = Math.floor((colaboradores % 70) / 10) * (3035 / 7)
  return base + extras
}

function calcRiesgoMultas(colaboradores) {
  if (colaboradores <= 10) return 23000
  return 23000 + (colaboradores - 10) * 2340
}

function calcAhorroTiempo(colaboradores) {
  const grupos = colaboradores / 70
  return Math.min(grupos * 20, 80)
}

function calcAhorroPesos(salario, colaboradores) {
  const personalRRHH = Math.ceil(colaboradores / 70)
  const costoRRHH = personalRRHH * 18000 * 12
  const porcentaje = calcAhorroTiempo(colaboradores) / 100
  return costoRRHH * porcentaje
}

// ─── Animated Number ──────────────────────────────────────────────────────────

function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }) {
  const [display, setDisplay] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(null)
  const startValRef = useRef(0)

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    startRef.current = null
    const from = startValRef.current
    const to = value
    const duration = 600

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp
      const progress = Math.min((timestamp - startRef.current) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = from + (to - from) * ease
      startValRef.current = current
      setDisplay(current)
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [value])

  const formatted =
    decimals > 0
      ? display.toLocaleString("es-MX", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : Math.round(display).toLocaleString("es-MX")

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

// ─── Slider ───────────────────────────────────────────────────────────────────

function Slider({ label, value, min, max, step = 1, onChange, prefix = "", suffix = "", icon }) {
  const pct = ((value - min) / (max - min)) * 100
  const [inputVal, setInputVal] = useState(String(value))
  const [isFocused, setIsFocused] = useState(false)

  // Keep inputVal in sync when value changes externally (e.g. slider drag)
  useEffect(() => {
    if (!isFocused) {
      setInputVal(String(value))
    }
  }, [value, isFocused])

  const handleInputChange = (e) => {
    // Allow only digits
    const raw = e.target.value.replace(/\D/g, "")
    setInputVal(raw)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
    const parsed = parseInt(inputVal, 10)
    if (!isNaN(parsed)) {
      const clamped = Math.min(Math.max(parsed, min), max)
      // Round to nearest step
      const stepped = Math.round(clamped / step) * step
      onChange(stepped)
      setInputVal(String(stepped))
    } else {
      setInputVal(String(value))
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") e.target.blur()
  }

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-gray-500">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-medium">{label}</span>
        </div>

        {/* Editable value badge */}
        <div
          className="flex items-center gap-0.5 rounded-lg px-2 py-1 text-sm font-semibold text-gray-800 border transition-all duration-150"
          style={{
            background: isFocused ? "rgba(0,188,212,0.06)" : "#f9fafb",
            borderColor: isFocused ? "#00bcd4" : "#e5e7eb",
            boxShadow: isFocused ? "0 0 0 3px rgba(0,188,212,0.12)" : "none",
          }}
        >
          {prefix && <span className="text-gray-500">{prefix}</span>}
          <input
            type="text"
            inputMode="numeric"
            value={isFocused ? inputVal : value.toLocaleString("es-MX")}
            onFocus={() => {
              setIsFocused(true)
              setInputVal(String(value))
            }}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            className="bg-transparent outline-none text-right font-semibold text-gray-800"
            style={{
              width: `${Math.max(String(value).length, 3) + 1}ch`,
              minWidth: "3ch",
              maxWidth: "8ch",
            }}
            title="Escribe un valor directamente"
          />
          {suffix && <span className="text-gray-500 whitespace-nowrap">{suffix}</span>}
        </div>
      </div>

      <div className="relative h-1.5 bg-gray-200 rounded-full">
        <div
          className="absolute h-1.5 rounded-full transition-all duration-150"
          style={{ width: `${pct}%`, background: "linear-gradient(90deg, #0d3b6e, #00bcd4)" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
          style={{ zIndex: 10, height: "100%" }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 shadow-md pointer-events-none transition-all duration-150"
          style={{ left: `calc(${pct}% - 8px)`, borderColor: "#00bcd4" }}
        />
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function NommyCalculator() {
  const [colaboradores, setColaboradores] = useState(50)
  const [salario, setSalario] = useState(12000)

  const gastosOmision = calcGastosOmision(salario, colaboradores)
  const ahorroProd = calcAhorroProductividad(colaboradores)
  const multas = calcRiesgoMultas(colaboradores)
  const tiempoPct = calcAhorroTiempo(colaboradores)
  const ahorroPesos = calcAhorroPesos(salario, colaboradores)

  const ahorroMensual = (ahorroProd + ahorroPesos) / 12
  const ahorroAnual = ahorroProd + ahorroPesos

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2d52 60%, #071220 100%)" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,188,212,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Copy ── */}
          <div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border"
              style={{
                color: "#00bcd4",
                borderColor: "rgba(0,188,212,0.35)",
                background: "rgba(0,188,212,0.07)",
              }}
            >
              ROI Inmediato
            </span>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
              Calcula tu ahorro real
            </h2>

            <p className="text-white text-lg mb-8 max-w-md leading-relaxed">
              Al implementar Nommy, no solo digitalizas procesos, sino que optimizas costos
              operativos y fiscales desde el primer mes.
            </p>

            <div className="space-y-3 mb-10 text-xl">
              {[
                "Reduce gastos operativos ocultos en tu nómina",
                "Elimina riesgos de multas por incumplimiento fiscal",
                "Ahorra tiempo de tu equipo de RRHH con automatización",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(0,188,212,0.12)",
                      border: "1px solid rgba(0,188,212,0.35)",
                    }}
                  >
                    <Check className="w-3 h-3" style={{ color: "#00bcd4" }} />
                  </div>
                  <span className="text-white text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* ── END LEFT ── */}

          {/* ── RIGHT: Calculator Card ── */}
          <div className="relative">
            {/* Glow behind card */}
            <div
              className="absolute -inset-6 rounded-3xl blur-3xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,188,212,0.15), rgba(13,59,110,0.2))",
                zIndex: 0,
              }}
            />

            <div className="relative bg-white rounded-2xl shadow-2xl p-8" style={{ zIndex: 1 }}>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Calculadora de Ahorro</h3>

              <Slider
                label="Empleados"
                value={colaboradores}
                min={10}
                max={500}
                step={5}
                onChange={setColaboradores}
                icon="👥"
              />

              <Slider
                label="Gasto Mensual"
                value={salario}
                min={5000}
                max={80000}
                step={500}
                onChange={setSalario}
                prefix="$"
                suffix=" MXN"
                icon="💰"
              />

              <div className="border-t border-gray-100 my-6" />

              {/* Main results */}
              <div className="grid grid-cols-2 gap-6 mb-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                    Ahorro Mensual Est.
                  </div>
                  <div className="text-3xl font-black text-gray-900">
                    $<AnimatedNumber value={ahorroMensual} />
                  </div>
                </div>
                <div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: "#00bcd4" }}
                  >
                    Ahorro Anual
                  </div>
                  <div className="text-3xl font-black" style={{ color: "#00bcd4" }}>
                    $<AnimatedNumber value={ahorroAnual} />
                  </div>
                </div>
              </div>

              {/* Secondary KPIs */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {[
                  { label: "Omisión operativa", value: gastosOmision, prefix: "$" },
                  { label: "Riesgo multas", value: multas, prefix: "$" },
                  { label: "Tiempo libre", value: tiempoPct, suffix: "%" },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className="text-sm font-black text-gray-800">
                      <AnimatedNumber
                        value={item.value}
                        prefix={item.prefix}
                        suffix={item.suffix}
                      />
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5 leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                *Cálculo estimado basado en promedios operativos del sector en México. Agenda
                una cita para un cálculo exacto.
              </p>

              <Link
                href="/demo"
                className="block w-full text-center text-white font-bold py-3 rounded-xl text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "linear-gradient(90deg, #0d3b6e, #00bcd4)" }}
              >
                ¡Agenda tu DEMO gratis!
              </Link>
            </div>
          </div>
          {/* ── END RIGHT ── */}

        </div>
      </div>

      <style>{`
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; }
        input[type=range]::-moz-range-thumb { border: none; background: transparent; }
      `}</style>
    </section>
  )
}