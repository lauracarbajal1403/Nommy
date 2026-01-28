"use client"

import { MessageSquare } from "lucide-react"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, me interesa conocer más sobre Nommy")
    const whatsappUrl = `https://wa.me/523315179175?text=${message}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
    </button>
  )
}
