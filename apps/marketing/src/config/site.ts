export const siteConfig = {
  name: "Kangaroo AJ S.A.S.",
  shortName: "Kangaroo AJ",
  description:
    "Consultoría tecnológica, arquitectura de software y desarrollo a medida para empresas que quieren ordenar sus procesos, automatizar y aprovechar IA sin complejizarse.",
  url: "https://kangarooaj.com",
  locale: "es-CO",
  company: {
    legalName: "Kangaroo AJ S.A.S.",
    location: "Bogotá, Colombia",
    email: "info@kangarooaj.com",
    phone: "+57 319 523 7015",
  },
  navItems: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
  ],
};

export type SiteConfig = typeof siteConfig;
