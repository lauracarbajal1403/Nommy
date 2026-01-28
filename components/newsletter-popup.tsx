"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log("[v0] NewsletterPopup mounted")

    // Show popup after 1 second delay
    const timer = setTimeout(() => {
      console.log("[v0] Opening newsletter popup")
      setIsOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  console.log("[v0] NewsletterPopup render - isOpen:", isOpen, "mounted:", mounted)

  if (!mounted || !isOpen) return null

  const popupContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-navy">Suscríbete a nuestro newsletter</h2>
            <p className="text-gray-600">Recibe las últimas novedades y consejos sobre gestión de nómina</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-turquoise hover:bg-turquoise/90 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </div>
  )

  return createPortal(popupContent, document.body)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log("[v0] Newsletter subscription:", email)
    setIsOpen(false)
    setEmail("")
  }
}
