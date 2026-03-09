"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
import { ArrowRight, Check,  Receipt, DollarSign, Zap } from 'lucide-react'
import ScrollAnimation from "@/components/scroll-animation"
import  NominikChatbot  from "@/app/nominik"
import NommyCalculator from "@/components/NommyCalculator"
const PHRASES = ["gestionar tu talento", "reducir errores", "ahorrar tiempo", "optimizar tu nómina" ];
function AnimatedPhrase() {
  const [displayText, setDisplayText] = useState(PHRASES[0]);
  const [isErasing, setIsErasing] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(PHRASES[0].length);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isErasing && charIndex === PHRASES[phraseIndex].length) {
      // Pause before starting to erase
      timeout = setTimeout(() => setIsErasing(true), 2500);
    } else if (isErasing && charIndex > 0) {
      // Erase one character at a time
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (isErasing && charIndex === 0) {
      // Move to next phrase and start typing
      const next = (phraseIndex + 1) % PHRASES.length;
      setPhraseIndex(next);
      setIsErasing(false);
    } else if (!isErasing && charIndex < PHRASES[phraseIndex].length) {
      // Type one character at a time
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isErasing, phraseIndex]);

  useEffect(() => {
    if (!isErasing) {
      setDisplayText(PHRASES[phraseIndex].slice(0, charIndex));
    } else {
      setDisplayText(PHRASES[phraseIndex].slice(0, charIndex));
    }
  }, [charIndex, isErasing, phraseIndex]);
return (
    <span className="relative inline-block">
      <span>{displayText}</span>
      {/* Blinking cursor */}
      <span
        className="inline-block w-[3px] h-[1em] bg-white ml-[2px] align-middle"
        style={{
          animation: "blink 0.75s step-end infinite",
        }}
      />
      {/* Underline decoration */}
      <span
        className="absolute left-0 -bottom-2 h-2 rounded-full rotate-[-1deg]"
        style={{
          width: "100%",
          background: "var(--turquoise, #2dd4bf)",
          transition: "width 0.1s",
        }}
      />
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <NominikChatbot />
     
      {/* Value Proposition Section */}
      <section className="relative bg-gradient-to-r from-navy to-turquoise overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-left text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                La plataforma integral <br />
                para{" "}
                <AnimatedPhrase />
              </h2>

              <p className="text-lg text-white/90 mb-8 max-w-xl">
                Centraliza nómina, control de asistencia, y beneficios en una sola
                plataforma. Ahorra tiempo y haz feliz a tu equipo con la mejor
                experiencia digital.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-turquoise hover:bg-navy text-white font-bold px-6 py-3 rounded-full text-center transition"
                >
                  ¡DEMO GRATIS!
                </Link>

                <Link
                  href="/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy hover:bg-turquoise text-white font-bold px-6 py-3 rounded-full text-center transition"
                >
                  ▶ Ver como funciona
                </Link>
              </div>

              {/* Benefits */}
              <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Check className="text-turquoise w-5 h-5" />
                  <span>$0 Costo implementación</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-turquoise w-5 h-5" />
                  <span>Soporte 24/7</span>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full max-w-2xl mx-auto lg:mx-0" style={{ minHeight: "500px" }}>
              <ScrollAnimation
                  animation="slide-in-right"
                  className="absolute bottom-0 right-0 z-10 w-[85%]"
                >
              <div className="absolute bottom-0 right-0 z-10 w-[85%]">
                <img
                  src="/Tablet.png"
                  alt="Dashboard de NOMMY en tablet"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
              </ScrollAnimation>
              <div className="absolute top-0 left-0 z-20 w-[35%]">
                <ScrollAnimation
                  animation="slide-in-left"
                  className="absolute top-0 left-0 z-20 w-[35%]"
                >
                <img
                  src="/Cel.png"
                  alt="Dashboard de NOMMY en celular"
                  className="w-full rounded-xl shadow-xl"
                />
                </ScrollAnimation>
              </div>
            </div>

          </div>
        </div>
      </section>
      

      {/* Value Proposition Section - Reduced size */}
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              Todo lo que necesitas 
            </h2>
            <p className="text-lg text-turquoise max-w-2xl mx-auto">
              Centraliza la gestión de nómina, talento y más beneficios en una{" "}
              <span className="font-semibold">sola experiencia.</span>
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-8">
  
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 rounded-full  flex items-center justify-center mb-4">
                <img src="/estrategia.png" className="w-7 h-7 text-navy" />
              </div>

              <h3 className="font-semibold text-turquoise text-lg mb-3">
                Optimiza tu estrategia de nómina con Nommy
              </h3>

              <p className="text-sm text-navy leading-relaxed">
                Nommy automatiza procesos de nómina tediosos reduciendo errores,
                centralizando toda tu gestión de los colaboradores en una sola
                plataforma intuitiva.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                <img src="/mov.png" className="w-7 h-7 text-navy" />
              </div>

              <h3 className="font-semibold text-turquoise text-lg mb-3">
                Sincronización de movimientos afiliatorios en tiempo
              </h3>

              <p className="text-sm text-navy leading-relaxed">
                Optimiza tu carga fiscal cumpliendo con todas las normativas del SAT
                y leyes laborales vigentes.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 rounded-full  flex items-center justify-center mb-4">
                <img src="/ia.png" className="w-7 h-7 text-navy" />
              </div>

              <h3 className="font-semibold text-turquoise text-lg mb-3">
                Reclutamiento con Nommy IA
              </h3>

              <p className="text-sm text-navy leading-relaxed">
                El match perfecto entre tu empresa y el talento que buscas.
              </p>
            </div>

          </div>
        </div>
      </section>
      <NommyCalculator />

      

      {/* Benefits Section - Flush alignment with section above */}
      
      {/* Tool Showcase */}
      <section className="relative py-20 bg-gradient-to-br from-turquoise/10 to-navy/5">
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
                <Link href="/demo" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center group">
                  ¡DEMO GRATIS!
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div className="relative">
                <img src="/pc-nommy-s.png" alt="Dashboard de NOMMY" className="w-full rounded-xl" />

                {/* Benefits Section - Flush alignment with section above
                <img src="/portal-nommy.png" alt="Dashboard de NOMMY" className="w-full rounded-xl" />
                */}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <section className="relative bg-gradient-to-br from-navy to-turquoise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            <ScrollAnimation animation="slide-in-left">
              <div className="space-y-8 text-left ">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
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
                        <span className="text-lg text-white">{benefit}</span>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div className="relative flex justify-center">
                <img src="/dashi.png" alt="Dashboard nommy" className="w-full-mx-auto" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      {/* Steps Section */}
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Simple, rápido y seguro
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Olvida las implementaciones eternas. Con Nommy, estarás operativo en lo
              que tardas en leer esto.
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/Monofinal.png"
                alt="Proceso simple Nommy"
                className="w-full max-w-sm"
              />
            </div>

            {/* RIGHT STEPS */}
            <div className="space-y-8">

              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-turquoise flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-2xl">Crea tu empresa</h3>
                  <p className="text-white/80 text-xl leading-relaxed">
                    Ingresa los datos de la empresa la cual deseas realizar el cálculo
                    de nómina.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-turquoise flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-2xl">
                    Agrega a tus colaboradores
                  </h3>
                  <p className="text-white/80 text-xl leading-relaxed">
                    Carga de manera manual o masiva el listado de tus colaboradores en
                    minutos usando nuestras plantillas de Excel.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-turquoise flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-2xl">Timbrado de Nómina</h3>
                  <p className="text-white/80 text-xl leading-relaxed">
                    Obtén los layouts bancarios para desarrollar el respectivo
                    timbrado de tu nómina y listo así de fácil es calcular tu nómina
                    con Nommy.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Audience Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              ¿Eres de los que hacen que las cosas pasen?{" "}
              <span className="text-turquoise text-bold">Nosotros también.</span>
            </h2>

            <p className="mt-4 text-lg text-turquoise max-w-3xl mx-auto">
              Ya seas la mente que decide, las manos que ejecutan o el motor que lo
              hace posible. Te acompañamos en los focos y en el día a día.
            </p>
          </div>
        </div>

        {/* Cards Strip */}
        <div className="bg-turquoise py-8">
          <div className="max-w-7xl mx-auto">

            <div className="grid sm:grid-cols-2 lg:grid-cols-4">

              {/* Card 1 */}
              <div className="p-8 text-white border-white/20 lg:border-r">
                <div className="text-white/70 font-semibold mb-6">01</div>

                <h3 className="font-bold text-xl text-white mb-2">
                  Líderes RRHH
                </h3>

                <p className="text-white/90 text-lg leading-relaxed">
                  Convierte procesos en estrategia y talento en imparable.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 text-white border-white/20 lg:border-r">
                <div className="text-white/70 font-semibold mb-6">02</div>

                <h3 className="font-bold text-xl mb-2">
                  Dueño de empresa
                </h3>

                <p className="text-white/90 text-lg leading-relaxed">
                  Tu empresa, tu visión, tu control. Sin sorpresas.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 text-white border-white/20 lg:border-r">
                <div className="text-white/70 font-semibold mb-6">03</div>

                <h3 className="font-bold text-xl mb-2">
                  Alas para tu negocio
                </h3>

                <p className="text-white/90 text-lg leading-relaxed">
                  Es momento de despegar de la mano de Nommy.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-8 text-white">
                <div className="text-white/70 font-semibold mb-6">04</div>

                <h3 className="font-bold text-xl mb-2">
                  Despachos Contables
                </h3>

                <p className="text-white/90 text-lg leading-relaxed">
                  Unifica la gestión de tus clientes, controla la rentabilidad por
                  proyecto y haz crecer tu equipo sin perder de vista los plazos clave.
                </p>
              </div>

            </div>
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
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-navy px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center group btn-shadow"
            >
              ¡DEMO GRATIS!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </ScrollAnimation>
        </div>
        
      </section>
      
    </div>
  )
}
