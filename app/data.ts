import { QuestionAnswer } from './types';

export const PREGUNTA_1_OPTIONS: QuestionAnswer[] = [
  {
    id: 'timbrado_dispersion',
    question: '¿Cómo funciona el timbrado de nómina y la dispersión?',
    answer: '¡Es automático y súper seguro! Nommy valida y respalda cada incidencia que impacta tu nómina antes de calcular. Una vez listo, se realiza el timbrado digital instantáneo con el SAT y puedes generar los archivos de dispersión para tu banco preferido sin errores manuales ni procesos tediosos.',
  },
  {
    id: 'conexion_idse',
    question: '¿Qué es la conexión directa con IDSE e IMSS?',
    answer: 'Nommy cuenta con conexión directa IDSE. Esto significa que puedes realizar altas, bajas y modificaciones de salarios de tus colaboradores ante el IMSS de manera automática desde la plataforma, sin tener que entrar al portal de IDSE y evitando errores de captura o multas.',
  },
  {
    id: 'control_incidencias',
    question: '¿Cómo automatiza Nommy el registro de incidencias?',
    answer: 'Centralizamos todo en un solo lugar. Con Nommy registras y controlas incidencias de manera eficiente (faltas, incapacidades, vacaciones, horas extras). El sistema las integra automáticamente al cálculo de nómina en tiempo real, reduciendo el trabajo manual de tu equipo de RRHH.',
  },
];

export const PREGUNTA_2_OPTIONS: QuestionAnswer[] = [
  {
    id: 'finiquitos_liquidaciones',
    question: '¿Cómo maneja Nommy los finiquitos y liquidaciones?',
    answer: 'Nommy resuelve de forma sencilla cualquier escenario de finiquito o liquidación en minutos. Ingresas los datos del colaborador y el motivo de la salida, y el sistema calcula de manera exacta las partes proporcionales de aguinaldo, vacaciones, prima vacacional e indemnizaciones conforme a la Ley Federal del Trabajo.',
  },
  {
    id: 'calculos_inversos',
    question: '¿Qué son los cálculos inversos de nómina?',
    answer: 'Los cálculos inversos te permiten ingresar la cantidad neta que deseas que el empleado reciba en su bolsillo. Nommy calcula de manera automática hacia atrás el sueldo bruto correspondiente, las deducciones y los impuestos (ISR, IMSS), ahorrándote horas de pruebas y errores manuales.',
  },
  {
    id: 'ia_nom035',
    question: '¿Tienen reclutamiento con IA y cumplimiento de NOM-035?',
    answer: '¡Sí! Contamos con un módulo de Reclutamiento asistido con Inteligencia Artificial para agilizar tus búsquedas y filtrado de candidatos. Además, incluimos herramientas para la aplicación y evaluación de las encuestas de la NOM-035 para cuidar el entorno organizacional y evitar multas.',
  },
];

export const PREGUNTA_3_OPTIONS: QuestionAnswer[] = [
  {
    id: 'costos_planes',
    question: '¿Cuál es el costo del software y cómo se implementa?',
    answer: 'Nuestros planes son flexibles y se adaptan al número de colaboradores activos de tu empresa. La implementación incluye acompañamiento y capacitación por parte de nuestros especialistas en nómina para que tu migración sea transparente, rápida y sin estrés.',
  },
  {
    id: 'seguridad_sat',
    question: '¿Qué tan seguro es Nommy y cumple con las leyes mexicanas?',
    answer: 'Garantizamos la máxima seguridad. Tu información está encriptada bajo estándares internacionales. Además, el motor de cálculo de Nommy se actualiza de manera inmediata ante cualquier cambio fiscal publicado por el SAT, el IMSS o el INFONAVIT en México.',
  },
  {
    id: 'soporte_tecnico',
    question: '¿Tienen soporte técnico y asesoría incluidos?',
    answer: '¡Por supuesto! Todos nuestros planes incluyen soporte por parte de asesores expertos en nómina y legislación fiscal mexicana. Te ayudamos a resolver cualquier duda sobre tus cálculos, dispersiones o incidencias de manera directa y ágil.',
  },
];

/** Las 9 preguntas combinadas, usadas como FAQ opcional dentro del flujo guiado. */
export const ALL_FAQ_OPTIONS: QuestionAnswer[] = [
  ...PREGUNTA_1_OPTIONS,
  ...PREGUNTA_2_OPTIONS,
  ...PREGUNTA_3_OPTIONS,
];