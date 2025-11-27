export const siteConfig = {
  name: "Kangaroo AJ S.A.S.",
  shortName: "Kangaroo AJ",
  description:
    "Consultoría y desarrollo de software, diseño y comercialización de moda y proyectos agrícolas, conectando tecnología y negocio desde Bogotá.",
  url: "https://kangarooaj.com",
  locale: "es-CO",
  company: {
    legalName: "Kangaroo AJ S.A.S.",
    location: "Bogotá, Colombia",
    email: "contacto@kangarooaj.com",
    phone: "+57 000 000 0000"
  },
  navItems: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" }
  ]
};

export type SiteConfig = typeof siteConfig;
