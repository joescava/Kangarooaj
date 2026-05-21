import { z } from "zod";
import { contactFormSchema } from "../schemas/contactFormSchema";

export type ContactFormData = z.infer<typeof contactFormSchema>;
