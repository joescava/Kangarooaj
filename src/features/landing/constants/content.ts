import type { Language } from "@/features/i18n/types/language.types";

export const whyItems = {
  en: [
    {
      title: "Experienced involvement from day one",
      text: "Architecture, trade-offs and delivery decisions are guided by people who understand both software and business operations.",
    },
    {
      title: "Lean delivery without unnecessary bureaucracy",
      text: "You get clear communication, focused implementation and useful documentation without slow consulting layers.",
    },
    {
      title: "Architecture shaped around the business",
      text: "Systems are designed around operational value, adoption, maintainability and the process behind the screen.",
    },
    {
      title: "AI connected to practical use cases",
      text: "AI is applied where it can classify, summarize, assist, automate or accelerate the work teams already do.",
    },
    {
      title: "Nearshore collaboration for US and Colombian companies",
      text: "Kangaroo AJ supports bilingual, remote-first collaboration across the United States, Colombia and global markets.",
    },
  ],
  es: [
    {
      title: "Acompañamiento experto desde el primer día",
      text: "La arquitectura, los trade-offs y las decisiones de entrega se guían por personas que entienden software y operación de negocio.",
    },
    {
      title: "Entrega liviana sin burocracia innecesaria",
      text: "Obtienes comunicación clara, implementación enfocada y documentación útil sin capas consultivas lentas.",
    },
    {
      title: "Arquitectura diseñada alrededor del negocio",
      text: "Los sistemas se diseñan alrededor del valor operativo, la adopción, la mantenibilidad y el proceso detrás de la pantalla.",
    },
    {
      title: "IA conectada a casos de uso prácticos",
      text: "La IA se aplica donde puede clasificar, resumir, asistir, automatizar o acelerar el trabajo que los equipos ya realizan.",
    },
    {
      title: "Colaboración nearshore para empresas de EE. UU. y Colombia",
      text: "Kangaroo AJ apoya colaboración bilingüe y remota en Estados Unidos, Colombia y mercados globales.",
    },
  ],
} satisfies Record<Language, { title: string; text: string }[]>;

export const deliverySteps = {
  en: [
    {
      step: "01",
      title: "Discover",
      text: "Clarify the business problem, current workflow, constraints, stakeholders and expected outcome.",
    },
    {
      step: "02",
      title: "Design",
      text: "Define the solution architecture, data model, integrations, security considerations and delivery roadmap before building.",
    },
    {
      step: "03",
      title: "Build",
      text: "Deliver usable increments with controlled scope, technical review and direct validation from the business.",
    },
    {
      step: "04",
      title: "Integrate",
      text: "Connect the solution with APIs, databases, workflows, reports and the tools teams already use.",
    },
    {
      step: "05",
      title: "Improve",
      text: "Measure adoption, remove friction, refine automation and keep the platform maintainable as operations evolve.",
    },
  ],
  es: [
    {
      step: "01",
      title: "Entender",
      text: "Aclarar el problema de negocio, el flujo actual, las restricciones, los responsables y el resultado esperado.",
    },
    {
      step: "02",
      title: "Diseñar",
      text: "Definir la arquitectura de la solución, el modelo de datos, las integraciones, la seguridad y la ruta de entrega antes de construir.",
    },
    {
      step: "03",
      title: "Construir",
      text: "Entregar incrementos utilizables con alcance controlado, revisión técnica y validación directa del negocio.",
    },
    {
      step: "04",
      title: "Integrar",
      text: "Conectar la solución con APIs, bases de datos, flujos, reportes y herramientas que los equipos ya usan.",
    },
    {
      step: "05",
      title: "Mejorar",
      text: "Medir adopción, remover fricción, refinar automatización y mantener la plataforma preparada para evolucionar.",
    },
  ],
} satisfies Record<Language, { step: string; title: string; text: string }[]>;

export const industries = {
  en: [
    "Food safety & compliance",
    "Audit and inspection workflows",
    "B2B operational platforms",
    "Logistics and field services",
    "Professional services",
    "Data-heavy business teams",
    "Internal business platforms",
  ],
  es: [
    "Inocuidad alimentaria y cumplimiento",
    "Flujos de auditoría e inspección",
    "Plataformas operativas B2B",
    "Logística y servicios de campo",
    "Servicios profesionales",
    "Equipos de negocio intensivos en datos",
    "Plataformas internas de negocio",
  ],
} satisfies Record<Language, string[]>;

export const technicalDepth = {
  en: [
    {
      title: "React, Angular and modern frontend architecture",
      text: "Interfaces designed for maintainability, accessibility, performance and business usability.",
    },
    {
      title: ".NET, APIs and backend systems",
      text: "Backend foundations for secure workflows, integrations and operational platforms.",
    },
    {
      title: "SQL Server and relational data modeling",
      text: "Data structures that support reporting, traceability and reliable business logic.",
    },
    {
      title: "Workflow automation and integrations",
      text: "APIs, events, forms, approvals and notifications connected into practical execution flows.",
    },
    {
      title: "AI assistants, agents and internal copilots",
      text: "Applied AI that assists users, summarizes data, classifies information and accelerates decisions.",
    },
    {
      title: "Analytics dashboards and reporting",
      text: "Operational visibility through dashboards, reports and data flows that teams can trust.",
    },
    {
      title: "Maintainable, secure and scalable architecture",
      text: "Technical decisions that reduce future rework and support controlled growth.",
    },
  ],
  es: [
    {
      title: "React, Angular y arquitectura frontend moderna",
      text: "Interfaces diseñadas para mantenibilidad, accesibilidad, rendimiento y uso real de negocio.",
    },
    {
      title: ".NET, APIs y sistemas backend",
      text: "Bases backend para flujos seguros, integraciones y plataformas operativas.",
    },
    {
      title: "SQL Server y modelado relacional de datos",
      text: "Estructuras de datos que soportan reportería, trazabilidad y lógica de negocio confiable.",
    },
    {
      title: "Automatización de flujos e integraciones",
      text: "APIs, eventos, formularios, aprobaciones y notificaciones conectadas en flujos prácticos de ejecución.",
    },
    {
      title: "Asistentes de IA, agentes y copilotos internos",
      text: "IA aplicada para asistir usuarios, resumir datos, clasificar información y acelerar decisiones.",
    },
    {
      title: "Tableros analíticos y reportería",
      text: "Visibilidad operativa mediante tableros, reportes y flujos de datos en los que el equipo puede confiar.",
    },
    {
      title: "Arquitectura mantenible, segura y escalable",
      text: "Decisiones técnicas que reducen reproceso futuro y soportan crecimiento controlado.",
    },
  ],
} satisfies Record<Language, { title: string; text: string }[]>;

export const marketSignals = {
  en: ["United States", "Colombia", "Global remote-first teams"],
  es: ["Estados Unidos", "Colombia", "Equipos globales remotos"],
} satisfies Record<Language, string[]>;

export const aiItems = {
  en: [
    "Document and data classification",
    "Operational assistants",
    "Automated summaries",
    "Decision support",
    "Reporting acceleration",
    "Workflow recommendations",
  ],
  es: [
    "Clasificación de documentos y datos",
    "Asistentes operativos",
    "Resúmenes automáticos",
    "Soporte a decisiones",
    "Aceleración de reportes",
    "Recomendaciones de flujo",
  ],
};
