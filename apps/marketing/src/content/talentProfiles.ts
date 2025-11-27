import type { TalentProfile } from "@/types/content";

export const talentProfiles: TalentProfile[] = [
  {
    id: "architecture",
    name: "Arquitectura y liderazgo técnico",
    description:
      "Personas que entienden el negocio, definen la arquitectura y guían al equipo para que la solución sea sostenible en el tiempo.",
    focus: [
      "Arquitectos de soluciones y software.",
      "Definición de estándares, patrones y buenas prácticas.",
      "Acompañamiento a equipos internos como “CTO-as-a-service”.",
    ],
  },
  {
    id: "engineering",
    name: "Ingeniería de software",
    description:
      "Ingenieras e ingenieros que convierten la arquitectura en código de calidad: estable, legible y listo para evolucionar.",
    focus: [
      "Desarrollo backend y frontend.",
      "Integración con sistemas existentes y APIs de terceros.",
      "Pruebas automáticas y enfoque en mantenibilidad.",
    ],
  },
  {
    id: "cloud",
    name: "Cloud, infraestructura y DevOps",
    description:
      "Especialistas en que tu solución funcione bien en la nube: segura, observable y preparada para crecer.",
    focus: [
      "Diseño de entornos en la nube (por ejemplo, Azure).",
      "Pipelines de CI/CD y observabilidad.",
      "Buenas prácticas de seguridad y gestión de entornos.",
    ],
  },
  {
    id: "data-ai",
    name: "Datos e IA aplicada",
    description:
      "Perfiles que conectan datos, procesos e inteligencia artificial para aumentar la capacidad de tu equipo.",
    focus: [
      "Identificación y priorización de casos de uso de IA.",
      "Modelos de análisis ligero de datos para decidir mejor.",
      "Diseño de asistentes internos para tu equipo.",
    ],
  },
];
