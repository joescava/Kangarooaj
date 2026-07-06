import type { LucideIcon } from "lucide-react";
import type { ServiceKey } from "./serviceKey.types";

export type LocalizedItem = {
  key: ServiceKey;
  icon: LucideIcon;
  enTitle: string;
  esTitle: string;
  enDesc: string;
  esDesc: string;
  enPain: string;
  esPain: string;
  enOutcome: string;
  esOutcome: string;
  enBenefit?: string;
  esBenefit?: string;
};
