import Link from "next/link"
import { Check, Star, ChevronDown, X } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import WhatsAppButton from "@/components/whatsapp-button"
import NominikChatbot from "@/app/nominik"

export default function PricingPage() {
  const plans = [
    {
      name: "Plan Basic",
      subtitle: "De 1 a 19 colaboradores",
      texto: "Si tu empresa está empezando o en crecimiento y quieres profesionalizar tu nómina sin gastar de más",
      features: [
        "Gestión de múltiples empresas",
        "Timbrado ilimitado ",
        "Cálculo y automatización de Nómina",
        "Control de asistencia e incidencias ",
      ],
      price: "$80 USD",
      priceSubtext: "por mes",
      cta: "¡Agenda tu DEMO!",
      href: "/demo",
      popular: false,
    },
    {
      name: "Plan Essential",
      subtitle: "De 20 a 299 colaboradores",
      texto:
        "Si buscas optimizar procesos, integrar tecnología y darle más valor a tus equipos, este es tu mejor aliado",
      intro: "Todo lo que incluye el Plan Basic más...",
      features: ["Conexión IDSE", "Reclutamiento asistido por IA", "Gestión y control del proceso de selección", "Personalización de etapas", "APP móvil para colaboradores"],
      price: "$6 USD",
      oldPrice: "$6 USD",
      newPrice: "$4 USD",
      priceSubtext: "por usuario / mes",
      cta: "¡Agenda tu DEMO!",
      href: "/demo",
      popular: true,
    },
    {
      name: "Plan Enterprise",
      subtitle: "A partir de 300 colaboradores",
      texto:
        "Si tu empresa es grande y quieres reducir costos con soluciones a la medida, este plan está diseñado para ti",
      intro: "Todo lo que incluye el Plan Essential",
      features: ["Integraciones especiales", "Y más..."],
      price: "",
      priceSubtext: "por usuario / mes",
      cta: "¡COTIZA!",
      href: "/demo",
      popular: false,
      customButton: true,
    },
  ]

  const comparisonFeatures = [
    {
      category: "Cálculo de Nómina",
      features: [
        { name: "Multiusuario multiempresa", basic: true, essential: true, enterprise: true },
        { name: "Timbrado ilimitado", basic: true, essential: true, enterprise: true },
        { name: "Conexión exclusiva IDSE", basic: false, essential: true, enterprise: true },
        { name: "Cálculo de multi nómina", basic: true, essential: true, enterprise: true, highlighted: true },
        { name: "Nóminas extraordinarias: Finiquitos, liquidaciones, PTU, etc", basic: false, essential: true, enterprise: true },
        { name: "Carga masiva de históricos con CFDI", basic: false, essential: true, enterprise: true, highlighted: true },
        { name: "Calendario", basic: true, essential: true, enterprise: true },
        { name: "Layouts bancarios para dispersión de nómina, banca empresarial", basic: true, essential: true, enterprise: true },
        { name: "Cálculo de pensiones en nómina", basic: false, essential: true, enterprise: true },
        { name: "Cálculos de créditos en nómina", basic: true, essential: true, enterprise: true },
        { name: "Roles y permisos de administrador", basic: true, essential: true, enterprise: true },
        { name: "EMA/EBA", basic: false, essential: true, enterprise: true },
        { name: "Confronta IMSS", basic: false, essential: true, enterprise: true },
        { name: "Confronta SAT", basic: false, essential: true, enterprise: true },
        { name: "Exportación SUA TXT", basic: false, essential: true, enterprise: true },
        { name: "Cálculo de nómina", basic: false, essential: true, enterprise: true },
        { name: "Envío de recibos vía App", basic: true, essential: true, enterprise: true },
        { name: "Nóminas especiales", basic: false, essential: true, enterprise: true, highlighted: true },
        { name: "API conexión multisistema ERP", basic: false, essential: false, enterprise: true },
        { name: "Calculadores SD, SDI, SBC", basic: true, essential: true, enterprise: true },
        { name: "Servicio personalizado con ejecutivo de cuenta", basic: true, essential: true, enterprise: true },
        { name: "Dashboards interactivo de gastos de nómina, retención INFONAVIT e INFONACOT y gastos por departamento", basic: false, essential: true, enterprise: true },
        { name: "Soporte 24/7", basic: true, essential: true, enterprise: true },
      ]
    },
    {
      category: "Gestión de personal",
      features: [
        { name: "App Móvil", basic: false, essential: true, enterprise: true },
        { name: "Gestión de vacaciones", basic: true, essential: true, enterprise: true },
        { name: "Gestión de Incidencias", basic: true, essential: true, enterprise: true },
        { name: "Directorio", basic: false, essential: true, enterprise: true },
        { name: "Organigrama", basic: false, essential: true, enterprise: true },
        { name: "Portal de colaborador", basic: false, essential: true, enterprise: true },
        { name: "Comunicación interna", basic: false, essential: true, enterprise: true },
        { name: "Engagement interactivo", basic: false, essential: true, enterprise: true },
      ]
    },
    {
      category: "Gestión de tiempo",
      features: [
        { name: "Check in/ Check Out por geolocalización", basic: false, essential: true, enterprise: true },
        { name: "Reconocimiento facial", basic: false, essential: true, enterprise: true },
        { name: "Reloj checador digital", basic: false, essential: true, enterprise: true },
        { name: "Interpretación de faltas, retrasos, prima, festivos, descansos y salidas", basic: false, essential: true, enterprise: true },
        { name: "Control de turnos y asistencia", basic: false, essential: true, enterprise: true },
        { name: "Reportes de tiempo y asistencia", basic: false, essential: true, enterprise: true },
        { name: "Asignación de horarios individual/masivo", basic: false, essential: true, enterprise: true },
      ]
    },
    {
      category: "Gestión de talento",
      features: [
        { name: "Beneficios", basic: false, essential: true, enterprise: true },
        { name: "Reclutamiento con IA", basic: false, essential: true, enterprise: true },
        { name: "Evaluaciones de desempeño", basic: false, essential: true, enterprise: true },
        { name: "Encuestas NOM 035", basic: false, essential: true, enterprise: true },
        { name: "Comunicación masiva en plataformas (OCC, INDEED, LINKEDIN ETC)", basic: false, essential: true, enterprise: true },
        { name: "Plantillas de correo automático para etapas de reclutamiento", basic: false, essential: true, enterprise: true },
      ]
    }
  ]

  const faqs = [
    {
      question: "¿La implementación está incluida en la mensualidad?",
      answer: "✔️ Sí, todos nuestros planes incluyen la implementación sin costo adicional.",
    },
    {
      question: "¿Las capacitaciones están incluidas en la mensualidad?",
      answer: "✔️ Sí. Ofrecemos capacitación completa para que tu equipo aproveche Nommy al máximo.",
    },
    {
      question: "¿El precio incluye soporte?",
      answer: "✔️ Sí. Todos los planes cuentan con soporte técnico incluido, disponible por correo y chat.",
    },
    {
      question: "¿El precio incluye cambios futuros y actualizaciones?",
      answer: "✔️ Sí. Tu suscripción incluye mejoras, actualizaciones de seguridad y nuevas funcionalidades.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-turquoise/15 to-navy/15">
      {/* Encabezado */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <div className="space-y-6">
              <span className="text-2xl lg:text-6xl font-bold text-turquoise">Elige el plan que hará</span>
              <span className="text-2xl lg:text-6xl font-bold text-[#274263]"> crecer a tu empresa</span>

              <div className="space-y-10">
                <span className="text-4xl lg:text-4xl font-bold text-turquoise">¿Cuál</span>
                <span className="text-4xl lg:text-4xl font-bold text-[#274263]"> plan </span>
                <span className="text-4xl lg:text-4xl font-bold text-turquoise">será el tuyo?</span>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada negocio es distinto, pero en todos la nómina importa. Encuentra aquí la opción que mejor se adapta
                a ti.
              </p>
              
              <div className="mt-8">
                <a
                  href="#comparison-table"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-turquoise to-navy hover:shadow-xl hover:from-turquoise/90 hover:to-navy/90 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95"
                >
                  Comparar Planes Detalladamente
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Planes */}
      <section className="py-16 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.slice(0).map((plan, index) => (
            <ScrollAnimation key={plan.name} delay={index * 0.1}>
              <div
                className={`relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular ? "ring-2 ring-turquoise scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-turquoise text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Más Popular
                    </div>
                  </div>
                )}

                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-navy">{plan.name}</h3>
                  <div className="text-lg font-bold text-gray-800">{plan.subtitle}</div>
                  <div className="text-lg font-light text-gray-800">{plan.texto}</div>
                  {plan.intro && <div className="text-sm italic text-gray-600">{plan.intro}</div>}
                </div>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-turquoise flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 ">
                        {feature.includes("APP móvil") ||
                        feature.includes("Conexión IDSE") ||
                        feature.includes("IA") ? (
                          <span className="font-semibold">{feature}</span>
                        ) : (
                          feature
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href={plan.href}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 ${
                      plan.customButton
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:shadow-lg text-lg py-4 font-bold"
                        : "bg-gradient-to-r from-turquoise to-navy text-white hover:shadow-xl hover:from-turquoise/90 hover:to-navy/90"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        
      </section>

      {/* Tabla de Comparación de Funcionalidades */}
      <section id="comparison-table" className="py-16 bg-white/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Comparación Detallada de Funcionalidades</h2>
              <p className="text-xl text-gray-600">Explora todas las características de cada plan</p>
            </div>
          </ScrollAnimation>

          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow-xl rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gradient-to-r from-turquoise to-navy">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider sticky left-0 bg-navy z-10">
                        Funcionalidad
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-white uppercase tracking-wider">
                        Plan Basic
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-white uppercase tracking-wider bg-turquoise/20">
                        Plan Essential
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-white uppercase tracking-wider">
                        Plan Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {comparisonFeatures.map((category, catIndex) => (
                      <>
                        <tr key={`category-${catIndex}`} className="bg-gradient-to-r from-turquoise/10 to-navy/10">
                          <td colSpan={4} className="px-6 py-4 text-lg font-bold text-navy">
                            {category.category}
                          </td>
                        </tr>
                        {category.features.map((feature, featIndex) => (
                          <tr 
                            key={`feature-${catIndex}-${featIndex}`} 
                            className={`hover:bg-gray-50 transition-colors ${feature.highlighted ? 'bg-yellow-50' : ''}`}
                          >
                            <td className="px-6 py-4 text-sm text-gray-900 sticky left-0 bg-white">
                              {feature.highlighted ? (
                                <span className="font-semibold text-turquoise">{feature.name}</span>
                              ) : (
                                feature.name
                              )}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {feature.basic ? (
                                <Check className="w-6 h-6 text-turquoise mx-auto" strokeWidth={3} />
                              ) : (
                                <X className="w-6 h-6 text-gray-300 mx-auto" strokeWidth={3} />
                              )}
                            </td>
                            <td className="px-6 py-4 text-center bg-turquoise/5">
                              {feature.essential ? (
                                <Check className="w-6 h-6 text-turquoise mx-auto" strokeWidth={3} />
                              ) : (
                                <X className="w-6 h-6 text-gray-300 mx-auto" strokeWidth={3} />
                              )}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {feature.enterprise ? (
                                <Check className="w-6 h-6 text-turquoise mx-auto" strokeWidth={3} />
                              ) : (
                                <X className="w-6 h-6 text-gray-300 mx-auto" strokeWidth={3} />
                              )}
                            </td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Preguntas Frecuentes</h2>
              <p className="text-xl text-gray-600">Resolvemos tus dudas sobre nuestros planes y servicios</p>
            </div>
          </ScrollAnimation>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <details className="group bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-all duration-200">
                    <h3 className="text-lg font-semibold text-navy pr-4 group-hover:text-turquoise transition-colors">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 group-hover:text-turquoise" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <NominikChatbot />
    </div>
  )
}