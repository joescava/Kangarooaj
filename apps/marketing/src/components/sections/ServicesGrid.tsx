import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

function getCategoryLabel(category: string): string {
  switch (category) {
    case "consulting":
      return "Consultoría y arquitectura";
    case "delivery":
      return "Desarrollo a medida";
    case "automation":
      return "Automatización e integración";
    case "ai":
      return "IA aplicada";
    default:
      return "Servicio";
  }
}

export function ServicesGrid() {
  return (
    <section className="section-shell border-t border-slate-900/80 py-16 sm:py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">Servicios</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              De la idea al sistema funcionando, con un solo equipo.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Diseñamos, construimos y aterrizamos soluciones de software e IA con un enfoque muy práctico: entender tu
            operación actual, priorizar lo que más impacto tiene y avanzar por iteraciones cortas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-300 ring-1 ring-slate-800">
                  {getCategoryLabel(service.category)}
                </span>
                <h3 className="text-base font-semibold text-slate-50">{service.name}</h3>
                <p className="text-sm text-brand-100">{service.tagline}</p>
                <p className="text-sm text-slate-300">{service.description}</p>
              </div>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
