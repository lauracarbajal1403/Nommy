"use client"
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import NominikChatbot from "@/app/nominik"

export default function ResourcesPage() {
  const resources = [
    {
      title: "Nómina en Jalisco 2026",
      description: "Si eres empresario Jalisciense esta guía práctica es para ti. Te compartimos cómo la nómina de 2026 exige estos 3 cambios inmediatos.",
      category: "Blog",
      icon: BookOpen,
      image: "/bloggy.jpg",
      link: "/nomina-jalisco-2026",
      readTime: "8 min de lectura",
      date: "6 Feb 2026",
    },
    {
      title: "Nómina en Jalisco 2026: Ley 40 horas",
      description: "Si eres Empresario Jalisciense esta guía práctica es para ti: Te compartimos como la Nómina de 2026 Exige Estos 3 Cambios Inmediatos",
      category: "Blog",
      icon: BookOpen,
      image: "/portada.jpg",
      link: "/nomina",
      readTime: "4 min de lectura",
      date: "10 Ene 2026",
    },
  ];

  // Componente interno para mantener la consistencia
  const ArticleCard = ({ resource, isFeatured }) => (
    <Link href={resource.link}>
      <article className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group cursor-pointer mb-8">
        <div className="grid md:grid-cols-2">
          {/* Imagen */}
          <div className="relative h-64 md:h-auto overflow-hidden">
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <span className="absolute top-6 left-6 bg-turquoise text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              ⭐ {isFeatured ? "Destacado" : "Nuevo Blog"}
            </span>
          </div>

          {/* Contenido */}
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {resource.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {resource.readTime}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-turquoise transition-colors">
              {resource.title}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {resource.description}
            </p>

            <div className="flex items-center text-turquoise font-bold gap-2 group-hover:gap-3 transition-all">
              <span>{isFeatured ? "Leer artículo completo" : "Leer artículo completo"}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 flex items-center text-white bg-gradient-to-br from-navy via-navy to-turquoise">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-turquoise/20 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-turquoise/30">
            Centro de Recursos
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Recursos para potenciar tu gestión de <span className="text-turquoise">RRHH</span>
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Aprende, mejora y mantente actualizado con contenido especializado para tu empresa.
          </p>
        </div>
      </section>

      {/* Contenedor de Artículos */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {resources.map((item, index) => (
            <ScrollAnimation key={index}>
              <ArticleCard 
                resource={item} 
                isFeatured={index === 0} 
              />
            </ScrollAnimation>
          ))}
        </div>
      </main>

      <NominikChatbot />
    </div>
  );
}