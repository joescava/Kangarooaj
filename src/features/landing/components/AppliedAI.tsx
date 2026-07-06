import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Database,
  Lock,
} from "lucide-react";
import aiOperationsImg from "@/assets/kangaroo-ai-operations.webp";
import { Picture } from "@/components/Picture";
import { SectionHeader } from "@/components/SectionHeader";
import { copy } from "@/features/i18n/constants/copy";
import type { Language } from "@/features/i18n/types/language.types";
import type { Region } from "@/features/region/types/region.types";
import { trackEvent } from "@/lib/analytics";
import { aiItems } from "../constants/content";
import { Reveal } from "./Reveal";

type AppliedAIProps = {
  language: Language;
  region: Region;
};

export function AppliedAI({ language, region }: AppliedAIProps) {
  const t = copy[language];
  const isEnglish = language === "en";

  const principles = [
    {
      icon: Database,
      title: isEnglish ? "Data-aware" : "Consciente de datos",
      text: isEnglish
        ? "AI use cases are evaluated around source data, permissions and traceability."
        : "Los casos de IA se evalúan alrededor de datos fuente, permisos y trazabilidad.",
    },
    {
      icon: BrainCircuit,
      title: isEnglish ? "Workflow-first" : "Primero el flujo",
      text: isEnglish
        ? "The assistant, copilot or automation must fit the process it supports."
        : "El asistente, copiloto o automatización debe encajar en el proceso que apoya.",
    },
    {
      icon: Lock,
      title: isEnglish ? "Controlled adoption" : "Adopción controlada",
      text: isEnglish
        ? "Review, guardrails and scope matter before AI reaches critical operations."
        : "La revisión, los controles y el alcance importan antes de llevar IA a operaciones críticas.",
    },
  ];

  return (
    <section
      id="ia-aplicada"
      className="section-bg section-contained border-t border-slate-200/80 bg-white py-24"
    >
      <Reveal className="relative z-10 fluid-container">
        <div className="grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeader
              eyebrow={t.aiEyebrow as string}
              title={t.aiTitle as string}
              text={t.aiText as string}
            />

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-semibold text-amber-800">{t.aiNote}</p>
            </div>

            <a
              href="#contacto"
              onClick={() =>
                trackEvent("cta_click", {
                  location: "applied_ai_primary",
                  language,
                  region,
                })
              }
              className="mt-8 tap-target localized-copy inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
            >
              {isEnglish ? "Explore AI use cases" : "Explorar IA aplicada"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-5">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-[0_28px_90px_-55px_rgba(15,23,42,.44)]">
              <Picture
                src={aiOperationsImg}
                alt="AI document processing and workflow automation dashboard in a professional technology operations environment"
                className="aspect-[16/10] w-full rounded-[1.1rem] object-cover"
                width={1535}
                height={1024}
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {aiItems[language].map((item) => (
                <div
                  key={item}
                  className="localized-copy flex min-h-20 min-w-0 items-start gap-3 rounded-2xl border border-slate-200 bg-white/88 p-4 text-sm leading-6 text-slate-700 shadow-sm backdrop-blur-xl"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {principles.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="localized-copy mt-5 font-semibold text-slate-950">
                    {title}
                  </h3>
                  <p className="localized-copy mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
