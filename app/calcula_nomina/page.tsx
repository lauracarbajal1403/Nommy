"use client"
import ScrollAnimation from "@/components/scroll-animation"
import WhatsAppButton from "@/components/whatsapp-button"
import Link from "next/link"
import  NominikChatbot  from "@/app/nominik"
export default function calcula_nominaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      
      <section className="py-10 bg-gradient-to-r from-turquoise/10 to-turquoise/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">Nómina fácil, rápida y segura</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Descubre cada ventaja que te ofrece Nommy</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Percepciones y deducciones Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">
                  Percepciones y deducciones sin errores
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl text-justify">
                  Administra con total seguridad cada concepto de tu nómina. Nommy contempla todas las percepciones y
                  deducciones que la ley y tu empresa requiera, garantizando cálculos claros, exactos y siempre
                  alineados a la normativa vigente.
                </p>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <img
                  src="/images/workspace-calculator.png"
                  alt="Workspace with calculator and laptop for payroll calculations"
                  className="w-full max-w-lg rounded-lg shadow-lg"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Cálculos inversos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 flex justify-start lg:justify-start">
                <img
                  src="/images/timbrar-nomina-mobile.png"
                  alt="Payroll dashboard mobile interface"
                  className="w-full max-w-lg rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">
                  Cálculos inversos que trabajan por ti
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl text-justify">
                  Optimiza el cálculo de tu nómina con la flexibilidad de los cálculos inversos. Nommy permite
                  determinar automáticamente las deducciones correspondientes a cada empleado, asegurando exactitud en
                  cada detalle sin procesos manuales.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Incidencias Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">
                  Incidencias automatizadas en un solo lugar
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify hyphens-auto">
                  Centraliza todo en un solo lugar. Con Nommy puedes registrar, automatizar y controlar incidencias de
                  manera eficiente, reduciendo errores y tiempos operativos para que tu equipo se concentre en lo que
                  realmente importa.
                </p>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <img
                  src="/images/payroll-dashboard-mobile.png"
                  alt="Workspace with calculator and laptop for payroll calculations"
                  className="w-full max-w-lg rounded-lg shadow-lg"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Seguridad Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 flex justify-start lg:justify-start">
                <img
                  src="/images/nommy-security-screen.png"
                  alt="Nommy security screen interface"
                  className="w-full max-w-lg rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">
                  Seguridad garantizada en dispersión y timbrado
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl text-justify">
                  Confianza en cada paso. Nommy valida y respalda cada incidencia que impacta tu nómina, evitando
                  errores en cálculos y dispersiones. Así aseguras transparencia y tranquilidad para tu empresa y tus
                  colaboradores.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Finiquitos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-turquoise mb-4">
                  Finiquitos y liquidaciones en minutos
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
                  Resuelve de forma sencilla cualquier escenario de finiquito o liquidación. Nommy te permite calcular y
                  generar documentos completos en minutos, cumpliendo siempre con la normativa y evitando complicaciones
                  administrativas.
                </p>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <img src="/images/mobile-security-app.png" alt="app" className="w-full max-w-lg rounded-lg shadow-lg" />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Back to Product Link */}
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



      {/* CTA Section */}
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
