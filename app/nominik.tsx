"use client"

import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles } from 'lucide-react';

export default function NominikChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 25000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
           '¡Hola! Soy Nominik 👋, tu asistente virtual de Nommy. Estoy aquí para ayudarte con cualquier pregunta sobre nómina, RRHH o lo que necesites. ¿En qué puedo ayudarte hoy?<br/>Puedes consultar nuestro <a  href="https://drive.google.com/file/d/1cFTxtE8PW_hOgmomy2i56W1SArO7J-dV/view?usp=sharing" class ="text-[#4db8a8] font-semibold" target="_blank" rel="noopener noreferrer">aviso de privacidad</a>.'
        );
      }, 500);
    }
  }, [isOpen, messages.length]);

  const addBotMessage = (text) => {
    setMessages(prev => [
      ...prev,
      { id: crypto.randomUUID(), role: "bot", text },
    ]);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", text },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    addUserMessage(userMessage);
    setIsLoading(true);

    try {
      const conversationHistory = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.text
      }));

      const response = await fetch('/api/nomi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `Eres Nominik, el asistente virtual de Nommy. Tu función es ayudar con temas de nómina, RRHH, gestión de vacantes, control de horarios, candidatos, reportes y procesos laborales en general. Respondes de manera clara, profesional y amigable, manteniendo un tono cercano pero confiable.
Tus respuestas deben:
1. Explicar las funciones y beneficios de los módulos de Nommy.
2. Usar ejemplos claros cuando sea necesario.
3. Ser concisas, pero completas, evitando tecnicismos innecesarios.
4. Si la pregunta se sale del esquema de módulos, dar una respuesta humana que invite al usuario a obtener asesoría gratuita o demo, solicitando únicamente:
   - Nombre completo
   - Teléfono o correo electrónico  
   Nunca pidas fecha u hora.

Información adicional:
- Número de ventas: (33) 15179175
- La asesoría es sin costo.
- Nunca menciones “agendar demo”, solo solicita los datos necesarios.
- Mantén siempre la orientación hacia los módulos y beneficios de Nommy.

**Módulos y ejemplos de respuestas:**

1. **Gestión de Vacantes**
- Visibilidad de todas las vacantes: "Desde la pestaña de Vacantes puedes ver todas tus posiciones, diferenciando internas y externas, con estatus en tiempo real para tomar decisiones rápidas."
- Publicación automática en bolsas de trabajo: "Una vez activada, la vacante se publica automáticamente en OCC, Computrabajo y otras bolsas configuradas."

2. **Pipeline de Candidatos**
- Seguimiento de etapas: "El Pipeline muestra visualmente cuántos candidatos están recibidos, en revisión, con entrevista o match con la vacante."
- Mejor calidad de contrataciones: "Tener visibilidad clara permite analizar qué procesos generan mejores matches y tomar decisiones basadas en datos."

3. **Gestión de Candidatos**
- Centralización de información: "En la pestaña de Candidatos tienes una base centralizada con datos y historial completo, permitiendo reutilizar talento y construir una bolsa estratégica."

4. **Comunicación y Etapas**
- Notificaciones automáticas: "Desde Configuración de Etapas puedes usar plantillas para notificar automáticamente a los candidatos sobre su estatus, mejorando la experiencia sin aumentar carga operativa."

5. **Módulo de Control de Horarios**
- Plantillas de horarios: "Crea plantillas para grupos de colaboradores, asegurando consistencia y facilitando cambios masivos."
- Patrones de rotación: "Define esquemas cíclicos de horarios que se aplican automáticamente, equilibrando cargas y cuidando al colaborador."
- Automatización: "Reglas configurables asignan horarios automáticamente a nuevos colaboradores."

6. **Módulo de Reportes y Analítica**
- Dashboard estratégico: "Visualiza indicadores clave de RH para apoyar decisiones estratégicas y operativas."
- Asistencia y nómina: "Descarga reportes detallados que se integran fácilmente al proceso de nómina."
- Vacaciones e incidencias: "Visualiza información proporcional y exportable para control individual y organizacional."
- Retenciones y cumplimiento: "Descarga información detallada de retenciones legales para transparencia y cumplimiento."
- Reportes financieros y DO: "Analiza el impacto de la nómina por área, colaborador o empresa, apoyando decisiones estratégicas y eficiencia financiera."

**Nota:** Para preguntas fuera del esquema, responde de manera humana y dirige al usuario a dejar sus datos (nombre completo, teléfono o correo) para recibir atención personalizada.`,
            },
            ...conversationHistory,
            { role: 'user', content: userMessage },
          ],
        }),
      });

      const data = await response.json();
      addBotMessage(data.text);
    } catch (error) {
      addBotMessage('Disculpa, hubo un error al procesar tu mensaje. ¿Podrías intentarlo de nuevo?');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="relative group"
          >
            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute bottom-full right-0 mb-4 animate-[slideUp_0.3s_ease-out]">
                <div className="bg-white rounded-2xl shadow-2xl px-6 py-4 whitespace-nowrap border border-gray-100">
                  <p className="text-gray-800 font-medium text-sm">
                    Pregunta a <span className="text-[#4db8a8] font-semibold">Nominik</span>
                  </p>
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
                </div>
              </div>
            )}

            {/* Main Button */}
            <div className="relative">
              {/* Pulse animation ring */}
              <div className="absolute inset-0 bg-[#4db8a8] rounded-full animate-ping opacity-20"></div>
              
              {/* Gradient background */}
              <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-[#4db8a8] to-[#3da393] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[#4db8a8]/50">
                <img
                  src="/images/design-mode/nominik.jpg"
                  alt="Nominik"
                  className="h-10 w-10 rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="hidden text-white text-2xl font-bold">N</div>
              </div>

              {/* Sparkle indicator */}
              <div className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Sparkles className="h-3 w-3 text-white" />
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[400px] h-[600px] flex flex-col bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-[slideUpFade_0.3s_ease-out]">
          {/* Header with gradient */}
          <div className="relative bg-gradient-to-r from-[#4db8a8] to-[#3da393] px-6 py-5">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative flex items-center gap-4">
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30">
                  <img
                    src="/images/design-mode/nominik.jpg"
                    alt="Nominik"
                    className="h-10 w-10 rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="hidden text-white text-xl font-bold">N</span>
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">Nominik</h3>
                <p className="text-white/90 text-xs font-medium">Asistente Virtual IA de Nommy</p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-6 py-6 bg-gradient-to-b from-gray-50 to-white space-y-4"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#4db8a8 #f3f4f6'
            }}
          >
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex items-end gap-3 animate-[fadeIn_0.3s_ease-out] ${
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                {message.role === 'bot' && (
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#4db8a8] to-[#3da393] flex items-center justify-center flex-shrink-0 shadow-md">
                    <img
                      src="/images/design-mode/nominik.jpg"
                      alt="N"
                      className="h-6 w-6 rounded-full"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="hidden text-white text-xs font-bold">N</span>
                  </div>
                )}

                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-[#4db8a8] to-[#3da393] text-white rounded-br-md'
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-md'
                  }`}
                >
                  <div 
                    className="text-sm leading-relaxed whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: message.text }}
                  />
                </div>

                {message.role === 'user' && (
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white text-xs font-bold">TÚ</span>
                  </div>
                )}
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex items-end gap-3 animate-[fadeIn_0.3s_ease-out]">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#4db8a8] to-[#3da393] flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-xs font-bold">N</span>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-6 py-4 shadow-sm">
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 bg-[#4db8a8] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="h-2 w-2 bg-[#4db8a8] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="h-2 w-2 bg-[#4db8a8] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="px-6 py-4 bg-white border-t border-gray-100">
            <form onSubmit={handleSubmit} className="flex items-center gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                type="text"
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4db8a8] focus:border-transparent disabled:opacity-50 transition-all duration-200"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="h-11 w-11 rounded-full bg-gradient-to-br from-[#4db8a8] to-[#3da393] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

