import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    id: "software-consulting",
    name: "Consultoría y desarrollo de software",
    tagline: "Del boceto a producción con arquitectura sólida.",
    description:
      "Diseñamos y construimos soluciones de software alineadas al negocio: desde prototipos hasta plataformas robustas listas para escalar.",
    category: "software",
    highlights: [
      "Arquitectura de soluciones y acompañamiento CTO-as-a-service.",
      "Desarrollo backend y frontend con buenas prácticas modernas.",
      "Integración con servicios en la nube y plataformas existentes."
    ]
  },
  {
    id: "fashion-business",
    name: "Moda y diseño con enfoque digital",
    tagline: "Marca, producto y experiencia pensados end-to-end.",
    description:
      "Acompañamos marcas de moda en la definición de su propuesta, colecciones, canales digitales y operaciones para crecer con estructura.",
    category: "fashion",
    highlights: [
      "Diseño y definición de colección alineada a la identidad de marca.",
      "Soporte en ecommerce, catálogo digital y activos visuales.",
      "Optimización de procesos entre diseño, producción y venta."
    ]
  },
  {
    id: "agro-projects",
    name: "Proyectos e iniciativas agrícolas",
    tagline: "Tecnología y visión de negocio en el campo.",
    description:
      "Exploramos y estructuramos proyectos agrícolas con foco en sostenibilidad, trazabilidad y rentabilidad a largo plazo.",
    category: "agro",
    highlights: [
      "Estructuración de proyectos con mirada financiera y operativa.",
      "Uso inteligente de datos para planificación y seguimiento.",
      "Conexión entre campo, industria y canales comerciales."
    ]
  }
];
