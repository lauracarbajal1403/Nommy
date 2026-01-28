"use client"
import ScrollAnimation from "@/components/scroll-animation"
import WhatsAppButton from "@/components/whatsapp-button"
import Link from "next/link"
import  NominikChatbot  from "@/app/nominik"
export default function Control_horaPage() {
  return (
    <div className="min-h-screen">
     
      {/* Features Section */}
      <section className="py-10 bg-gradient-to-r from-turquoise/10 to-turquoise/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-turquoise mb-4">Control de horarios</h2>
              <p className="text-l text-gray-600 max-w-3xl mx-auto">Descubre cada beneficio que obtienes con Nommy</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">Gestión flexible de horarios</h2>
                <p className="text-xl text-gray-600 max-w-3xl text-justify">
                 Configura horarios personalizados por empresa, área o colaborador. Nommy se adapta a tus necesidades, desde turnos fijos hasta rotativos.
                </p>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <img
                  src="/images/Gestion.png"
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
                    src="/images/Asistencia.png"
                    alt="Nommy"
                    className="w-full max-w-lg rounded-lg shadow-lg"
                  />
                </div>
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">
                  Asistencia en tiempo real
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl text-justify">
                  Supervisa entradas, salidas y ausencias de manera inmediata. Con Nommy tienes visibilidad total del cumplimiento de horarios en toda la organización.
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
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">Integración con nómina</h2>
                <p className="text-xl text-gray-600 max-w-3xl text-justify">
                  Los registros de asistencia se conectan directamente con el cálculo de nómina, asegurando pagos exactos sin procesos manuales ni riesgo de errores.
                </p>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <img
                  src="/images/Integracion.png"
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
                    src="/images/Reportes_confiables.png"
                    alt="Nommy"
                    className="w-full max-w-lg rounded-lg shadow-lg"
                  />
                </div>
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">
                  Reportes claros y confiables
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl text-justify">
                  Genera reportes detallados de puntualidad, incidencias y cumplimiento de horarios para una gestión laboral más eficiente y transparente.
                </p>
              </div>
              
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href="/reportes_dina"
            className="text-turquoise font-semibold rounded-m hover:bg-gray-100 transition-colors duration-200 inline-block px-4 py-2"
          >
          <img src = "/images/Reportes32.png"  className="inline-block w-5 h-5 mr-2"/>
          <span>Reportes dinámicos</span>
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
