import { Mail, MessageCircle } from "lucide-react";
import { trackEvent } from "../../../shared/lib/analytics";
import type { Language } from "../../i18n/types/Language";
import type { Region } from "../../region/types/Region";
import { CONTACT_EMAIL, CONTACT_PHONE_LABEL, WHATSAPP_URL } from "../constants/contact";
import { services } from "../constants/services";
import { Logo } from "./Logo";

type FooterProps = { language: Language; region: Region };

export function Footer({ language, region }: FooterProps) {
  const isEnglish = language === "en";

  const links = [
    { href: "#capacidades", label: isEnglish ? "Capabilities" : "Capacidades" },
    {
      href: "#porque",
      label: isEnglish ? "Why Kangaroo AJ" : "Por qué Kangaroo AJ",
    },
    {
      href: "#modelo",
      label: isEnglish ? "Delivery model" : "Modelo de entrega",
    },
    { href: "#industrias", label: isEnglish ? "Markets" : "Mercados" },
    { href: "#contacto", label: isEnglish ? "Contact" : "Contacto" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#050506] py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1.1fr_.9fr_.9fr_.9fr]">
        <div>
          <Logo />

          <p className="mt-6 max-w-sm text-sm leading-6 text-slate-400">
            {isEnglish
              ? "Custom software, business automation, data platforms and practical AI for B2B companies."
              : "Software a la medida, automatización empresarial, plataformas de datos e IA práctica para empresas B2B."}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent("cta_click", {
                  location: "footer_whatsapp",
                  language,
                  region,
                })
              }
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
              {CONTACT_PHONE_LABEL}
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              onClick={() =>
                trackEvent("cta_click", {
                  location: "footer_email",
                  language,
                  region,
                })
              }
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
            >
              <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            {isEnglish ? "Services" : "Servicios"}
          </h2>

          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {services.slice(0, 6).map((service) => (
              <li key={service.enTitle}>
                <a
                  href="#capacidades"
                  className="transition hover:text-white"
                  onClick={() =>
                    trackEvent("cta_click", {
                      location: "footer_service",
                      service: service.enTitle,
                      language,
                      region,
                    })
                  }
                >
                  {isEnglish ? service.enTitle : service.esTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            {isEnglish ? "Site" : "Sitio"}
          </h2>

          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            {isEnglish ? "Policies" : "Políticas"}
          </h2>

          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li>
              <a href="/privacy-policy.html" className="transition hover:text-white">
                {isEnglish ? "Privacy policy" : "Política de privacidad"}
              </a>
            </li>

            <li>
              <a href="/data-treatment-policy.html" className="transition hover:text-white">
                {isEnglish ? "Data treatment policy" : "Política de tratamiento de datos"}
              </a>
            </li>
          </ul>

          <p className="mt-8 text-xs leading-6 text-slate-500">
            © 2026 Kangaroo AJ S.A.S. {isEnglish ? "All rights reserved." : "Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
}
