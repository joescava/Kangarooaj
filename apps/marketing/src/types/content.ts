export type ServiceCategory = "consulting" | "delivery" | "automation" | "ai";

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ServiceCategory;
  highlights: string[];
}

export interface ClientReference {
  id: string;
  name: string;
  location: string;
  sector: string;
  status: "cliente" | "alianza";
  description: string;
  url?: string;
}

export interface TalentProfile {
  id: string;
  name: string;
  description: string;
  focus: string[];
}
