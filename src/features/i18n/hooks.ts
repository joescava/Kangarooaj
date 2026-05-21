import type { Language } from "./types/language.types";
import type { Region } from "../region/types/region.types";

export function detectLanguage(): Language {
  if (typeof navigator === "undefined") return "en";
  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

export function detectRegion(): Region {
  if (typeof navigator === "undefined") return "OTHER";
  const locale = navigator.language.toLowerCase();
  if (locale.includes("co")) return "CO";
  if (locale.includes("us") || locale.startsWith("en")) return "US";
  return "OTHER";
}
