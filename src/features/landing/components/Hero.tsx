import { useEffect, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  Globe2,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import automationImg from "@/assets/data-automation.webp";
import heroImg from "@/assets/kangaroo-hero-principal.webp";
import aiImg from "@/assets/kangaroo-ai-operations.webp";
import softwareImg from "@/assets/kangaroo-enterprise-operations.webp";
import logoMark from "@/assets/kangaroo-logo.png";
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
  const benefits = t.benefits as string[];
  const benefitIcons = [Workflow, Network, Database, Code2, Globe2];
  const [activeSlide, setActiveSlide] = useState(0);
  const [visualPhase, setVisualPhase] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      badge: t.heroBadge,
      title: t.heroTitle,
      text: t.heroSubtitle,
      image: heroImg,
      position: "64% center",
    },
    {
      badge: t.heroSoftwareBadge,
      title: t.heroSoftwareTitle,
      text: t.heroSoftwareText,
      image: softwareImg,
      position: "60% center",
    },
    {
      badge: t.heroAutomationBadge,
      title: t.heroAutomationTitle,
      text: t.heroAutomationText,
      image: automationImg,
      position: "62% center",
    },
    {
      badge: t.heroAIBadge,
      title: t.heroAITitle,
      text: t.heroAIText,
      image: aiImg,
      position: "62% center",
    },
  ];

  const visualStories = [
    [],
    [
      {
        icon: Code2,
        label: isEnglish ? "Internal platform" : "Plataforma interna",
        title: isEnglish ? "Operations workspace" : "Espacio de operaciones",
        items: isEnglish
          ? ["Requests organized", "Approvals visible", "Reporting connected"]
          : [
              "Solicitudes organizadas",
              "Aprobaciones visibles",
              "Reportes conectados",
            ],
      },
      {
        icon: Network,
        label: isEnglish ? "Integration layer" : "Capa de integración",
        title: isEnglish
          ? "Systems working together"
          : "Sistemas trabajando juntos",
        items: isEnglish
          ? ["APIs", "Business rules", "Operational data"]
          : ["APIs", "Reglas de negocio", "Datos operativos"],
      },
      {
        icon: ShieldCheck,
        label: isEnglish ? "Delivery result" : "Resultado de entrega",
        title: isEnglish ? "One reliable system" : "Un sistema confiable",
        items: isEnglish
          ? [
              "Centralized workflow",
              "Clear ownership",
              "Maintainable foundation",
            ]
          : ["Flujo centralizado", "Responsables claros", "Base mantenible"],
      },
    ],
    [
      {
        icon: Workflow,
        label: isEnglish ? "Connected workflow" : "Flujo conectado",
        title: isEnglish
          ? "From request to completion"
          : "De la solicitud al resultado",
        items: isEnglish
          ? ["Capture", "Validate", "Approve", "Notify"]
          : ["Capturar", "Validar", "Aprobar", "Notificar"],
      },
      {
        icon: Network,
        label: isEnglish ? "Live automation" : "Automatización activa",
        title: isEnglish
          ? "Every step stays connected"
          : "Cada paso permanece conectado",
        items: isEnglish
          ? ["Approval ready", "Data synchronized", "Report generated"]
          : ["Aprobación lista", "Datos sincronizados", "Reporte generado"],
      },
      {
        icon: CheckCircle2,
        label: isEnglish ? "Operational result" : "Resultado operativo",
        title: isEnglish
          ? "Less manual coordination"
          : "Menos coordinación manual",
        items: isEnglish
          ? ["Fewer repeated steps", "Visible progress", "Clearer control"]
          : ["Menos pasos repetidos", "Progreso visible", "Mayor control"],
      },
    ],
    [
      {
        icon: BrainCircuit,
        label: isEnglish ? "AI-assisted workflow" : "Flujo asistido por IA",
        title: isEnglish ? "Operational assistant" : "Asistente operativo",
        items: isEnglish
          ? ["Classify information", "Summarize context", "Support decisions"]
          : ["Clasificar información", "Resumir contexto", "Apoyar decisiones"],
      },
      {
        icon: Database,
        label: isEnglish ? "Connected data" : "Datos conectados",
        title: isEnglish
          ? "Context the team can use"
          : "Contexto que el equipo puede usar",
        items: isEnglish
          ? ["Business data", "Workflow history", "Relevant documents"]
          : [
              "Datos del negocio",
              "Historial del flujo",
              "Documentos relevantes",
            ],
      },
      {
        icon: ShieldCheck,
        label: isEnglish ? "Controlled adoption" : "Adopción controlada",
        title: isEnglish
          ? "AI with operational guardrails"
          : "IA con controles operativos",
        items: isEnglish
          ? ["Permissions", "Human review", "Traceable output"]
          : ["Permisos", "Revisión humana", "Resultado trazable"],
      },
    ],
  ];

  useEffect(() => {
    if (
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 8400);

    return () => window.clearInterval(intervalId);
  }, [isPaused, slides.length]);

  useEffect(() => {
    setVisualPhase(0);

    if (
      activeSlide === 0 ||
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const phaseIntervalId = window.setInterval(() => {
      setVisualPhase((current) => (current + 1) % 3);
    }, 2400);

    return () => window.clearInterval(phaseIntervalId);
  }, [activeSlide, isPaused]);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const currentSlide = slides[activeSlide];

  return (
    <section
      id="inicio"
      className={`hero-screen hero-theme-${activeSlide} relative isolate overflow-hidden`}
    >
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <Picture
            key={slide.badge}
            src={slide.image}
            alt=""
            aria-hidden="true"
            className={`hero-slide-image absolute inset-0 h-full w-full object-cover ${index === activeSlide ? "is-active" : ""}`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            width={1536}
            height={1024}
            style={{ objectPosition: slide.position }}
          />
        ))}
      </div>
      <div
        className={`hero-image-overlay hero-image-overlay-${activeSlide} absolute inset-0 z-0`}
      />
      <div className="noise-texture absolute inset-0 z-0 opacity-10" />

      <div className="hero-screen-content relative z-10 mx-auto">
        <Reveal className="relative min-w-0 w-full">
          <div className="hero-message-layout w-full">
            <div
              key={`${language}-${activeSlide}`}
              className="hero-copy hero-copy-slide min-w-0"
            >
              <div className="hero-eyebrow inline-flex max-w-full items-center gap-2 rounded-full px-3.5 py-2 text-[.68rem] font-semibold uppercase tracking-[0.14em] shadow-sm backdrop-blur-xl sm:px-4 sm:text-xs sm:tracking-[0.2em]">
                <Network className="h-3.5 w-3.5" aria-hidden="true" />
                {currentSlide.badge}
              </div>

              <h1 className="hero-main-title mt-5 w-full max-w-[23rem] font-display text-[clamp(2rem,8.7vw,2.8rem)] font-black leading-[1.02] [hyphens:none] [overflow-wrap:normal] sm:mt-6 sm:max-w-3xl sm:text-[clamp(2.7rem,5vw,4.65rem)] sm:leading-[.98]">
                {currentSlide.title}
              </h1>

              <p className="hero-main-copy localized-copy mt-4 w-full max-w-[38rem] text-[clamp(.9rem,1.25vw,1.08rem)] leading-6 sm:mt-6 sm:leading-7">
                {currentSlide.text}
              </p>
            </div>

            <div
              className={`hero-visual-stage hero-visual-stage-${activeSlide}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {activeSlide === 0 ? (
                <div
                  className="hero-benefit-orbit"
                  aria-label={isEnglish ? "Business benefits" : "Beneficios"}
                >
                  <div className="hero-orbit-core" aria-hidden="true">
                    <Picture
                      src={logoMark}
                      alt=""
                      className="h-full w-full object-contain"
                      width={112}
                      height={112}
                    />
                  </div>
                  <div className="hero-orbit-ring">
                    {benefits.map((benefit, index) => {
                      const BenefitIcon = benefitIcons[index];

                      return (
                        <div
                          key={index}
                          className={`hero-orbit-item hero-orbit-item-${index + 1}`}
                        >
                          <div className="hero-orbit-counter">
                            <span className="hero-orbit-pill">
                              <span className="hero-orbit-node-icon">
                                <BenefitIcon
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="hero-orbit-node-copy">
                                <small>
                                  {String(index + 1).padStart(2, "0")}
                                </small>
                                <strong>{benefit}</strong>
                              </span>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : activeSlide === 1 ? (
                <div
                  key={`${language}-${activeSlide}`}
                  className="hero-mini-presentation"
                >
                  {visualStories[activeSlide].map((story, phase) => {
                    const Icon = story.icon;
                    const isActivePhase = phase === visualPhase;

                    return (
                      <div
                        key={story.label}
                        className={`hero-mini-scene hero-mini-scene-${phase} ${isActivePhase ? "is-active" : ""}`}
                        aria-label={story.title}
                        aria-hidden={!isActivePhase}
                      >
                        <div className="hero-mini-chrome" aria-hidden="true">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="hero-mini-heading">
                          <span className="hero-mini-icon">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <div>
                            <p>{story.label}</p>
                            <h2>{story.title}</h2>
                          </div>
                        </div>
                        <div className="hero-mini-list">
                          {story.items.map((item, index) => (
                            <div key={item} className="hero-mini-item">
                              <span>{String(index + 1).padStart(2, "0")}</span>
                              <p>{item}</p>
                              <CheckCircle2
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="hero-mini-progress" aria-hidden="true">
                          {[0, 1, 2].map((progressPhase) => (
                            <span
                              key={progressPhase}
                              className={
                                progressPhase === phase ? "is-active" : ""
                              }
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : activeSlide === 2 ? (
                <div
                  key={`${language}-${activeSlide}`}
                  className="hero-automation-presentation"
                >
                  {visualStories[activeSlide].map((story, phase) => {
                    const Icon = story.icon;
                    const isActivePhase = phase === visualPhase;

                    return (
                      <div
                        key={story.label}
                        className={`hero-automation-scene ${isActivePhase ? "is-active" : ""}`}
                        aria-label={story.title}
                        aria-hidden={!isActivePhase}
                      >
                        <div className="hero-automation-heading">
                          <span>
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <div>
                            <p>{story.label}</p>
                            <h2>{story.title}</h2>
                          </div>
                        </div>
                        <div className="hero-automation-flow">
                          {story.items.map((item, index) => (
                            <div key={item} className="hero-automation-node">
                              <span>{String(index + 1).padStart(2, "0")}</span>
                              <strong>{item}</strong>
                              <i aria-hidden="true" />
                            </div>
                          ))}
                        </div>
                        <div className="hero-automation-status">
                          <CheckCircle2
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                          {isEnglish ? "Workflow active" : "Flujo activo"}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div
                  key={`${language}-${activeSlide}`}
                  className="hero-ai-presentation"
                >
                  {visualStories[activeSlide].map((story, phase) => {
                    const Icon = story.icon;
                    const isActivePhase = phase === visualPhase;

                    return (
                      <div
                        key={story.label}
                        className={`hero-ai-scene ${isActivePhase ? "is-active" : ""}`}
                        aria-label={story.title}
                        aria-hidden={!isActivePhase}
                      >
                        <div className="hero-ai-halo" aria-hidden="true">
                          <BrainCircuit className="h-7 w-7" />
                        </div>
                        <div className="hero-ai-main-card">
                          <div className="hero-ai-heading">
                            <span>
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <p>{story.label}</p>
                          </div>
                          <h2>{story.title}</h2>
                          <div className="hero-ai-items">
                            {story.items.map((item) => (
                              <span key={item}>{item}</span>
                            ))}
                          </div>
                        </div>
                        <div className="hero-ai-signal hero-ai-signal-left">
                          <Database className="h-4 w-4" aria-hidden="true" />
                          {isEnglish
                            ? "Business context"
                            : "Contexto de negocio"}
                        </div>
                        <div className="hero-ai-signal hero-ai-signal-right">
                          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                          {isEnglish ? "Human review" : "Revisión humana"}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div
              className="hero-action-stack"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocusCapture={() => setIsPaused(true)}
              onBlurCapture={() => setIsPaused(false)}
            >
              <div className="hero-actions responsive-actions mobile-full-actions">
                <a
                  href="#contacto"
                  onClick={() =>
                    trackEvent("cta_click", {
                      location: "hero_primary",
                      language,
                      region,
                    })
                  }
                  className="tap-target localized-copy inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[.82rem] font-bold text-slate-950 shadow-[0_22px_50px_-24px_rgba(0,224,184,.82)] transition hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 sm:px-6 sm:text-sm"
                >
                  {t.ctaMain}{" "}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
                  className="hero-secondary-cta tap-target localized-copy inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[.82rem] font-semibold shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 active:translate-y-0 sm:px-6 sm:text-sm"
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <button
        type="button"
        className="hero-edge-arrow hero-edge-arrow-left"
        onClick={showPreviousSlide}
        aria-label={isEnglish ? "Previous slide" : "Banner anterior"}
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="hero-edge-arrow hero-edge-arrow-right"
        onClick={showNextSlide}
        aria-label={isEnglish ? "Next slide" : "Siguiente banner"}
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>
    </section>
  );
}
