"use client"
import ScrollAnimation from "@/components/scroll-animation"
import WhatsAppButton from "@/components/whatsapp-button"
import Link from "next/link"
import  NominikChatbot  from "@/app/nominik"
export default function normaPage() {
  return (
    <div className="min-h-screen">
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-turquoise/10 to-turquoise/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">NOM-35</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Descubre cada ventaja que te ofrece Nommy</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <ScrollAnimation>
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">
                  Evaluaciones alineadas con la NOM-035
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl text-justify">
                  Aplica a toda tu organización encuestas oficiales y estandarizadas que garantizan el cumplimiento de
                  la norma, sin necesidad de procesos manuales.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="flex-1 flex justify-start lg:justify-start">
                <img src="/images/Evaluaciones.png" alt="Nommy" className="w-full max-w-lg rounded-lg shadow-lg" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <ScrollAnimation>
              <div className="flex-1 flex justify-start lg:justify-start">
                <img src="/images/Analisis.png" alt="Nommy" className="w-full max-w-lg rounded-lg shadow-lg" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">
                  Análisis de resultados accionables
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl ml-auto text-justify">
                  Recibe un análisis claro de los resultados con guías de acción concretas que te orientan en la
                  prevención, control y mejora de las condiciones laborales.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <ScrollAnimation>
              <div className="space-y-8 text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">Identificación y análisis</h2>
                <p className="text-xl text-gray-600 max-w-3xl text-justify">
                  Detecta de manera precisa los factores de riesgo psicosocial en tu empresa y comprende su impacto en los
                  colaboradores.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="flex-1 flex justify-start lg:justify-start">
                <img src="/images/Identificacion.png" alt="Nommy" className="w-full max-w-lg rounded-lg shadow-lg" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <ScrollAnimation>
              <div className="flex-1 flex justify-start lg:justify-start">
                <img src="/images/Prevencion.png" alt="Nommy" className="w-full max-w-lg rounded-lg shadow-lg" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="flex-1 space-y-8 text-right">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">Prevención y control</h2>
                <p className="text-xl text-gray-600 max-w-3xl ml-auto text-justify">
                  Implementa estrategias de mejora con base en los resultados obtenidos, reduciendo riesgos y
                  fortaleciendo el clima laboral
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <ScrollAnimation>
              <div className="space-y-8 text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">Cumplimiento normativo</h2>
                <p className="text-xl text-gray-600 max-w-3xl text-justify">
                  Nommy asegura que cumplas con las responsabilidades establecidas por la ley, tanto para el patrón como
                  para los trabajadores, evitando sanciones y garantizando un entorno laboral más saludable.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="flex-1 flex justify-start lg:justify-start">
                <img src="/images/Cumplimientoo.png" alt="Nommy" className="w-full max-w-lg rounded-lg shadow-lg" />
              </div>
            </ScrollAnimation>
          </div>
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
              href="/calcula_nomina"
              className="text-turquoise font-semibold rounded-m hover:bg-gray-100 transition-colors duration-200 inline-block px-4 py-2"
            >
            <img src = "/images/Automatizacion.png"  className="inline-block w-5 h-5 mr-2"/>
            <span>Nómina rápida, fácil y segura</span>
            </Link>
            <Link
              href="/IDSE"
              className="text-turquoise font-semibold rounded-m hover:bg-gray-100 transition-colors duration-200 inline-block px-4 py-2"
            >
            <img src = "/images/ConexionIDSE.png"  className="inline-block w-5 h-5 mr-2"/>
            <span>Conexión IDSE</span>
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
