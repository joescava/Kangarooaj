import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1),
  company: z.string().trim().optional(),
  email: z.string().trim().email(),
  phone: z.string().trim().optional(),
  service: z.string().trim().min(1),
  message: z.string().trim().min(1),
  acceptedPrivacy: z.literal(true),
});
