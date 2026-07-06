import { z } from "zod";
import { SERVICE_KEYS } from "@/features/landing/constants/services";

const requiredText = z.string().trim().min(1);

export const contactFormSchema = z.object({
  name: requiredText,
  company: z.string().trim().optional(),
  email: z.string().trim().email(),
  phone: z.string().trim().optional(),
  service: z.union([z.literal(""), z.enum(SERVICE_KEYS)]),
  message: requiredText,
  acceptedPrivacy: z.boolean().refine(Boolean),
});
