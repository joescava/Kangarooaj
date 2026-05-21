import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { Language } from "@/features/i18n/types/language.types";
import { contactFormSchema } from "../schemas/contactFormSchema";
import type { ContactFormData } from "../types/contactForm.types";

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

function getValidationMessage(
  field: keyof ContactFormData,
  language: Language,
) {
  const labels = fieldLabels[language];

  if (field === "email") {
    return language === "en"
      ? "Enter a valid business email."
      : "Ingresa un correo empresarial válido.";
  }

  if (field === "acceptedPrivacy") {
    return language === "en"
      ? "You must accept the privacy policy to continue."
      : "Debes aceptar la política de tratamiento de datos para continuar.";
  }

  const label =
    labels[field as keyof typeof labels] ??
    (language === "en" ? "This field" : "Este campo");
  return language === "en"
    ? `${label} is required.`
    : `${label} es obligatorio.`;
}

export function useContactForm(language: Language) {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      acceptedPrivacy: false,
    },
  });

  const getFieldError = (field: keyof ContactFormData) => {
    return form.formState.errors[field]
      ? getValidationMessage(field, language)
      : undefined;
  };

  const markSubmitted = () => setSubmitted(true);
  const resetSubmitted = () => setSubmitted(false);

  return { form, submitted, getFieldError, markSubmitted, resetSubmitted };
}
