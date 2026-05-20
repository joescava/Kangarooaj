import { ArrowRight, BrainCircuit, CheckCircle2, Network, ShieldCheck, Workflow } from "lucide-react";
import heroImg from "../../../assets/hero-enterprise-tech.webp";
import { trackEvent } from "../../../shared/lib/analytics";
import { Picture } from "../../../shared/ui/Picture";
import { copy } from "../../i18n/constants/copy";
import type { Language } from "../../i18n/types/Language";
import type { Region } from "../../region/types/Region";
import { Reveal } from "./Reveal";

type HeroProps = { language: Language; region: Region };

export function Hero({ language, region }: HeroProps) {
  const t = copy[language];
  const isEnglish = language === "en";

  const executionSignals = [
    {
      icon: ShieldCheck,
      label: isEnglish ? "Architecture with experienced judgment" : "Arquitectura con criterio experto",
      text: isEnglish
        ? "Clear technical decisions across architecture, delivery and review."
        : "Decisiones técnicas claras en arquitectura, entrega y revisión.",
    },
    {
      icon: Workflow,
      label: isEnglish ? "Workflow automation" : "Automatización de flujos",
      text: isEnglish
        ? "Process improvements connected to APIs, data and real business rules."
        : "Mejoras de procesos conectadas a APIs, datos y reglas reales del negocio.",
    },
    {
      icon: BrainCircuit,
      label: isEnglish ? "Practical AI, not AI theater" : "IA práctica, no discurso vacío",
      text: isEnglish
        ? "Assistants, agents and copilots grounded in measurable business use cases."
        : "Asistentes, agentes y copilotos aterrizados en casos de uso medibles.",
    },
  ];

  return (
    <section id="inicio" className="relative min-h-[92svh] overflow-hidden bg-[#050506] pt-36 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 z-0">
        <Picture
          src={heroImg}
          alt="Technology team reviewing enterprise software dashboards and business automation workflows"
          className="h-full w-full scale-[1.03] object-cover opacity-50 motion-safe:animate-slow-zoom"
          loading="eager"
          fetchPriority="high"
          width={2560}
          height={1440}
          style={{ objectPosition: "68% center" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050506_0%,rgba(5,5,6,.96)_35%,rgba(5,5,6,.72)_68%,rgba(5,5,6,.9)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,6,.9)_0%,rgba(5,5,6,.42)_46%,#050506_100%)]" />
      </div>

      <div className="smoke-layer z-[1] opacity-50" />
      <div className="cinematic-overlay absolute inset-0 z-[1]" />
      <div className="noise-texture absolute inset-0 z-[1] opacity-45" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/[0.045] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300 backdrop-blur-xl">
            <Network className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {t.heroBadge}
          </div>

          <h1 className="localized-copy mt-7 max-w-5xl font-display text-[clamp(2.35rem,11vw,6rem)] font-black leading-[1.03] tracking-[-0.055em] text-white sm:text-[clamp(2.75rem,6.5vw,6rem)]">
            <span className="gradient-tech-text">{t.heroTitle}</span>
          </h1>

          <p className="localized-copy mt-7 max-w-2xl text-[clamp(1.0625rem,2vw,1.35rem)] leading-8 text-slate-300">
            {t.heroSubtitle}
          </p>

          <div className="mt-10 responsive-actions mobile-full-actions">
            <a
              href="#contacto"
              onClick={() =>
                trackEvent("cta_click", {
                  location: "hero_primary",
                  language,
                  region,
                })
              }
              className="tap-target localized-copy inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 accent-glow"
            >
              {t.ctaMain} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#capacidades"
              onClick={() =>
                trackEvent("cta_click", {
                  location: "hero_secondary",
                  language,
                  region,
                })
              }
              className="tap-target localized-copy inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.045] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-white/[0.07] active:translate-y-0"
            >
              {t.ctaSecondary}
            </a>
          </div>

          <div
            className="mt-10 flex max-w-3xl flex-wrap gap-3"
            aria-label={isEnglish ? "Trust signals" : "Señales de confianza"}
          >
            {(t.benefits as string[]).map((benefit) => (
              <span
                key={benefit}
                className="localized-copy tap-target inline-flex min-w-0 items-center gap-2 rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-sm leading-5 text-slate-300 backdrop-blur-xl"
              >
                <CheckCircle2 className="h-4 w-4 text-gold" aria-hidden="true" />
                {benefit}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative min-h-0 md:min-h-[560px]">
          <div className="absolute inset-0 hidden rounded-[2rem] border border-white/10 bg-slate-950/25 backdrop-blur-sm md:block" />

          <div className="relative flex min-h-0 flex-col gap-4 rounded-[2rem] md:min-h-[560px] md:px-8 md:py-10">
            <div className="relative rounded-[1.75rem] border border-white/10 bg-black/55 p-5 shadow-2xl backdrop-blur-2xl md:p-7 md:motion-safe:animate-float-soft">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-gold">
                    {isEnglish ? "Execution model" : "Modelo de ejecución"}
                  </p>
                  <h2 className="localized-copy mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                    {isEnglish ? "Direct technical partner" : "Aliado técnico directo"}
                  </h2>
                </div>

                <span className="localized-copy rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  {isEnglish ? "Lean team" : "Equipo liviano"}
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                {executionSignals.map(({ icon: Icon, label, text }) => (
                  <div
                    key={label}
                    className="grid min-w-0 gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:grid-cols-[auto_1fr]"
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-gold">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-semibold text-white">{label}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[1.5rem] border border-white/10 bg-black/50 p-5 backdrop-blur-xl md:mt-auto">
              <p className="localized-copy text-sm leading-6 text-slate-300">
                {isEnglish
                  ? "Built for B2B decision-makers who need working systems, clear priorities and fewer operational bottlenecks."
                  : "Diseñado para decisores B2B que necesitan sistemas funcionales, prioridades claras y menos cuellos de botella operativos."}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
