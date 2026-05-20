import { z } from "zod";
import { contactFormSchema } from "../schemas/ContactFormSchema";

export type ContactFormData = z.infer<typeof contactFormSchema>;
