import { Scissors, Smartphone, BarChart3, Package } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Edición de videos cortos",
    description:
      "Cortes dinámicos, efectos visuales, corrección de color y audio. Contenido optimizado para captar atención en los primeros 3 segundos.",
  },
  {
    icon: Smartphone,
    title: "Diseño de contenido vertical",
    description:
      "Composición visual pensada para formato 9:16. Subtítulos animados, elementos gráficos y branding integrado.",
  },
  {
    icon: BarChart3,
    title: "Optimización por plataforma",
    description:
      "Adaptación específica para TikTok, Reels y Shorts. Conocimiento de algoritmos, tendencias y mejores prácticas.",
  },
  {
    icon: Package,
    title: "Paquetes mensuales",
    description:
      "Planes de contenido recurrente para mantener consistencia. Desde 8 hasta 30 videos mensuales según tus necesidades.",
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-sm text-muted-foreground tracking-wide uppercase">Servicios</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6 text-balance">
            Todo lo que necesitas para destacar
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Servicios profesionales de edición adaptados a creadores de contenido y marcas que buscan resultados reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-background border border-border hover:border-muted-foreground/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
