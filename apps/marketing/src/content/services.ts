import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    id: "tech-consulting",
    name: "Consultoría tecnológica y arquitectura de soluciones",
    tagline: "Del diagnóstico al roadmap, con decisiones claras y aterrizadas.",
    description:
      "Revisamos tus procesos, sistemas actuales y dolores del día a día para definir una arquitectura tecnológica simple, escalable y realista para tu empresa.",
    category: "consulting",
    highlights: [
      "Diagnóstico de aplicaciones, integraciones y puntos de dolor.",
      "Diseño de arquitectura de software y datos orientada al negocio.",
      "Acompañamiento en decisiones de nube, proveedores y stack tecnológico.",
    ],
  },
  {
    id: "custom-software",
    name: "Desarrollo de software a la medida",
    tagline: "Aplicaciones y APIs que responden a tu operación, no al revés.",
    description:
      "Construimos soluciones de software centradas en tus procesos: desde pequeños módulos internos hasta plataformas que se conectan con tus sistemas actuales.",
    category: "delivery",
    highlights: [
      "Desarrollo backend y frontend con buenas prácticas modernas.",
      "Diseño de APIs limpias y mantenibles para integrarse con otros sistemas.",
      "Enfoque en código legible, probado y listo para evolucionar.",
    ],
  },
  {
    id: "automation",
    name: "Automatización de procesos e integración",
    tagline: "Menos tareas manuales, más foco en el negocio.",
    description:
      "Identificamos tareas repetitivas y flujos críticos para automatizarlos con software, integraciones y orquestación de servicios en la nube.",
    category: "automation",
    highlights: [
      "Mapeo de procesos y definición de flujos de punta a punta.",
      "Automatización de flujos entre herramientas (ERP, CRM, contabilidad, etc.).",
      "Uso de buenas prácticas ágiles (Scrum, Kanban) para implementar por iteraciones.",
    ],
  },
  {
    id: "ai-applied",
    name: "IA aplicada y asistentes para el negocio",
    tagline: "Casos de uso concretos, sin humo ni promesas vacías.",
    description:
      "Exploramos dónde la IA realmente aporta valor en tu operación: desde asistentes internos hasta análisis de información y generación de contenido guiada.",
    category: "ai",
    highlights: [
      "Taller de descubrimiento para identificar oportunidades reales de IA.",
      "Diseño de asistentes internos (copilots) conectados a tu información.",
      "Pruebas controladas antes de escalar la solución al resto de la empresa.",
    ],
  },
];
