export default function About() {
  return (
    <section id="sobre-mi" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl bg-muted/50 border border-border overflow-hidden">
              <img src="/professional-video-editor-working-minimal-portrait.jpg" alt="Foto profesional" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-sm text-muted-foreground tracking-wide uppercase">Sobre mí</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6 text-balance">
              Transformo ideas en contenido viral
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy editor de video especializado en contenido vertical de alto impacto, creando piezas optimizadas para TikTok, Instagram Reels y YouTube Shorts. Durante los últimos años he trabajado de cerca con marcas, nutricionistas y creadores que buscan construir comunidad a través de videos cortos, educativos y altamente retenibles.
              </p>
              <p>
               Mi enfoque combina una narrativa clara y directa con una estética minimalista y moderna. Trabajo cada clip con intención: cortes precisos, pacing inteligente, textos legibles, efectos sutiles y transiciones que acompañan el mensaje sin distraer. Me especializo en transformar ideas complejas en contenido visual simple, dinámico y fácil de entender.
              </p>
              <p>
                Integro tendencias, insights de plataforma y estrategias de retención para asegurar que cada segundo aporte valor y mantenga al espectador enganchado. Desde guiones y optimización del storytelling hasta postproducción completa, mi objetivo es crear videos que no solo se vean bien, sino que también funcionen.
              </p>
            </div>

            {/* Quick stats */}
            <div className="flex gap-12 mt-10 pt-10 border-t border-border">
              <div>
                <p className="text-3xl font-semibold">1+</p>
                <p className="text-sm text-muted-foreground mt-1">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">20+</p>
                <p className="text-sm text-muted-foreground mt-1">Proyectos entregados</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">1M+</p>
                <p className="text-sm text-muted-foreground mt-1">Vistas generadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
