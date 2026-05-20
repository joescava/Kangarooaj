import { useRef } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import contactEnterpriseImg from "../../../assets/contact-enterprise.webp";
import { trackEvent } from "../../../shared/lib/analytics";
import { SectionBackground } from "../../../shared/ui/SectionBackground";
import { copy } from "../../i18n/constants/copy";
import type { Language } from "../../i18n/types/Language";
import type { Region } from "../../region/types/Region";
import { Reveal } from "../../landing/components/Reveal";
import { CONTACT_EMAIL, CONTACT_PHONE_LABEL, WHATSAPP_URL } from "../../landing/constants/contact";
import { services } from "../../landing/constants/services";
import { useContactForm } from "../hooks/useContactForm";
import { TextInput } from "./TextInput";

export function Contact({ language, region }: { language: Language; region: Region }) {
  const t = copy[language];
  const { submitted, errors, submit } = useContactForm(language);
  const startedRef = useRef(false);
  const isEnglish = language === "en";

  const trackStart = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("contact_form_start", { language, region });
  };

  return (
    <section id="contacto" className="section-bg section-contained border-t border-white/10 py-24">
      <SectionBackground image={contactEnterpriseImg} position="center" opacity={0.22} overlay="strong" />

      <Reveal className="relative z-10 fluid-container max-w-6xl">
        <div className="grid min-w-0 gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 shadow-2xl backdrop-blur-xl sm:p-5 md:p-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/45 p-5 sm:p-7 md:p-8">
            <div className="absolute inset-0 -z-10">
              <img
                src={contactEnterpriseImg}
                alt="Technology partner discussing business workflows, software delivery and process automation with a client"
                loading="lazy"
                decoding="async"
                width={2560}
                height={1440}
                className="h-full w-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/84 to-black" />
            </div>

            <p className="localized-copy text-xs font-semibold uppercase tracking-[0.22em] text-gold sm:tracking-[0.28em]">
              {t.contactEyebrow}
            </p>

            <h2 className="localized-copy mt-4 font-display text-[clamp(2rem,8vw,2.5rem)] font-extrabold leading-tight tracking-[-0.04em] text-white">
              {t.contactTitle}
            </h2>

            <p className="localized-copy mt-6 leading-8 text-slate-300">{t.contactText}</p>

            <div className="mt-8 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-5">
              <p className="text-sm font-semibold text-cyan-100">
                {isEnglish ? "Recommended next step" : "Siguiente paso recomendado"}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {isEnglish
                  ? "Share the process, system or workflow you want to improve. The first response should clarify scope, urgency and the best commercial model."
                  : "Comparte el proceso, sistema o flujo que quieres mejorar. La primera respuesta debe aclarar alcance, urgencia y el mejor modelo comercial."}
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Contact Kangaroo AJ by WhatsApp"
                onClick={() =>
                  trackEvent("cta_click", {
                    location: "whatsapp",
                    language,
                    region,
                  })
                }
                className="tap-target flex min-h-14 min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/40"
              >
                <MessageCircle className="h-5 w-5 text-gold" aria-hidden="true" />
                {CONTACT_PHONE_LABEL}
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email Kangaroo AJ"
                onClick={() =>
                  trackEvent("cta_click", {
                    location: "email",
                    language,
                    region,
                  })
                }
                className="tap-target flex min-h-14 min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/40"
              >
                <Mail className="h-5 w-5 text-gold" aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <form
            className="grid min-w-0 gap-4 rounded-3xl border border-white/10 bg-black/28 p-4 sm:p-5 md:p-6"
            noValidate
            onSubmit={(event) => {
              event.preventDefault();

              const form = new FormData(event.currentTarget);
              const acceptedPrivacy = form.get("acceptedPrivacy") === "on";

              const ok = submit({
                name: form.get("name"),
                company: form.get("company"),
                email: form.get("email"),
                phone: form.get("phone"),
                service: form.get("service"),
                message: form.get("message"),
                acceptedPrivacy,
              });

              if (ok) {
                trackEvent("contact_form_submit", {
                  language,
                  region,
                  acceptedPrivacy,
                });
              }
            }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                {isEnglish ? "Commercial inquiry" : "Consulta comercial"}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                {isEnglish ? "Tell us what you need to improve." : "Cuéntanos qué necesitas mejorar."}
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                label={t.formName as string}
                name="name"
                required
                error={errors.name}
                onFocus={trackStart}
                autoComplete="name"
              />

              <TextInput
                label={t.formCompany as string}
                name="company"
                error={errors.company}
                onFocus={trackStart}
                autoComplete="organization"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                label={t.formEmail as string}
                name="email"
                type="email"
                required
                error={errors.email}
                onFocus={trackStart}
                autoComplete="email"
              />

              <TextInput
                label={t.formPhone as string}
                name="phone"
                error={errors.phone}
                onFocus={trackStart}
                autoComplete="tel"
              />
            </div>

            <label className="grid gap-2 text-sm font-medium text-slate-300">
              <span>
                {t.formService}
                <span className="ml-1 text-cyan-200">*</span>
              </span>
              <select
                name="service"
                required
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? "service-error" : undefined}
                onFocus={trackStart}
                className="min-h-12 w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-2 text-white outline-none ring-cyan-300/40 transition hover:border-white/20 focus:ring-2"
              >
                <option value="">{isEnglish ? "Select an option" : "Selecciona una opción"}</option>

                {services.map((service) => (
                  <option key={service.enTitle}>{isEnglish ? service.enTitle : service.esTitle}</option>
                ))}
              </select>

              {errors.service && (
                <span id="service-error" role="alert" className="text-xs text-red-300">
                  {errors.service}
                </span>
              )}
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-300">
              <span>
                {t.formMessage}
                <span className="ml-1 text-cyan-200">*</span>
              </span>
              <textarea
                name="message"
                required
                rows={5}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                onFocus={trackStart}
                className="min-h-36 w-full resize-y rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none ring-cyan-300/40 transition placeholder:text-slate-600 hover:border-white/20 focus:ring-2"
                placeholder={t.formPlaceholder as string}
              />

              {errors.message && (
                <span id="message-error" role="alert" className="text-xs text-red-300">
                  {errors.message}
                </span>
              )}
            </label>

            <label className="flex min-w-0 items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-6 text-slate-300">
              <input
                type="checkbox"
                name="acceptedPrivacy"
                required
                aria-invalid={Boolean(errors.acceptedPrivacy)}
                aria-describedby={errors.acceptedPrivacy ? "acceptedPrivacy-error" : undefined}
                onFocus={trackStart}
                className="mt-1 h-4 w-4 accent-cyan-300"
              />

              <span>
                {t.privacyConsent}{" "}
                <a
                  href={region === "CO" ? "/data-treatment-policy.html" : "/privacy-policy.html"}
                  target="_blank"
                  className="text-gold underline-offset-4 hover:underline"
                >
                  {t.privacyLinks}
                </a>
              </span>
            </label>

            {errors.acceptedPrivacy && (
              <span id="acceptedPrivacy-error" role="alert" className="text-xs text-red-300">
                {errors.acceptedPrivacy}
              </span>
            )}

            <button
              type="submit"
              onClick={() =>
                trackEvent("cta_click", {
                  location: "contact_submit_button",
                  language,
                  region,
                })
              }
              className="tap-target localized-copy inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-center font-bold leading-5 text-slate-950 transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
            >
              {t.formSubmit} <Send className="h-4 w-4" aria-hidden="true" />
            </button>

            {submitted && (
              <p
                role="status"
                className="rounded-2xl border border-cyan-300/25 bg-cyan-300/10 p-4 text-sm text-cyan-100"
              >
                {t.formSuccess}
              </p>
            )}
          </form>
        </div>
      </Reveal>
    </section>
  );
}
