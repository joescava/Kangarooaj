import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Nosotros",
};

export default function Page() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">Quiénes somos</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Un equipo que habla negocio y tecnología al mismo tiempo.
          </h1>
        </div>
        <div className="prose prose-invert max-w-none text-sm text-slate-300 prose-headings:text-slate-50 prose-a:text-emerald-300">
          <p>
            Kangaroo AJ S.A.S. nace de la experiencia combinada en arquitectura y desarrollo de software, gestión de
            proyectos y acompañamiento a equipos que necesitan ordenar su tecnología antes de seguir construyendo.
          </p>
          <p>
            Trabajamos con una mentalidad muy sencilla: entender bien cómo opera hoy tu empresa, definir qué es
            prioritario y diseñar una solución que puedas mantener en el tiempo, con o sin nosotros.
          </p>
          <p>
            No vendemos plantillas ni discursos genéricos sobre “transformación digital”. Cada organización tiene
            restricciones, ritmos y niveles de madurez distintos. Nuestro rol es ayudarte a tomar decisiones técnicas
            informadas, que tengan sentido para tu contexto, tu presupuesto y tu equipo.
          </p>
        </div>
      </Container>
    </section>
  );
}
