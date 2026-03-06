"use client"
import { Calendar, Clock, ArrowLeft, TrendingUp, CheckCircle, DollarSign, Users, FileText, Zap, Shield } from "lucide-react"

const navy = "#0f2d4a"
const turquoise = "#2dd4bf"

export default function NommyArticle() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "sans-serif" }}>

      {/* Navigation */}
      <div style={{ borderBottom: "1px solid #e5e7eb", background: "#f9fafb" }}>
        <div className="max-w-3xl mx-auto px-6 py-4">
          <a href="/resources" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: navy }}>
            <ArrowLeft className="w-4 h-4" />
            Volver a Recursos
          </a>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-sm mb-6" style={{ color: "#6b7280" }}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: `${turquoise}22`, color: navy }}>
            <TrendingUp className="w-3.5 h-3.5" />
            Nómina · Estrategia 2026
          </span>
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Enero 2026</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 min de lectura</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 leading-tight" style={{ color: navy }}>
          Aspectos Clave para Fortalecer tu Gestión de Nómina en 2026
        </h1>

        {/* Intro Banner */}
        <div className="rounded-2xl p-7 mb-10 text-white" style={{ background: navy }}>
          <div className="flex items-start gap-4">
            <Zap className="w-8 h-8 flex-shrink-0 mt-0.5" style={{ color: turquoise }} />
            <div>
              <h2 className="text-xl font-bold mb-2">2026: Año de decisiones estratégicas</h2>
              <p className="leading-relaxed opacity-90 text-sm">
                Los cambios laborales y fiscales de este año no solo implican ajustes administrativos —
                definen tu estructura de costos, tu cumplimiento y tu capacidad de crecimiento.
              </p>
            </div>
          </div>
        </div>

        {/* Intro text */}
        <div className="mb-10">
          <p className="text-base leading-relaxed mb-4" style={{ color: "#374151" }}>
            El inicio de un nuevo año siempre representa una oportunidad para revisar lo que se está haciendo bien y ajustar aquello que puede fortalecerse. En <strong style={{ color: navy }}>Nommy</strong> entendemos que la verdadera ventaja no está únicamente en cumplir con la norma, sino en <strong>anticiparse a los cambios</strong>, organizar la información correctamente y tomar decisiones con base en datos claros.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#374151" }}>
            Cuando la nómina se gestiona con orden y automatización, la empresa puede proyectar escenarios con mayor seguridad, reducir errores y concentrarse en lo que realmente importa: consolidar su operación y crecer de manera sostenible.
          </p>
        </div>

        {/* Section 1: Salario Mínimo */}
        <section className="mb-8">
          <div className="rounded-2xl p-7 border" style={{ borderColor: "#e5e7eb" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="rounded-xl p-2.5 flex-shrink-0" style={{ background: `${turquoise}18` }}>
                <DollarSign className="w-6 h-6" style={{ color: navy }} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest block mb-1" style={{ color: turquoise }}>Cambio vigente</span>
                <h2 className="text-xl font-bold" style={{ color: navy }}>Aumento del Salario Mínimo General</h2>
              </div>
            </div>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#374151" }}>
              El Consejo de Representantes de la <strong>CONASAMI</strong> resolvió un incremento aplicable a partir del <strong>1 de enero de 2026</strong>, tanto en la zona general como en la Zona Libre de la Frontera Norte. No se trata únicamente de modificar una cifra diaria; implica analizar cómo este ajuste repercute en prestaciones vinculadas al salario y en la equidad entre puestos.
            </p>
            <div className="rounded-r-xl p-5" style={{ borderLeft: `4px solid ${turquoise}`, background: `${turquoise}0d` }}>
              <p className="font-semibold text-sm mb-1" style={{ color: navy }}>¿Qué exige este cambio?</p>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                Una revisión integral que mantenga el equilibrio interno, evite distorsiones salariales y permita proyectar con mayor precisión el costo real por colaborador — especialmente en empresas donde cada ajuste impacta de forma sensible el flujo mensual.
              </p>
            </div>
            <p className="text-xs mt-4" style={{ color: "#9ca3af" }}>Fuente: CONASAMI · Autoría: Nommy</p>
          </div>
        </section>

        {/* Section 2: Jornada Laboral */}
        <section className="mb-8">
          <div className="rounded-2xl p-7 border" style={{ borderColor: "#e5e7eb" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="rounded-xl p-2.5 flex-shrink-0" style={{ background: `${turquoise}18` }}>
                <Clock className="w-6 h-6" style={{ color: navy }} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest block mb-1" style={{ color: turquoise }}>Reforma en marcha</span>
                <h2 className="text-xl font-bold" style={{ color: navy }}>Reducción Gradual de la Jornada Laboral</h2>
              </div>
            </div>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#374151" }}>
              La propuesta de reforma a la <strong>Ley Federal del Trabajo</strong> contempla una reducción progresiva de la jornada laboral máxima semanal hasta consolidar un esquema de <strong>40 horas en el año 2030</strong>. Esto implicará ajustes en turnos, redistribución de cargas laborales y una evaluación más detallada de la productividad.
            </p>
            <div className="rounded-xl p-5 mb-5" style={{ background: `${turquoise}10` }}>
              <p className="text-sm font-semibold mb-3" style={{ color: navy }}>Reducción progresiva hacia 2030:</p>
              <div className="flex items-center gap-2 flex-wrap">
                {[{ year: "2026", label: "Inicio" }, { year: "2027", label: "—" }, { year: "2028", label: "—" }, { year: "2029", label: "—" }, { year: "2030", label: "40 hrs" }].map((item) => (
                  <div key={item.year} className="flex items-center gap-2">
                    <div className="rounded-lg px-3 py-2 text-center bg-white border" style={{ borderColor: turquoise, minWidth: 56 }}>
                      <div className="text-xs font-bold" style={{ color: navy }}>{item.year}</div>
                      <div className="text-xs" style={{ color: "#6b7280" }}>{item.label}</div>
                    </div>
                    {item.year !== "2030" && <span style={{ color: turquoise, fontWeight: 700 }}>›</span>}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-r-xl p-5" style={{ borderLeft: `4px solid ${turquoise}`, background: `${turquoise}0d` }}>
              <p className="font-semibold text-sm mb-1" style={{ color: navy }}>Recomendación clave:</p>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                Aunque la transición será escalonada, comenzar a proyectar escenarios desde ahora permitirá adaptarse con mayor estabilidad, evitando decisiones improvisadas.
              </p>
            </div>
            <p className="text-xs mt-4" style={{ color: "#9ca3af" }}>Fuente: Propuesta de reforma a la LFT ante el Congreso · Autoría: Nommy</p>
          </div>
        </section>

        {/* Section 3: Prestaciones */}
        <section className="mb-8">
          <div className="rounded-2xl p-7 border" style={{ borderColor: "#e5e7eb" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="rounded-xl p-2.5 flex-shrink-0" style={{ background: `${turquoise}18` }}>
                <Users className="w-6 h-6" style={{ color: navy }} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest block mb-1" style={{ color: turquoise }}>Impacto financiero</span>
                <h2 className="text-xl font-bold" style={{ color: navy }}>Incremento en Prestaciones Laborales</h2>
              </div>
            </div>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#374151" }}>
              Se prevén incrementos graduales en prestaciones como el <strong>aguinaldo</strong>, la <strong>prima vacacional</strong> y la ampliación de permisos con goce de sueldo. Cada modificación tiene un efecto acumulativo en el costo anual de la nómina y exige mayor precisión en la planeación presupuestal.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl p-5 border" style={{ borderColor: "#e5e7eb", background: "#f9fafb" }}>
                <h4 className="font-bold text-sm mb-3" style={{ color: navy }}>⚠ Sin planeación</h4>
                {["Presión sobre el flujo de efectivo", "Decisiones reactivas y costosas", "Riesgo de incumplimiento"].map(t => (
                  <div key={t} className="flex items-start gap-2 text-sm mb-1.5" style={{ color: "#374151" }}>
                    <span style={{ color: "#9ca3af" }}>•</span> {t}
                  </div>
                ))}
              </div>
              <div className="rounded-xl p-5 border-2" style={{ borderColor: turquoise, background: `${turquoise}08` }}>
                <h4 className="font-bold text-sm mb-3 flex items-center gap-1.5" style={{ color: navy }}>
                  <CheckCircle className="w-4 h-4" style={{ color: turquoise }} /> Con proyección adecuada
                </h4>
                {["Absorción de cambios con control", "Estabilidad sin frenar el crecimiento", "Toma de decisiones estratégica"].map(t => (
                  <div key={t} className="flex items-start gap-2 text-sm mb-1.5" style={{ color: "#374151" }}>
                    <span style={{ color: turquoise }}>•</span> {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Cumplimiento Fiscal */}
        <section className="mb-8">
          <div className="rounded-2xl p-7 border" style={{ borderColor: "#e5e7eb" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="rounded-xl p-2.5 flex-shrink-0" style={{ background: `${turquoise}18` }}>
                <FileText className="w-6 h-6" style={{ color: navy }} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest block mb-1" style={{ color: turquoise }}>RMF 2026</span>
                <h2 className="text-xl font-bold" style={{ color: navy }}>Mayor Precisión en el Cumplimiento Fiscal</h2>
              </div>
            </div>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#374151" }}>
              La <strong>Resolución Miscelánea Fiscal 2026</strong> establece requisitos más específicos en el timbrado del <strong>CFDI de nómina</strong>, particularmente en lo relacionado con estímulos por inclusión laboral. Un error técnico puede afectar beneficios fiscales o generar contingencias administrativas innecesarias.
            </p>
            <div className="rounded-r-xl p-5" style={{ borderLeft: `4px solid ${turquoise}`, background: `${turquoise}0d` }}>
              <p className="font-semibold text-sm mb-2" style={{ color: navy }}>El cumplimiento hoy exige:</p>
              {["Exactitud en la manifestación de conceptos y percepciones", "Trazabilidad de todos los registros", "Procesos bien estructurados y automatizados"].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm mb-1.5" style={{ color: "#374151" }}>
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: turquoise }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-10">
          <div className="rounded-2xl p-8 text-white" style={{ background: navy }}>
            <div className="flex items-start gap-4 mb-5">
              <div className="rounded-full p-2.5 flex-shrink-0" style={{ background: `${turquoise}30` }}>
                <Shield className="w-6 h-6" style={{ color: turquoise }} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">2026 como Oportunidad de Fortalecimiento</h2>
                <p className="text-sm opacity-80 leading-relaxed">Los cambios no deben percibirse únicamente como una carga adicional, sino como una oportunidad para profesionalizar la gestión de la nómina.</p>
              </div>
            </div>
            <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <h3 className="font-bold text-lg mb-1">Nommy acompaña a empresas de 1 a 19 colaboradores</h3>
              <p className="text-sm opacity-80 leading-relaxed mb-5">Transformamos tu nómina en un proceso claro, automatizado y alineado con la normativa vigente.</p>
              <div className="grid sm:grid-cols-2 gap-2 mb-6">
                {["Cálculos automáticos y sin errores", "CFDI con todas las percepciones", "Proyecciones de costo por colaborador", "Cumplimiento con RMF 2026"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: turquoise }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a href="/demo" target="_blank" rel="noopener noreferrer" className="inline-block px-7 py-3 rounded-full font-bold text-sm" style={{ background: turquoise, color: navy }}>
                DEMO GRATIS
              </a>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="rounded-2xl p-7" style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}>
          <h3 className="text-xl font-bold mb-5" style={{ color: navy }}>Puntos Clave a Recordar</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Incremento de salario mínimo desde el 1 de enero de 2026 impacta toda la estructura salarial",
              "La jornada de 40 horas será obligatoria en 2030 — planear desde ahora es ventaja competitiva",
              "Aguinaldo, prima vacacional y permisos subirán progresivamente: proyecta el impacto financiero",
              "La RMF 2026 exige mayor exactitud en el timbrado del CFDI de nómina",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-xs font-bold" style={{ background: turquoise, color: navy }}>
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>

      </article>
    </div>
  )
}