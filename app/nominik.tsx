"use client"
import React, { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';

export default function NominikChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);
  
  useEffect(() => {
    // Aparece a los 5 segundos
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    // Desaparece a los 25 segundos
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
              content: `
        Eres nominik, el asistente virtual de Nommy.
        Ayudas con temas de nómina, RRHH, procesos laborales y dudas generales.
        Respondes de forma clara, profesional y amigable.
        El número de ventas de Nommy es (33) 15179175
        Pide los datos necesarios no digas que es para agendar DEMO: nombre completo, teléfono o correo.
        La asesoría es sin costo
        No pidas fecha ni hora, solo manda los datos
        Gestión de Vacantes
        ¿Cómo puedo tener visibilidad real de todas mis vacantes sin perder control entre internas y externas?
        Respuesta (Bot):
        Desde la pestaña de Vacantes puedes visualizar todas tus posiciones en un solo lugar, diferenciando claramente cuáles son internas y cuáles externas. Además, el sistema te muestra su estatus en tiempo real: activas, sin publicar o ya publicadas. Esto te permite tomar decisiones rápidas sobre prioridades de contratación sin depender de reportes manuales.
        ¿Tengo que publicar manualmente cada vacante en las bolsas de trabajo?
        Respuesta (Bot):
        No. Una vez que creas y activas una vacante, la plataforma la publica automáticamente en bolsas de trabajo como OCC, Computrabajo y otras configuradas. Esto reduce tiempos operativos y asegura una mayor cobertura sin esfuerzo adicional del equipo.
        2. Pipeline de Candidatos
        ¿Cómo sé en qué etapa está cada candidato sin revisar expediente por expediente?
        Respuesta (Bot):
        El Pipeline de Candidatos te muestra visualmente el avance de cada vacante. Puedes ver cuántos candidatos están recibidos, en revisión, con entrevista programada, entrevistados y cuáles ya hicieron match con la vacante. Esto te ayuda a detectar cuellos de botella y mejorar la eficiencia del proceso de selección.
        ¿Cómo me ayuda esto a mejorar la calidad de las contrataciones?
        Respuesta (Bot):
        Al tener visibilidad clara de cada etapa y del número de candidatos evaluados por vacante, puedes analizar qué procesos generan mejores matches, ajustar criterios de selección y fortalecer decisiones basadas en datos, no en intuición.
        3. Gestión de Candidatos
        ¿Puedo centralizar la información de todos los candidatos sin perder el historial?
        Respuesta (Bot):
        Sí. En la pestaña de Candidatos tienes una base centralizada con nombre, correo, teléfono, puesto al que aplicó y fecha de registro. Esto permite dar seguimiento histórico, reutilizar talento y construir una bolsa de candidatos estratégica para futuras vacantes.
        4. Comunicación y Etapas del Proceso
        ¿Cómo evito que los candidatos se queden sin respuesta durante el proceso?
        Respuesta (Bot):
        Desde la pestaña de Configuración de Etapas, puedes usar plantillas de comunicación que notifican automáticamente a los candidatos sobre el estatus de su postulación. Esto mejora la experiencia del candidato y fortalece la marca empleadora sin aumentar la carga operativa.
        MÓDULO DE CONTROL DE HORARIOS
        1. Asignación y Plantillas de Horarios
        ¿Cómo puedo estandarizar horarios sin configurarlos uno por uno?
        Respuesta (Bot):
        Puedes crear Plantillas de Horario que luego se asignan fácilmente a grupos de colaboradores. Esto asegura consistencia, reduce errores y facilita cambios masivos cuando hay ajustes organizacionales.
        2. Patrones de Rotación
        ¿Cómo gestionar esquemas de rotación sin afectar la operación ni al colaborador?
        Respuesta (Bot):
        Con los Patrones de Rotación, puedes definir esquemas cíclicos de horarios que se aplican automáticamente. Esto permite equilibrar cargas laborales, mejorar la planeación operativa y cuidar el bienestar del colaborador.
        3. Automatización de Horarios
        ¿Se pueden asignar horarios automáticamente a nuevos colaboradores?
        Respuesta (Bot):
        Sí. Desde la pestaña de Configuración, puedes definir reglas para que los horarios se asignan automáticamente a plantillas de colaboradores, reduciendo tareas manuales y errores administrativos.
        MÓDULO DE REPORTES Y ANALÍTICA
        1. Dashboard Estratégico
        ¿Qué información clave puedo usar para tomar decisiones estratégicas?
        Respuesta (Bot):
        El Dashboard concentra indicadores clave de la operación de RH, permitiéndote visualizar tendencias, riesgos y oportunidades en un solo lugar. Es una herramienta diseñada para apoyar decisiones estratégicas y no sólo operativas.
        2. Asistencia y Nómina
        ¿Cómo facilitó la preparación de la nómina sin reprocesos?
        Respuesta (Bot):
        Desde la pestaña de Asistencia, puedes descargar reportes detallados en Excel que se integran fácilmente al proceso de nómina, asegurando información confiable y actualizada.
        3. Vacaciones e Incidencias
        ¿Cómo controlo vacaciones e incidencias sin perder visibilidad por colaborador?
        Respuesta (Bot):
        El Balance de Vacaciones y el Balance de Incidencias por Colaborador te permiten ver información detallada, proporcional y exportable. Esto facilita el control individual y el análisis organizacional por periodos.
        4. Retenciones y Cumplimiento
        ¿Puedo monitorear fácilmente las retenciones legales?
        Respuesta (Bot):
        Sí. Los reportes de Retención de Infonavit y Fonacot te permiten descargar información detallada por colaborador en Excel, ayudando al cumplimiento normativo y a la transparencia financiera.
        5. Reportes Financieros y DO
        ¿Cómo vinculo RH con decisiones financieras del negocio?
        Respuesta (Bot):
        Con el Reporte de Acumulados (ISN, ISR, IMSS) y el Gasto por Departamento, puedes analizar el impacto real de la nómina por área, colaborador o empresa, apoyando decisiones de estructura organizacional y eficiencia financiera.
        Nota:
        Preguntas como estas o similares deben estar orientadas a respuestas que se adhieran a las bondades del producto los cuales son sus módulos de funcionamiento, si hay preguntas que se salen de este esquema, que la respuesta sea humana pero que los dirija a conseguir una demo con un asesor o para mayor respuesta rápida de preguntas específicas que lleve directamente a solicitar datos para DEMO.`,
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
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="relative h-16 w-16 rounded-full bg-[#4db8a8] shadow-lg p-0 hover:bg-[#3da393] transition-colors"
          >
            <img 
              src="/images/design-mode/nominik.jpg" 
              alt="nominik" 
              className="rounded-full object-cover w-full h-full"
            />
          </button>

          {showTooltip && (
            <div className="absolute left-20 bottom-4 animate-in fade-in slide-in-from-left-2 duration-500">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-sm rounded-lg py-3 px-5 whitespace-nowrap shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Pregunta a Nominik</span>
                </div>
                {/* Flecha apuntando a la derecha */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-blue-600"></div>
              </div>
            </div>
          )}
        </div>
      )}
         
          

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] flex flex-col shadow-2xl z-50 bg-white rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2C5F6F] to-[#3D8FA5] p-4 flex justify-between">
            <div className="flex gap-3 items-center">
              <img
                src="/images/design-mode/nominik.jpg"
                alt="nominik"
                className="rounded-full w-10 h-10"
              />
              <div>
                <h3 className="text-white font-bold">Nominik</h3>
                <p className="text-xs text-white/80">
                  Asistente Virtual IA de Nommy
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-50" ref={scrollRef}>
            <div className="p-4 space-y-4">
              {messages.map(message => (
                <div key={message.id} className="space-y-2">
                  <div
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.role === "user"
                          ? "bg-[#4db8a8] text-white"
                          : "bg-white shadow text-gray-800"
                      }`}
                    >
                      <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                            message.role === "user"
                              ? "bg-[#4db8a8] text-white"
                              : "bg-white shadow text-gray-800"
                          }`}
                        >
                          <div
                            className="whitespace-pre-wrap"
                            dangerouslySetInnerHTML={{ __html: message.text }}
                          />
                      </div>

                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white shadow rounded-2xl px-4 py-2">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-[#4db8a8] rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-[#4db8a8] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-[#4db8a8] rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={isLoading}
                type="text"
                placeholder="Escribe tu mensaje..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4db8a8] disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-[#4db8a8] hover:bg-[#3da393] text-white rounded-lg px-4 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
