import { z } from "zod";

const environmentSchema = z.object({
  VITE_GA_MEASUREMENT_ID: z
    .string()
    .regex(/^G-[A-Z0-9]+$/)
    .optional(),
  DEV: z.boolean(),
});

export const environment = environmentSchema.parse(import.meta.env);
