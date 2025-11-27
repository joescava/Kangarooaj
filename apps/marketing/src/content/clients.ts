import type { ClientReference } from "@/types/content";

export const clients: ClientReference[] = [
  {
    id: "crfsp",
    name: "Critical Food Safety Portal (CRFSP Inc.)",
    location: "Estados Unidos",
    sector: "Tecnología para inocuidad alimentaria",
    status: "cliente",
    description:
      "Startup tecnológica en Estados Unidos enfocada en construir una aplicación de seguridad alimentaria para empresas del sector de alimentos. El objetivo es simplificar el cumplimiento de los requisitos de inocuidad exigidos en EE. UU. mediante flujos digitales, registros centralizados y reportes listos para auditoría.",
    url: "https://criticalfsp.com/",
  },
  {
    id: "nb-contadores",
    name: "NB Contadores S.A.S.",
    location: "Bogotá, Colombia",
    sector: "Servicios contables y consultoría empresarial",
    status: "alianza",
    description:
      "Firma de contadores que combina asesoría contable integral, enfoque ágil y acompañamiento cercano. Trabajan con metodologías como Scrum para adaptarse al ritmo de cada negocio y ofrecen servicios de outsourcing contable, de nómina y tributario. Junto a Kangaroo AJ estamos estructurando un producto tecnológico para digitalizar procesos contables y facilitar la relación con sus clientes.",
    url: "https://www.nbcontador.com/",
  },
];
