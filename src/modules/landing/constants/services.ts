import { BrainCircuit, Code2, Compass, Database, LifeBuoy, Workflow } from "lucide-react";
import type { LocalizedItem } from "../types/LocalizedItem";

export const services: LocalizedItem[] = [
  {
    icon: Code2,
    enTitle: "Custom Software Development",
    esTitle: "Desarrollo de software a la medida",
    enDesc: "Internal platforms, portals, APIs and maintainable applications designed for business operations.",
    esDesc: "Plataformas internas, portales, APIs y aplicaciones mantenibles diseñadas para operaciones empresariales.",
    enBenefit: "Reliable systems your team can operate, improve and scale.",
    esBenefit: "Sistemas confiables que tu equipo puede operar, mejorar y escalar.",
  },
  {
    icon: Workflow,
    enTitle: "Business Process Automation",
    esTitle: "Automatización de procesos empresariales",
    enDesc: "Workflow automation, approvals, notifications, reporting flows and integrations that reduce manual work.",
    esDesc:
      "Automatización de flujos, aprobaciones, notificaciones, reportes e integraciones que reducen trabajo manual.",
    enBenefit: "Less rework, faster cycles and clearer operational control.",
    esBenefit: "Menos reproceso, ciclos más rápidos y mayor control operativo.",
  },
  {
    icon: BrainCircuit,
    enTitle: "AI Automation",
    esTitle: "Automatización con IA",
    enDesc:
      "AI assistants, internal copilots, classification, summaries and decision support connected to business data and workflows.",
    esDesc:
      "Asistentes de IA, copilotos internos, clasificación, resúmenes y soporte a decisiones conectados a datos y flujos de negocio.",
    enBenefit: "Practical AI that saves time without adding operational complexity.",
    esBenefit: "IA práctica que ahorra tiempo sin sumar complejidad operativa.",
  },
  {
    icon: Database,
    enTitle: "Data Platforms & Dashboards",
    esTitle: "Plataformas de datos y tableros",
    enDesc:
      "Relational data models, dashboards, reporting layers and operational platforms designed for traceability and clarity.",
    esDesc:
      "Modelos relacionales, tableros, capas de reportería y plataformas operativas diseñadas para trazabilidad y claridad.",
    enBenefit: "Better decisions from cleaner, connected and reliable information.",
    esBenefit: "Mejores decisiones con información más limpia, conectada y confiable.",
  },
  {
    icon: Compass,
    enTitle: "Technical Architecture Consulting",
    esTitle: "Consultoría en arquitectura técnica",
    enDesc:
      "Architecture review, technical planning, system modernization and expert guidance for critical software decisions.",
    esDesc:
      "Revisión de arquitectura, planeación técnica, modernización de sistemas y criterio experto para decisiones críticas de software.",
    enBenefit: "Clear priorities before budget is spent on the wrong solution.",
    esBenefit: "Prioridades claras antes de invertir presupuesto en la solución equivocada.",
  },
  {
    icon: LifeBuoy,
    enTitle: "Flexible Engineering Capacity",
    esTitle: "Staff augmentation / bolsa de horas",
    enDesc:
      "Specialized engineering capacity for B2B teams that need focused implementation, technical support or delivery blocks.",
    esDesc:
      "Capacidad especializada de ingeniería para equipos B2B que necesitan implementación enfocada, soporte técnico o bloques de entrega.",
    enBenefit: "Flexible support without the overhead of a large consulting firm.",
    esBenefit: "Soporte flexible sin la carga de una consultora grande.",
  },
];
