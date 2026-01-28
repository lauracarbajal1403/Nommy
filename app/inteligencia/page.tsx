"use client"
import ScrollAnimation from "@/components/scroll-animation"
import WhatsAppButton from "@/components/whatsapp-button"
import Link from "next/link"
import  NominikChatbot  from "@/app/nominik"
export default function inteligenciaPage() {
  return (
    <div className="min-h-screen">
     
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-turquoise/10 to-turquoise/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">Reclutamiento asistido con IA</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Descubre cada ventaja que te ofrece Nommy</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">Diseño de perfiles de puesto</h2>
                <p className="text-xl text-gray-600 max-w-3xl text-justify">
                  La IA de Nommy analiza la experiencia y habilidades de cada postulante, otorgando una calificación
                  objetiva que te permite identificar rápidamente a los perfiles más adecuados.
                </p>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <img
                  src="/images/Diseniooo.png"
                  alt="Nommy"
                  className="w-full max-w-lg rounded-lg shadow-lg"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 flex justify-center lg:justify-end">
                  <img
                    src="/Calificacion.png"
                    alt="Nommy"
                    className="w-full max-w-lg rounded-lg shadow-lg"
                  />
                </div>
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">
                  Calificación inteligente de candidatos
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl text-justify">
                  La IA de Nommy analiza la experiencia y habilidades de cada postulante, otorgando una calificación objetiva que te permite identificar rápidamente a los perfiles más adecuados.
                </p>
              </div>
              
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">Decisión respaldada con datos</h2>
                <p className="text-xl text-gray-600 max-w-3xl text-justify">
                  La decisión siempre es tuya. Nommy te brinda a ti un poder de desición con evaluaciones objetivas y confiables para que elijas con certeza al mejor talento para tu empresa.
                </p>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <img
                  src="/Decision.png"
                  alt="Nommy"
                  className="w-full max-w-lg rounded-lg shadow-lg"
                  onError={(e) => {
                    console.log("[v0] Image failed to load:", e.target.src)
                    e.target.style.display = "none"
                  }}
                  onLoad={() => {
                    console.log("[v0] Image loaded successfully")
                  }}
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
       <section className="py-10 bg-white">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href="/inteligencia"
            className="text-turquoise font-semibold rounded-m hover:bg-gray-100 transition-colors duration-200 inline-block px-4 py-2"
          >
          <img src = "/images/Reclutamiento.png"  className="inline-block w-5 h-5 mr-2"/>
          <span>Reclutamiento asistido con IA</span>
          </Link>
          <Link
              href="/IDSE"
              className="text-turquoise font-semibold rounded-m hover:bg-gray-100 transition-colors duration-200 inline-block px-4 py-2"
            >
            <img src = "/images/ConexionIDSE.png"  className="inline-block w-5 h-5 mr-2"/>
            <span>Conexión IDSE</span>
            </Link>
            <Link
              href="/norma"
              className="text-turquoise font-semibold rounded-m hover:bg-gray-100 transition-colors duration-200 inline-block px-4 py-2"
            >
            <img src = "/images/NOM035.png"  className="inline-block w-5 h-5 mr-2"/>
            <span>NOM-035</span>
            </Link>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center">
              <div className="bg-gradient-to-r from-navy to-turquoise rounded-2xl p-12 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">¿Listo para transformar tu gestión de nómina?</h3>
                <p className="text-lg mb-8 text-white max-w-2xl mx-auto">
                  Únete a cientos de empresas que ya confían en NOMMY para gestionar su nómina de manera eficiente y sin
                  errores.
                </p>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 bg-white text-navy font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  ¡Agenda tu DEMO!
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <NominikChatbot />
    </div>
  )
}
