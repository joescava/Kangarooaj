import { ArrowRight } from "lucide-react";
import ctaImg from "@/assets/kangaroo-twilight-cta.webp";
import { trackEvent } from "@/lib/analytics";
import { copy } from "@/features/i18n/constants/copy";
import type { Language } from "@/features/i18n/types/language.types";
import type { Region } from "@/features/region/types/region.types";
import { Reveal } from "./Reveal";

export function CTASection({
  language,
  region,
}: {
  language: Language;
  region: Region;
}) {
  const t = copy[language];

  return (
    <section className="section-bg border-t border-slate-200/80 py-24">
      <Reveal className="relative z-10 fluid-container max-w-5xl text-center">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 p-8 shadow-[0_34px_100px_-58px_rgba(15,23,42,.58)] md:p-12">
          <img
            src={ctaImg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            width={1536}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,22,.84),rgba(5,8,22,.52)),linear-gradient(180deg,rgba(5,8,22,.35),rgba(5,8,22,.84))]" />
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Kangaroo AJ S.A.S.
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.7vw,4.5rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-white">
              {t.ctaTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {t.ctaText}
            </p>
            <div className="responsive-actions mobile-full-actions mt-9 justify-center">
              <a
                href="#contacto"
                onClick={() =>
                  trackEvent("cta_click", {
                    location: "commercial_cta_primary",
                    language,
                    region,
                  })
                }
                className="tap-target localized-copy inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 accent-glow"
              >
                {t.ctaMain}{" "}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#modelo"
                onClick={() =>
                  trackEvent("cta_click", {
                    location: "commercial_cta_secondary",
                    language,
                    region,
                  })
                }
                className="tap-target localized-copy inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-white/[0.06] active:translate-y-0"
              >
                {t.ctaSecondaryText}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
