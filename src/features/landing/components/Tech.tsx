import { Cpu, Database, Layers3 } from "lucide-react";
import aiOperationsImg from "@/assets/ai-operations.webp";
import { SectionBackground } from "@/components/SectionBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { copy } from "@/features/i18n/constants/copy";
import type { Language } from "@/features/i18n/types/language.types";
import { technicalDepth } from "../constants/content";
import { Reveal } from "./Reveal";

export function Tech({ language }: { language: Language }) {
  const t = copy[language];
  const isEnglish = language === "en";

  return (
    <section
      id="tecnologia"
      className="section-bg section-contained border-t border-white/10 py-24"
    >
      <SectionBackground
        image={aiOperationsImg}
        position="center"
        opacity={0.2}
        overlay="strong"
      />

      <Reveal className="relative z-10 fluid-container">
        <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeader
              eyebrow={t.techEyebrow as string}
              title={t.techTitle as string}
              text={t.techText as string}
            />

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 shadow-2xl backdrop-blur-xl">
              <img
                src={aiOperationsImg}
                alt="Enterprise AI operations environment with business dashboards and workflow intelligence"
                loading="lazy"
                decoding="async"
                width={2560}
                height={1440}
                className="aspect-[16/9] w-full object-cover opacity-80"
              />
              <div className="border-t border-white/10 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                  {isEnglish
                    ? "Applied AI execution"
                    : "Ejecución de IA aplicada"}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {isEnglish
                    ? "AI is treated as part of the system architecture: data, permissions, workflow, review and adoption."
                    : "La IA se trata como parte de la arquitectura del sistema: datos, permisos, flujo, revisión y adopción."}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {technicalDepth[language].map((item, index) => {
              const Icon =
                index % 3 === 0 ? Layers3 : index % 3 === 1 ? Cpu : Database;
              return (
                <article
                  key={item.title}
                  className="grid min-w-0 gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/35 md:grid-cols-[auto_1fr]"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="localized-copy text-lg font-semibold tracking-[-0.02em] text-white">
                      {item.title}
                    </h3>
                    <p className="localized-copy mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
