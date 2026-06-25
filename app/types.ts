export interface ChatOption {
  id: string;
  text: string;
  next_node: string;
}

export interface QuestionAnswer {
  id: string;
  question: string;
  answer: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user' | 'system';
  text: string;
  timestamp: string;
  options?: ChatOption[];
  faqOptions?: QuestionAnswer[];
  inputType?: 'name' | 'phone' | 'email_or_phone' | 'abandonment_form' | 'none';
  showCalendar?: boolean;
}

export interface TreeNode {
  id: string;
  title: string;
  description: string;
  question: string;
  options?: { text: string; targetId: string }[];
  type: 'start' | 'question' | 'response' | 'bifurcation' | 'action' | 'abandonment';
}

export interface UXMetric {
  title: string;
  score: number; // 0-100
  color: string;
  description: string;
}

/** Slot de disponibilidad devuelto por /api/calendar (GET) */
export interface CalendarSlot {
  id: string;
  startISO: string; // ISO 8601, ej "2026-06-25T15:00:00-06:00"
  endISO: string;
  label: string; // ej "Mié 25 Jun, 3:00 PM"
}

/** Body que se envía a /api/calendar (POST) para crear el evento */
export interface BookDemoPayload {
  slotId: string;
  startISO: string;
  endISO: string;
  name: string;
  email?: string;
  phone?: string;
  pain?: string;
  teamSize?: string;
}

/** Respuesta de /api/calendar (POST) */
export interface BookDemoResponse {
  success: boolean;
  eventId?: string;
  meetLink?: string;
  error?: string;
}

/** Tipo de notificación que se envía a ventas@nommy.mx vía /api/notify-sales */
export type SalesNotificationType = 'call_request' | 'abandonment_lead';

/** Body que se envía a /api/notify-sales (POST) */
export interface NotifySalesPayload {
  type: SalesNotificationType;
  name?: string;
  phone?: string;
  email?: string;
  pain?: string;
  teamSize?: string;
  preferredBlock?: string; // ej. "9:00 am a 12:00 pm"
  preferredChannel?: string; // ej. "Llamada telefónica" | "WhatsApp"
}

/** Respuesta de /api/notify-sales (POST) */
export interface NotifySalesResponse {
  success: boolean;
  error?: string;
}