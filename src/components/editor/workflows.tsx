const steps = [
  {
    number: "01",
    title: "Briefing",
    description: "Conversamos sobre tu proyecto, objetivos y estilo. Entiendo tu marca y tu audiencia.",
  },
  {
    number: "02",
    title: "Material",
    description: "Me envías tu contenido en bruto. Te doy acceso a una carpeta compartida para facilitar el proceso.",
  },
  {
    number: "03",
    title: "Edición",
    description: "Trabajo en tu video aplicando mi estilo y las mejores prácticas de cada plataforma.",
  },
  {
    number: "04",
    title: "Revisión",
    description: "Te presento el primer corte. Incluyo hasta 2 rondas de revisiones para ajustes.",
  },
  {
    number: "05",
    title: "Entrega",
    description: "Recibes el video final optimizado y listo para publicar en todas tus plataformas.",
  },
]

export default function Workflow() {
  return (
    <section id="proceso" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-sm text-muted-foreground tracking-wide uppercase">Proceso</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6 text-balance">
            Simple, rápido, profesional
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Un flujo de trabajo optimizado para que puedas enfocarte en crear mientras yo me encargo de la edición.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 md:gap-10 py-8 border-t border-border last:border-b group">
              <span className="text-4xl md:text-5xl font-semibold text-muted-foreground/40 group-hover:text-foreground transition-colors">
                {step.number}
              </span>
              <div className="pt-2">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xl">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
