"use client"
import React, { useEffect, useRef, useState } from 'react';

const AvisoPrivacidadUsuario = () => {
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent opacity-0 animate-lineGrow" style={{ width: '200px' }}></div>

        <h1 className="font-['Crimson_Pro'] text-3xl md:text-4xl font-bold text-[#274263] mb-2 opacity-0 animate-slideUp" style={{ animationDelay: '0.3s' }}>
          Aviso de Privacidad al Usuario
        </h1>
        <p className="text-lg text-[#525252] opacity-0 animate-slideUp" style={{ animationDelay: '0.5s' }}>
          Para colaboradoras y colaboradores usuarios de la aplicación de gestión de personal operada sobre la plataforma NOMMY RH
        </p>
        <p className="text-sm text-[#525252] mt-3 opacity-0 animate-slideUp" style={{ animationDelay: '0.6s' }}>
          Versión: 1.14.1 &nbsp;|&nbsp; Fecha de última actualización: 16/08/2026
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-[900px] mx-auto px-6 py-8">
        {/* Marco normativo / roles */}
        <div className="mb-16">
          <HighlightBox>
            <p className="text-[#1a1a1a] mb-3">
              <strong>Marco normativo considerado:</strong> Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), publicada en el Diario Oficial de la Federación el 20 de marzo de 2025 y vigente desde el 21 de marzo de 2025, que abroga la ley de 2010; su Reglamento en lo que no se oponga a la nueva ley; y demás disposiciones aplicables. Precisión terminológica: no existe una &ldquo;Ley ARCO&rdquo; como ordenamiento autónomo; ARCO es el acrónimo de los derechos de Acceso, Rectificación, Cancelación y Oposición previstos en la LFPDPPP.
            </p>
            <p className="text-[#1a1a1a]">
              <strong>Distribución de roles:</strong> la empresa que contrata el servicio es la RESPONSABLE del tratamiento (decide sobre los datos de sus colaboradores); Nommy RH actúa como ENCARGADA (trata los datos por cuenta y bajo instrucciones de la empresa, al amparo del contrato de prestación de servicios). Por ello, este aviso debe ser emitido y suscrito por la empresa, no por Nommy RH. La autoridad competente es la Secretaría Anticorrupción y Buen Gobierno, que asumió las funciones que corresponden al INAI.
            </p>
          </HighlightBox>
        </div>

        {/* 1. Identidad y Domicilio */}
        <Section id="identidad" title="1. Identidad y Domicilio de la Responsable" delay={0.1}>
          <p className="mb-4 text-[#525252]">
            <strong className="text-[#1a1a1a]">NOMMY PEOPLE &amp; PAYROLL TECHNOLOGIES S.A.P.I. DE C.V.</strong> (en adelante, la &ldquo;Responsable&rdquo; o la &ldquo;Empresa&rdquo;), conocida comercialmente como <strong className="text-[#1a1a1a]">NOMMY RH</strong>, con domicilio en C. Nelson 224, Vallarta Norte., 44690 Guadalajara, Jal., es responsable del tratamiento de los datos personales de sus colaboradoras y colaboradores en los términos de este Aviso de Privacidad.
          </p>
          <p className="mb-4 text-[#525252]">
            Para todo lo relacionado con este aviso, la Empresa ha designado a su departamento de protección de datos con correo electrónico <a href="mailto:legal@nommy.mx" className="text-emerald-600 hover:opacity-70 transition-opacity">legal@nommy.mx</a> y teléfono: <a href="tel:3323499110" className="text-emerald-600 hover:opacity-70 transition-opacity">33 2349 9110</a>.
          </p>
        </Section>

        {/* 2. Plataforma Tecnológica */}
        <Section id="plataforma" title="2. Plataforma Tecnológica (Encargada del Tratamiento)" delay={0.15}>
          <p className="text-[#525252]">
            La aplicación NOMMY RH es un servicio tecnológico provisto por NOMMY PEOPLE &amp; PAYROLL TECHNOLOGIES S.A.P.I. DE C.V. (&ldquo;NOMMY RH&rdquo;), contratado por la Empresa. NOMMY RH actúa como encargada del tratamiento: trata los datos personales únicamente por cuenta y conforme a las instrucciones de la Empresa, guarda confidencialidad y no utiliza los datos para fines propios, de acuerdo con el contrato de prestación de servicios y la LFPDPPP.
          </p>
        </Section>

        {/* 3. Datos Personales que se Tratan */}
        <Section id="datos" title="3. Datos Personales que se Tratan" delay={0.2}>
          <p className="mb-4 text-[#525252]">
            <strong className="text-[#1a1a1a]">Nota de alcance:</strong> este aviso describe el tratamiento de datos realizado tanto por la aplicación móvil como por la plataforma administrativa (web) de NOMMY RH utilizada por el área de Recursos Humanos de la Empresa. Cuando un dato se trata únicamente en la plataforma administrativa y no es accesible ni visible desde la aplicación móvil, se indica expresamente en la categoría correspondiente.
          </p>
          <p className="mb-4 text-[#525252]">
            A través de la Aplicación y de los procesos internos de la Empresa se tratan las siguientes categorías de datos personales:
          </p>
          <ul className="ml-6 list-disc text-[#525252] space-y-3">
            <li className="pl-2"><strong className="text-[#1a1a1a]">Identificación y contacto:</strong> nombre completo, fotografía, CURP, RFC, Número de Seguridad Social, fecha de nacimiento, correo electrónico institucional y/o personal, teléfono y domicilio.</li>
            <li className="pl-2"><strong className="text-[#1a1a1a]">Laborales:</strong> número de colaboradores, puesto, área, superior jerárquico, fecha de ingreso, jornada, turno, horario y centro de trabajo.</li>
            <li className="pl-2"><strong className="text-[#1a1a1a]">Asistencia:</strong> registros de entrada y salida con fecha y hora, retardos, faltas, incidencias y dispositivo desde el que se registra.</li>
            <li className="pl-2"><strong className="text-[#1a1a1a]">Geolocalización:</strong> coordenadas del dispositivo captadas únicamente al momento de registrar la entrada o la salida, con el fin de verificar que el registro se realiza desde ubicaciones o radio permitido por la empresa contratante del servicio. La Aplicación no rastrea la ubicación de manera continua ni fuera del acto de registro.</li>
            <li className="pl-2"><strong className="text-[#1a1a1a]">Patrimoniales y financieros:</strong> salario, percepciones, deducciones, cuenta CLABE e institución bancaria para la dispersión de nómina. Estos datos bancarios se procesan y resguardan en la plataforma administrativa de nómina, y no se capturan, muestran ni almacenan dentro de la aplicación móvil. Los recibos de nómina (CFDI), en cambio, sí se ponen a su disposición dentro de la Aplicación.</li>
            <li className="pl-2"><strong className="text-[#1a1a1a]">Vacaciones y ausencias:</strong> saldos y solicitudes de vacaciones, permisos e incidencias. Si se registran incapacidades, éstas pueden revelar datos de salud, que tienen el carácter de sensibles.</li>
            <li className="pl-2"><strong className="text-[#1a1a1a]">Evaluaciones:</strong> respuestas a evaluaciones, encuestas y cuestionarios asignados por el área de Recursos Humanos, incluidas, en su caso, las requeridas por disposiciones legales como la NOM-035-STPS-2018.</li>
            <li className="pl-2"><strong className="text-[#1a1a1a]">Autenticación biométrica del dispositivo:</strong> la Aplicación puede solicitar la autenticación biométrica que usted ya tiene configurada en su propio teléfono (Face ID o huella dactilar) para confirmar su identidad al iniciar sesión y/o al registrar asistencia. Esta verificación la realiza el sistema operativo del dispositivo, que únicamente informa a la Aplicación si la verificación fue exitosa o no. Ni la Empresa ni Nommy RH reciben, almacenan o transmiten su rostro, su huella dactilar ni ninguna otra plantilla biométrica; estos datos nunca salen de su dispositivo.</li>
            <li className="pl-2"><strong className="text-[#1a1a1a]">Datos técnicos:</strong> identificadores del dispositivo, dirección IP, sistema operativo, versión de la Aplicación y bitácoras de uso, con fines de seguridad y soporte.</li>
          </ul>
        </Section>

        {/* 4. Datos Personales Sensibles */}
        <Section id="sensibles" title="4. Datos Personales Sensibles" delay={0.25}>
          <p className="mb-4 text-[#525252]">
            La Aplicación no recolecta, almacena ni trata datos biométricos (plantillas de rostro o huella dactilar): la autenticación biométrica descrita en la sección 3 la realiza exclusivamente el sistema operativo del dispositivo del colaborador, sin que la Empresa ni NOMMY RH tengan acceso a esa información. Por esta razón, dicha autenticación no constituye un dato personal sensible en los términos de la LFPDPPP y no está sujeta al requisito de consentimiento expreso y por escrito. En todo caso, usted puede optar por no utilizar la autenticación biométrica de su dispositivo y continuar iniciando sesión y registrando su asistencia con su usuario y contraseña, sin que ello afecte su relación de trabajo.
          </p>
          <HighlightBox>
            <p className="text-[#1a1a1a]">
              Sí tienen el carácter de datos personales sensibles los datos de salud que, en su caso, se revelen al registrar incapacidades. Para el tratamiento de estos datos la Empresa recabará su consentimiento expreso y por escrito, mediante firma autógrafa, firma electrónica o casilla de aceptación específica dentro de la Aplicación, de forma separada del resto de las finalidades.
            </p>
          </HighlightBox>
        </Section>

        {/* 5. Finalidades Primarias */}
        <Section id="finalidades-primarias" title="5. Finalidades Primarias (Necesarias)" delay={0.3}>
          <p className="mb-4 text-[#525252]">
            Los datos personales se tratarán para las siguientes finalidades, necesarias para la relación jurídica entre usted y la Empresa:
          </p>
          <ul className="ml-6 list-disc text-[#525252] space-y-2">
            <li className="pl-2">Crear y administrar su cuenta de usuario en la Aplicación y autenticar su identidad.</li>
            <li className="pl-2">Registrar y controlar su asistencia, jornada, retardos, faltas e incidencias.</li>
            <li className="pl-2">Calcular y timbrar la nómina así como generar y poner a su disposición sus recibos de nómina (CFDI).</li>
            <li className="pl-2">Recibir, gestionar y resolver sus solicitudes de vacaciones, permisos e incapacidades.</li>
            <li className="pl-2">Aplicar y dar seguimiento a las evaluaciones, encuestas y cuestionarios asignados por Recursos Humanos, incluidos los exigidos por la normatividad laboral.</li>
            <li className="pl-2">Verificar su identidad mediante la autenticación biométrica de su propio dispositivo (Face ID o huella) al iniciar sesión y/o registrar asistencia, sin que la Empresa o la Aplicación reciban, almacenen o transmitan sus datos biométricos.</li>
            <li className="pl-2">Cumplir las obligaciones de la Empresa en materia laboral, fiscal y de seguridad social (entre otras, Ley Federal del Trabajo, Código Fiscal de la Federación, Ley del Seguro Social y Ley del INFONAVIT).</li>
            <li className="pl-2">Mantener la seguridad de la información, prevenir fraudes y usos no autorizados, y brindarle soporte técnico.</li>
            <li className="pl-2">Atender requerimientos debidamente fundados y motivados de autoridades competentes.</li>
          </ul>
        </Section>

        {/* 6. Finalidades Secundarias */}
        <Section id="finalidades-secundarias" title="6. Finalidades Secundarias (No Necesarias)" delay={0.35}>
          <p className="mb-4 text-[#525252]">
            De manera adicional, y solo si usted no manifiesta su negativa, sus datos se utilizarán para:
          </p>
          <ol className="mb-6 ml-6 list-decimal text-[#525252] space-y-2">
            <li className="pl-2">Mostrar su nombre, fotografía y fecha de cumpleaños (día y mes, sin año) a las personas integrantes de su equipo dentro de la Aplicación, con fines de integración.</li>
            <li className="pl-2">Enviarle felicitaciones, reconocimientos y comunicaciones internas de integración y bienestar.</li>
            <li className="pl-2">Invitarle a participar en encuestas de clima laboral y actividades internas de carácter voluntario.</li>
            <li className="pl-2">Elaborar estadísticas y reportes internos sobre el uso de la Aplicación.</li>
            <li className="pl-2">Conocer las novedades que tiene la empresa para el beneficio de los usuarios, guías informativas, descuentos del mes, entre otros comunicados que son de utilidad para el fortalecimiento de la comunicación interna de la organización.</li>
          </ol>
          <HighlightBox>
            <p className="text-[#1a1a1a]">
              Usted puede negarse al tratamiento para estas finalidades desde este momento, marcando las casillas correspondientes en la sección de aceptación de este aviso o dentro de la Aplicación, o en cualquier momento posterior escribiendo al correo electrónico del departamento de RH de la empresa contratante. La negativa no será motivo para negarle los servicios de la Aplicación ni afectará su relación laboral.
            </p>
          </HighlightBox>
        </Section>

        {/* 7. Consentimiento */}
        <Section id="consentimiento" title="7. Consentimiento" delay={0.4}>
          <p className="mb-4 text-[#525252]">
            Salvo los casos de excepción previstos en la LFPDPPP, el tratamiento de sus datos personales estará sujeto a su consentimiento. Como regla general, se entenderá que usted consiente tácitamente el tratamiento de sus datos no sensibles cuando, habiéndo puesto a su disposición este aviso, no manifieste oposición. Tratándose de datos sensibles (datos de salud) y de datos financieros o patrimoniales, la Empresa recabará su consentimiento expreso y, en el caso de los sensibles, expreso y por escrito, conforme a la sección 4.
          </p>
          <p className="text-[#525252]">
            La aceptación registrada dentro de la Aplicación (casillas de aceptación con fecha, hora y usuario) constituirá constancia del consentimiento otorgado, la cual quedará resguardada en las bitácoras del sistema.
          </p>
        </Section>

        {/* 8. Encargados, Remisiones y Transferencias */}
        <Section id="transferencias" title="8. Encargados, Remisiones y Transferencias" delay={0.45}>
          <p className="mb-4 text-[#525252]">
            La Empresa remite datos personales a encargados que los tratan por su cuenta y bajo sus instrucciones, entre ellos:
          </p>
          <div className="grid grid-cols-1 gap-4 my-6">
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Nommy RH</div>
              <div className="text-[#1a1a1a]">Como proveedora de la Aplicación, para la operación de los servicios descritos en este aviso.</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Cloudflare, Inc. (Estados Unidos)</div>
              <div className="text-[#1a1a1a]">Como proveedor de red de distribución de contenido y protección de la infraestructura, a través de la cual se transmiten las comunicaciones entre la Aplicación y los servidores de la Empresa.</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Google LLC (Estados Unidos)</div>
              <div className="text-[#1a1a1a]">A través de los servicios Firebase Cloud Messaging, para el envío de notificaciones push a su dispositivo, y Firebase Crashlytics, para el diagnóstico de fallas técnicas de la aplicación.</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Google LLC y Apple Inc. (Estados Unidos)</div>
              <div className="text-[#1a1a1a]">A través de sus respectivos servicios de mapas, únicamente para desplegar la representación cartográfica de ubicaciones dentro de la Aplicación.</div>
            </div>
          </div>
          <p className="mb-6 text-[#525252]">
            Estas transferencias internacionales se realizan al amparo de contratos que obligan a dichos proveedores a mantener la confidencialidad y las medidas de seguridad aplicables, conforme a la LFPDPPP. Los servidores de estos proveedores se encuentran en los Estados Unidos de América.
          </p>
          <PendingBox>
            <p className="text-[#1a1a1a] mb-2">
              <strong>Pendiente — confirmar con infraestructura:</strong> proveedor y país de alojamiento del servidor de origen.
            </p>
            <p className="text-[#1a1a1a]">
              <strong>Pendiente — confirmar con nómina:</strong> nombre del proveedor autorizado de certificación (PAC) para el timbrado de CFDI, y despacho externo de nómina o contable, en su caso.
            </p>
          </PendingBox>
          <p className="mt-6 text-[#525252]">
            Asimismo, la Empresa podrá transferir datos personales, sin que se requiera su consentimiento en los casos previstos por la LFPDPPP, a: autoridades laborales, fiscales y de seguridad social (IMSS, SAT, INFONAVIT, STPS, entre otras) para el cumplimiento de obligaciones legales; e instituciones bancarias para la dispersión de la nómina.
          </p>
        </Section>

        {/* 9. Derechos ARCO */}
        <Section id="arco" title="9. Derechos ARCO" delay={0.5}>
          <p className="mb-4 text-[#525252]">
            Usted o su representante legal pueden ejercer en cualquier momento los derechos de Acceso (conocer qué datos suyos se tratan y las condiciones de su tratamiento), Rectificación (corregir datos inexactos o incompletos), Cancelación (solicitar la supresión de los datos cuando resulte procedente) y Oposición (oponerse al tratamiento para fines específicos).
          </p>
          <p className="mb-4 text-[#525252]">
            La solicitud deberá presentarse ante el departamento de Recursos Humanos al cual contrató el servicio de NOMMY RH y en el correo electrónico de la empresa contratante, y contener al menos:
          </p>
          <ol className="mb-6 ml-6 list-decimal text-[#525252] space-y-2">
            <li className="pl-2">Nombre del titular y medio para comunicarle la respuesta.</li>
            <li className="pl-2">Documentos que acrediten su identidad o la personalidad de su representante.</li>
            <li className="pl-2">Descripción clara y precisa de los datos respecto de los que se busca ejercer el derecho.</li>
            <li className="pl-2">Cualquier elemento que facilite la localización de los datos.</li>
          </ol>
          <p className="mb-6 text-[#525252]">
            La Empresa comunicará la determinación adoptada en un plazo máximo de veinte días hábiles contados a partir de la recepción de la solicitud y, de resultar procedente, la hará efectiva dentro de los quince días hábiles siguientes, en términos de la LFPDPPP. Los plazos podrán ampliarse por una sola vez cuando la ley así lo permita. El ejercicio de estos derechos es gratuito, salvo los costos justificados de reproducción o envío previstos en la ley.
          </p>
          <HighlightBox>
            <p className="text-[#1a1a1a]">
              Tenga en cuenta que la cancelación u oposición no procederán cuando la Empresa deba conservar los datos para el cumplimiento de obligaciones legales, entre otras, en materia laboral, fiscal y de seguridad social.
            </p>
          </HighlightBox>
        </Section>

        {/* 10. Revocación del Consentimiento */}
        <Section id="revocacion" title="10. Revocación del Consentimiento" delay={0.55}>
          <p className="mb-4 text-[#525252]">
            Usted puede revocar el consentimiento otorgado siguiendo el mismo procedimiento y medios señalados para el ejercicio de los derechos ARCO. La revocación surtirá efectos hacia el futuro y no tendrá efectos retroactivos; asimismo, no procederá cuando el tratamiento sea necesario para cumplir obligaciones derivadas de la relación laboral o exigidas por ley.
          </p>
          <p className="text-[#525252]">
            Tratándose de la autenticación biométrica de su dispositivo, usted puede dejar de utilizarla en cualquier momento desde la configuración de su propio teléfono o de la Aplicación, y continuar iniciando sesión y registrando su asistencia con su usuario y contraseña, sin que sea necesario revocar consentimiento alguno, pues la Empresa y NOMMY RH no tratan dichos datos.
          </p>
        </Section>

        {/* 11. Medios para limitar el uso o divulgación */}
        <Section id="limitacion" title="11. Medios para Limitar el Uso o Divulgación de los Datos" delay={0.6}>
          <p className="text-[#525252]">
            Además de los derechos ARCO, usted puede limitar el uso o divulgación de sus datos personales solicitando su inscripción en el listado de exclusión interno de la Empresa, escribiendo al correo de la empresa en la cual el usuario trabaja, junto con sus datos personales nombre completo y teléfono.
          </p>
        </Section>

        {/* 12. Plazos de Conservación y Supresión */}
        <Section id="conservacion" title="12. Plazos de Conservación y Supresión" delay={0.65}>
          <p className="mb-4 text-[#525252]">
            Los datos personales se conservarán durante la vigencia de la relación laboral que tenga con la empresa que le contrata; una vez concluida, por los plazos exigidos por la legislación laboral, fiscal y de seguridad social aplicable, hasta por 12 meses adicionales. Transcurridos dichos plazos, los datos serán bloqueados y posteriormente suprimidos de manera segura.
          </p>
          <p className="text-[#525252]">
            Los datos de salud derivados de incapacidades, por tratarse de datos sensibles, serán suprimidos de forma segura tan pronto dejen de ser necesarios para las finalidades que motivaron su tratamiento, salvo obligación legal de conservación en contrario.
          </p>
        </Section>

        {/* 13. Medidas de Seguridad */}
        <Section id="seguridad" title="13. Medidas de Seguridad" delay={0.7}>
          <p className="mb-4 text-[#525252]">
            La Empresa contratante de la aplicación y NOMMY RH han implementado medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizados, incluyendo:
          </p>
          <ul className="mb-6 ml-6 list-disc text-[#525252] space-y-2">
            <li className="pl-2">Cifrado de contraseñas mediante funciones irreversibles, de modo que no se almacenan en texto claro.</li>
            <li className="pl-2">Cifrado de las comunicaciones en tránsito mediante protocolos TLS/HTTPS.</li>
            <li className="pl-2">Autenticación de usuarios con credenciales individuales y tokens de sesión firmados, transmitidos en cookies restringidas al servidor y a canales seguros.</li>
            <li className="pl-2">Control de accesos basado en perfiles diferenciados (colaborador, administrador de empresa y administrador del corporativo) con segregación lógica de la información de cada empresa.</li>
            <li className="pl-2">Límite de intentos y caducidad de los enlaces de recuperación de contraseña.</li>
            <li className="pl-2">Bitácoras que registran qué usuario creó, modificó o eliminó cada registro, con fecha y hora.</li>
          </ul>
          <p className="text-[#525252]">
            En caso de una vulneración de seguridad que afecte de forma significativa sus derechos, la Empresa se lo notificará conforme a la LFPDPPP.
          </p>
        </Section>

        {/* 14. Cookies y Tecnologías de Rastreo */}
        <Section id="cookies" title="14. Cookies y Tecnologías de Rastreo" delay={0.75}>
          <p className="mb-4 text-[#525252]">
            La Aplicación utiliza cookies estrictamente necesarias para el inicio y mantenimiento de su sesión y para la seguridad del acceso. Si usted habilita las notificaciones, la Aplicación registra además el identificador que asigna a su equipo el servicio de notificaciones push de Google (Firebase Cloud Messaging), con la única finalidad de entregarle avisos relacionados con su relación laboral. La Aplicación no utiliza cookies ni tecnologías de publicidad, perfilamiento o analítica de terceros.
          </p>
          <p className="text-[#525252]">
            Las cookies de sesión son indispensables para el funcionamiento de la Aplicación y no pueden deshabilitarse sin perder el acceso a ella; usted puede eliminarlas en cualquier momento borrando los datos del sitio o de la Aplicación desde la configuración de su navegador o dispositivo, lo que cerrará su sesión. Las notificaciones push puede deshabilitarlas desde la configuración de notificaciones de su dispositivo, en el entendido de que dejará de recibir los avisos que la Aplicación le envíe.
          </p>
        </Section>

        {/* 15. Cambios al Aviso de Privacidad */}
        <Section id="cambios" title="15. Cambios al Aviso de Privacidad" delay={0.8}>
          <p className="text-[#525252]">
            La Empresa podrá modificar este aviso para atender cambios legales, internos o de la Aplicación. Toda modificación se comunicará mediante un comunicado publicado en la propia Aplicación, disponible en la sección de comunicados y visible al ingresar a su cuenta, acompañado —cuando usted tenga habilitadas las notificaciones— de un aviso en su dispositivo; adicionalmente, cuando la Empresa cuente con su correo electrónico registrado, la comunicación podrá enviarse también por ese medio. En todos los casos se indicará la fecha de la nueva versión. Cuando los cambios impliquen nuevas finalidades que requieran consentimiento, éste se recabará antes de iniciar el nuevo tratamiento.
          </p>
        </Section>

        {/* 16. Autoridad Competente */}
        <Section id="autoridad" title="16. Autoridad Competente" delay={0.85}>
          <p className="text-[#525252]">
            Si usted considera que su derecho a la protección de datos personales ha sido vulnerado, puede acudir ante la Secretaría Anticorrupción y Buen Gobierno, autoridad competente en la materia conforme a la LFPDPPP vigente (funciones anteriormente a cargo del INAI).
          </p>
        </Section>

        {/* 17. Aceptación y Constancia */}
        <Section id="aceptacion" title="17. Aceptación y Constancia" delay={0.9}>
          <p className="mb-6 text-[#525252]">
            Manifiesto que se puso a mi disposición el presente Aviso de Privacidad, que conozco su contenido y alcance, y que otorgo mi consentimiento en los términos siguientes:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5] text-[#1a1a1a] flex gap-3">
              <span aria-hidden="true">☐</span>
              <span>AUTORIZO el uso de la autenticación biométrica de mi dispositivo (Face ID o huella) para verificar mi identidad al iniciar sesión y/o registrar asistencia, en el entendido de que la Aplicación no recibe, almacena ni transmite mis datos biométricos.</span>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5] text-[#1a1a1a] flex gap-3">
              <span aria-hidden="true">☐</span>
              <span>OTORGO mi consentimiento expreso y por escrito para el tratamiento de mis datos de salud derivados de incapacidades, para las finalidades descritas en este aviso.</span>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5] text-[#1a1a1a] flex gap-3">
              <span aria-hidden="true">☐</span>
              <span>OTORGO mi consentimiento expreso para el tratamiento de mis datos financieros y patrimoniales para las finalidades de nómina descritas.</span>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5] text-[#1a1a1a] flex gap-3">
              <span aria-hidden="true">☐</span>
              <span>ME OPONGO al tratamiento de mis datos para las finalidades secundarias descritas en la sección 6.</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Nombre del colaborador o colaboradora</div>
              <div className="text-[#525252]">[Nombre completo]</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Fecha</div>
              <div className="text-[#525252]">[DD/MM/AAAA]</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5] md:col-span-2">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Firma (autógrafa o electrónica)</div>
              <div className="text-[#525252]">&nbsp;</div>
            </div>
          </div>
        </Section>

        {/* 18. Eliminación de Cuenta */}
        <Section id="eliminacion" title="18. Eliminación de Cuenta" delay={0.95}>
          <p className="mb-4 text-[#525252]">
            Si usted desea solicitar la eliminación de su cuenta y de los datos personales asociados a ella dentro de la Aplicación, deberá dirigir su solicitud al departamento de Recursos Humanos de la empresa para la que presta o prestó sus servicios (la Empresa contratante del servicio de NOMMY RH), quien la tramitará ante Nommy RH para su atención.
          </p>
          <HighlightBox>
            <p className="text-[#1a1a1a]">
              Una vez recibida y validada la solicitud, se eliminará su cuenta y los datos personales tratados en la Aplicación, con excepción de aquellos datos que la Empresa deba conservar por obligación legal en materia laboral, fiscal y de seguridad social (por ejemplo, registros de nómina, CFDI y demás documentación que deba resguardarse por los plazos exigidos por la ley). Dichos datos permanecerán bloqueados, con acceso restringido únicamente para esos fines, hasta que proceda su supresión conforme a los plazos señalados en la sección 12 de este aviso.
            </p>
          </HighlightBox>
        </Section>

        {/* Footer */}
        <footer className="mt-24 pt-12 pb-8 border-t border-[#e5e5e5] text-center text-[#525252]">
          <div className="font-['Crimson_Pro'] text-2xl font-bold text-emerald-600 mb-4">
            Nommy
          </div>
          <p className="text-sm mb-2">
            © 2026 Nommy People &amp; Payroll Technologies. Todos los derechos reservados.
          </p>
          <p className="text-sm">
            Aviso de Privacidad al Usuario — Versión 1.14.1 — Última actualización: 16 de agosto de 2026
          </p>
        </footer>
      </main>
    </div>
  );
};

// Section Component
const Section = ({ id, title, children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`mb-16 section-animate ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <h2 className="font-['Crimson_Pro'] text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 pb-3 border-b-4 border-emerald-600 inline-block">
        {title}
      </h2>
      <div className="bg-white p-8 rounded-lg border border-[#e5e5e5] shadow-sm">
        {children}
      </div>
    </section>
  );
};

// Highlight Box Component
const HighlightBox = ({ children, className = '' }) => (
  <div className={`bg-[#d1fae5] border-l-4 border-emerald-600 p-6 my-6 rounded ${className}`}>
    {children}
  </div>
);

// Pending Box Component (items requiring confirmation before publication)
const PendingBox = ({ children }) => (
  <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6 rounded">
    {children}
  </div>
);

export default AvisoPrivacidadUsuario;
