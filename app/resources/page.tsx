import { Download, BookOpen, Video, FileText, ArrowRight } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import  NominikChatbot  from "@/app/nominik"
export default function ResourcesPage() {
  const resources = [
    {
      title: "5 errores comunes en el cierre de nómina",
      description: "Aprende a identificar y evitar los errores más frecuentes que cometen los equipos de RRHH.",
      category: "Blog",
      icon: BookOpen,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Plantilla gratuita para cálculo de aguinaldo",
      description: "Descarga nuestra plantilla de Excel para calcular el aguinaldo de tus empleados.",
      category: "Guía",
      icon: FileText,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Video: Automatiza tu nómina con Nommy",
      description: "Tutorial paso a paso para configurar y automatizar tu proceso de nómina.",
      category: "Video",
      icon: Video,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Guía completa de cumplimiento fiscal",
      description: "Todo lo que necesitas saber sobre las obligaciones fiscales en nómina.",
      category: "Guía",
      icon: FileText,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Webinar: Tendencias en RRHH 2025", // Updated year from 2024 to 2025
      description: "Descubre las últimas tendencias y mejores prácticas en recursos humanos.",
      category: "Video",
      icon: Video,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Checklist de onboarding de empleados",
      description: "Lista completa para asegurar un proceso de incorporación exitoso.",
      category: "Guía",
      icon: FileText,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const downloadables = [
    {
      title: "Excel de nómina",
      description: "Plantilla completa para cálculos de nómina",
    },
    {
      title: "Calendario fiscal",
      description: "Fechas importantes para cumplimiento fiscal",
    },
    {
      title: "Guía de onboarding",
      description: "Proceso completo de incorporación de empleados",
    },
  ]

  return (
    <div className="py-20">
      {/* Hero Section */}
      <NominikChatbot />
      <section className="bg-gradient-to-br from-navy to-turquoise py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Recursos para potenciar tu gestión de RRHH</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">Aprende, mejora y mantente actualizado con Nommy</p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <ScrollAnimation key={index}>
                <article className="card group cursor-pointer h-full">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-turquoise text-white px-3 py-1 rounded-full text-sm font-medium">
                        {resource.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-turquoise transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1">{resource.description}</p>
                    <div className="flex items-center text-turquoise font-medium group-hover:translate-x-1 transition-transform duration-300">
                      <span>Leer más</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadables Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-navy text-center mb-12">Plantillas y Herramientas</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloadables.map((item, index) => (
              <ScrollAnimation key={index}>
                <div className="card text-center group">
                  <div className="w-16 h-16 bg-turquoise bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-turquoise" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <button className="btn-secondary w-full group-hover:scale-110 hover:-translate-y-1 transition-transform duration-300 group">
                    <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    <span className="group-hover:animate-pulse">Descargar</span>
                  </button>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Sign-Up */}
      <section className="py-20 bg-gradient-to-br from-navy to-turquoise">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-white mb-6">Recibe tips y recursos directamente en tu correo</h2>
            <p className="text-lg text-gray-200 mb-8">
              Mantente actualizado con las últimas tendencias y mejores prácticas en RRHH.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-white text-navy px-6 py-3 rounded-full font-medium hover:scale-110 hover:-translate-y-1 hover:rotate-1 transition-all duration-300 whitespace-nowrap group"
              >
                <span className="group-hover:animate-pulse">Suscribirme</span>
              </button>
            </form>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
