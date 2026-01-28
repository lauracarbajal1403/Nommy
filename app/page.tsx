"use client"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import ScrollAnimation from "@/components/scroll-animation"
import  NominikChatbot  from "@/app/nominik"
export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <NominikChatbot />
     
      <section className="relative py-16 lg:py-20 flex items-center bg-gradient-to-br from-white via-turquoise/15 to-navy/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col gap-12 items-center">
            {/* Text at the top */}
            

            {/* Video in the middle */}
            <ScrollAnimation animation="slide-in-right">
              <div className="relative flex justify-center w-full">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-dcrtXKPVRIL4IiLdxQMdgZqdG2s3K3.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-w-4xl rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-in-left">
              <div className="space-y-8 text-center">
                <div className="flex flex-col items-center gap-6">
                  <div className="flex-1">
                    <span className="text-4xl lg:text-6xl  text-[#274263] font-bold">
                      ¿Te viste reflejado? Perfecto.{" "}
                    </span>
                    <span className="text-4xl lg:text-6xl  text-turquoise font-bold">Aquí comienza la solución.</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            {/* Demo button at the bottom */}
            <ScrollAnimation>
              <Link
                href="/demo"
                className="inline-flex items-center btn-secondary text-base lg:text-lg group px-8 py-4 whitespace-nowrap"
              >
                ¡Agenda tu DEMO!
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Value Proposition Section - Reduced size */}
      <section className="relative py-12 gradient-turquoise-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollAnimation>
            <span className="text-2xl lg:text-4xl font-bold text-white mb-8 max-w-3xl mx-auto">Creamos</span>
            <span className="text-2xl lg:text-4xl font-bold text-[#274263] mb-8 max-w-3xl mx-auto"> Nommy </span>
            <span className="text-2xl lg:text-4xl font-bold text-white mb-8 max-w-3xl mx-auto">
              {" "}
              para darte tiempo, precisión y tranquilidad en cada cierre de nómina.
            </span>
            <div className="mt-8">
              {/*
              <img
                  src="/evolucion-new.png"
                  alt="Dashboard de NOMMY en múltiples dispositivos"
                  className="w-full max-w-4xl mx-auto rounded-xl"
                />
                Hero Section */}
              <img
                src="/Nommy_Quiet12.png"
                alt="Dashboard de NOMMY en múltiples dispositivos"
                className="w-full max-w-4xl mx-auto rounded-xl"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Tool Showcase */}
      <section className="relative py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-in-left">
              <div className="space-y-6 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise">
                  Más que una herramienta, somos un equipo que te respalda
                </h2>

                {/* Tool Showcase 
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise">Somos una herramienta que te acompaña</h2>
                */}
                <Link href="/demo" className="btn-secondary inline-flex items-center group">
                  ¡Agenda tu DEMO!
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div className="relative">
                <img src="/evolucion-new.png" alt="Dashboard de NOMMY" className="w-full rounded-xl" />

                {/* Benefits Section - Flush alignment with section above
                <img src="/portal-nommy.png" alt="Dashboard de NOMMY" className="w-full rounded-xl" />
                */}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Benefits Section - Flush alignment with section above */}
      <section className="relative bg-gradient-to-br from-turquoise/10 to-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            <ScrollAnimation animation="slide-in-left">
              <div className="space-y-8 text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise">
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
                        <img src="/Icono.png" className="w-6 h-6 flex-shrink-0" />
                        <span className="text-lg text-gray-700">{benefit}</span>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div className="relative flex justify-center">
                <img src="/dashi.png" alt="Dashboard nommy" className="w-full max-w-sm mx-auto" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-navy to-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollAnimation>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              Control <span className="text-turquoise">TOTAL</span> sin curva técnica
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Únete a cientos de empresas que confían en NOMMY para gestionar su nómina de manera eficiente y sin curva
              de aprendizaje.
            </p>
            <Link
              href="/demo"
              className="bg-white text-navy px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center group btn-shadow"
            >
              ¡Agenda tu DEMO!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </ScrollAnimation>
        </div>
        
      </section>
      
    </div>
  )
}
