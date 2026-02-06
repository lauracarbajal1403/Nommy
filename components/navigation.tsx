"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    return pathname === href
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - using new icon and text logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/nommy-logo-new.png" alt="NOMMY" width={48} height={48} className="h-12 w-auto" priority />
            <Image src="/nommy-text-new.png" alt="nommy" width={32} height={32} className="h-8 w-auto" priority />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className={`transition-colors duration-300 ${
                isActiveLink("/about") ? "text-turquoise" : "text-navy hover:text-turquoise"
              }`}
            >
              Nosotros
            </Link>
            <Link
              href="/producto"
              className={`transition-colors duration-300 ${
                isActiveLink("/producto") ? "text-turquoise" : "text-navy hover:text-turquoise"
              }`}
            >
              Producto
            </Link>
            <Link
              href="/pricing"
              className={`transition-colors duration-300 ${
                isActiveLink("/pricing") ? "text-turquoise" : "text-navy hover:text-turquoise"
              }`}
            >
              Precios
            </Link>
            
            <Link
              href="/resources"
              className={`transition-colors duration-300 ${
                isActiveLink("/pricing") ? "text-turquoise" : "text-navy hover:text-turquoise"
              }`}
            >
              Recursos
            </Link>
            
            <Link
              href="/demo"
              className="px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:scale-105"
              style={{ backgroundColor: "#37B5B1", color: "#ffff" }}
            >
              ¡Agenda tu DEMO!
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy hover:text-turquoise transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/about"
                className={`block px-3 py-2 transition-colors duration-300 ${
                  isActiveLink("/about") ? "text-turquoise" : "text-navy hover:text-turquoise"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/producto"
                className={`block px-3 py-2 transition-colors duration-300 ${
                  isActiveLink("/producto") ? "text-turquoise" : "text-navy hover:text-turquoise"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Producto
              </Link>
              <Link
                href="/pricing"
                className={`block px-3 py-2 transition-colors duration-300 ${
                  isActiveLink("/pricing") ? "text-turquoise" : "text-navy hover:text-turquoise"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Precios
              </Link>
              <Link
                href="/demo"
                className="block mx-3 my-2 px-6 py-3 rounded-full font-medium text-center transition-all duration-300 shadow-lg"
                style={{ backgroundColor: "#152132", color: "#ffffff" }}
                onClick={() => setIsOpen(false)}
              >
                ¡Agenda tu DEMO!
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
