"use client"

import { ArrowDown } from "lucide-react"

const portfolioItems = [
  { id: 1, platform: "TikTok", views: "2.5M", image: "images/videos/edits-1.png", link: "https://www.tiktok.com/@luisdaniel.agreda/video/7574847992394534156" },
  { id: 2, platform: "Reels", views: "1.8M", image: "images/videos/edits-2.png", link: "https://www.tiktok.com/@e_plasticos/video/7573709917257829688" },
  { id: 3, platform: "Shorts", views: "3.2M", image: "images/videos/edits-3.png", link: "https://www.tiktok.com/@ciudad.comercio1/video/7575235108328721675" },
  { id: 4, platform: "TikTok", views: "950K", image: "images/videos/edits-4.png", link: "https://www.tiktok.com/@licmauriciomvp/video/7567520665151032632" },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-56 pb-12">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Main content */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance mb-6 leading-[1.1]">
            Edición de videos cortos que conectan
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground text-balance mb-10 max-w-xl leading-relaxed">
            Especialista en crear contenido vertical de alto impacto para TikTok, Instagram Reels y YouTube Shorts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="px-8 py-3.5 rounded-full bg-white text-slate-800 font-medium hover:opacity-90 transition-opacity text-center"
            >
              Solicitar presupuesto
            </a>
            <a
              href="#servicios"
              className="px-8 py-3.5 rounded-full border text-slate-200 border-slate-800 hover:bg-slate-800 hover:text-white transition-colors font-medium text-center"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* Mini portfolio grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="aspect-[9/16] rounded-2xl bg-muted/50 border border-border overflow-hidden relative group cursor-pointer hover:border-muted-foreground/30 transition-all"
            >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={`${item.image}?height=640&width=360&query=short video ${item.platform} content creator dark minimal`}
                alt={`Ejemplo de video en ${item.platform}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-medium">{item.platform}</p>
                <p className="text-white/80 text-xs">{item.views} vistas</p>
              </div>
              </a>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#sobre-mi"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
