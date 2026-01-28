"use client"
import ScrollAnimation from "@/components/scroll-animation"
import WhatsAppButton from "@/components/whatsapp-button"
import Link from "next/link"
import  NominikChatbot  from "@/app/nominik"
export default function ProductoPage() {
 
  const features = [
    {
      icon: "/images/Automatizacion.png",
      title: "Nómina fácil, rápida y segura",
      description:
        "Facilita tu nómina en 3 pasos: calcula, dispersa y timbra nóminas, automatiza incidencias desde una plataforma única, con garantía de exactitud respaldada por documentos.",
      link: "/calcula_nomina",
    },
    {
      icon: "/images/ConexionIDSE.png",
      title: "Conexión IDSE",
      description:
        "Conecta tu nómina con el IMSS de forma directa y segura. Nommy sincroniza movimientos afiliatorios, mantiene tu sesión activa y genera la información para auditorías lista para descargar.",
      link: "/IDSE",
    },
    {
      icon: "/images/Reclutamiento.png",
      title: "Reclutamiento asistido con IA",
      description:
        "Diseña perfiles de puesto de manera sencilla y precisa, recibe candidatos evaluados automáticamente, compara resultados y filtra por competencias para tomar decisiones con información objetiva.",
      link: "/inteligencia",
    },
    {
      icon: "/images/NOM035.png",
      title: "NOM-35",
      description:
        "Cumple con la NOM-035 con encuestas oficiales listas para tus equipos. Nommy analiza resultados y entrega guías prácticas con acciones claras para un entorno laboral sano.",
      link: "/norma",
    },
  ]

  const features2 = [
    {
      icon: "/images/Controlahorarios.png",
      title: "Control de horarios",
      description:
        "Gestión detallada de horarios por empresa y colaborador, tracking de asistencias en tiempo real, integración con cálculo de nóminas.",
      link: "/control_hora",
    },
    {
      icon: "/images/Reportes32.png",
      title: "Reportes dinámicos",
      description:
        "Visualización y análisis de resultados, con tableros versátiles o interactivos para la toma de decisiones.",
      link: "/reportes_dina",
    },
  ]

  return (

    <div className="min-h-screen">
      <NominikChatbot />
    {/*bg-gradient-to-br from-white via-turquoise/5 to-navy/10*/}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-white via-turquoise/15 to-navy/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-in-left">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-[#274263] leading-tight">
                  Tu <span className="text-turquoise font-extrabold">nómina</span> jamás volverá a ser un{" "}
                  <span className="text-red-600 font-extrabold">dolor de cabeza</span>. ¡Lo garantizamos!
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Cada minuto que tu gente pasa luchando con Exceles para cumplir ante el IMSS, cálculos manuales y el
                  miedo a una multa, es un minuto que le quitas a retener talento e impulsar la cultura de tu empresa.
                  Con Nommy nos encargamos de lo operativo. Tú gana la partida estratégica.
                </p>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-turquoise">
                  <p className="text-[#274263] font-semibold">
                    Por cada error que evites, por cada multa que no llegue, por cada colaborador feliz. Hemos
                    construido Nommy: la plataforma de RRHH más confiable del mercado. Para que tú solo te preocupes por
                    crecer.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div className="relative flex justify-center lg:justify-end">
                <img
                  src="/Nomina1.png"
                  className="w-full max-w-2xl rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">
                Funcionalidades que Transforman tu RRHH
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubre cómo cada característica de Nommy está diseñada para eliminar el estrés y maximizar la
                eficiencia de tu equipo.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Link key={index} href={feature.link || "#"}>
                <ScrollAnimation animation="fade-in-up" delay={index * 100}>
                  <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                    <div className="flex items-center gap-2">
                      <img src={feature.icon || "/placeholder.svg"} alt={feature.title} className="w-8 h-8" />
                      <h3 className="text-lg font-bold text-[#274263] leading-tight">{feature.title}</h3>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed text-justify">{feature.description}</p>
                      <button className="mt-4 hidden group-hover:inline-block bg-turquoise text-white px-4 py-2 rounded-lg font-semibold transition">
                        Ver detalles
                      </button>
                    </div>
                  </div>
                </ScrollAnimation>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">
                Beneficios que facilitan tu rutina y elevan la experiencia Nommy.
              </h2>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {features2.map((feature2, index) => (
              <Link key={index} href={feature2.link || "#"}>
                <ScrollAnimation animation="fade-in-up" delay={index * 100}>
                  <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                    <div className="flex items-center gap-2">
                      <img src={feature2.icon || "/placeholder.svg"} alt={feature2.title} className="w-8 h-8" />
                      <h3 className="text-lg font-bold text-[#274263] leading-tight">{feature2.title}</h3>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed text-justify">{feature2.description}</p>
                      <button className="mt-4 hidden group-hover:inline-block bg-turquoise text-white px-4 py-2 rounded-lg font-semibold transition">
                        Ver detalles
                      </button>
                    </div>
                  </div>
                </ScrollAnimation>
              </Link>
            ))}
          </div>
          <ScrollAnimation animation="fade-in-up">
            <div className="mt-20 bg-white p-8 rounded-xl">
              <img src="/workspace-mockup.jpeg" alt="Nommy workspace mockup" className="w-full" />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-turquoise/5 to-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-in-left">
              <div className="relative">
                <img
                  src="/brand-mockup-2.jpeg"
                  alt="Inicio nommy"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-in-right">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="text-6xl text-turquoise mb-4">"</div>
                  <blockquote className="text-xl text-gray-700 leading-relaxed mb-6">
                    Desde que implementamos la App Móvil con el reloj digital, la gestión de incidencias de nuestros
                    colaboradores se ha vuelto mucho más sencilla y precisa. Antes era complicado dar seguimiento a
                    retrasos, permisos o ausencias; hoy todo se registra automáticamente y en tiempo real. Esto nos ha
                    permitido ahorrar tiempo administrativo y tener un mejor control de la asistencia. Definitivamente,
                    ha sido una herramienta clave para optimizar la operación en La Moresca.
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src="/portada-12.jpeg"
                        alt="La Moresca logo"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-navy">Gerencia RRHH Moresca</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-turquoise to-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                ¿Listo para modernizar tu gestión de RRHH?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">Construye un paquete a tu medida.</p>
              <div className="pt-4">
                <a
                  href="/demo"
                  className="inline-block bg-white text-turquoise px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  ¡Agenda tu DEMO!
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
