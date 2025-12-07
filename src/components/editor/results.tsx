import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María García",
    role: "Content Creator",
    text: "Los videos que edita tienen un nivel de calidad increíble. Mi engagement subió un 300% desde que empezamos a trabajar juntos.",
    avatar: "/woman-portrait-professional-minimal.jpg",
  },
  {
    name: "Carlos Ruiz",
    role: "Founder, TechBrand",
    text: "Profesional, rápido y entiende perfectamente lo que necesita cada plataforma. Nuestros Reels ahora tienen millones de vistas.",
    avatar: "/man-portrait-professional-minimal.jpg",
  },
  {
    name: "Ana Martínez",
    role: "Lifestyle Influencer",
    text: "La diferencia en la calidad de mi contenido es abismal. Ahora recibo propuestas de marcas constantemente.",
    avatar: "/woman-portrait-influencer-minimal.jpg",
  },
]

const stats = [
  { value: "1M+", label: "Vistas totales" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "100+", label: "Videos editados" },
  { value: "24h", label: "Tiempo de respuesta" },
]

export default function Results() {
  return (
    <section id="resultados" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-sm text-muted-foreground tracking-wide uppercase">Resultados</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6 text-balance">
            Lo que dicen mis clientes
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-muted/30 border border-border text-center">
              <p className="text-3xl md:text-4xl font-semibold">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        {/* <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-2xl bg-background border border-border">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover bg-muted"
                />
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
