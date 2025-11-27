import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Términos y condiciones",
};

export default function Page() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">Legal</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Términos y condiciones de uso del sitio.
          </h1>
        </div>
        <div className="prose prose-invert max-w-none text-sm text-slate-300 prose-headings:text-slate-50 prose-a:text-emerald-300">
          <p>
            El contenido publicado en este sitio tiene fines informativos y puede cambiar con el tiempo. No constituye
            por sí mismo una oferta comercial ni un compromiso contractual hasta que se formalice un acuerdo específico
            por escrito entre las partes.
          </p>
          <p>
            Al utilizar este sitio aceptas que puedes encontrar enlaces a servicios o contenidos de terceros sobre los
            cuales Kangaroo AJ S.A.S. no tiene control y, por lo tanto, no se hace responsable.
          </p>
          <p>
            Cualquier propuesta, alcance de proyecto o estimación enviada a través de los canales de contacto se
            considerará confidencial y será tratada con la debida reserva profesional.
          </p>
        </div>
      </Container>
    </section>
  );
}
