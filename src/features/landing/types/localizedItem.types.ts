import type { LucideIcon } from "lucide-react";

export type LocalizedItem = {
  icon: LucideIcon;
  enTitle: string;
  esTitle: string;
  enDesc: string;
  esDesc: string;
  enBenefit?: string;
  esBenefit?: string;
};
