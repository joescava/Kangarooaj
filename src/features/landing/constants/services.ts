import {
  BrainCircuit,
  Code2,
  Compass,
  Database,
  LifeBuoy,
  Workflow,
} from "lucide-react";
import type { LocalizedItem } from "../types/localizedItem.types";
import type { ServiceKey } from "../types/serviceKey.types";

export const services: LocalizedItem[] = [
  {
    key: "custom-software-development",
    icon: Code2,
    enTitle: "Custom Software Development",
    esTitle: "Desarrollo de software a la medida",
    enDesc:
      "Internal platforms, portals, APIs and maintainable applications designed for business operations.",
    esDesc:
      "Plataformas internas, portales, APIs y aplicaciones mantenibles diseñadas para operaciones empresariales.",
    enPain: "Disconnected tools and spreadsheets are carrying critical work.",
    esPain:
      "Herramientas desconectadas y hojas de cálculo sostienen trabajo crítico.",
    enOutcome: "A reliable digital system your team can operate and evolve.",
    esOutcome:
      "Un sistema digital confiable que tu equipo puede operar y evolucionar.",
    enBenefit: "Reliable systems your team can operate, improve and scale.",
    esBenefit:
      "Sistemas confiables que tu equipo puede operar, mejorar y escalar.",
  },
  {
    key: "business-process-automation",
    icon: Workflow,
    enTitle: "Business Process Automation",
    esTitle: "Automatización de procesos empresariales",
    enDesc:
      "Workflow automation, approvals, notifications, reporting flows and integrations that reduce manual work.",
    esDesc:
      "Automatización de flujos, aprobaciones, notificaciones, reportes e integraciones que reducen trabajo manual.",
    enPain: "Repeated manual steps slow cycles and increase operational risk.",
    esPain:
      "Los pasos manuales repetidos frenan ciclos y aumentan riesgo operativo.",
    enOutcome: "Faster execution with clearer ownership and traceability.",
    esOutcome:
      "Ejecución más rápida con mayor trazabilidad y responsables claros.",
    enBenefit: "Less rework, faster cycles and clearer operational control.",
    esBenefit: "Menos reproceso, ciclos más rápidos y mayor control operativo.",
  },
  {
    key: "ai-automation",
    icon: BrainCircuit,
    enTitle: "AI Automation",
    esTitle: "Automatización con IA",
    enDesc:
      "AI assistants, internal copilots, classification, summaries and decision support connected to business data and workflows.",
    esDesc:
      "Asistentes de IA, copilotos internos, clasificación, resúmenes y soporte a decisiones conectados a datos y flujos de negocio.",
    enPain:
      "Teams spend time reading, classifying and summarizing repeatable information.",
    esPain:
      "Los equipos gastan tiempo leyendo, clasificando y resumiendo información repetible.",
    enOutcome: "AI support embedded in the workflow, with review and control.",
    esOutcome: "Soporte de IA dentro del flujo, con revisión y control.",
    enBenefit:
      "Practical AI that saves time without adding operational complexity.",
    esBenefit: "IA práctica que ahorra tiempo sin sumar complejidad operativa.",
  },
  {
    key: "data-platforms-dashboards",
    icon: Database,
    enTitle: "Data Platforms & Dashboards",
    esTitle: "Plataformas de datos y tableros",
    enDesc:
      "Relational data models, dashboards, reporting layers and operational platforms designed for traceability and clarity.",
    esDesc:
      "Modelos relacionales, tableros, capas de reportería y plataformas operativas diseñadas para trazabilidad y claridad.",
    enPain:
      "Decisions depend on scattered data and reports that are hard to trust.",
    esPain:
      "Las decisiones dependen de datos dispersos y reportes difíciles de confiar.",
    enOutcome:
      "Cleaner information, useful dashboards and stronger operational visibility.",
    esOutcome:
      "Información más limpia, tableros útiles y mejor visibilidad operativa.",
    enBenefit:
      "Better decisions from cleaner, connected and reliable information.",
    esBenefit:
      "Mejores decisiones con información más limpia, conectada y confiable.",
  },
  {
    key: "technical-architecture-consulting",
    icon: Compass,
    enTitle: "Technical Architecture Consulting",
    esTitle: "Consultoría en arquitectura técnica",
    enDesc:
      "Architecture review, technical planning, system modernization and expert guidance for critical software decisions.",
    esDesc:
      "Revisión de arquitectura, planeación técnica, modernización de sistemas y criterio experto para decisiones críticas de software.",
    enPain:
      "Technical decisions are being made before risks and trade-offs are clear.",
    esPain:
      "Las decisiones técnicas se toman antes de aclarar riesgos y trade-offs.",
    enOutcome: "A safer roadmap before budget is spent on the wrong build.",
    esOutcome:
      "Una ruta más segura antes de invertir presupuesto en la construcción equivocada.",
    enBenefit: "Clear priorities before budget is spent on the wrong solution.",
    esBenefit:
      "Prioridades claras antes de invertir presupuesto en la solución equivocada.",
  },
  {
    key: "flexible-engineering-capacity",
    icon: LifeBuoy,
    enTitle: "Flexible Engineering Capacity",
    esTitle: "Staff augmentation / bolsa de horas",
    enDesc:
      "Specialized engineering capacity for B2B teams that need focused implementation, technical support or delivery blocks.",
    esDesc:
      "Capacidad especializada de ingeniería para equipos B2B que necesitan implementación enfocada, soporte técnico o bloques de entrega.",
    enPain:
      "Internal teams need senior execution without adding permanent overhead.",
    esPain:
      "Los equipos internos necesitan ejecución senior sin sumar carga permanente.",
    enOutcome:
      "Focused delivery capacity for scoped, technical business needs.",
    esOutcome:
      "Capacidad enfocada para necesidades técnicas y de negocio bien delimitadas.",
    enBenefit:
      "Flexible support without the overhead of a large consulting firm.",
    esBenefit: "Soporte flexible sin la carga de una consultora grande.",
  },
];

export const SERVICE_KEYS = [
  "custom-software-development",
  "business-process-automation",
  "ai-automation",
  "data-platforms-dashboards",
  "technical-architecture-consulting",
  "flexible-engineering-capacity",
] as const satisfies readonly ServiceKey[];
