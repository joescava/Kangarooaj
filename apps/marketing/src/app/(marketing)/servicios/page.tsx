import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Servicios",
};

export default function Page() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">Portafolio</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Servicios pensados para ordenar tu tecnología y hacerla útil al negocio.
          </h1>
        </div>
        <div className="prose prose-invert max-w-none text-sm text-slate-300 prose-headings:text-slate-50 prose-a:text-emerald-300">
          <p>
            Muchos negocios saben que “deberían hacer algo con tecnología o con IA”, pero no tienen claro por dónde
            empezar ni qué es realmente prioritario. Justo ahí es donde entramos nosotros.
          </p>
          <p>
            Nuestro portafolio está organizado en cuatro líneas que se pueden trabajar por separado o combinar según el
            momento de tu empresa:
          </p>
          <ul>
            <li>
              <strong>Consultoría tecnológica y arquitectura.</strong> Diagnóstico, priorización y diseño de una
              arquitectura clara, sin sobrediseños.
            </li>
            <li>
              <strong>Desarrollo de software a la medida.</strong> Construcción de aplicaciones, módulos internos y APIs
              alineadas a tus procesos reales.
            </li>
            <li>
              <strong>Automatización de procesos e integración.</strong> Reducción de tareas manuales y puntos de error
              conectando las herramientas que ya usas.
            </li>
            <li>
              <strong>IA aplicada al negocio.</strong> Casos de uso concretos y medibles: asistentes internos,
              clasificación de información, apoyo al equipo en tareas repetitivas.
            </li>
          </ul>
          <p>
            El objetivo no es “tener más tecnología”, sino que la tecnología que uses tenga un impacto directo en cómo
            trabajas y en los resultados del negocio.
          </p>
        </div>
      </Container>
    </section>
  );
}
