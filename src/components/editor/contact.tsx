"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left content */}
          <div>
            <span className="text-sm text-muted-foreground tracking-wide uppercase">Contacto</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6 text-balance">
              ¿Listo para llevar tu contenido al siguiente nivel?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Cuéntame sobre tu proyecto y te responderé en menos de 24 horas con una propuesta personalizada.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:jorgelarteagap@gmail.com" className="text-lg hover:underline">
                  jorgelarteagap@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Redes sociales</p>
                <div className="flex gap-4">
                  {/* <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    TikTok
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Instagram
                  </a> */}
                  <a href="https://www.linkedin.com/in/jorge-luis-arteaga-perez/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          {/* <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-foreground focus:outline-none transition-colors"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-foreground focus:outline-none transition-colors"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="platform" className="block text-sm font-medium mb-2">
                ¿Qué plataforma te interesa?
              </label>
              <select
                id="platform"
                value={formData.platform}
                onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-foreground focus:outline-none transition-colors appearance-none"
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="tiktok">TikTok</option>
                <option value="reels">Instagram Reels</option>
                <option value="shorts">YouTube Shorts</option>
                <option value="all">Todas las plataformas</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Cuéntame sobre tu proyecto
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-foreground focus:outline-none transition-colors resize-none"
                placeholder="Describe brevemente qué tipo de contenido necesitas..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Enviar mensaje
              <Send size={18} />
            </button>
          </form> */}
        </div>
      </div>
    </section>
  )
}
