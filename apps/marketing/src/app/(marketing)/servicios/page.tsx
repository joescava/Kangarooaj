import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Servicios"
};

export default function Page() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
            Portafolio
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Servicios pensados para conectar estrategia, diseño y ejecución.
          </h1>
        </div>
        <div className="prose prose-invert max-w-none text-sm text-slate-300 prose-headings:text-slate-50 prose-a:text-emerald-300">

<p>
  Nuestro trabajo está organizado en tres líneas que se conectan entre sí. Podemos acompañarte
  en una sola dimensión o diseñar una ruta que combine varias según la madurez de tu empresa.
</p>
<ul>
  <li><strong>Consultoría y desarrollo de software.</strong> Desde la arquitectura de soluciones
  hasta el desarrollo de productos digitales y automatización de procesos.</li>
  <li><strong>Moda, marca y experiencia.</strong> Definición de propuesta de valor, colección,
  canales y activos digitales para marcas con ambición de crecer.</li>
  <li><strong>Proyectos agrícolas.</strong> Estructuración y acompañamiento de iniciativas
  productivas con visión de datos y sostenibilidad.</li>
</ul>
<p>
  Cada proyecto se estructura con objetivos claros, hitos medibles y una comunicación directa.
  La idea es construir algo que puedas seguir operando y escalando en el tiempo.
</p>

        </div>
      </Container>
    </section>
  );
}
