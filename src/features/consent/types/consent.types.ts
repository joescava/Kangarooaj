import type { Language } from "@/features/i18n/types/language.types";
import type { Region } from "@/features/region/types/region.types";

export type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  region: Region;
  language: Language;
  acceptedAt: string;
};
