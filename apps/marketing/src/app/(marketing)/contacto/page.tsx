import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function Page() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">Contacto</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Cuéntanos qué quieres construir y vemos cómo te ayudamos.
          </h1>
        </div>
        <div className="prose prose-invert max-w-none text-sm text-slate-300 prose-headings:text-slate-50 prose-a:text-emerald-300">
          <p>
            Puedes escribirnos directamente a <a href="mailto:contacto@kangarooaj.com">contacto@kangarooaj.com</a> o
            usar el formulario de la página de inicio para compartir más contexto de tu proyecto.
          </p>
          <p>A partir de ahí agendamos una sesión inicial donde:</p>
          <ul>
            <li>Revisamos tu situación actual y tus objetivos.</li>
            <li>Identificamos riesgos, dependencias y oportunidades rápidas.</li>
            <li>Definimos posibles líneas de trabajo y próximos pasos.</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
