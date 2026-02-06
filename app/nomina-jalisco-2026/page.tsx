import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, FileText, Calculator, Clock, Building2, ChevronDown, ChevronUp } from 'lucide-react';

export default function NominaJalisco2026() {
  const [activeSection, setActiveSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const toggleCheckItem = (item) => {
    setCheckedItems(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const checklistItems = [
    "Revisar todos los contratos (especialmente en manufactura y construcción) para ajustar horarios a 40 horas",
    "Capacitar a tu contador o externo en los nuevos lineamientos del SAT Occidente para nómina electrónica",
    "Contratar un software de nómina que calcule automáticamente: Prima dominical, Día de la Charreada, Límites de vales de despensa",
    "Documentar esquemas de teletrabajo según el Código del Trabajo de Jalisco",
    "Realizar una auditoría previa cruzando nómina vs. IMSS antes del cierre de febrero"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-10 h-10" />
            <span className="text-orange-300 font-semibold text-lg">Jalisco 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Nómina en Jalisco 2026: <span className="text-orange-300">Nueva Ley de 40 Horas</span> y el SAT Impactan tu Negocio
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Si eres empresario jalisciense, esta guía práctica es para ti: Te compartimos cómo la nómina de 2026 exige estos 3 cambios inmediatos
          </p>
        </div>
      </header>

      {/* Alert Banner */}
      <div className="bg-orange-100 border-l-4 border-orange-500 py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-orange-900 font-semibold">
              Si tienes empleados en Guadalajara, Zapopan, o cualquier municipio de Jalisco, febrero de 2026 marca un punto de inflexión.
            </p>
            <p className="text-orange-800 mt-1">
              La combinación de la implementación real de la Ley Federal del Trabajo (40 horas) con los nuevos requisitos del SAT en nómina electrónica crea una tormenta perfecta de cumplimiento.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Context Section */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8 border-t-4 border-blue-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">El Contexto Jalisciense Especial</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Jalisco no es solo tequila y tech. Es el <strong className="text-blue-700">segundo estado con más controversias laborales</strong> (según el Tribunal Federal de Conciliación) y el <strong className="text-blue-700">tercero en recepción de observaciones del SAT</strong> por nómina electrónica. En 2026, esto se intensificará.
          </p>
        </section>

        {/* 3 Main Changes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Los 3 Cambios Obligatorios
          </h2>

          {/* Change 1 */}
          <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden border-l-4 border-blue-500">
            <button
              onClick={() => toggleSection(1)}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-4">
                <Clock className="w-8 h-8 text-blue-600" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900">1. La Jornada de 40 Horas</h3>
                  <p className="text-gray-600">Del papel a la nómina real</p>
                </div>
              </div>
              {activeSection === 1 ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
            
            {activeSection === 1 && (
              <div className="px-8 pb-6 space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900 mb-2">Situación Jalisco:</p>
                  <p className="text-gray-700">Sectores como manufactura, logística en El Salto, y call centers en ZMG operan con turnos complejos.</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-900 mb-3">Ejemplo concreto:</p>
                  <p className="text-gray-700 mb-3">Un operario en la Zona Industrial de El Salto que trabajaba 48 horas (6x8) ahora debe tener:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">A:</span>
                      <span className="text-gray-700">5 días de 8 horas (40h semanales) + pago de prima dominical si trabaja los domingos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">B:</span>
                      <span className="text-gray-700">Esquema mixto con horas extras pagadas desde la hora 41 (no desde la 49 como antes)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="font-semibold text-red-900 mb-2">❌ Error común en Jalisco:</p>
                  <p className="text-gray-700">Creer que el "día de descanso obligatorio" se puede compensar solo con pago. La Procuraduría de la Defensa del Trabajo (Profedet) en Guadalajara ya multa esto.</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="font-semibold text-yellow-900 mb-2">💡 Solución práctica:</p>
                  <p className="text-gray-700">Revisar contratos colectivos de trabajo (especialmente en sindicatos de construcción y alimentos) y ajustar software para calcular automáticamente el nuevo tope.</p>
                </div>
              </div>
            )}
          </div>

          {/* Change 2 */}
          <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden border-l-4 border-orange-500">
            <button
              onClick={() => toggleSection(2)}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-orange-600" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900">2. SAT y Nómina Electrónica 2.0</h3>
                  <p className="text-gray-600">Vigilancia estricta en Jalisco</p>
                </div>
              </div>
              {activeSection === 2 ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
            
            {activeSection === 2 && (
              <div className="px-8 pb-6 space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-900 mb-2">Novedad 2026:</p>
                  <p className="text-gray-700 mb-3">El Servicio de Administración Tributaria de la Región Occidente (con sede en GDL) prioriza auditorías a empresas que:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Emiten CFDI de nómina con percepciones no registradas en el IMSS</li>
                    <li>Tienen discrepancias entre lo pagado vía nómina electrónica y lo declarado en IMSS e INFONAVIT</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold text-purple-900 mb-2">Caso típico Jalisco:</p>
                  <p className="text-gray-700">Empresas que dan vales de despensa superiores a la UMA ($141.70 diarios en 2026) y no los registran como percepción. El SAT ahora cruza datos con tiendas afiliadas.</p>
                </div>

                <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 mb-2">✅ Recomendación urgente:</p>
                  <p className="text-gray-700">Usar softwares como <strong>Nommy</strong> que genere recibos de nómina que contenga información completa como el CFDI entre otros aspectos relevantes.</p>
                </div>
              </div>
            )}
          </div>

          {/* Change 3 */}
          <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden border-l-4 border-green-500">
            <button
              onClick={() => toggleSection(3)}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-4">
                <Calculator className="w-8 h-8 text-green-600" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900">3. El "Plus Jalisco"</h3>
                  <p className="text-gray-600">Prestaciones locales que impactan nómina</p>
                </div>
              </div>
              {activeSection === 3 ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
            
            {activeSection === 3 && (
              <div className="px-8 pb-6 space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-900 mb-3">Reglamento Interior de Trabajo del Estado de Jalisco (actualizado 2025) exige:</p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-400 pl-4">
                      <p className="font-semibold text-gray-900">Día de la Charreada (14 de septiembre):</p>
                      <p className="text-gray-700">Día de descanso obligatorio pagado para todos los empleados del estado.</p>
                    </div>

                    <div className="border-l-4 border-blue-400 pl-4">
                      <p className="font-semibold text-gray-900">Fondos de Ahorro:</p>
                      <p className="text-gray-700">Muchas empresas jaliscienses los ofrecen como prestación competitiva. En 2026, deben reflejarse por separado en el CFDI de nómina, no como "otras percepciones".</p>
                    </div>

                    <div className="border-l-4 border-purple-400 pl-4">
                      <p className="font-semibold text-gray-900">Teletrabajo en la ZMG:</p>
                      <p className="text-gray-700">Si tienes empleados en 3 municipios distintos (ej: empleado vive en Tlajomulco, oficina en Zapopan, y trabaja desde casa), debes tener un anexo al contrato específico que detalle gastos de internet/energía. Estos no son salario, pero sí deducibles para la empresa.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Checklist */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg shadow-xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CheckCircle className="w-8 h-8" />
            Checklist de Supervivencia para Jalisco (Febrero 2026)
          </h2>
          <div className="space-y-3">
            {checklistItems.map((item, index) => (
              <label
                key={index}
                className="flex items-start gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={checkedItems[index] || false}
                  onChange={() => toggleCheckItem(index)}
                  className="w-5 h-5 mt-1 rounded cursor-pointer"
                />
                <span className={`flex-1 ${checkedItems[index] ? 'line-through opacity-70' : ''}`}>
                  {item}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Conoce Nommy</h2>
          <p className="text-xl mb-6 text-orange-100">
            Compara cómo nuestra plataforma puede ayudarte a estar al día con las nuevas leyes en temas de nómina de acuerdo a la Ley 2026
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition shadow-lg">
            Solicitar Demo Gratis
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <p>&copy; 2026 Nommy. Soluciones de Nómina para Jalisco.</p>
          <p className="text-sm mt-2">Mantén tu negocio en cumplimiento con las nuevas regulaciones laborales.</p>
        </div>
      </footer>
    </div>
  );
}