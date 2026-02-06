import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import NominikChatbot from "@/app/nominik"

export default function ResourcesPage() {
  const resources = [
    {
      title: "Nómina en Jalisco 2026",
      description:
        "Si eres empresario Jalisciense esta guía práctica es para ti. Te compartimos cómo la nómina de 2026 exige estos 3 cambios inmediatos.",
      category: "Blog",
      icon: BookOpen,
      image: "/bloggy.jpg",
      link: "/nomina-jalisco-2026",
      readTime: "5 min",
      date: "15 Ene 2026",
    },
    {/*
    {
      title: "El SAT y la nómina electrónica 2.0",
      description: "Vigilancia estricta en Jalisco",
      category: "Blog",
      icon: BookOpen,
      image: "/bloggy.jpg",
      link: "/sat-nomina-electronica",
      readTime: "4 min",
      date: "10 Ene 2026",
    },
    {
      title: 'El "Plus Jalisco": Prestaciones locales que impactan la nómina',
      description: "Conoce cómo está siendo impactada tu nómina.",
      category: "Blog",
      icon: BookOpen,
      image: "/bloggy.jpg",
      link: "/plus-jalisco-prestaciones",
      readTime: "6 min",
      date: "5 Ene 2026",
    },
    */}
  ]

  const [featured, ...articles] = resources

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NominikChatbot />
      {/* Hero */} 
      <section className="relative bg-gradient-to-br from-navy via-navy to-turquoise py-32 lg:py-60 text-white overflow-hidden"> 
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div> 
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation> 
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-4 bg-turquoise/20 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-turquoise/30">
                Centro de Recursos
              </span> 
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Recursos para potenciar tu gestión de{" "}
                <span className="text-turquoise">RRHH</span>
              </h1> 
              
              <p className="text-lg sm:text-xl lg:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                Aprende, mejora y mantente actualizado con contenido especializado para tu empresa
              </p> 
            </div> 
          </ScrollAnimation>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation>
            <Link href={featured.link}>
              <article className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-6 left-6 bg-turquoise text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      ⭐ Destacado
                    </span>
                  </div>

                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featured.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featured.readTime}
                      </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 group-hover:text-turquoise transition-colors">
                      {featured.title}
                    </h2>

                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {featured.description}
                    </p>

                    <div className="flex items-center text-turquoise font-semibold text-lg gap-2 group-hover:gap-3 transition-all">
                      <span>Leer artículo completo</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      

      {/* Articles Grid 
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((resource, index) => (
              <ScrollAnimation key={index}>
                <Link href={resource.link}>
                  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {resource.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {resource.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-turquoise transition-colors">
                        {resource.title}
                      </h3>

                      <p className="text-gray-600 mb-4 flex-1">
                        {resource.description}
                      </p>

                      <div className="flex items-center text-turquoise font-semibold gap-1 group-hover:gap-2 transition-all">
                        <span>Leer más</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                  </article>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      */}
    </div>
  )
}
