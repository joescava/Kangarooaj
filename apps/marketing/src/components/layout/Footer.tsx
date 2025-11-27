import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-slate-900/80 bg-slate-950/90">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-800">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Trabajando desde Bogotá con visión global.
          </div>
          <h2 className="text-base font-semibold text-slate-50">{siteConfig.name}</h2>
          <p className="text-sm text-slate-400">{siteConfig.description}</p>
        </div>

        <div className="grid flex-1 gap-6 text-sm text-slate-300 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Empresa</h3>
            <ul className="space-y-1.5">
              <li>{siteConfig.company.legalName}</li>
              <li>{siteConfig.company.location}</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Contacto</h3>
            <ul className="space-y-1.5">
              <li>
                <a href={`mailto:${siteConfig.company.email}`} className="hover:text-white">
                  {siteConfig.company.email}
                </a>
              </li>
              <li>{siteConfig.company.phone}</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Legal</h3>
            <ul className="space-y-1.5">
              <li>
                <a href="/privacidad" className="hover:text-white">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="/terminos" className="hover:text-white">
                  Términos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-t border-slate-900/80 bg-slate-950/95">
        <Container className="flex flex-col items-center justify-between gap-3 py-4 text-[11px] text-slate-500 sm:flex-row">
          <span>
            © {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </span>
          <span>Arquitectura, tecnología y negocio, conectados para crear valor real.</span>
        </Container>
      </div>
    </footer>
  );
}
