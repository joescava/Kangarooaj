import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import type { Language } from "@/features/i18n/types/language.types";
import type { Region } from "../types/region.types";

type Props = {
  language: Language;
  region: Region;
  onLanguageChange: (language: Language) => void;
  className?: string;
  tone?: "light" | "dark";
};

export function LanguageRegionSelector({
  language,
  region,
  onLanguageChange,
  className,
  tone = "light",
}: Props) {
  const changeLanguage = (nextLanguage: Language) => {
    if (nextLanguage !== language) {
      trackEvent("language_change", {
        from: language,
        to: nextLanguage,
        region,
      });
    }

    onLanguageChange(nextLanguage);
  };

  const activeButtonClass =
    tone === "dark"
      ? "min-w-9 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-slate-950 shadow-[0_8px_24px_-10px_rgba(255,255,255,.35)]"
      : "min-w-9 rounded-full bg-gold px-2.5 py-1 text-[11px] font-bold text-slate-950";

  const inactiveButtonClass =
    tone === "dark"
      ? "min-w-9 rounded-full px-2.5 py-1 text-[11px] text-white/72 transition hover:bg-white/12 hover:text-white"
      : "min-w-9 rounded-full px-2.5 py-1 text-[11px] text-slate-600 transition hover:bg-slate-100 hover:text-slate-950";

  return (
    <div
      className={cn(
        tone === "dark"
          ? "inline-flex min-w-0 items-center gap-1 rounded-full border border-white/10 bg-white/8 p-0.5 text-xs text-white shadow-[0_20px_60px_-40px_rgba(0,0,0,.7)] backdrop-blur-xl"
          : "inline-flex min-w-0 items-center gap-1 rounded-full border border-slate-200 bg-white/82 p-0.5 text-xs shadow-sm backdrop-blur-xl",
        className,
      )}
      aria-label={language === "en" ? "Language" : "Idioma"}
    >
      <button
        type="button"
        aria-pressed={language === "en"}
        onClick={() => changeLanguage("en")}
        className={language === "en" ? activeButtonClass : inactiveButtonClass}
      >
        EN
      </button>

      <button
        type="button"
        aria-pressed={language === "es"}
        onClick={() => changeLanguage("es")}
        className={language === "es" ? activeButtonClass : inactiveButtonClass}
      >
        ES
      </button>
    </div>
  );
}
