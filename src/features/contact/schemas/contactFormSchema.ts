import { z } from "zod";

const requiredText = z.string().trim().min(1);

export const contactFormSchema = z.object({
  name: requiredText,
  company: z.string().trim().optional(),
  email: z.string().trim().email(),
  phone: z.string().trim().optional(),
  service: requiredText,
  message: requiredText,
  acceptedPrivacy: z.boolean().refine(Boolean),
});
