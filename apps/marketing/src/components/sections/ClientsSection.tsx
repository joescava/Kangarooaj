import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { clients } from "@/content/clients";

export function ClientsSection() {
  return (
    <section className="border-t border-slate-900/80 bg-slate-950/95 py-16 sm:py-20">
      <Container>
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">Confían en nosotros</p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Acompañando empresas en Estados Unidos y Colombia.
          </h2>
          <p className="text-sm text-slate-400">
            Desde proyectos críticos en tecnología hasta productos que estamos co-creando con aliados estratégicos.
            Estas son algunas de las organizaciones con las que trabajamos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {clients.map((client) => (
            <Card key={client.id} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-emerald-400 text-xs font-semibold text-slate-950 shadow-md shadow-brand-500/40">
                  {client.name
                    .split(" ")
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold text-slate-50">{client.name}</p>
                  <p className="text-[11px] text-slate-400">
                    {client.location} · {client.sector}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-300">{client.description}</p>
              <p className="text-[11px] font-medium text-emerald-300">
                {client.status === "cliente" ? "Cliente activo" : "Alianza en diseño de producto"}
              </p>
              {client.url && (
                <a
                  href={client.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-sky-300 hover:text-sky-200"
                >
                  Ver más sobre la empresa
                </a>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
