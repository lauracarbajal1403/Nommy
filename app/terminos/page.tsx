"use client"
import React, { useEffect, useRef, useState } from 'react';

const TerminosCondicionesNommy = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-100px 0px -50% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offset = 80;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'DM Sans', sans-serif;
          color: #1a1a1a;
          line-height: 1.7;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineGrow {
          from { width: 0; }
          to { width: 200px; }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-lineGrow {
          animation: lineGrow 1s ease-out 0.3s forwards;
        }

        .section-animate {
          opacity: 0;
        }

        .section-animate.visible {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Header */}
      <header className="text-center py-12 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 animate-lineGrow" style={{width: '200px'}}></div>
        <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl font-bold text-blue-600 mb-4 opacity-0 animate-slideUp" style={{animationDelay: '0.1s'}}>
          Nommy
        </h1>
        <h2 className="font-['Crimson_Pro'] text-3xl md:text-4xl font-bold text-[#274263] mb-2 opacity-0 animate-slideUp" style={{animationDelay: '0.3s'}}>
          Términos y Condiciones de Uso
        </h2>
        <p className="text-lg text-[#525252] opacity-0 animate-slideUp" style={{animationDelay: '0.5s'}}>
          Última actualización: Febrero 2026
        </p>
      </header>

      

      {/* Main Content */}
      <main className="max-w-[900px] mx-auto px-6 py-8">
        {/* Condiciones Generales */}
        <Section id="generales" title="Condiciones Generales" ref={sectionRefs} delay={0.1}>
          <p className="mb-4 text-[#525252]">
            Bienvenido. Nuestra empresa es la encargada de operar el Sitio. Los presentes términos y condiciones generales de uso tienen por objeto regular el acceso y uso que hagas del Sitio, asimismo, para efectos de claridad en adelante nos referiremos a usted, como el "Usuario" o "El Cliente".
          </p>
          
          <p className="mb-4 text-[#525252]">
            Al entrar al sitio, el usuario manifiesta su conformidad y aceptación completa de las condiciones.
          </p>

          <HighlightBox>
            <p className="text-[#1a1a1a]">
              <strong>Importante:</strong> Las presentes Condiciones podrán estar sujetas a cualquier tipo de variación, modificación, cambio, ajuste, adición o complemento en el futuro o en el momento en el que lo considere oportuno nuestra empresa, en el entendido que, dichas actualizaciones surtirán sus efectos en el momento en que las publiquemos en el Sitio.
            </p>
          </HighlightBox>

          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mt-8 mb-4">
            Requisitos de Capacidad Legal
          </h3>
          <p className="mb-4 text-[#525252]">
            Nuestros servicios sólo están disponibles para personas que tengan capacidad legal para contratar. No podrán utilizar los servicios, los menores de edad, quienes no tengan esa capacidad o las personas que hayan sido suspendidas o dadas de baja del sistema de El Sitio.
          </p>

          <p className="mb-4 text-[#525252]">
            El sitio es apto para todo tipo de personas, incluyendo la Población Vulnerable.
          </p>

          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mt-8 mb-4">
            Información y Publicidad
          </h3>
          <p className="mb-4 text-[#525252]">
            La información y Publicidad que se proporciona en el sitio es veraz, comprobable, clara, por lo que si generase confusión al Usuario favor de solicitar información previa a la contratación a los medios de comunicación proporcionados.
          </p>
        </Section>

        {/* Servicios Ofrecidos */}
        <Section id="servicios" title="Servicios Ofrecidos" ref={sectionRefs} delay={0.2}>
          <p className="mb-4 text-[#525252]">
            Los servicios que la empresa ofrece son los relacionados en la parte final del presente documento para su mejor identificación, en la pestaña, apartado o liga particular de estos, lo que permite al Usuario tomar una decisión informada relacionada con la transacción comercial.
          </p>

          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mt-8 mb-4">
            Los servicios ofrecidos muestran:
          </h3>
          <ul className="mb-4 ml-6 list-disc text-[#525252]">
            <li className="mb-2 pl-2">La descripción de los mismos, incluyendo sus especificaciones</li>
            <li className="mb-2 pl-2">El monto total a pagar por cada uno de ellos, en moneda nacional</li>
          </ul>

          <HighlightBox>
            <p className="text-[#1a1a1a]">
              <strong>Nota sobre imágenes:</strong> El sitio exhibe imágenes de servicios con la mayor precisión posible. No obstante, no podemos garantizar que los colores que usted ve coincida con el color del entregable del servicio, ya que la visualización del color depende, en parte, del monitor que utilice y en ciertas ocasiones de las condiciones físicas de la persona y de las condiciones ambientales y de luz del lugar en que se encuentre.
            </p>
          </HighlightBox>

          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mt-8 mb-4">
            Precios
          </h3>
          <p className="mb-4 text-[#525252]">
            Los precios a pagar por los servicios que el Usuario solicite son aquellos mostrados en este sitio en el momento en que el usuario realice su pedido, y detallados en la confirmación del mismo, incluyendo IVA o cualquier otro impuesto de aplicación.
          </p>

          <p className="mb-4 text-[#525252]">
            Los precios pueden sufrir variaciones: dichas variaciones serán siempre comunicadas al cliente, que tendrá el derecho de no aceptarlas, rescindir el contrato y/o anular la entrega tras las variaciones de precios, siempre que la empresa no acepte llevar a cabo la entrega del servicio con los precios en vigor en el momento de efectuar el pedido.
          </p>
        </Section>

        {/* Cuenta e Ingreso */}
        <Section id="cuenta" title="Cuenta e Ingreso a la Plataforma" ref={sectionRefs} delay={0.3}>
          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mb-4">
            Registro de Usuario
          </h3>
          <p className="mb-4 text-[#525252]">
            El servicio prestado por la Empresa, podrá o no, requerir el registro mediante cuenta o Log in. El Registro con "usuario" y "contraseña" no es obligatorio, sin embargo, el cliente en su caso, deberá proteger el usuario y contraseña utilizados para registrarse en el sitio y es responsable de cualquier actividad o acción llevadas a cabo con su usuario y su contraseña.
          </p>

          <p className="mb-4 text-[#525252]">
            No obstante, para lograr una transacción comercial es necesario que el cliente proporcione información personal.
          </p>

          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mt-8 mb-4">
            Veracidad de los Datos
          </h3>
          <p className="mb-4 text-[#525252]">
            El usuario, manifiesta que los datos que proporcione para contratar nuestros servicios son reales, veraces, exactos, lícitos y comprobables, y que libera a la empresa de cualquier responsabilidad derivada de la veracidad, idoneidad, exactitud, licitud y comprobación de los mismos.
          </p>

          <HighlightBox>
            <p className="text-[#1a1a1a]">
              <strong>Importante:</strong> Si se llegase a comprobar que la información que se proporciona es falsa, inexacta o ilícita, la empresa, a discreción, podrá negar el acceso al Sitio y a eliminar la cuenta de usuario, además de ser responsable de los daños y perjuicios generados.
            </p>
          </HighlightBox>

          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mt-8 mb-4">
            Obligaciones del Cliente
          </h3>
          <ul className="mb-4 ml-6 list-disc text-[#525252]">
            <li className="mb-2 pl-2">Mantener actualizada en todo momento la información personal</li>
            <li className="mb-2 pl-2">Notificar dentro del día siguiente a la empresa de cualquier utilización no autorizada de su usuario y contraseña</li>
            <li className="mb-2 pl-2">Notificar cualquier otra infracción en la seguridad a sus datos</li>
          </ul>

          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mt-8 mb-4">
            Suspensión o Cierre de Cuenta
          </h3>
          <p className="mb-4 text-[#525252]">
            La Empresa podrá en cualquier momento suspender o cerrar su Cuenta, y su capacidad para utilizar uno o más de los Servicios, de manera automática y sin necesidad de trámite alguno, tras remitirle por correo electrónico o por correo postal un requerimiento formal para que ponga fin a una determinada violación.
          </p>

          <p className="mb-4 text-[#525252]">
            En cualquier momento usted podrá poner fin a su Cuenta o a la suscripción a un determinado Servicio o Servicios, de manera automática y sin necesidad de trámite judicial alguno, notificándose mediante el procedimiento establecido de los presentes Términos.
          </p>

          <HighlightBox>
            <p className="text-[#1a1a1a]">
              <strong>Tenga presente:</strong> Si decide poner fin a su suscripción, no se practicará reembolso alguno, ni total ni parcial, de los importes ya abonados por el período de suscripción en vigor o por cualquier relación comercial vigente.
            </p>
          </HighlightBox>
        </Section>

        {/* Proceso de Adquisición */}
        <Section id="adquisicion" title="Proceso de Adquisición del Servicio" ref={sectionRefs} delay={0.4}>
          <p className="mb-6 text-[#525252]">
            El Cliente a fin de realizar la adquisición de los servicios de la empresa deberá seguir los siguientes pasos:
          </p>

          <ProcessSteps />

          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mt-8 mb-4">
            Información Previa a la Transacción
          </h3>
          <p className="mb-4 text-[#525252]">
            Previo a aceptar, el cliente podrá verificar la información resumida sobre el entregable del servicio que va a adquirir, incluyendo:
          </p>
          <ul className="mb-4 ml-6 list-disc text-[#525252]">
            <li className="mb-2 pl-2">El costo total de la transacción comercial, incluidos descuentos disponibles y todos los cargos aplicables</li>
            <li className="mb-2 pl-2">Los impuestos adicionales al IVA que en su caso apliquen</li>
            <li className="mb-2 pl-2">En su caso, el costo de envío</li>
            <li className="mb-2 pl-2">Los cargos adicionales derivado del mecanismo de pago que se utilice</li>
          </ul>

          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mt-8 mb-4">
            Facturación
          </h3>
          <p className="mb-4 text-[#525252]">
            Se emitirá una factura por cada solicitud siempre y cuando se cuenten con todos los datos y requisitos de ley para tal efecto. Se podrá solicitar la factura al correo de contacto dentro del mes en curso.
          </p>
        </Section>

        {/* Políticas */}
        <Section id="politicas" title="Políticas" ref={sectionRefs} delay={0.5}>
          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mb-4">
            Política de Cancelaciones
          </h3>
          <p className="mb-4 text-[#525252]">
            El Cliente podrá cancelar los Servicios en cualquier momento, debiendo notificar su voluntad por escrito a través del correo electrónico oficial de la Empresa señalado en la sección de Contacto. Dicha notificación deberá realizarse con una anticipación mínima de 30 (treinta) días naturales previos a la fecha efectiva de terminación deseada.
          </p>

          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mt-8 mb-4">
            Política de Cambio de Servicios
          </h3>
          <p className="mb-4 text-[#525252]">
            El Cliente podrá solicitar modificaciones a su plan de servicios (cambios de alcance o nivel). Para ello, deberá enviar una solicitud al correo electrónico oficial de la Empresa, especificando el nuevo plan deseado y la fecha en la que requiere que dicha modificación surta efectos.
          </p>

          <HighlightBox>
            <p className="text-[#1a1a1a]">
              <strong>Importante:</strong> De conformidad a la Ley Federal de Protección al Consumidor y su reglamento, existen servicios adquiridos por el cliente que por su naturaleza no podrán ser cambiados o devueltos, por lo que se informa de dicha situación al cliente.
            </p>
          </HighlightBox>

          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mt-8 mb-4">
            Política de Devoluciones
          </h3>
          <p className="mb-4 text-[#525252]">
            En caso de cancelación anticipada de los Servicios, la Empresa procederá a la devolución únicamente de la cantidad prorrateada correspondiente a los días no devengados (no transcurridos) del mes corriente que ya hubiese sido pagado por el Cliente. Bajo ninguna circunstancia procederán devoluciones retroactivas sobre meses anteriores o periodos ya consumados.
          </p>

          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mt-8 mb-4">
            Política de Garantías
          </h3>
          <p className="mb-4 text-[#525252]">
            La Empresa garantiza la exactitud y corrección en el cálculo de la nómina procesada a través de la plataforma, siempre y cuando:
          </p>
          <ul className="mb-4 ml-6 list-disc text-[#525252]">
            <li className="mb-2 pl-2">Los datos e información ingresados por el Cliente al sistema sean veraces, completos y correctos</li>
            <li className="mb-2 pl-2">El Cliente no haya solicitado o realizado configuraciones o modificaciones especiales fuera del estándar del Servicio</li>
          </ul>
          <p className="mb-4 text-[#525252]">
            La Empresa no será responsable por errores de cálculo derivados de datos inexactos suministrados por el Cliente.
          </p>
        </Section>

        {/* Propiedad Intelectual */}
        <Section id="propiedad" title="Propiedad Intelectual" ref={sectionRefs} delay={0.6}>
          <p className="mb-4 text-[#525252]">
            El sitio está diseñado, editado, producido y gestionado por La Empresa. Todo el contenido, así como todos los derechos de propiedad intelectual e industrial vinculados con el diseño y desarrollo de los mismos, con la selección de estos elementos, con su presentación y disposición, y su diseño pertenecen a esta.
          </p>

          <p className="mb-4 text-[#525252]">
            Las marcas comerciales, los nombres de dominio, los acrónimos, los logotipos, los dibujos y los demás elementos que aparecen en el sitio son propiedad de la empresa.
          </p>

          <HighlightBox>
            <p className="text-[#1a1a1a]">
              <strong>Protección Legal:</strong> El sitio, así como la totalidad de su contenido está protegido por la legislación en materia de derechos de autor y por la legislación en materia de propiedad industrial, así como por los convenios internacionales y por el resto de la legislación que protege la propiedad intelectual e industrial.
            </p>
          </HighlightBox>

          <p className="mb-4 text-[#525252]">
            Queda prohibido cualquier uso, comunicación pública, reproducción, exhibición, distribución y puesta a disposición del público de los citados elementos, o de la totalidad o de parte del sitio, con independencia de la forma y de la causa de la misma, sin la previa autorización de la empresa.
          </p>

          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mt-8 mb-4">
            Medidas de Protección Técnica
          </h3>
          <p className="mb-4 text-[#525252]">
            Determinados Servicios pueden estar protegidos por medidas de protección técnica y derechos de gestión digital, incluyendo:
          </p>
          <ul className="mb-4 ml-6 list-disc text-[#525252]">
            <li className="mb-2 pl-2">Medida de protección física</li>
            <li className="mb-2 pl-2">Marca de agua</li>
            <li className="mb-2 pl-2">Llaves digitales</li>
            <li className="mb-2 pl-2">Activación en línea</li>
            <li className="mb-2 pl-2">Firmas electrónicas</li>
            <li className="mb-2 pl-2">e-firma del SAT</li>
          </ul>
        </Section>

        {/* Privacidad */}
        <Section id="privacidad" title="Privacidad y Confidencialidad" ref={sectionRefs} delay={0.7}>
          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mb-4">
            Privacidad
          </h3>
          <p className="mb-4 text-[#525252]">
            Con fundamento en los artículos 15 y 16 de la Ley Federal de Protección de Datos Personales en Posesión de Particulares, hacemos de su conocimiento que la empresa, con domicilio señalado, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.
          </p>

          <p className="mb-4 text-[#525252]">
            La información que como usuario se recaba de usted a través de la plataforma digital, será utilizada para las finalidades que se exponen en el Aviso de Privacidad correspondiente y que en todo momento podrá observar actualizadas en la página web del sitio.
          </p>

          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mt-8 mb-4">
            Política de Uso de Datos
          </h3>
          <p className="mb-4 text-[#525252]">
            El cliente autoriza para hacer uso de toda la información publicada, para fines publicitarios, estadísticos y de evaluación, aun después de cerrada su Cuenta y por todo el tiempo que la ley aplicable, en su caso, lo permita.
          </p>

          <h3 className="font-['Crimson_Pro'] text-2xl font-semibold text-[#1a1a1a] mt-8 mb-4">
            Confidencialidad
          </h3>
          <p className="mb-4 text-[#525252]">
            El cliente manifiesta que con la aceptación de los presentes Términos, y en razón de la relación que en virtud del uso del sitio, pudieren llegar a tener acceso a datos, información y documentos que pudiera ser considerada de carácter confidencial.
          </p>

          <p className="mb-4 text-[#525252]">
            La Información Confidencial incluye expresamente y sin limitación, toda la información que se divulgue entre las partes por medio del sitio, concerniente a:
          </p>
          <ul className="mb-4 ml-6 list-disc text-[#525252]">
            <li className="mb-2 pl-2">Procedimientos, técnicas, planes, proyectos y actividades</li>
            <li className="mb-2 pl-2">Secretos industriales y prácticas comerciales</li>
            <li className="mb-2 pl-2">Información de clientes o de mercado</li>
            <li className="mb-2 pl-2">Acuerdos contractuales, utilidades, ventas y políticas de precios</li>
            <li className="mb-2 pl-2">Métodos operativos, procesos técnicos y políticas comerciales</li>
            <li className="mb-2 pl-2">Información técnica, legal, comercial y financiera</li>
          </ul>
        </Section>

        {/* Contacto */}
        <Section id="contacto" title="Información de Contacto" ref={sectionRefs} delay={0.8}>
          <p className="mb-6 text-[#525252]">
            Los datos de contacto y medios oficiales de comunicación del representante y responsable legal de la empresa son los siguientes:
          </p>

          <ContactGrid />

          <HighlightBox className="mt-8">
            <p className="text-[#1a1a1a]">
              <strong>Le recomendamos:</strong> Añadir esta página web a sus favoritos y consultar periódicamente este sitio para enterarse de cualquier posible actualización de los Términos.
            </p>
          </HighlightBox>

          <p className="mt-6 text-[#525252]">
            La Empresa recibirá con gusto sus opiniones, preguntas, inquietudes, comentarios o sugerencias a través de los medios oficiales de comunicación.
          </p>

          <p className="mt-4 text-[#525252]">
            Mediante la aceptación de los presentes Términos otorga su consentimiento para que la responsable, es decir La Empresa, actúe conforme a los Términos aquí planteados por medio de cualquiera de sus representantes legales.
          </p>
        </Section>

        {/* Footer */}
        <footer className="mt-24 pt-12 pb-8 border-t border-[#e5e5e5] text-center text-[#525252]">
          <div className="font-['Crimson_Pro'] text-2xl font-bold text-blue-600 mb-4">
            Nommy
          </div>
          <p className="text-sm mb-2">
            © 2026 Nommy People & Payroll technologies. Todos los derechos reservados.
          </p>
          <p className="text-sm">
            Última actualización: Febrero 2026
          </p>
        </footer>
      </main>
    </div>
  );
};

// Section Component
const Section = React.forwardRef(({ id, title, children, delay = 0 }, refs) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    refs.current[id] = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [id, refs]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`mb-16 section-animate ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <h2 className="font-['Crimson_Pro'] text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 pb-3 border-b-4 border-blue-600 inline-block">
        {title}
      </h2>
      <div className="bg-white p-8 rounded-lg border border-[#e5e5e5] shadow-sm">
        {children}
      </div>
    </section>
  );
});

// Highlight Box Component
const HighlightBox = ({ children, className = '' }) => (
  <div className={`bg-[#fef3c7] border-l-4 border-[#f59e0b] p-6 my-6 rounded ${className}`}>
    {children}
  </div>
);

// Process Steps Component
const ProcessSteps = () => {
  const steps = [
    {
      title: 'Evaluación de Viabilidad (Fit y Urgencia)',
      description: 'La Empresa realizará un análisis preliminar para confirmar que las funcionalidades del Software se adecuan a las necesidades operativas del Cliente.'
    },
    {
      title: 'Análisis de Requerimientos (Discovery)',
      description: 'Se definirá el esquema de nómina específico del Cliente para asegurar su compatibilidad con la plataforma Nommy.'
    },
    {
      title: 'Demostración Funcional (Demo)',
      description: 'La Empresa presentará una demostración guiada basada en casos de uso reales o simulados aplicables al Cliente.'
    },
    {
      title: 'Validación Técnica y Normativa',
      description: 'De ser aplicable, se verificará el cumplimiento de requisitos técnicos de integración y compliance legal necesarios para la operación.'
    },
    {
      title: 'Propuesta y Alcance',
      description: 'La Empresa entregará la propuesta económica final y el alcance detallado de la implementación.'
    },
    {
      title: 'Formalización del Acuerdo',
      description: 'Una vez aceptada la propuesta, se procederá a la firma o aceptación de la Orden de Servicio, el contrato de licencia de uso de software, y los anexos correspondientes (SLA, Soporte).'
    },
    {
      title: 'Activación del Servicio',
      description: 'La Empresa habilitará el entorno digital (tenant), configurará los roles de usuario y entregará los accesos administrativos al Cliente.'
    },
    {
      title: 'Implementación y Onboarding',
      description: 'Se realizará la carga de datos iniciales y la capacitación de los usuarios clave para el uso de la plataforma.'
    },
    {
      title: 'Go-Live',
      description: 'Fecha oficial de inicio de operaciones en vivo del Cliente dentro de la plataforma.'
    },
    {
      title: 'Seguimiento Post-Implementación',
      description: 'La Empresa realizará revisiones periódicas de seguimiento (a los 30, 60 y 90 días del Go-live) para asegurar la correcta adopción de la herramienta y la satisfacción del Cliente.'
    }
  ];

  return (
    <ol className="my-8 space-y-6">
      {steps.map((step, index) => (
        <li key={index} className="relative pl-16 text-[#525252]">
          <div className="absolute left-0 top-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
            {index + 1}
          </div>
          <strong className="text-[#1a1a1a]">{step.title}:</strong> {step.description}
        </li>
      ))}
    </ol>
  );
};

// Contact Grid Component
const ContactGrid = () => {
  const contactInfo = [
    { label: 'Nombre Comercial', value: 'Nommy' },
    { label: 'Denominación Social', value: 'Nommy People & Payroll technologies' },
    { label: 'RFC', value: 'NPA251110L3A' },
    { label: 'Nacionalidad', value: 'Mexicana' },
    { label: 'Domicilio', value: 'Avenida Aztlan 170' },
    { label: 'Página Web', value: 'www.nommy.mx', link: 'https://www.nommy.mx' },
    { label: 'Email Marketing', value: 'marketing@nommy.mx', link: 'mailto:marketing@nommy.mx' },
    { label: 'Email Legal', value: 'legal@nommy.mx', link: 'mailto:legal@nommy.mx' },
    { label: 'Teléfono', value: '+52 33 2332 9011', link: 'tel:+523323329011' },
    { label: 'Servicios', value: 'Ver Precios y Servicios', link: 'https://www.nommy.mx/pricing' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      {contactInfo.map((item, index) => (
        <div key={index} className="p-6 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
            {item.label}
          </div>
          <div className="text-[#1a1a1a] break-words">
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:opacity-70 transition-opacity"
              >
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TerminosCondicionesNommy;