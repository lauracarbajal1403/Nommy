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
          Aviso de Privacidad Integral
        </h1>
        <p className="text-lg text-[#525252] opacity-0 animate-slideUp" style={{ animationDelay: '0.5s' }}>
          Tratamiento de Datos Personales para la Gestión de Nómina y Recursos Humanos
        </p>
        <p className="text-sm text-[#525252] mt-3 opacity-0 animate-slideUp" style={{ animationDelay: '0.6s' }}>
          Versión: 1.0 &nbsp;|&nbsp; Fecha de emisión: 07/09/2026
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-[900px] mx-auto px-6 py-8">
        {/* 1. Identidad y Domicilio del Responsable */}
        <Section id="identidad" title="1. Identidad y Domicilio del Responsable" delay={0.1}>
          <p className="mb-4 text-[#525252]">
            <strong className="text-[#1a1a1a]">NOMMY PEOPLE &amp; PAYROLL TECHNOLOGIES S.A.P.I. DE C.V.</strong> (RFC: NPA251110L3A), persona moral constituida conforme a las leyes mexicanas, con domicilio fiscal en Calle Obsidiana 3144 Avenida Aztlán 170, Loma Bonita, C.P. 45086, es la Responsable del tratamiento de sus datos personales en los términos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento, y los Lineamientos del Aviso de Privacidad emitidos por el INAI.
          </p>
          <p className="mb-4 text-[#525252]">
            Para la administración, procesamiento y timbrado de nómina, el Responsable se apoya en la plataforma tecnológica <strong className="text-[#1a1a1a]">Nommy RH</strong> (<a href="https://www.nommy.mx" className="text-emerald-600 hover:opacity-70 transition-opacity" target="_blank" rel="noopener noreferrer">www.nommy.mx</a>), quien actúa en calidad de Encargado del Tratamiento bajo instrucciones expresas del Responsable y sujeto a las medidas de seguridad que establece la legislación vigente.
          </p>
          <p className="text-[#525252]">
            Contacto del área de privacidad: <a href="mailto:legal@nommy.mx" className="text-emerald-600 hover:opacity-70 transition-opacity">legal@nommy.mx</a> &nbsp;|&nbsp; <a href="tel:3321499110" className="text-emerald-600 hover:opacity-70 transition-opacity">33 2149 9110</a>.
          </p>
        </Section>

        {/* 2. Datos Personales que se Tratan */}
        <Section id="datos" title="2. Datos Personales que se Tratan" delay={0.15}>
          <p className="mb-6 text-[#525252]">
            Para el cumplimiento de las finalidades descritas en el presente aviso, el Responsable — quien funge como administrador dentro de la operatividad de la plataforma Nommy RH — tratará las siguientes categorías de datos personales de sus trabajadores:
          </p>

          <h3 className="font-['Crimson_Pro'] text-xl font-bold text-[#1a1a1a] mb-3">2.1 Datos de Identificación</h3>
          <ul className="mb-6 ml-6 list-disc text-[#525252] space-y-1">
            <li className="pl-2">Nombre completo</li>
            <li className="pl-2">Registro Federal de Contribuyentes (RFC)</li>
            <li className="pl-2">Clave Única de Registro de Población (CURP)</li>
            <li className="pl-2">Número de Seguridad Social (NSS)</li>
            <li className="pl-2">Fecha y lugar de nacimiento</li>
            <li className="pl-2">Sexo</li>
            <li className="pl-2">Nacionalidad</li>
            <li className="pl-2">Identificación oficial (tipo y número)</li>
            <li className="pl-2">FIEL/e.firma (cuando aplique)</li>
          </ul>

          <h3 className="font-['Crimson_Pro'] text-xl font-bold text-[#1a1a1a] mb-3">2.2 Datos de Contacto</h3>
          <ul className="mb-6 ml-6 list-disc text-[#525252] space-y-1">
            <li className="pl-2">Domicilio particular</li>
            <li className="pl-2">Correo electrónico personal e institucional</li>
            <li className="pl-2">Número de teléfono móvil y fijo</li>
          </ul>

          <h3 className="font-['Crimson_Pro'] text-xl font-bold text-[#1a1a1a] mb-3">2.3 Datos Laborales</h3>
          <ul className="mb-6 ml-6 list-disc text-[#525252] space-y-1">
            <li className="pl-2">Puesto, área y nivel jerárquico</li>
            <li className="pl-2">Fecha de ingreso y, en su caso, de terminación de la relación laboral</li>
            <li className="pl-2">Jornada laboral, horario y turno asignado</li>
            <li className="pl-2">Incidencias: faltas justificadas e injustificadas, vacaciones, permisos, retardos</li>
            <li className="pl-2">Registro de asistencia y control de tiempo</li>
            <li className="pl-2">Movimientos de personal: promociones, cambios de adscripción, modificaciones salariales</li>
          </ul>

          <h3 className="font-['Crimson_Pro'] text-xl font-bold text-[#1a1a1a] mb-3">2.4 Datos Patrimoniales y Financieros</h3>
          <p className="mb-3 text-[#525252]">Esta categoría requiere especial cuidado en su resguardo y acceso restringido.</p>
          <ul className="mb-6 ml-6 list-disc text-[#525252] space-y-1">
            <li className="pl-2">Salario mensual o quincenal bruto y neto</li>
            <li className="pl-2">Salario Base de Cotización (SBC) ante el IMSS</li>
            <li className="pl-2">Percepciones ordinarias y extraordinarias (bonos, comisiones, horas extra, prima vacacional, aguinaldo)</li>
            <li className="pl-2">Deducciones: ISR retenido, cuotas IMSS trabajador, INFONAVIT, préstamos internos</li>
            <li className="pl-2">Cuenta de nómina: número de cuenta bancaria y CLABE interbancaria de 18 dígitos</li>
            <li className="pl-2">Institución bancaria receptora</li>
            <li className="pl-2">Número de crédito INFONAVIT y tabla de descuentos aplicable (en caso de que el trabajador tenga crédito activo)</li>
            <li className="pl-2">Constancias de percepciones y retenciones anuales (declaración anual empleados)</li>
          </ul>

          <h3 className="font-['Crimson_Pro'] text-xl font-bold text-[#1a1a1a] mb-3">2.5 Datos de Seguridad Social</h3>
          <ul className="mb-6 ml-6 list-disc text-[#525252] space-y-1">
            <li className="pl-2">Número de seguridad social (NSS) para registro ante el IMSS</li>
            <li className="pl-2">Movimientos afiliatorios transmitidos vía IDSE (IMSS Desde Su Empresa): alta (aviso de inscripción del trabajador), baja (aviso de baja), modificación de salario, reingreso</li>
            <li className="pl-2">Tabla de enfermedades y riesgos de trabajo (cuando aplique)</li>
            <li className="pl-2">Datos de incapacidades por enfermedad general, maternidad o riesgo de trabajo (folio, fechas, subsidios IMSS)</li>
          </ul>

          <h3 className="font-['Crimson_Pro'] text-xl font-bold text-[#1a1a1a] mb-3">2.6 Datos de Beneficiarios</h3>
          <ul className="ml-6 list-disc text-[#525252] space-y-1">
            <li className="pl-2">Nombre de beneficiarios designados para efectos del IMSS e INFONAVIT</li>
          </ul>
        </Section>

        {/* 3. Datos Personales Sensibles */}
        <Section id="sensibles" title="3. Datos Personales Sensibles" delay={0.2}>
          <p className="mb-6 text-[#525252]">
            De conformidad con el artículo 3, fracción VI de la LFPDPPP, se informa que en el marco de la relación laboral y el cumplimiento de obligaciones ante el IMSS, el Responsable podrá tratar datos considerados sensibles, particularmente:
          </p>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Estado de salud (incapacidades médicas)</div>
              <div className="text-[#1a1a1a]">Trámites de subsidios y prestaciones ante el IMSS</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Datos de maternidad/paternidad</div>
              <div className="text-[#1a1a1a]">Licencias y prestaciones de seguridad social</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Datos biométricos de asistencia (huella, reconocimiento facial)</div>
              <div className="text-[#1a1a1a]">Control de asistencia y puntualidad, si aplica en su empresa</div>
            </div>
          </div>
          <HighlightBox>
            <p className="text-[#1a1a1a]">
              El tratamiento de dichos datos se realizará únicamente para el cumplimiento de obligaciones legales en materia de seguridad social y laboral. Cuando no exista obligación legal que lo justifique, se requerirá su consentimiento expreso y por escrito, en términos del artículo 9 de la LFPDPPP.
            </p>
          </HighlightBox>
        </Section>

        {/* 4. Finalidades del Tratamiento */}
        <Section id="finalidades" title="4. Finalidades del Tratamiento" delay={0.25}>
          <h3 className="font-['Crimson_Pro'] text-xl font-bold text-[#1a1a1a] mb-1">4.1 Finalidades Primarias</h3>
          <p className="mb-3 text-[#525252] italic">(Necesarias para la relación laboral — no requieren consentimiento adicional)</p>
          <ol className="mb-6 ml-6 list-decimal text-[#525252] space-y-2">
            <li className="pl-2">Cálculo y procesamiento de nómina quincenal o mensual, incluyendo percepciones, deducciones y retenciones conforme a la Ley del ISR (LISR) y la Ley Federal del Trabajo (LFT)</li>
            <li className="pl-2">Timbrado de CFDI de nómina ante el Servicio de Administración Tributaria (SAT), conforme al Artículo 99 de la LISR y el Anexo 20 del SAT</li>
            <li className="pl-2">Gestión de movimientos afiliatorios ante el IMSS mediante transmisión directa vía IDSE (altas, bajas, modificaciones de salario)</li>
            <li className="pl-2">Cálculo y aplicación de descuentos INFONAVIT para trabajadores con crédito habitacional activo</li>
            <li className="pl-2">Retención y entero de ISR conforme a las tablas de retención vigentes, y generación de constancias fiscales</li>
            <li className="pl-2">Cálculo de prestaciones de ley: vacaciones, prima vacacional, aguinaldo, liquidación o finiquito</li>
            <li className="pl-2">Gestión de incidencias laborales: incapacidades, permisos con y sin goce de sueldo, retardos</li>
            <li className="pl-2">Cumplimiento de la NOM-035-STPS-2018 (factores de riesgo psicosocial en el trabajo)</li>
            <li className="pl-2">Generación de recibos de nómina digitales (CFDI) y entrega al trabajador</li>
            <li className="pl-2">Emisión de declaraciones y reportes fiscales ante el SAT (DIOT, declaración informativa de retenciones)</li>
          </ol>

          <h3 className="font-['Crimson_Pro'] text-xl font-bold text-[#1a1a1a] mb-1">4.2 Finalidades Secundarias</h3>
          <p className="mb-3 text-[#525252] italic">(Para las cuales puede oponerse sin consecuencia en su relación laboral)</p>
          <ol className="mb-6 ml-6 list-decimal text-[#525252] space-y-2">
            <li className="pl-2">Generación de reportes gerenciales y dashboards de RH para la toma de decisiones estratégicas</li>
            <li className="pl-2">Estadísticas internas de rotación, ausentismo, estructura salarial y composición de plantilla</li>
            <li className="pl-2">Evaluaciones de desempeño y análisis de productividad</li>
            <li className="pl-2">Comunicaciones sobre beneficios, programas de bienestar y capacitación internos</li>
          </ol>
        </Section>

        {/* 5. Transferencias de Datos Personales */}
        <Section id="transferencias" title="5. Transferencias de Datos Personales" delay={0.3}>
          <p className="mb-6 text-[#525252]">
            Sus datos personales podrán ser comunicados a los siguientes terceros. Las transferencias marcadas como sin consentimiento requerido no lo necesitan por estar amparadas en el artículo 37 de la LFPDPPP (obligaciones legales o contractuales).
          </p>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">SAT (Servicio de Administración Tributaria)</div>
              <div className="text-[#1a1a1a] mb-1">Timbrado de CFDI de nómina; retención y entero de ISR</div>
              <div className="text-sm text-[#525252]">Sin consentimiento — obligación fiscal (CFF, LISR)</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">IMSS vía IDSE</div>
              <div className="text-[#1a1a1a] mb-1">Movimientos afiliatorios: altas, bajas, modificaciones salariales; reporte de incapacidades</div>
              <div className="text-sm text-[#525252]">Sin consentimiento — Ley del Seguro Social</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">INFONAVIT</div>
              <div className="text-[#1a1a1a] mb-1">Descuentos de crédito habitacional; cumplimiento de obligaciones patronales</div>
              <div className="text-sm text-[#525252]">Sin consentimiento — Ley del INFONAVIT</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Institución bancaria</div>
              <div className="text-[#1a1a1a] mb-1">Dispersión y depósito de nómina en cuenta del trabajador</div>
              <div className="text-sm text-[#525252]">Sin consentimiento — contrato de trabajo</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">STPS (Secretaría del Trabajo)</div>
              <div className="text-[#1a1a1a] mb-1">Cumplimiento NOM-035, inspecciones laborales</div>
              <div className="text-sm text-[#525252]">Sin consentimiento — LFT y normativa STPS</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Nommy RH (plataforma tecnológica)</div>
              <div className="text-[#1a1a1a] mb-1">Procesamiento, automatización, timbrado y resguardo de información de nómina y RH</div>
              <div className="text-sm text-[#525252]">Sin consentimiento — contrato de Encargado del Tratamiento</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Auditores y contadores externos</div>
              <div className="text-[#1a1a1a] mb-1">Auditorías contables, fiscales o laborales</div>
              <div className="text-sm text-[#525252]">Requiere consentimiento o fundamento contractual</div>
            </div>
          </div>
          <p className="text-[#525252]">
            El Responsable se compromete a no transferir datos personales a terceros distintos a los mencionados sin contar previamente con el consentimiento del titular, salvo las excepciones previstas en la ley.
          </p>
        </Section>

        {/* 6. Derechos ARCO */}
        <Section id="arco" title="6. Derechos ARCO" delay={0.35}>
          <p className="mb-4 text-[#525252]">
            De conformidad con los artículos 22 al 35 de la LFPDPPP, usted tiene derecho a:
          </p>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Acceso</div>
              <div className="text-[#1a1a1a]">Conocer qué datos personales tenemos sobre usted, para qué los usamos y las condiciones generales del tratamiento</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Rectificación</div>
              <div className="text-[#1a1a1a]">Solicitar la corrección de sus datos cuando sean inexactos, incompletos o no actualizados</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Cancelación</div>
              <div className="text-[#1a1a1a]">Pedir la supresión de sus datos cuando no sean necesarios, haya concluido la relación laboral o no exista obligación legal de conservarlos</div>
            </div>
            <div className="p-4 bg-[#fafaf8] rounded-lg border border-[#e5e5e5]">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Oposición</div>
              <div className="text-[#1a1a1a]">Oponerse al tratamiento de sus datos para finalidades secundarias</div>
            </div>
          </div>

          <h3 className="font-['Crimson_Pro'] text-xl font-bold text-[#1a1a1a] mb-3">¿Cómo ejercer sus derechos ARCO?</h3>
          <p className="mb-3 text-[#525252]">
            Envíe una solicitud al departamento de recursos humanos, contratante de la plataforma Nommy RH con la siguiente información:
          </p>
          <ol className="mb-6 ml-6 list-decimal text-[#525252] space-y-2">
            <li className="pl-2">Nombre completo y datos de contacto</li>
            <li className="pl-2">Descripción clara y precisa del derecho que desea ejercer</li>
            <li className="pl-2">Copia de identificación oficial vigente</li>
            <li className="pl-2">Cualquier documento que facilite la localización de sus datos (número de empleado, área, etc.)</li>
          </ol>
          <p className="text-[#525252]">
            <strong className="text-[#1a1a1a]">Tiempo de respuesta:</strong> El Responsable dará contestación en un plazo máximo de 20 días hábiles a partir de la recepción de la solicitud, conforme al artículo 32 de la LFPDPPP. De ser procedente, los cambios se harán efectivos en un plazo adicional de 15 días hábiles.
          </p>
        </Section>

        {/* 7. Mecanismos para Limitar el Uso y Divulgación */}
        <Section id="limitacion" title="7. Mecanismos para Limitar el Uso y Divulgación" delay={0.4}>
          <p className="mb-4 text-[#525252]">
            Si desea que sus datos no sean tratados para las finalidades secundarias descritas en la sección 4.2, puede manifestarlo por escrito al correo mencionado en la sección 6 dentro de los 5 días hábiles siguientes a la recepción de este aviso, sin que ello afecte su relación laboral.
          </p>
          <p className="text-[#525252]">
            Adicionalmente, podrá inscribirse en el Registro Público para Evitar Publicidad (REPEP) de PROFECO en caso de que desee limitar el uso de sus datos para fines comerciales o publicitarios externos.
          </p>
        </Section>

        {/* 8. Medidas de Seguridad */}
        <Section id="seguridad" title="8. Medidas de Seguridad" delay={0.45}>
          <p className="mb-4 text-[#525252]">
            El Responsable, en conjunto con Nommy RH como Encargado del Tratamiento, ha implementado medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción, acceso o uso no autorizado, en cumplimiento del artículo 19 de la LFPDPPP y el Capítulo IV de su Reglamento. Entre estas medidas se encuentran:
          </p>
          <ul className="ml-6 list-disc text-[#525252] space-y-2">
            <li className="pl-2">Acceso restringido a la plataforma mediante credenciales individuales (usuario y contraseña)</li>
            <li className="pl-2">Control de roles y perfiles dentro del sistema Nommy RH: solo el nominista autorizado tiene acceso a datos de nómina completos</li>
            <li className="pl-2">Cifrado de datos en tránsito y en reposo</li>
            <li className="pl-2">Registro de auditoría (log de actividades) de las operaciones realizadas en la plataforma</li>
            <li className="pl-2">Acuerdos de confidencialidad con el personal que tiene acceso a datos de nómina</li>
            <li className="pl-2">Política interna de uso aceptable de la plataforma y de los datos personales</li>
          </ul>
        </Section>

        {/* 9. Conservación de Datos */}
        <Section id="conservacion" title="9. Conservación de Datos" delay={0.5}>
          <p className="mb-4 text-[#525252]">Sus datos personales serán conservados durante:</p>
          <ul className="mb-6 ml-6 list-disc text-[#525252] space-y-2">
            <li className="pl-2">La vigencia de la relación laboral, y</li>
            <li className="pl-2">El período adicional que determinen las disposiciones fiscales y laborales vigentes:
              <ul className="mt-2 ml-6 list-disc space-y-1">
                <li className="pl-2">5 años: Contabilidad y documentación fiscal (artículo 30 del Código Fiscal de la Federación)</li>
                <li className="pl-2">1 año: Contratos individuales de trabajo (artículo 804 de la LFT)</li>
                <li className="pl-2">Indefinidamente: CFDI de nómina timbrados (por obligación de consulta ante el SAT)</li>
              </ul>
            </li>
          </ul>
          <p className="text-[#525252]">
            Una vez transcurridos los plazos de conservación aplicables, sus datos serán bloqueados y posteriormente suprimidos de forma segura.
          </p>
        </Section>

        {/* 10. Modificaciones al Aviso de Privacidad */}
        <Section id="cambios" title="10. Modificaciones al Aviso de Privacidad" delay={0.55}>
          <p className="mb-4 text-[#525252]">
            El Responsable se reserva el derecho de efectuar modificaciones o actualizaciones al presente aviso de privacidad en cualquier momento, para atender cambios legislativos, jurisprudenciales, políticas internas o nuevas prácticas de privacidad.
          </p>
          <p className="mb-4 text-[#525252]">Cualquier modificación será comunicada mediante:</p>
          <ul className="mb-4 ml-6 list-disc text-[#525252] space-y-1">
            <li className="pl-2">Correo electrónico al trabajador</li>
            <li className="pl-2">Publicación en el tablero de avisos de la empresa</li>
            <li className="pl-2">Notificación dentro de la plataforma Nommy RH</li>
          </ul>
          <p className="text-[#525252]">
            La versión vigente siempre estará disponible en: [enlace interno o sitio web de la empresa].
          </p>
        </Section>

        {/* 11. Autoridad Competente */}
        <Section id="autoridad" title="11. Autoridad Competente" delay={0.6}>
          <p className="text-[#525252]">
            Si considera que el Responsable ha vulnerado sus derechos en materia de protección de datos personales, puede presentar una queja o denuncia ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI): <a href="https://www.inai.org.mx" className="text-emerald-600 hover:opacity-70 transition-opacity" target="_blank" rel="noopener noreferrer">www.inai.org.mx</a> &nbsp;|&nbsp; <a href="tel:8008354324" className="text-emerald-600 hover:opacity-70 transition-opacity">800 835 4324</a>.
          </p>
        </Section>

        {/* Nota para el Administrador/nominista */}
        <div className="mb-16">
          <HighlightBox>
            <p className="text-[#1a1a1a]">
              <strong>Nota para el Administrador/nominista:</strong> Al acceder y operar la plataforma Nommy RH para el procesamiento de nómina, usted confirma haber leído el presente aviso y comprende que el tratamiento de los datos personales de los trabajadores debe realizarse exclusivamente para las finalidades aquí descritas, con acceso restringido a información necesaria para su función, y en apego a las políticas de confidencialidad de la empresa. Cualquier uso indebido de los datos a los que tenga acceso podrá generar responsabilidades civiles, laborales y penales conforme a la legislación aplicable.
            </p>
          </HighlightBox>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 pb-8 border-t border-[#e5e5e5] text-center text-[#525252]">
          <div className="font-['Crimson_Pro'] text-2xl font-bold text-emerald-600 mb-4">
            Nommy
          </div>
          <p className="text-sm mb-2">
            © 2026 Nommy People &amp; Payroll Technologies. Todos los derechos reservados.
          </p>
          <p className="text-sm mb-2">
            Documento emitido conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y los Lineamientos del Aviso de Privacidad — INAI, México.
          </p>
          <p className="text-sm">
            Aviso de Privacidad Integral — Versión 1.0 — Fecha de emisión: 7 de septiembre de 2026
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
