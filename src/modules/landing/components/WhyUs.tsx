import { ArrowRight, ShieldCheck } from "lucide-react";
import { trackEvent } from "../../../shared/lib/analytics";
import { copy } from "../../i18n/constants/copy";
import type { Language } from "../../i18n/types/Language";
import type { Region } from "../../region/types/Region";
import { whyItems } from "../constants/content";
import { Reveal } from "./Reveal";

export function WhyUs({ language, region }: { language: Language; region: Region }) {
  const t = copy[language];
  const isEnglish = language === "en";

  return (
    <section id="porque" className="section-bg border-t border-white/10 py-24">
      <div className="absolute inset-0 z-0 section-vignette" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_18%,rgba(32,217,232,.08),transparent_34%),linear-gradient(180deg,#050506_0%,#0B0D10_46%,#050506_100%)]" />

      <Reveal className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{t.whyEyebrow}</p>

          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-white">
            {t.whyTitle}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">{t.whyText}</p>

          <div className="mt-8 rounded-[1.75rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100">
              {isEnglish ? "Positioning" : "Posicionamiento"}
            </p>

            <p className="mt-3 text-base leading-7 text-slate-300">
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
              className="mt-5 tap-target localized-copy inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/30 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/10"
            >
              {t.ctaMain} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          {whyItems[language].map((item, index) => (
            <article
              key={item.title}
              className="grid min-w-0 gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/35 md:grid-cols-[auto_1fr]"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-slate-950/60 text-gold">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="localized-copy mt-2 text-xl font-semibold tracking-[-0.02em] text-white">
                  {item.title}
                </h3>

                <p className="localized-copy mt-3 leading-7 text-slate-400">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
