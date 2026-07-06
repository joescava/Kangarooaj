import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { copy } from "@/features/i18n/constants/copy";
import type { Language } from "@/features/i18n/types/language.types";
import { LanguageRegionSelector } from "@/features/region/components/LanguageRegionSelector";
import type { Region } from "@/features/region/types/region.types";
import { Logo } from "./Logo";

type Props = {
  language: Language;
  region: Region;
  onLanguageChange: (language: Language) => void;
};

export function Header({ language, region, onLanguageChange }: Props) {
  const t = copy[language];

  const handleNav = (location: string) =>
    trackEvent("cta_click", { location, language, region });

  const navItems = [
    {
      href: "#capacidades",
      label: t.navCapabilities as string,
      title: t.navCapabilities as string,
    },
    {
      href: "#ia-aplicada",
      label: t.navAI as string,
      title: t.navAI as string,
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
    <header className="sticky inset-x-0 top-0 z-50 w-full max-w-[100vw] overflow-hidden border-b border-slate-200/80 bg-white/86 shadow-[0_18px_50px_-38px_rgba(15,23,42,.35)] backdrop-blur-2xl transition-all duration-300">
      <div className="fluid-container flex min-h-20 items-center justify-between gap-3">
        <a
          href="#inicio"
          aria-label="Kangaroo AJ home"
          onClick={() => handleNav("logo")}
          className="shrink-0 rounded-2xl"
        >
          <Logo compact />
        </a>

        <nav
          aria-label={
            language === "en" ? "Main navigation" : "Navegación principal"
          }
          className="hidden min-w-0 flex-1 items-center justify-center gap-1 text-[13px] font-semibold text-slate-600 xl:flex 2xl:gap-2"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              title={item.title}
              onClick={() => handleNav(`nav_${item.href.replace("#", "")}`)}
              className="max-w-[8.5rem] rounded-full px-2 py-2 text-center leading-5 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:text-slate-950 2xl:max-w-none 2xl:px-3"
            >
              <span className="block truncate whitespace-nowrap">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex min-w-0 shrink-0 items-center gap-2 md:gap-3">
          <div className="hidden lg:block">
            <LanguageRegionSelector
              language={language}
              region={region}
              onLanguageChange={onLanguageChange}
            />
          </div>

          <a
            href="#contacto"
            onClick={() => handleNav("header_primary")}
            className="tap-target hidden max-w-[12rem] items-center justify-center gap-2 rounded-full bg-gold px-3 py-2.5 text-center text-xs font-bold leading-5 text-slate-950 transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 sm:inline-flex 2xl:max-w-[14rem] 2xl:px-4 2xl:text-sm"
          >
            <span className="truncate whitespace-nowrap">{t.ctaMain}</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="w-full max-w-full overflow-hidden border-t border-slate-200/80 px-4 py-3 lg:hidden">
        <LanguageRegionSelector
          language={language}
          region={region}
          onLanguageChange={onLanguageChange}
        />

        <nav
          aria-label={
            language === "en"
              ? "Mobile main navigation"
              : "Navegación principal móvil"
          }
          className="mt-3 grid w-full max-w-full grid-cols-1 gap-2 text-sm text-slate-600 sm:flex sm:flex-wrap"
        >
          {navItems.slice(0, 5).map((item) => (
            <a
              key={item.href}
              href={item.href}
              title={item.title}
              onClick={() =>
                handleNav(`mobile_nav_${item.href.replace("#", "")}`)
              }
              className="tap-target inline-flex min-w-0 items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-2 text-center leading-5 shadow-sm transition hover:border-cyan-300/50 hover:text-slate-950 sm:shrink-0 sm:whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          onClick={() => handleNav("mobile_header_primary")}
          className="tap-target mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-center text-sm font-bold leading-5 text-slate-950 sm:hidden"
        >
          <span>{t.ctaMain}</span>
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
