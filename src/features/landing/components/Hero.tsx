import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import heroImg from "@/assets/kangaroo-hero-principal.webp";
import { Picture } from "@/components/Picture";
import { copy } from "@/features/i18n/constants/copy";
import type { Language } from "@/features/i18n/types/language.types";
import type { Region } from "@/features/region/types/region.types";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "./Reveal";

type HeroProps = { language: Language; region: Region };

export function Hero({ language, region }: HeroProps) {
  const t = copy[language];
  const isEnglish = language === "en";

  const executionSignals = [
    {
      icon: ShieldCheck,
      label: isEnglish ? "Architecture" : "Arquitectura",
      text: isEnglish
        ? "Technical decisions before implementation noise."
        : "Decisiones técnicas antes del ruido de implementación.",
    },
    {
      icon: Workflow,
      label: isEnglish ? "Automation" : "Automatización",
      text: isEnglish
        ? "Processes connected to APIs, data and real rules."
        : "Procesos conectados a APIs, datos y reglas reales.",
    },
    {
      icon: BrainCircuit,
      label: isEnglish ? "Applied AI" : "IA aplicada",
      text: isEnglish
        ? "Assistants and copilots tied to measurable workflows."
        : "Asistentes y copilotos ligados a flujos medibles.",
    },
  ];

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-slate-950 pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <div className="absolute inset-0 z-0">
        <Picture
          src={heroImg}
          alt="Realistic kangaroo in cinematic Australian outback light with subtle technology data overlays"
          className="hero-full-image h-full w-full scale-[1.02] object-cover motion-safe:animate-slow-zoom"
          loading="eager"
          fetchPriority="high"
          width={1536}
          height={1024}
          style={{ objectPosition: "62% center" }}
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(255,255,255,.96)_0%,rgba(255,255,255,.9)_30%,rgba(248,250,252,.56)_58%,rgba(248,250,252,.18)_100%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,194,168,.12),transparent_28%),radial-gradient(circle_at_88%_8%,rgba(217,119,6,.14),transparent_30%)]" />
      <div className="noise-texture absolute inset-0 z-0 opacity-35" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-64 bg-gradient-to-b from-transparent via-[#f8fafc]/78 to-[#f8fafc]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-12rem)] w-full max-w-7xl flex-col justify-center gap-10 px-5 md:px-8">
        <Reveal className="min-w-0 max-w-3xl">
          <div className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-teal-200 bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm backdrop-blur-xl sm:rounded-full sm:tracking-[0.22em]">
            <Network className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {t.heroBadge}
          </div>

          <h1 className="localized-copy mt-7 w-full max-w-[20rem] font-display text-[2rem] font-black leading-[1.04] tracking-[-0.035em] text-slate-950 sm:max-w-5xl sm:text-[clamp(3rem,6.2vw,5.7rem)] sm:leading-[1.02] sm:tracking-[-0.045em]">
            {t.heroTitle}
          </h1>

          <p className="localized-copy mt-7 w-full max-w-[calc(100vw-2.5rem)] text-[clamp(1.0625rem,2vw,1.32rem)] leading-8 text-slate-600 sm:max-w-2xl">
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
              className="tap-target localized-copy inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_22px_50px_-30px_rgba(0,224,184,.72)] transition hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0"
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
              className="tap-target localized-copy inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:text-slate-950 active:translate-y-0"
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
                className="localized-copy tap-target inline-flex min-w-0 items-center gap-2 rounded-full border border-slate-200 bg-white/78 px-4 py-2 text-sm leading-5 text-slate-700 shadow-sm backdrop-blur-xl"
              >
                <CheckCircle2
                  className="h-4 w-4 text-gold"
                  aria-hidden="true"
                />
                {benefit}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="min-w-0">
          <div className="grid max-w-5xl gap-3 md:grid-cols-3">
            {executionSignals.map(({ icon: Icon, label, text }) => (
              <div
                key={label}
                className="min-w-0 rounded-2xl border border-white/40 bg-white/82 p-4 shadow-[0_18px_50px_-38px_rgba(15,23,42,.45)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                  <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                  {label}
                </div>
                <p className="localized-copy mt-1 text-xs leading-5 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
