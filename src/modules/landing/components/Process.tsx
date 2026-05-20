import deliveryRoadmapImg from "../../../assets/delivery-roadmap.webp";
import { SectionBackground } from "../../../shared/ui/SectionBackground";
import { SectionHeader } from "../../../shared/ui/SectionHeader";
import { copy } from "../../i18n/constants/copy";
import type { Language } from "../../i18n/types/Language";
import { deliverySteps } from "../constants/content";
import { ImagePanel } from "./ImagePanel";
import { Reveal } from "./Reveal";

export function Process({ language }: { language: Language }) {
  const t = copy[language];
  const isEnglish = language === "en";

  return (
    <section id="modelo" className="section-bg section-contained border-t border-white/10 py-24">
      <SectionBackground image={deliveryRoadmapImg} position="center" opacity={0.23} overlay="strong" />

      <Reveal className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow={t.deliveryEyebrow as string}
            title={t.deliveryTitle as string}
            text={t.deliveryText as string}
          />

          <div className="mt-12 grid gap-4">
            {deliverySteps[language].map((step) => (
              <article
                key={step.step}
                className="grid min-w-0 gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 md:grid-cols-[auto_1fr]"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-semibold text-gold">
                  {step.step}
                </div>

                <div>
                  <h3 className="localized-copy text-lg font-semibold text-white">{step.title}</h3>
                  <p className="localized-copy mt-2 text-sm leading-6 text-slate-400">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <ImagePanel
          image={deliveryRoadmapImg}
          alt="Delivery roadmap connecting discovery, solution design, build, integration and continuous improvement"
          title={isEnglish ? "Delivery with technical control" : "Entrega con control técnico"}
          text={
            isEnglish
              ? "Every step is designed to reduce delivery risk and move from business need to adoption."
              : "Cada paso está diseñado para reducir riesgo de entrega y pasar de la necesidad del negocio a la adopción."
          }
          tall
        />
      </Reveal>
    </section>
  );
}
