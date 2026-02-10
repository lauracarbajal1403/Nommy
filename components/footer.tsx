import { Phone, MapPin, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-br from-turquoise/10 to-navy/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Logo - using new icon and text logo */}
            <div className="flex items-center space-x-3">
              <Image src="/nommy-logo-new.png" alt="NOMMY" width={48} height={48} className="h-12 w-auto" />
              <Image src="/nommy-text-new.png" alt="nommy" width={32} height={32} className="h-8 w-auto" />
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="https://wa.me/523315179175"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 group hover:text-turquoise transition-colors duration-300"
              >
                <Phone className="w-5 h-5 text-turquoise group-hover:scale-110 transition-transform duration-300" />
                <span className="text-navy group-hover:text-turquoise">(33) 15179175</span>
              </a>
              <div className="flex items-center space-x-3 group">
                <MapPin className="w-5 h-5 text-turquoise group-hover:scale-110 transition-transform duration-300" />
                <span className="text-navy">Avenida Aztlán 170 Zapopan, Jalisco</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-turquoise group-hover:scale-110 transition-transform duration-300" />
                <span className="text-navy">ventas@nommy.mx</span>
              </div>

              <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61578598203669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-turquoise to-turquoise/80 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/nommymexico/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-turquoise to-turquoise/80 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@NommyMéxico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-turquoise to-turquoise/80 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nommy-m%C3%A9xico-a797a1376/?trk=public-profile-join-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-turquoise to-turquoise/80 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.tiktok.com/@nommy.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-turquoise to-turquoise/80 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="border-t border-turquoise border-opacity-20 mt-8 pt-8 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <p className="text-navy text-sm">© 2025 NOMMY. Todos los derechos reservados.</p>
                <a
                  className="text-turquoise hover:text-navy transition-colors duration-300 text-sm mt-2 sm:mt-0"
                  href="/terminos"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >Términos y condiciones</a>
                <a
                  className="text-turquoise hover:text-navy transition-colors duration-300 text-sm mt-2 sm:mt-0"
                  href="/aviso"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >Aviso de privacidad</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
