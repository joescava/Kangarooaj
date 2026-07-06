import { ArrowRight, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { copy } from "@/features/i18n/constants/copy";
import type { Language } from "@/features/i18n/types/language.types";
import type { Region } from "@/features/region/types/region.types";
import { whyItems } from "../constants/content";
import { Reveal } from "./Reveal";

export function WhyUs({
  language,
  region,
}: {
  language: Language;
  region: Region;
}) {
  const t = copy[language];
  const isEnglish = language === "en";

  return (
    <section
      id="porque"
      className="section-bg border-t border-slate-200/80 py-24"
    >
      <div className="absolute inset-0 z-0 section-vignette" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,224,184,.08),transparent_34%),radial-gradient(circle_at_20%_86%,rgba(217,119,6,.06),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fafc_46%,#ffffff_100%)]" />

      <Reveal className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {t.whyEyebrow}
          </p>

          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-slate-950">
            {t.whyTitle}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">{t.whyText}</p>

          <div className="mt-8 rounded-2xl border border-teal-200 bg-white/86 p-6 shadow-[0_24px_70px_-48px_rgba(15,23,42,.35)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
              {isEnglish ? "Positioning" : "Posicionamiento"}
            </p>

            <p className="mt-3 text-base leading-7 text-slate-700">
              {isEnglish
                ? "Direct access to experienced engineering, practical automation and AI-assisted workflows — with less overhead than a traditional consulting firm."
                : "Acceso directo a ingeniería experimentada, automatización práctica y flujos asistidos por IA — con menos carga que una consultora tradicional."}
            </p>

            <a
              href="#contacto"
              onClick={() =>
                trackEvent("cta_click", {
                  location: "why_positioning",
                  language,
                  region,
                })
              }
              className="mt-5 tap-target localized-copy inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-50 px-4 py-2 text-sm font-semibold text-teal-800 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              {t.ctaMain} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          {whyItems[language].map((item, index) => (
            <article
              key={item.title}
              className="grid min-w-0 gap-5 rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-sm backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/50 md:grid-cols-[auto_1fr]"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-200 bg-cyan-50 text-gold">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="localized-copy mt-2 text-xl font-semibold tracking-[-0.02em] text-slate-950">
                  {item.title}
                </h3>

                <p className="localized-copy mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
