import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [portalReady, setPortalReady] = useState(false);

  const handleNav = (location: string) => {
    trackEvent("cta_click", { location, language, region });
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    window.setTimeout(() => {
      const target = window.document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 80);
  };

  const handleMobileNav = (href: string) => {
    handleNav(`mobile_nav_${href.replace("#", "")}`);
    setMenuOpen(false);
    scrollToSection(href);
  };

  const handleMobilePrimaryCta = () => {
    handleNav("mobile_header_primary");
    setMenuOpen(false);
    scrollToSection("#contacto");
  };

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

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const body = window.document.body;
    const originalBodyOverflow = body.style.overflow;

    body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      body.style.overflow = originalBodyOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const mobileMenu = menuOpen ? (
    <div
      className="fixed inset-0 z-[9999] xl:hidden"
      role="presentation"
      onClick={closeMenu}
    >
      <div className="absolute inset-0 bg-black/66" />

      <div
        onClick={(event) => event.stopPropagation()}
        className="relative flex h-[100dvh] min-h-[100dvh] w-full flex-col overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(0,194,168,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(217,119,6,0.1),transparent_26%),linear-gradient(180deg,rgba(3,6,15,0.92)_0%,rgba(4,8,18,0.88)_100%)] px-4 py-4 text-white sm:px-8 sm:py-5"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-[11rem] sm:max-w-[12rem]">
            <Logo compact tone="dark" />
          </div>

          <button
            type="button"
            aria-label={language === "en" ? "Close menu" : "Cerrar menú"}
            onClick={closeMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition hover:bg-white/12 active:scale-[0.98]"
          >
            <X className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
        </div>

        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label={
            language === "en"
              ? "Mobile navigation menu"
              : "Menú de navegación móvil"
          }
          className="mt-5 flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain pr-1 [scrollbar-width:none] sm:mt-6"
        >
          <div className="border-b border-white/12 pb-3">
            <LanguageRegionSelector
              tone="dark"
              className="w-fit"
              language={language}
              region={region}
              onLanguageChange={onLanguageChange}
            />
          </div>

          <nav
            aria-label={
              language === "en"
                ? "Mobile main navigation"
                : "Navegación principal móvil"
            }
            className="mt-3 flex flex-1 flex-col justify-start"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                title={item.title}
                onClick={(event) => {
                  event.preventDefault();
                  handleMobileNav(item.href);
                }}
                className="group flex min-h-12 items-center justify-between gap-4 border-b border-white/10 py-3 text-left text-[clamp(1rem,4.15vw,1.65rem)] font-medium tracking-[-0.015em] text-white/88 transition hover:translate-x-1 hover:text-white sm:min-h-14 sm:gap-6 sm:py-3.5"
              >
                <span className="localized-copy border-b border-transparent pb-1 transition group-hover:border-cyan-300/90">
                  {item.label}
                </span>

                <ArrowRight
                  className="h-4.5 w-4.5 shrink-0 text-white/60 transition group-hover:text-white sm:h-5 sm:w-5"
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t border-white/10 pt-4 sm:pt-5">
            <a
              href="#contacto"
              onClick={(event) => {
                event.preventDefault();
                handleMobilePrimaryCta();
              }}
              className="inline-flex w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/14 sm:gap-4 sm:px-5 sm:py-3.5 sm:text-xs"
            >
              <span>{t.ctaMain}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <header className="sticky inset-x-0 top-0 z-50 w-full max-w-[100vw] overflow-visible border-b border-slate-200/80 bg-white/86 shadow-[0_18px_50px_-38px_rgba(15,23,42,.35)] backdrop-blur-2xl transition-all duration-300">
        <div className="fluid-container flex min-h-16 items-center justify-between gap-2 sm:min-h-18 sm:gap-3">
          <a
            href="#inicio"
            aria-label="Kangaroo AJ home"
            onClick={() => handleNav("logo")}
            className="min-w-0 shrink-0 rounded-2xl"
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

          <div className="flex min-w-0 shrink-0 items-center gap-1.5 md:gap-3">
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
              className="hidden max-w-[11rem] items-center justify-center gap-1.5 rounded-full bg-gold px-3 py-2 text-center text-[11px] font-bold leading-4 text-slate-950 transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 sm:inline-flex 2xl:max-w-[14rem] 2xl:px-4 2xl:text-sm"
            >
              <span className="truncate whitespace-nowrap">{t.ctaMain}</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                menuOpen
                  ? language === "en"
                    ? "Close menu"
                    : "Cerrar menú"
                  : language === "en"
                    ? "Open menu"
                    : "Abrir menú"
              }
              onClick={() => setMenuOpen((current) => !current)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-950 shadow-sm transition hover:bg-slate-50 active:scale-[0.98] xl:hidden",
                menuOpen && "bg-slate-950 text-white hover:bg-slate-950",
              )}
            >
              {menuOpen ? (
                <X className="h-4.5 w-4.5" aria-hidden="true" />
              ) : (
                <Menu className="h-4.5 w-4.5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {portalReady && mobileMenu
        ? createPortal(mobileMenu, window.document.body)
        : null}
    </>
  );
}
