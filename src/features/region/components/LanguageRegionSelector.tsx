import { trackEvent } from "@/lib/analytics";
import { REGION_LABELS } from "../constants/regions";
import type { Language } from "@/features/i18n/types/language.types";
import type { Region } from "../types/region.types";

type Props = {
  language: Language;
  region: Region;
  onLanguageChange: (language: Language) => void;
  onRegionChange: (region: Region) => void;
};

export function LanguageRegionSelector({
  language,
  region,
  onLanguageChange,
  onRegionChange,
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
  const changeRegion = (nextRegion: Region) => {
    if (nextRegion !== region)
      trackEvent("region_change", { language, from: region, to: nextRegion });
    onRegionChange(nextRegion);
  };
  return (
    <div className="flex w-full min-w-0 flex-wrap items-center gap-1 rounded-2xl border border-white/10 bg-slate-950/70 p-1 text-xs backdrop-blur-xl sm:rounded-full lg:w-auto lg:flex-nowrap">
      <button
        type="button"
        aria-pressed={language === "en"}
        onClick={() => changeLanguage("en")}
        className={
          language === "en"
            ? "tap-target min-w-10 rounded-full bg-gold px-3 py-1.5 font-bold text-slate-950"
            : "tap-target min-w-10 rounded-full px-3 py-1.5 text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
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
            : "tap-target min-w-10 rounded-full px-3 py-1.5 text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
        }
      >
        ES
      </button>
      <select
        value={region}
        onChange={(event) => changeRegion(event.target.value as Region)}
        className="tap-target min-w-[9.5rem] flex-1 rounded-full border border-white/10 bg-slate-950 px-3 py-1.5 text-slate-200 outline-none ring-cyan-300/40 transition focus:ring-2 lg:flex-none"
        aria-label="Select region"
      >
        {Object.entries(REGION_LABELS).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
