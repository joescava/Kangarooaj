import Link from "next/link";
import { homepageContent } from "@/content/homepage";
import { Container } from "@/components/ui/Container";

export function HeroHome() {
  const { hero, trust } = homepageContent;

  const primaryButtonClasses =
    "inline-flex items-center justify-center rounded-full bg-brand-500 hover:bg-brand-600 text-white text-[13px] sm:text-sm px-5 py-2.5 font-medium shadow-md shadow-brand-500/30 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-brand-500";
  const secondaryButtonClasses =
    "inline-flex items-center justify-center rounded-full bg-transparent hover:bg-slate-800/60 text-slate-100 text-[13px] sm:text-sm px-4 py-2 font-medium border border-slate-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-brand-500";

  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-20 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 gradient-bg opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 via-slate-950/40 to-transparent" />
      <Container className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-200 ring-1 ring-slate-700/80">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>{trust.label}</span>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-300">
              {hero.eyebrow}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              {hero.title}
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {hero.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href={hero.primaryCta.href} className={primaryButtonClasses}>
              {hero.primaryCta.label}
            </Link>
            <Link href={hero.secondaryCta.href} className={secondaryButtonClasses}>
              {hero.secondaryCta.label}
            </Link>
          </div>

          <ul className="space-y-2 text-sm text-slate-300">
            {hero.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-brand-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-950/60 p-6 shadow-2xl shadow-black/50 backdrop-blur">
            <div className="mb-6 flex items-center justify-between text-xs text-slate-400">
              <span>Mapa de capacidades</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-300 ring-1 ring-emerald-500/40">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Listo para escalar
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-[11px] sm:text-xs">
              <div className="rounded-2xl bg-slate-900/80 p-3 ring-1 ring-slate-800">
                <p className="mb-1 text-[11px] font-semibold text-slate-100">Tecnología y software</p>
                <p className="text-[11px] text-slate-400">
                  Arquitectura, desarrollo y automatización con foco en negocio.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/80 p-3 ring-1 ring-slate-800">
                <p className="mb-1 text-[11px] font-semibold text-slate-100">Moda y marca</p>
                <p className="text-[11px] text-slate-400">
                  Estrategia de colección, identidad y experiencia digital.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/80 p-3 ring-1 ring-slate-800">
                <p className="mb-1 text-[11px] font-semibold text-slate-100">Campo y producción</p>
                <p className="text-[11px] text-slate-400">
                  Proyectos agrícolas conectados con datos y trazabilidad.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/80 p-3 ring-1 ring-slate-800">
                <p className="mb-1 text-[11px] font-semibold text-slate-100">Estrategia y ejecución</p>
                <p className="text-[11px] text-slate-400">
                  Acompañamiento end-to-end: de la idea a los resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}