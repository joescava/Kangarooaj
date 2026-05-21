import { useEffect, useState } from "react";
import { initGA } from "@/lib/analytics";
import type { Language } from "@/features/i18n/types/language.types";
import type { Region } from "@/features/region/types/region.types";
import { getConsent, saveConsent } from "../hooks/useConsent";

type Props = { language: Language; region: Region };

export function CookieConsentBanner({ language, region }: Props) {
  const [visible, setVisible] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => setVisible(!getConsent()), []);

  if (!visible) return null;

  const isEnglish = language === "en";

  const persist = (analyticsValue: boolean, marketingValue: boolean) => {
    saveConsent({
      necessary: true,
      analytics: analyticsValue,
      marketing: marketingValue,
      region,
      language,
      acceptedAt: new Date().toISOString(),
    });

    if (analyticsValue) initGA();

    setVisible(false);
  };

  return (
    <div
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-h-[calc(100svh-1.5rem)] max-w-5xl overflow-y-auto rounded-3xl border border-cyan-300/20 bg-[#0A0A0F]/95 p-4 shadow-2xl backdrop-blur-2xl motion-safe:transition motion-safe:duration-500 sm:inset-x-4 sm:bottom-4 sm:p-5"
      role="region"
      aria-label={isEnglish ? "Cookie preferences" : "Preferencias de cookies"}
    >
      <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_10%_0%,rgba(0,229,255,.12),transparent_36%),radial-gradient(circle_at_100%_40%,rgba(139,92,246,.12),transparent_36%)]" />

      <div className="grid min-w-0 gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div>
          <h3 className="text-base font-semibold text-white">
            {isEnglish
              ? "Privacy & Cookie Preferences"
              : "Preferencias de privacidad y cookies"}
          </h3>

          <p className="localized-copy mt-2 text-sm leading-relaxed text-slate-400">
            {isEnglish
              ? "We use necessary cookies to operate this website and optional analytics cookies to understand site performance. You can accept, reject or customize your preferences."
              : "Usamos cookies necesarias para operar este sitio y cookies analíticas opcionales para entender el rendimiento del sitio. Puedes aceptar, rechazar o personalizar tus preferencias."}
          </p>

          {customize && (
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="h-4 w-4 accent-cyan-300"
                />
                {isEnglish
                  ? "Necessary cookies always active"
                  : "Cookies necesarias siempre activas"}
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="h-4 w-4 accent-cyan-300"
                />
                {isEnglish ? "Analytics cookies" : "Cookies analíticas"}
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="h-4 w-4 accent-cyan-300"
                />
                {isEnglish ? "Marketing cookies" : "Cookies de marketing"}
              </label>
            </div>
          )}
        </div>

        <div className="responsive-actions mobile-full-actions md:justify-end">
          <button
            type="button"
            onClick={() => persist(false, false)}
            className="tap-target localized-copy rounded-full border border-white/15 px-4 py-2 text-sm font-semibold leading-5 text-white/85 transition hover:-translate-y-0.5 hover:bg-white/5"
          >
            {isEnglish ? "Reject optional cookies" : "Rechazar opcionales"}
          </button>

          <button
            type="button"
            onClick={() => setCustomize((value) => !value)}
            className="tap-target localized-copy rounded-full border border-white/15 px-4 py-2 text-sm font-semibold leading-5 text-white/85 transition hover:-translate-y-0.5 hover:bg-white/5"
            aria-expanded={customize}
          >
            {isEnglish ? "Customize" : "Personalizar"}
          </button>

          <button
            type="button"
            onClick={() =>
              persist(
                customize ? analytics : true,
                customize ? marketing : true,
              )
            }
            className="tap-target localized-copy rounded-full bg-gold px-4 py-2 text-sm font-bold leading-5 text-slate-950 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            {customize
              ? isEnglish
                ? "Save preferences"
                : "Guardar preferencias"
              : isEnglish
                ? "Accept all"
                : "Aceptar todo"}
          </button>
        </div>
      </div>
    </div>
  );
}
