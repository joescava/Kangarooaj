import { trackEvent } from "@/lib/analytics";
import type { Language } from "@/features/i18n/types/language.types";
import type { Region } from "../types/region.types";

type Props = {
  language: Language;
  region: Region;
  onLanguageChange: (language: Language) => void;
};

export function LanguageRegionSelector({
  language,
  region,
  onLanguageChange,
}: Props) {
  const changeLanguage = (nextLanguage: Language) => {
    if (nextLanguage !== language)
      trackEvent("language_change", {
        from: language,
        to: nextLanguage,
        region,
      });
    onLanguageChange(nextLanguage);
  };
  return (
    <div
      className="inline-flex min-w-0 items-center gap-1 rounded-full border border-slate-200 bg-white/82 p-1 text-xs shadow-sm backdrop-blur-xl"
      aria-label={language === "en" ? "Language" : "Idioma"}
    >
      <button
        type="button"
        aria-pressed={language === "en"}
        onClick={() => changeLanguage("en")}
        className={
          language === "en"
            ? "tap-target min-w-10 rounded-full bg-gold px-3 py-1.5 font-bold text-slate-950"
            : "tap-target min-w-10 rounded-full px-3 py-1.5 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
        }
      >
        EN
      </button>
      <button
        type="button"
        aria-pressed={language === "es"}
        onClick={() => changeLanguage("es")}
        className={
          language === "es"
            ? "tap-target min-w-10 rounded-full bg-gold px-3 py-1.5 font-bold text-slate-950"
            : "tap-target min-w-10 rounded-full px-3 py-1.5 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
        }
      >
        ES
      </button>
    </div>
  );
}
