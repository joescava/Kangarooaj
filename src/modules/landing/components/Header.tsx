import { ArrowRight } from "lucide-react";
import { trackEvent } from "../../../shared/lib/analytics";
import { copy } from "../../i18n/constants/copy";
import type { Language } from "../../i18n/types/Language";
import { LanguageRegionSelector } from "../../region/components/LanguageRegionSelector";
import type { Region } from "../../region/types/Region";
import { Logo } from "./Logo";

type Props = {
  language: Language;
  region: Region;
  onLanguageChange: (language: Language) => void;
  onRegionChange: (region: Region) => void;
};

export function Header({ language, region, onLanguageChange, onRegionChange }: Props) {
  const t = copy[language];

  const handleNav = (location: string) => trackEvent("cta_click", { location, language, region });

  const navItems = [
    {
      href: "#capacidades",
      label: t.navCapabilities as string,
      title: t.navCapabilities as string,
    },
    {
      href: "#porque",
      label: t.navWhyShort as string,
      title: t.navWhy as string,
    },
    {
      href: "#modelo",
      label: t.navDeliveryShort as string,
      title: t.navDelivery as string,
    },
    {
      href: "#industrias",
      label: t.navIndustries as string,
      title: t.navIndustries as string,
    },
    {
      href: "#tecnologia",
      label: t.navTechShort as string,
      title: t.navTech as string,
    },
    {
      href: "#contacto",
      label: t.navContact as string,
      title: t.navContact as string,
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050506]/88 backdrop-blur-2xl transition-all duration-300">
      <div className="fluid-container flex min-h-20 items-center justify-between gap-2 md:gap-3">
        <a
          href="#inicio"
          aria-label="Kangaroo AJ home"
          onClick={() => handleNav("logo")}
          className="shrink-0 rounded-2xl"
        >
          <Logo compact />
        </a>

        <nav
          aria-label={language === "en" ? "Main navigation" : "Navegación principal"}
          className="hidden min-w-0 flex-1 items-center justify-center gap-1 text-xs font-medium text-slate-300 xl:flex 2xl:gap-2 2xl:text-sm"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              title={item.title}
              onClick={() => handleNav(`nav_${item.href.replace("#", "")}`)}
              className="localized-copy max-w-[8.5rem] rounded-full px-2 py-2 text-center leading-4 transition hover:bg-white/[0.04] hover:text-white focus-visible:text-white 2xl:max-w-none 2xl:px-3 2xl:leading-5"
            >
              <span className="block truncate 2xl:whitespace-normal">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex min-w-0 shrink-0 items-center gap-2 md:gap-3">
          <div className="hidden lg:block">
            <LanguageRegionSelector
              language={language}
              region={region}
              onLanguageChange={onLanguageChange}
              onRegionChange={onRegionChange}
            />
          </div>

          <a
            href="#contacto"
            onClick={() => handleNav("header_primary")}
            className="tap-target localized-copy hidden max-w-[12rem] items-center justify-center gap-2 rounded-full bg-gold px-3 py-2.5 text-center text-xs font-bold leading-5 text-slate-950 transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 sm:inline-flex 2xl:max-w-[14rem] 2xl:px-4 2xl:text-sm"
          >
            <span className="truncate">{t.ctaMain}</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-3 lg:hidden">
        <LanguageRegionSelector
          language={language}
          region={region}
          onLanguageChange={onLanguageChange}
          onRegionChange={onRegionChange}
        />
      </div>
    </header>
  );
}
