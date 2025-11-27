import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Nosotros"
};

export default function Page() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
            Quiénes somos
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Una empresa híbrida por diseño: tecnología, moda y campo trabajando en equipo.
          </h1>
        </div>
        <div className="prose prose-invert max-w-none text-sm text-slate-300 prose-headings:text-slate-50 prose-a:text-emerald-300">

<p>
  Kangaroo AJ S.A.S. nace de combinar experiencia en arquitectura y desarrollo de software,
  gestión de proyectos y visión creativa aplicada a moda y actividades agrícolas.
</p>
<p>
  Trabajamos con una mentalidad muy simple: entender bien el contexto del negocio, diseñar una
  solución realista y acompañar la ejecución hasta que se vean resultados tangibles.
</p>
<p>
  No vendemos plantillas genéricas. Cada cliente tiene restricciones, ritmos y prioridades
  distintas. Nuestro rol es ayudarte a tomar decisiones técnicas y de diseño que tengan sentido
  para tu realidad, no para un caso idealizado.
</p>

        </div>
      </Container>
    </section>
  );
}
