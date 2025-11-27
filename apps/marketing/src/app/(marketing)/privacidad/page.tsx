import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacidad"
};

export default function Page() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
            Legal
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Política de privacidad (versión simplificada para el sitio web).
          </h1>
        </div>
        <div className="prose prose-invert max-w-none text-sm text-slate-300 prose-headings:text-slate-50 prose-a:text-emerald-300">

<p>
  Este sitio web recopila únicamente la información que nos compartes de forma explícita a
  través de los canales de contacto (por ejemplo, correo electrónico). No utilizamos los datos
  para vender bases de datos ni para hacer campañas masivas sin tu consentimiento.
</p>
<p>
  Podemos utilizar herramientas de analítica para entender de forma agregada el tráfico al
  sitio (páginas más visitadas, tiempo en el sitio, etc.) siempre con el objetivo de mejorar
  la experiencia y el contenido.
</p>
<p>
  Si tienes dudas o quieres solicitar la eliminación de información que nos hayas compartido,
  puedes escribirnos a <a href="mailto:contacto@kangarooaj.com">contacto@kangarooaj.com</a>.
</p>

        </div>
      </Container>
    </section>
  );
}
