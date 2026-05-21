import { useState, type ReactNode } from "react";
import { detectLanguage, detectRegion } from "@/features/i18n/hooks";
import type { Language } from "@/features/i18n/types/language.types";
import { RegionContext } from "../context/regionContext";
import type { Region } from "../types/region.types";

export function RegionProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => detectLanguage());
  const [region, setRegion] = useState<Region>(() => detectRegion());

  return (
    <RegionContext.Provider
      value={{ language, region, setLanguage, setRegion }}
    >
      {children}
    </RegionContext.Provider>
  );
}
