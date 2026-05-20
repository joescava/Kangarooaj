import { useState } from "react";
import type { Language } from "../../i18n/types/Language";
import { contactFormSchema } from "../schemas/ContactFormSchema";
import type { ContactFormData } from "../types/ContactFormData";

const fieldLabels = {
  en: {
    name: "Name",
    email: "Business email",
    service: "Service of interest",
    message: "Message",
    acceptedPrivacy: "Privacy consent",
  },
  es: {
    name: "Nombre",
    email: "Correo empresarial",
    service: "Servicio de interés",
    message: "Mensaje",
    acceptedPrivacy: "Autorización de tratamiento de datos",
  },
} as const;

function getValidationMessage(field: keyof ContactFormData, language: Language) {
  const labels = fieldLabels[language];

  if (field === "email") {
    return language === "en" ? "Enter a valid business email." : "Ingresa un correo empresarial válido.";
  }

  if (field === "acceptedPrivacy") {
    return language === "en"
      ? "You must accept the privacy policy to continue."
      : "Debes aceptar la política de tratamiento de datos para continuar.";
  }

  const label = labels[field as keyof typeof labels] ?? (language === "en" ? "This field" : "Este campo");

  return language === "en" ? `${label} is required.` : `${label} es obligatorio.`;
}

export function useContactForm(language: Language) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const submit = (data: unknown) => {
    const parsed = contactFormSchema.safeParse(data);

    if (!parsed.success) {
      setSubmitted(false);
      setErrors(
        Object.fromEntries(
          parsed.error.issues.map((issue) => {
            const field = issue.path[0] as keyof ContactFormData;
            return [field, getValidationMessage(field, language)];
          })
        )
      );
      return false;
    }

    setErrors({});
    setSubmitted(true);
    return true;
  };

  return { submitted, errors, submit };
}
