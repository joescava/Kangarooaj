export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "software" | "fashion" | "agro";
  highlights: string[];
}
