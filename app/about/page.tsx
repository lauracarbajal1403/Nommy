import { Users, Target, Award, Heart, ArrowRight } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import WhatsAppButton from "@/components/whatsapp-button"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      image: "images/Centrados.png",
      title: "Centrados en las personas",
      description: "Creemos que detrás de cada nómina hay personas reales con necesidades reales.",
    },
    {
      icon: Target,
      image: "images/Precision.png",
      title: "Precisión y confiabilidad",
      description: "Nos comprometemos a ofrecer cálculos exactos y procesos confiables siempre.",
    },
    {
      icon: Award,
      image: "images/Excelencia.png",
      title: "Excelencia en servicio",
      description: "Brindamos soporte excepcional y acompañamiento en cada paso del proceso.",
    },
    {
      icon: Heart,
      image: "images/Pasion.png",
      title: "Pasión por simplificar",
      description: "Transformamos procesos complejos en experiencias simples e intuitivas.",
    },
  ]

  const team = [
    {
      name: "Ricardo Melis",
      role: "CEO",
      description: "Experto en diseñar soluciones tecnológicas.",
      photo: "/team-member-1.png",
    },
    {
      name: "Manuel Vargas",
      role: "CTO",
      description: "Más de 10 años innovando en Nómina y RRHH.",
      photo: "/team-member-manny.jpeg",
    },
    {
      name: "Alejandro Finol",
      role: "Head of Customer Success",
      roleSize: "text-xs",
      description: "Especialista en experiencia del cliente y postventa.",
      photo: "/finol-profile.jpeg",
    },
    {
      name: "Saray Corzo",
      role: "Marketing Manager",
      description: "Estratega en marketing y lanzamientos tecnológicos.",
      photo: "/images/sara.jpg",
    },
  ]

  return (
    <div className="py-0">
      {/* Hero Section - Minimal and Professional */}
      <section className="py-20 bg-gradient-to-br from-white via-turquoise/15 to-navy/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="space-y-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
                  <p className="text-turquoise font-extrabold">Automatizamos </p>
                  <p className="text-[#274263]">procesos complejos</p>
                  <p className="text-turquoise"> sin perder el lado humano.</p>
                </h1>
                <p className="text-xl text-gray-600">
                  En Nommy creemos que Recursos Humanos es más que una función operativa: es el centro que mantiene en
                  equilibrio a las personas, los procesos y la cultura de toda empresa.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="relative flex justify-center lg:justify-end">
                <img
                  src="/celular2.png"
                  alt="App móvil de NOMMY mostrando celebraciones y eventos de empleados"
                  className="w-full max-w-sm mx-auto"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-gradient-to-br from-white to-turquoise/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <div className="space-y-12">
              <p className="text-2xl lg:text-3xl font-light text-navy leading-relaxed">
                Creamos una plataforma de gestión de nómina diseñada para empresas que buscan precisión, eficiencia y
                cumplir siempre con sus obligaciones:
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center btn-secondary text-base lg:text-lg group px-8 py-4 whitespace-nowrap"
              >
                ¡Empieza a optimizar tu nómina hoy!
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <img
                  src="/images/Mision.png"
                  alt="nommy - Nuestra misión y visión"
                  className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="space-y-8">
                <div>
                  <span className="text-3xl font-bold text-[#274263] mb-4">Nuestra </span>{" "}
                  <span className="text-3xl font-bold text-turquoise mb-4">Misión</span>
                  <p className="text-lg text-gray-600">
                    Eliminar la barrera de lo operativo. Nuestra misión es devolverles a los equipos de RRHH su vocación
                    estratégica, automatizando todo lo automatizable para que puedan enfocar su energía en lo que
                    ninguna máquina puede hacer: conectar, inspirar y desarrollar a las personas que hacen crecer la
                    empresa.
                  </p>
                </div>

                <div>
                  <span className="text-3xl font-bold text-[#274263] mb-4">Nuestra</span>{" "}
                  <span className="text-3xl font-bold text-turquoise mb-4">Visión</span>
                  <p className="text-lg text-gray-600">
                    Ser el estándar para que las empresas evolucionen. Aspiramos a que cada líder de RRHH que use
                    nuestra plataforma se convierta en un arquitecto de cultura y un impulsor del desempeño, haciendo de
                    su empresa el lugar donde el talento más brillante elige crecer..
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-turquoise mb-6">Nuestros Valores</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Los principios que guían cada decisión que tomamos y cada producto que desarrollamos.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={index}>
                <div className="card text-center h-full">
                  <div className="w-16 h-16 bg-turquoise bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                    <img src={value.image || "/placeholder.svg"} alt={value.title} className="w-8 h-8 object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-5xl font-bold text-[#274263] mb-6">Nuestro</span>
              <span className="text-5xl font-bold text-turquoise mb-6"> Equipo</span>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conoce a las personas que hacen posible que NOMMY sea una realidad.
              </p>
            </div>
          </ScrollAnimation>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-5xl">
              {team.map((member, index) => (
                <ScrollAnimation key={index}>
                  <div className="card text-center">
                    {member.photo ? (
                      <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full">
                        <img
                          src={member.photo || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 bg-gradient-to-r from-turquoise to-navy rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-navy mb-2">{member.name}</h3>
                    <p className={`${member.roleSize || "text-sm"} text-turquoise font-semibold mb-3`}>{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-turquoise">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <ScrollAnimation>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">¿Quieres ser parte de nuestra historia?</h2>
            <p className="text-xl text-white mb-8">
              Únete a cientos de empresas que ya confían en NOMMY para gestionar su nómina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="bg-white text-navy px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-nommy hover:shadow-nommy-lg"
              >
                ¡Agenda tu DEMO!
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
