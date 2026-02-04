import { Download, BookOpen, Video, FileText, ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import NominikChatbot from "@/app/nominik"

export default function ResourcesPage() {
  const resources = [
    {
      title: "5 errores comunes en el cierre de nómina",
      description: "Aprende a identificar y evitar los errores más frecuentes que cometen los equipos de RRHH.",
      category: "Blog",
      icon: BookOpen,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Plantilla gratuita para cálculo de aguinaldo",
      description: "Descarga nuestra plantilla de Excel para calcular el aguinaldo de tus empleados.",
      category: "Guía",
      icon: FileText,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Video: Automatiza tu nómina con Nommy",
      description: "Tutorial paso a paso para configurar y automatizar tu proceso de nómina.",
      category: "Video",
      icon: Video,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Guía completa de cumplimiento fiscal",
      description: "Todo lo que necesitas saber sobre las obligaciones fiscales en nómina.",
      category: "Guía",
      icon: FileText,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Webinar: Tendencias en RRHH 2025",
      description: "Descubre las últimas tendencias y mejores prácticas en recursos humanos.",
      category: "Video",
      icon: Video,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Checklist de onboarding de empleados",
      description: "Lista completa para asegurar un proceso de incorporación exitoso.",
      category: "Guía",
      icon: FileText,
      image: "/placeholder.svg?height=200&width=300",
      color: "from-teal-500 to-cyan-500"
    },
  ]

  const downloadables = [
    {
      title: "Excel de nómina",
      description: "Plantilla completa para cálculos de nómina",
      icon: FileText,
      gradient: "from-emerald-400 to-green-600"
    },
    {
      title: "Calendario fiscal",
      description: "Fechas importantes para cumplimiento fiscal",
      icon: TrendingUp,
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      title: "Guía de onboarding",
      description: "Proceso completo de incorporación de empleados",
      icon: Users,
      gradient: "from-purple-400 to-pink-600"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <NominikChatbot />
      
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-indigo-900 to-turquoise py-24 lg:py-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-turquoise rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm text-white font-medium">Nuevos recursos cada semana</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Recursos para potenciar tu
              <span className="block bg-gradient-to-r from-turquoise to-cyan-300 bg-clip-text text-transparent">
                gestión de RRHH
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-12">
              Aprende, mejora y mantente actualizado con contenido de calidad para tu equipo
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-gray-300">Recursos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10K+</div>
                <div className="text-sm text-gray-300">Descargas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-gray-300">Gratis</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filter Tabs - New Feature */}
      <section className="py-8 sticky top-0 bg-white/80 backdrop-blur-lg z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {["Todos", "Blog", "Guía", "Video", "Plantillas"].map((filter, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  index === 0
                    ? "bg-navy text-white shadow-lg shadow-navy/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid - Enhanced Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <ScrollAnimation key={index}>
                  <article className="group cursor-pointer h-full">
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col transform hover:-translate-y-2">
                      {/* Image with overlay */}
                      <div className="relative overflow-hidden h-56">
                        <img
                          src={resource.image || "/placeholder.svg"}
                          alt={resource.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${resource.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                        
                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                            <Icon className="w-4 h-4 text-navy" />
                            <span className="text-sm font-semibold text-navy">
                              {resource.category}
                            </span>
                          </div>
                        </div>

                        {/* Floating icon */}
                        <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <Icon className="w-6 h-6 text-navy" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-turquoise transition-colors duration-300 line-clamp-2">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 mb-6 flex-1 line-clamp-3">{resource.description}</p>
                        
                        {/* CTA */}
                        <div className="flex items-center justify-between">
                          <span className="text-turquoise font-semibold group-hover:underline">
                            Leer más
                          </span>
                          <div className="w-10 h-10 rounded-full bg-turquoise/10 flex items-center justify-center group-hover:bg-turquoise transition-colors duration-300">
                            <ArrowRight className="w-5 h-5 text-turquoise group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </section>

      {/* Downloadables Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-turquoise rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-turquoise/10 border border-turquoise/20 rounded-full px-4 py-2 mb-6">
                <Download className="w-4 h-4 text-turquoise" />
                <span className="text-sm text-turquoise font-medium">Descarga gratis</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
                Plantillas y Herramientas
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Recursos listos para usar que te ahorrarán horas de trabajo
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloadables.map((item, index) => {
              const Icon = item.icon
              return (
                <ScrollAnimation key={index}>
                  <div className="group relative">
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>
                    
                    {/* Card */}
                    <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-navy mb-3 text-center">{item.title}</h3>
                      <p className="text-gray-600 mb-8 text-center">{item.description}</p>
                      
                      <button className={`w-full bg-gradient-to-r ${item.gradient} text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group/btn`}>
                        <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                        <span>Descargar ahora</span>
                      </button>
                    </div>
                  </div>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-navy via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-turquoise rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-sm text-white font-medium">Newsletter semanal</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                No te pierdas nuestros mejores recursos
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Recibe tips exclusivos, plantillas y las últimas tendencias en RRHH directamente en tu correo
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full px-6 py-4 rounded-xl border-2 border-transparent bg-white/95 backdrop-blur-sm focus:outline-none focus:border-turquoise focus:ring-4 focus:ring-turquoise/20 transition-all duration-300 text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-turquoise to-cyan-400 text-navy px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 whitespace-nowrap group"
              >
                <span className="flex items-center gap-2">
                  Suscribirme
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>

            <p className="text-center text-gray-300 text-sm mt-6">
              ✨ Únete a más de 5,000 profesionales de RRHH
            </p>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
