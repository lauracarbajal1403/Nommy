"use client"

import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, Phone } from 'lucide-react';
import { ChatMessage, ChatOption, NotifySalesPayload, QuestionAnswer } from './types';
import { ALL_FAQ_OPTIONS } from './data';
// Si colocas este componente dentro de una subcarpeta (ej. /components/Nominik.tsx),
// ajusta los imports a '../types' y '../data' según donde guardes esos archivos.

const WHATSAPP_NUMBER = '523315179175'; // (33) 15179175 en formato internacional sin "+"

function AbandonmentForm({
  onSubmit,
}: {
  onSubmit: (data: { name: string; email: string; whatsapp?: string }) => void;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isValid = name.trim().length > 0 && email.trim().length > 0;

  const handleClick = () => {
    if (!isValid || submitted) return;
    setSubmitted(true);
    onSubmit({ name: name.trim(), email: email.trim(), whatsapp: whatsapp.trim() || undefined });
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-2 rounded-lg border border-emerald-200">
        ✓ ¡Datos recibidos! Gracias por seguir platicando con nosotros.
      </div>
    );
  }

  return (
    <div className="mt-1 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm w-full">
      <div className="flex items-center gap-1.5 mb-3">
        <span className="text-base">😊</span>
        <span className="text-sm font-bold text-[#3da393]">Recuperar Mi Sesión con Nommy</span>
      </div>

      <label className="block text-xs font-semibold text-gray-600 mb-1">Nombre Completo:</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Ej. Diego Rivera"
        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-[#4db8a8] focus:border-transparent"
      />

      <label className="block text-xs font-semibold text-gray-600 mb-1">Correo Electrónico:</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="diego@empresa.com"
        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-[#4db8a8] focus:border-transparent"
      />

      <label className="block text-xs font-semibold text-gray-600 mb-1">WhatsApp (Opcional):</label>
      <input
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        type="tel"
        placeholder="10 dígitos"
        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#4db8a8] focus:border-transparent"
      />

      <button
        type="button"
        onClick={handleClick}
        disabled={!isValid}
        className={`w-full font-semibold text-sm py-2.5 rounded-full transition-all flex items-center justify-center gap-1.5 ${
          isValid
            ? 'bg-gradient-to-r from-[#4db8a8] to-[#3da393] text-white shadow-md hover:shadow-lg hover:opacity-95 cursor-pointer'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        ✓ ¡Sí, sigamos platicando!
      </button>
    </div>
  );
}

export default function NominikChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  // ── Estado de la máquina de flujo guiado ────────────────────────────────
  const [currentNode, setCurrentNode] = useState('start');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [selectedPain, setSelectedPain] = useState('');
  const [selectedTeamSize, setSelectedTeamSize] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('');
  const [hasBookedDemo, setHasBookedDemo] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isInMenuFlow, setIsInMenuFlow] = useState(false);

  // ── Estado de recuperación por abandono (inactividad de 3 min) ─────────
  const [abandonmentShown, setAbandonmentShown] = useState(false);
  const [abandonName, setAbandonName] = useState('');
  const [abandonEmail, setAbandonEmail] = useState('');
  const inactivityTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Burbuja de reengagement al cerrar el chat sin agendar demo ─────────
  const [showCloseBubble, setShowCloseBubble] = useState(false);
  const hasEngagedRef = useRef(false); // true en cuanto el usuario escribió algo

  // Horario comercial: L-V 9:00am - 7:00pm (hora de México)
  const isWorkingHours = () => {
    const now = new Date();
    const mxTime = new Date(
      now.toLocaleString('en-US', { timeZone: 'America/Mexico_City' })
    );
    const day = mxTime.getDay();
    const hour = mxTime.getHours();
    return day >= 1 && day <= 5 && hour >= 9 && hour < 19;
  };

  useEffect(() => {
    const showTimer = setTimeout(() => setShowTooltip(true), 5000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 25000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // ── Burbuja "no nos abandones" 10s después de cerrar el chat ────────────
  useEffect(() => {
    if (isOpen) {
      setShowCloseBubble(false);
      return;
    }

    if (!hasEngagedRef.current || hasBookedDemo) return;

    const timer = setTimeout(() => {
      setShowCloseBubble(true);
    }, 10000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, hasBookedDemo]);

  // La burbuja se autooculta 6s después de aparecer.
  useEffect(() => {
    if (!showCloseBubble) return;
    const hideTimer = setTimeout(() => setShowCloseBubble(false), 6000);
    return () => clearTimeout(hideTimer);
  }, [showCloseBubble]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // ── Timer de inactividad: 3 minutos sin actividad → mensaje de abandono ──
  useEffect(() => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = null;
    }

    const canTrigger =
      isOpen &&
      !abandonmentShown &&
      !hasBookedDemo &&
      messages.length > 0 &&
      currentNode !== 'finish';

    if (canTrigger) {
      inactivityTimerRef.current = setTimeout(() => {
        triggerAbandonmentMessage();
      }, 3 * 60 * 1000); // 3 minutos
    }

    return () => {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    };
    // Se reinicia cada vez que hay un mensaje nuevo (actividad) o cambia el nodo actual.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, isOpen, abandonmentShown, hasBookedDemo, currentNode]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          '¡Hola! Soy Nominik 👋, tu asistente virtual de Nommy. Estoy aquí para ayudarte a eliminar el estrés de la nómina y la gestión de tu equipo.<br/>Puedes consultar nuestro <a href="/aviso" class="text-[#4db8a8] font-semibold" target="_blank" rel="noopener noreferrer">aviso de privacidad</a>.'
        );
        setTimeout(() => {
          addBotMessage('Para empezar, ¿con quién tengo el gusto de hablar? 😊', {
            inputType: 'name',
          });
        }, 600);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const addBotMessage = (
    text: string,
    extra?: Partial<Pick<ChatMessage, 'options' | 'faqOptions' | 'inputType' | 'showCalendar'>>
  ) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: 'bot',
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        ...extra,
      },
    ]);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: 'user',
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const botSay = (
    text: string,
    extra?: Partial<Pick<ChatMessage, 'options' | 'faqOptions' | 'inputType' | 'showCalendar'>>,
    delay = 700
  ) => {
    setIsTyping(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(text, extra);
        resolve();
      }, delay);
    });
  };

  // ── Notificación por correo a ventas@nommy.mx vía /api/notify-sales (Resend) ──
  const notifySales = async (payload: NotifySalesPayload) => {
    try {
      await fetch('/api/notify-sales', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      // Falla silenciosa: no bloqueamos la experiencia del usuario si el correo no sale.
      console.error('No se pudo notificar a ventas:', err);
    }
  };

  // ── Envío del formulario único de recuperación por abandono ─────────────
  const handleAbandonmentFormSubmit = async (data: { name: string; email: string; whatsapp?: string }) => {
    setAbandonName(data.name);
    setAbandonEmail(data.email);
    addUserMessage(
      `${data.name} · ${data.email}${data.whatsapp ? ' · ' + data.whatsapp : ''}`
    );

    notifySales({
      type: 'abandonment_lead',
      name: data.name,
      email: data.email,
      phone: data.whatsapp || undefined,
    });

    // Envío silencioso del ebook "ConoceNommy" al correo capturado en el formulario
    // de abandono. No se le menciona al usuario en el mensaje del bot (ver abajo);
    // es un envío de fondo, igual que la notificación a ventas.
    fetch('/api/send-ebook-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: data.name, email: data.email }),
    }).catch((err) => console.error('No se pudo enviar el ebook:', err));

    await botSay(
      `¡Muchas gracias, ${data.name}! 🎉 Te enviaremos nuestro Newsletter de bienestar laboral e ideas de comedores modernos. Si quieres, seguimos platicando aquí mismo.`
    );
    setCurrentNode('free_chat');
  };

  // ── Máquina de nodos del flujo guiado ───────────────────────────────────
  const goToNode = async (nodeId: string, previousAnswer?: string, nameOverride?: string) => {
    setCurrentNode(nodeId);
    const name = nameOverride ?? userName;

    if (nodeId === 'menu_principal') {
      setIsInMenuFlow(true);
      await showMainMenu();
      return;
    }

    if (nodeId === 'show_faqs') {
      setCurrentNode('show_faqs');
      await botSay(
        '¡Claro! Selecciona la pregunta que más te interese 👇',
        { faqOptions: ALL_FAQ_OPTIONS }
      );
      return;
    }

    if (nodeId === 'show_planes') {
      setCurrentNode('show_planes');
      const planesHTML = `<strong>📦 Nuestros Planes</strong><br/><br/><strong>🔹 Plan Básico</strong> — 1 a 15 colaboradores<br/>✅ Nómina automatizada y timbrado CFDI<br/>✅ Registro y control de incidencias<br/>✅ Reloj checador digital (app móvil)<br/>✅ Finiquitos y liquidaciones<br/>✅ Soporte por expertos en nómina<br/><br/><strong>🔸 Plan Profesional</strong> — 16 a 100 colaboradores<br/>✅ Todo lo del Plan Básico<br/>✅ Conexión directa IDSE/IMSS<br/>✅ Módulo de reclutamiento con IA<br/>✅ Reportes y analítica avanzada<br/>✅ Cálculos inversos de nómina<br/><br/><strong>🔶 Plan Empresarial</strong> — Más de 100 colaboradores<br/>✅ Todo lo del Plan Profesional<br/>✅ Implementación personalizada<br/>✅ Integraciones a medida<br/>✅ Gerente de cuenta dedicado<br/>✅ Capacitación para tu equipo`;
      await botSay(planesHTML);
      await botSay('Para conocer precios adaptados a tu equipo, te recomiendo agendar una demo o hablar con un asesor. 😊');
      if (!hasBookedDemo) {
        await showMainMenu();
      }
      return;
    }

    if (nodeId === 'p1_dolor') {
      setIsInMenuFlow(false);
      await botSay(
        `¡Mucho gusto, ${name || 'amigo(a)'}! Cuéntame, ¿cuál es el mayor reto que enfrenta tu equipo de Recursos Humanos actualmente? 💼`,
        {
          options: [
            { id: 'opt_1', text: '📊 Errores y tiempo en calcular nómina', next_node: 'p2_colaboradores' },
            { id: 'opt_2', text: '⏱️ Control de asistencias o reloj checador', next_node: 'p2_colaboradores' },
            { id: 'opt_3', text: '🏛️ Cumplimiento de IMSS, SAT o IDSE', next_node: 'p2_colaboradores' },
            { id: 'opt_4', text: '📄 Generar finiquitos y liquidaciones', next_node: 'p2_colaboradores' },
          ],
        }
      );
      return;
    }

    if (nodeId === 'p2_colaboradores') {
      if (previousAnswer) setSelectedPain(previousAnswer);

      let feedback = 'Resolver eso es muy simple con nuestra herramienta: puedes calcular y generar documentos completos de finiquito en minutos, apegados a la ley.';
      if (previousAnswer?.includes('Errores')) {
        feedback = 'Te entiendo perfectamente. Con Nommy puedes automatizar percepciones, deducciones y cálculos inversos de forma exacta, reduciendo hasta un 80% el tiempo que dedicas a la nómina.';
      } else if (previousAnswer?.includes('asistencias')) {
        feedback = '¡Excelente punto! Nuestro reloj checador digital permite que tus colaboradores fichen directamente desde su smartphone, sin hardware costoso.';
      } else if (previousAnswer?.includes('Cumplimiento')) {
        feedback = 'La seguridad fiscal es clave. Nommy realiza el timbrado masivo y sincroniza en tiempo real altas, bajas y modificaciones ante el IMSS vía IDSE.';
      }

      await botSay(feedback);

      await botSay('Para sugerirte la mejor solución, ¿cuántos colaboradores gestionas actualmente en tu empresa? 👥', {
        options: [
          { id: 'opt_col_1', text: '1 a 15 colaboradores', next_node: 'p3_cta' },
          { id: 'opt_col_2', text: '16 a 50 colaboradores', next_node: 'p3_cta' },
          { id: 'opt_col_3', text: '51 a 200 colaboradores', next_node: 'p3_cta' },
          { id: 'opt_col_4', text: 'Más de 200 colaboradores', next_node: 'p3_cta' },
        ],
      });
      return;
    }

    if (nodeId === 'p3_cta') {
      if (previousAnswer) setSelectedTeamSize(previousAnswer);

      const feedback =
        previousAnswer?.includes('1 a 15') || previousAnswer?.includes('16 a 50')
          ? 'Ideal. Nommy está diseñado para que las PyMEs crezcan sin preocuparse por la complejidad administrativa, centralizando todo en un solo portal amigable.'
          : 'Excelente. Para equipos de tu tamaño ofrecemos implementaciones ágiles y robustas para conectar incidencias, turnos rotativos y timbrado masivo de manera eficiente.';

      await botSay(feedback);
      await botSay('Si quieres profundizar antes de continuar, aquí tienes más información sobre Nommy (opcional) 👇', {
        faqOptions: ALL_FAQ_OPTIONS,
      });
      await botSay(
        `¡Perfecto, ${userName || 'amigo(a)'}! Con base en lo que me cuentas, Nommy puede optimizar tu operación al 100%. ¿Cómo prefieres conocer la plataforma? 👇`,
        {
          options: [
            { id: 'cta_asesor', text: '📞 Hablar con un asesor ahora', next_node: 'horario_bifurcation' },
            { id: 'cta_calendar', text: '💻 Agendar demo en línea (Google Meet)', next_node: 'demo_calendar' },
            { id: 'cta_whatsapp', text: '💬 Continuar por WhatsApp', next_node: 'whatsapp_redirect' },
          ],
        }
      );
      return;
    }

    if (nodeId === 'whatsapp_redirect') {
      setHasBookedDemo(true);
      openWhatsApp();
      await botSay(
        'Te abrí WhatsApp con un mensaje listo para enviar — solo confírmalo y un asesor te atenderá por ahí. 💬 Si prefieres, también puedo seguir ayudándote aquí mismo.'
      );
      setCurrentNode('free_chat');
      return;
    }

    if (nodeId === 'horario_bifurcation') {
      if (isWorkingHours()) {
        await goToNode('dentro_horario');
      } else {
        await goToNode('fuera_horario');
      }
      return;
    }

    if (nodeId === 'dentro_horario') {
      await botSay(
        '¡Excelente elección! Como estamos en horario de atención (Lunes a Viernes, 9:00 AM a 7:00 PM), podemos llamarte hoy mismo. ¿En qué bloque de horario te gustaría que te contactemos? 📞',
        {
          options: [
            { id: 'bloque_1', text: '🌅 9:00 am a 12:00 pm', next_node: 'dentro_horario_telefono' },
            { id: 'bloque_2', text: '🌤️ 12:00 pm a 2:00 pm', next_node: 'dentro_horario_telefono' },
            { id: 'bloque_3', text: '🌇 4:00 pm a 7:00 pm', next_node: 'dentro_horario_telefono' },
          ],
        }
      );
      return;
    }

    if (nodeId === 'dentro_horario_telefono') {
      if (previousAnswer) setSelectedBlock(previousAnswer);
      await botSay('¡Anotado! ¿Me compartes tu número celular con lada para llamarte en ese horario? 📱', {
        inputType: 'phone',
      });
      return;
    }

    if (nodeId === 'fuera_horario') {
      await botSay(
        '¡Me parece una gran idea! En este momento nuestro equipo comercial está fuera de horario (L-V de 9:00 AM a 7:00 PM). ¿En qué bloque te gustaría que te contactemos el próximo día hábil? ⏰',
        {
          options: [
            { id: 'bloque_1', text: '🌅 9:00 am a 12:00 pm', next_node: 'fuera_horario_canal' },
            { id: 'bloque_2', text: '🌤️ 12:00 pm a 2:00 pm', next_node: 'fuera_horario_canal' },
            { id: 'bloque_3', text: '🌇 4:00 pm a 7:00 pm', next_node: 'fuera_horario_canal' },
          ],
        }
      );
      return;
    }

    if (nodeId === 'fuera_horario_canal') {
      if (previousAnswer) setSelectedBlock(previousAnswer);
      await botSay('Anotado. ¿Por qué medio prefieres que te contactemos? 💬', {
        options: [
          { id: 'pref_call', text: '📞 Llamada telefónica', next_node: 'fuera_horario_telefono' },
          { id: 'pref_wa', text: '💬 Mensaje de WhatsApp', next_node: 'whatsapp_redirect' },
        ],
      });
      return;
    }

    if (nodeId === 'fuera_horario_telefono') {
      await botSay('Por último, confírmame tu número de teléfono celular con lada para programar el contacto:', {
        inputType: 'phone',
      });
      return;
    }

    if (nodeId === 'demo_calendar') {
      window.open('https://calendar.app.google/YRzR8iEUAhJpJh8a9', '_blank', 'noopener,noreferrer');
      setHasBookedDemo(true);
      await botSay(
        '¡Estupendo! Te abrí nuestro calendario para que elijas el horario que mejor te acomode. 🗓️ Una vez que lo confirmes, recibirás la invitación con el enlace de Google Meet. ¡Nos vemos pronto!'
      );
      setCurrentNode('free_chat');
      return;
    }

    if (nodeId === 'finish') {
      finishFlow();
      return;
    }
  };

  const finishFlow = async () => {
    setHasBookedDemo(true);
    await botSay(
      `¡Listo, ${userName || 'amigo(a)'}! Quedó registrado en nuestro CRM. Nos comunicaremos a la brevedad 🚀<br/>Si tienes alguna otra pregunta sobre nómina, RRHH o los módulos de Nommy, sigo aquí para ayudarte.`
    );
    setCurrentNode('free_chat');
  };

  // ── Recuperación por abandono (3 min de inactividad) ────────────────────
  const triggerAbandonmentMessage = async () => {
    setAbandonmentShown(true);
    await botSay(
      '¡Hey! No nos abandones. 🥺 Sigamos platicando para ayudarte a optimizar la comida en tu oficina. O si tienes prisa, compártenos tus datos mínimos abajo para enviarte nuestro Newsletter de bienestar laboral e ideas de comedores modernos.',
      { inputType: 'abandonment_form' }
    );
    setCurrentNode('abandonment_recovery_form');
  };

  const showMainMenu = async () => {
    setCurrentNode('menu_principal');
    await botSay(
      `¿Cómo puedo ayudarte hoy? 😊`,
      {
        options: [
          { id: 'menu_faqs', text: '❓ Preguntas frecuentes', next_node: 'show_faqs' },
          { id: 'menu_planes', text: '📋 Conocer los planes', next_node: 'show_planes' },
          { id: 'menu_cotizacion', text: '💰 Cotización', next_node: 'p1_dolor' },
        ],
      }
    );
  };

  const openWhatsApp = () => {
    const lines = [
      `Hola, soy ${userName || ''}`.trim() + ', vengo del chat de Nominik en nommy.mx.',
      selectedPain ? `Mi reto principal: ${selectedPain}` : null,
      selectedTeamSize ? `Tamaño de mi equipo: ${selectedTeamSize}` : null,
      'Me gustaría que un asesor me contacte.',
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  // ── Click en botón de opción dentro de una burbuja ──────────────────────
  const handleOptionClick = (option: ChatOption) => {
    addUserMessage(option.text);
    goToNode(option.next_node, option.text);
  };

  // ── Click en una pregunta frecuente ──────────────────────────────────────
  const handleFaqClick = (faq: QuestionAnswer) => {
    addUserMessage(faq.question);
    botSay(faq.answer).then(() => {
      if (isInMenuFlow && !hasBookedDemo) {
        showMainMenu();
      }
    });
  };

  // ── Envío de texto libre (inputs de nombre / teléfono / IA) ─────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    addUserMessage(userMessage);

    if (currentNode === 'start') {
      setUserName(userMessage);
      hasEngagedRef.current = true;
      await goToNode('menu_principal', undefined, userMessage);
      return;
    }

    if (currentNode === 'dentro_horario_telefono' || currentNode === 'fuera_horario_telefono') {
      setUserPhone(userMessage);
      notifySales({
        type: 'call_request',
        name: userName,
        phone: userMessage,
        pain: selectedPain,
        teamSize: selectedTeamSize,
        preferredBlock: selectedBlock,
        preferredChannel: 'Llamada telefónica',
      });
      await goToNode('finish');
      return;
    }

    // El flujo de abandono ahora se maneja con handleAbandonmentFormSubmit (formulario único),
    // no por texto libre, así que aquí no hay rama para 'abandonment_recovery_form'.

    // ── Chat libre con IA (una vez terminado el flujo guiado) ─────────────
    setIsLoading(true);
    try {
      const conversationHistory = messages
        .filter((m) => m.sender !== 'system')
        .map((m) => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: m.text,
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
- Nunca menciones "agendar demo", solo solicita los datos necesarios.
- Mantén siempre la orientación hacia los módulos y beneficios de Nommy.
- Si ya conoces el nombre del usuario (${userName || 'desconocido'}), úsalo de forma natural.

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

  const isMenuNode = () =>
    ['menu_principal', 'show_faqs', 'show_planes'].includes(currentNode);

  const inputPlaceholder = () => {
    if (currentNode === 'start') return 'Escribe tu nombre aquí...';
    if (currentNode === 'dentro_horario_telefono' || currentNode === 'fuera_horario_telefono') return 'Escribe tu número celular...';
    if (isMenuNode()) return 'Selecciona una opción arriba ☝️';
    return 'Escribe tu mensaje...';
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button onClick={() => setIsOpen(true)} className="relative group">
            {showCloseBubble && (
              <div className="absolute bottom-full right-0 mb-4 animate-[slideUp_0.3s_ease-out] w-64">
                <div className="bg-[#4db8a8] rounded-2xl shadow-2xl px-5 py-4">
                  <p className="text-white text-sm leading-relaxed">
                    ¡Hey! No nos abandones <span className="font-semibold">🥺</span> ¿Seguimos platicando?
                  </p>
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-[#4db8a8] border-r border-b border-[#3da393] transform rotate-45"></div>
                </div>
              </div>
            )}

            {!showCloseBubble && showTooltip && (
              <div className="absolute bottom-full right-0 mb-4 animate-[slideUp_0.3s_ease-out]">
                <div className="bg-white rounded-2xl shadow-2xl px-6 py-4 whitespace-nowrap border border-gray-100">
                  <p className="text-gray-800 font-medium text-sm">
                    Pregunta a <span className="text-[#4db8a8] font-semibold">Nominik</span>
                  </p>
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
                </div>
              </div>
            )}

            <div className="relative">
              <div className="absolute inset-0 bg-[#4db8a8] rounded-full animate-ping opacity-20"></div>
              <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-[#4db8a8] to-[#3da393] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[#4db8a8]/50">
                <img
                  src="/images/design-mode/nominik.jpg"
                  alt="Nominik"
                  className="h-10 w-10 rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const next = (e.target as HTMLImageElement).nextSibling as HTMLElement;
                    if (next) next.style.display = 'block';
                  }}
                />
                <div className="hidden text-white text-2xl font-bold">N</div>
              </div>
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
          {/* Header */}
          <div className="relative bg-gradient-to-r from-[#4db8a8] to-[#3da393] px-6 py-5">
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
                      (e.target as HTMLImageElement).style.display = 'none';
                      const next = (e.target as HTMLImageElement).nextSibling as HTMLElement;
                      if (next) next.style.display = 'block';
                    }}
                  />
                  <span className="hidden text-white text-xl font-bold">N</span>
                </div>
                <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">Nominik</h3>
                <p className="text-white/90 text-xs font-medium">Asistente Virtual IA de Nommy</p>
              </div>

              <button
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank', 'noopener,noreferrer')}
                title="Continuar por WhatsApp"
                className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
              >
                <Phone className="h-5 w-5" />
              </button>

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
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#4db8a8 #f3f4f6' }}
          >
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex items-end gap-3 animate-[fadeIn_0.3s_ease-out] ${
                  message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {message.sender === 'bot' && (
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#4db8a8] to-[#3da393] flex items-center justify-center flex-shrink-0 shadow-md">
                    <img
                      src="/images/design-mode/nominik.jpg"
                      alt="N"
                      className="h-6 w-6 rounded-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const next = (e.target as HTMLImageElement).nextSibling as HTMLElement;
                        if (next) next.style.display = 'block';
                      }}
                    />
                    <span className="hidden text-white text-xs font-bold">N</span>
                  </div>
                )}

                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-br from-[#4db8a8] to-[#3da393] text-white rounded-br-md'
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-md'
                  }`}
                >
                  {message.text && (
                    <div
                      className="text-sm leading-relaxed whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: message.text }}
                    />
                  )}

                  {/* Opciones tipo botón dentro de la burbuja */}
                  {message.options && message.options.length > 0 && (
                    <div className="mt-3 space-y-1.5">
                      {message.options.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => handleOptionClick(opt)}
                          className="block w-full text-left text-xs bg-[#f0faf8] hover:bg-[#e1f5f1] border border-[#4db8a8]/30 hover:border-[#4db8a8]/60 text-[#3da393] font-medium px-3.5 py-2 rounded-xl transition-all"
                        >
                          {opt.text}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Preguntas frecuentes opcionales (no afectan el flujo principal) */}
                  {message.faqOptions && message.faqOptions.length > 0 && (
                    <div className="mt-3 space-y-1.5">
                      {message.faqOptions.map((faq) => (
                        <button
                          key={faq.id}
                          onClick={() => handleFaqClick(faq)}
                          className="flex items-start gap-2 w-full text-left text-xs bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 text-gray-600 font-medium px-3.5 py-2 rounded-xl transition-all"
                        >
                          <span className="text-gray-400 shrink-0">❓</span>
                          <span>{faq.question}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Formulario único de recuperación por abandono */}
                  {message.inputType === 'abandonment_form' && (
                    <AbandonmentForm onSubmit={handleAbandonmentFormSubmit} />
                  )}
                </div>

                {message.sender === 'user' && (
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white text-xs font-bold">TÚ</span>
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator (flujo guiado) */}
            {(isTyping || isLoading) && (
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
                disabled={isLoading || currentNode === 'abandonment_recovery_form' || isMenuNode()}
                type="text"
                placeholder={
                  currentNode === 'abandonment_recovery_form'
                    ? 'Completa el formulario de arriba ☝️'
                    : inputPlaceholder()
                }
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4db8a8] focus:border-transparent disabled:opacity-50 transition-all duration-200"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim() || currentNode === 'abandonment_recovery_form' || isMenuNode()}
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
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}