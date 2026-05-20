import { createContext, useContext, useState, type ReactNode } from "react";
import { detectLanguage, detectRegion } from "../../i18n/hooks";
import type { Language } from "../../i18n/types/Language";
import type { Region } from "../types/Region";

type RegionContextValue = {
  language: Language;
  region: Region;
  setLanguage: (language: Language) => void;
  setRegion: (region: Region) => void;
};

const RegionContext = createContext<RegionContextValue | null>(null);

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

export function useRegion() {
  const value = useContext(RegionContext);
  if (!value) throw new Error("useRegion must be used inside RegionProvider");
  return value;
}
