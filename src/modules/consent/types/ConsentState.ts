import type { Language } from "../../i18n/types/Language";
import type { Region } from "../../region/types/Region";

export type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  region: Region;
  language: Language;
  acceptedAt: string;
};
