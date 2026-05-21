import { CheckCircle2 } from "lucide-react";
import operationsImg from "@/assets/data-automation.webp";
import { SectionBackground } from "@/components/SectionBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { copy } from "@/features/i18n/constants/copy";
import type { Language } from "@/features/i18n/types/language.types";
import { industries, marketSignals } from "../constants/content";
import { ImagePanel } from "./ImagePanel";
import { Reveal } from "./Reveal";

export function IndustriesOperations({ language }: { language: Language }) {
  const t = copy[language];
  const isEnglish = language === "en";

  return (
    <section
      id="industrias"
      className="section-bg section-contained border-t border-white/10 py-24"
    >
      <SectionBackground
        image={operationsImg}
        position="center"
        opacity={0.2}
        overlay="dark"
      />

      <Reveal className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
        <ImagePanel
          image={operationsImg}
          alt="Business operations team reviewing workflow dashboards and operational data"
          title={
            isEnglish
              ? "Operational systems, not generic apps"
              : "Sistemas de operación, no aplicaciones genéricas"
          }
          text={
            isEnglish
              ? "The focus is on traceability, adoption, data quality and useful automation."
              : "El foco está en trazabilidad, adopción, calidad de datos y automatización útil."
          }
          position="63% center"
          tall
        />

        <div>
          <SectionHeader
            eyebrow={t.industriesEyebrow as string}
            title={t.industriesTitle as string}
            text={t.industriesText as string}
          />

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {industries[language].map((item) => (
              <div
                key={item}
                className="localized-copy flex min-h-20 min-w-0 items-start gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 text-sm leading-6 text-slate-300 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:text-white"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                  aria-hidden="true"
                />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {marketSignals[language].map((market) => (
              <span
                key={market}
                className="localized-copy rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm leading-5 text-slate-300 backdrop-blur-xl"
              >
                {market}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
