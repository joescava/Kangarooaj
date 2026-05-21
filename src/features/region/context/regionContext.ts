import { createContext } from "react";
import type { Language } from "@/features/i18n/types/language.types";
import type { Region } from "../types/region.types";

export type RegionContextValue = {
  language: Language;
  region: Region;
  setLanguage: (language: Language) => void;
  setRegion: (region: Region) => void;
};

export const RegionContext = createContext<RegionContextValue | null>(null);
