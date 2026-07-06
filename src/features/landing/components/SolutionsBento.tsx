import {
  ArrowRight,
  Bot,
  ChartNoAxesCombined,
  Cloud,
  PanelsTopLeft,
  PlugZap,
  Workflow,
} from "lucide-react";
import aiImg from "@/assets/kangaroo-ai-operations.webp";
import cloudImg from "@/assets/kangaroo-cloud-architecture.webp";
import dataImg from "@/assets/kangaroo-data-texture.webp";
import { Picture } from "@/components/Picture";
import type { Language } from "@/features/i18n/types/language.types";
import type { Region } from "@/features/region/types/region.types";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "./Reveal";

type SolutionsBentoProps = {
  language: Language;
  region: Region;
};

export function SolutionsBento({ language, region }: SolutionsBentoProps) {
  const isEnglish = language === "en";

  const solutions = [
    {
      icon: PanelsTopLeft,
      title: isEnglish ? "Enterprise portals" : "Portales empresariales",
      text: isEnglish
        ? "Internal platforms for teams, workflows, approvals and operational visibility."
        : "Plataformas internas para equipos, flujos, aprobaciones y visibilidad operativa.",
    },
    {
      icon: Workflow,
      title: isEnglish ? "Process automation" : "Automatización de procesos",
      text: isEnglish
        ? "Digitization of repetitive workflows, notifications and business rules."
        : "Digitalización de flujos repetitivos, notificaciones y reglas de negocio.",
    },
    {
      icon: Bot,
      title: isEnglish ? "AI assistants" : "Asistentes con IA",
      text: isEnglish
        ? "Assistants for classification, summaries, search and guided decisions."
        : "Asistentes para clasificación, resúmenes, búsqueda y decisiones guiadas.",
    },
    {
      icon: PlugZap,
      title: isEnglish ? "Integrations and APIs" : "Integraciones y APIs",
      text: isEnglish
        ? "Connections between existing systems, databases and business tools."
        : "Conexiones entre sistemas existentes, bases de datos y herramientas de negocio.",
    },
    {
      icon: ChartNoAxesCombined,
      title: isEnglish ? "Dashboards and analytics" : "Dashboards y analítica",
      text: isEnglish
        ? "Reliable reporting layers for traceability, operations and decisions."
        : "Capas de reportería confiables para trazabilidad, operación y decisiones.",
    },
    {
      icon: Cloud,
      title: isEnglish ? "Cloud modernization" : "Modernización cloud",
      text: isEnglish
        ? "Architecture planning for scalable, maintainable and secure platforms."
        : "Planeación de arquitectura para plataformas escalables, mantenibles y seguras.",
    },
  ];

  return (
    <section className="section-bg section-contained border-t border-slate-200/80 bg-white py-24">
      <Reveal className="relative z-10 fluid-container">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="localized-copy text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {isEnglish ? "Use cases" : "Soluciones"}
            </p>
            <h2 className="localized-copy mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-slate-950">
              {isEnglish
                ? "Digital products for processes that need structure."
                : "Productos digitales para procesos que necesitan estructura."}
            </h2>
            <p className="localized-copy mt-5 text-lg leading-8 text-slate-600">
              {isEnglish
                ? "Examples of solution types Kangaroo AJ can design and build. These are not client case studies or promised metrics."
                : "Ejemplos de tipos de solución que Kangaroo AJ puede diseñar y construir. No son casos de cliente ni métricas prometidas."}
            </p>
          </div>

          <a
            href="#contacto"
            onClick={() =>
              trackEvent("cta_click", {
                location: "solutions_bento_primary",
                language,
                region,
              })
            }
            className="tap-target localized-copy inline-flex w-fit items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300"
          >
            {isEnglish ? "Discuss a solution" : "Hablemos de una solución"}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_24px_80px_-55px_rgba(15,23,42,.45)] lg:col-span-2 lg:row-span-2">
            <Picture
              src={cloudImg}
              alt="Cloud architecture intelligence layer over an Australian landscape"
              className="h-full min-h-[360px] w-full rounded-[1rem] object-cover"
              width={1535}
              height={1024}
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm lg:col-span-2">
            <Picture
              src={dataImg}
              alt="Outback mineral texture with subtle data visualization overlays"
              className="aspect-[16/7] w-full rounded-[1rem] object-cover"
              width={1535}
              height={1024}
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm lg:col-span-2">
            <Picture
              src={aiImg}
              alt="AI workflow dashboards for document processing and automation"
              className="aspect-[16/7] w-full rounded-[1rem] object-cover"
              width={1535}
              height={1024}
            />
          </div>

          {solutions.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300/60"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-200 bg-cyan-50 text-gold">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="localized-copy mt-4 font-semibold text-slate-950">
                {title}
              </h3>
              <p className="localized-copy mt-2 text-sm leading-6 text-slate-600">
                {text}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
