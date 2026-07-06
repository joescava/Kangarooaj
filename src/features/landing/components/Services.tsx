import { trackEvent } from "@/lib/analytics";
import { SectionHeader } from "@/components/SectionHeader";
import { copy } from "@/features/i18n/constants/copy";
import type { Language } from "@/features/i18n/types/language.types";
import type { Region } from "@/features/region/types/region.types";
import { services } from "../constants/services";
import { Reveal } from "./Reveal";

export function Services({
  language,
  region,
}: {
  language: Language;
  region: Region;
}) {
  const t = copy[language];

  return (
    <section
      id="capacidades"
      className="section-bg section-contained border-t border-slate-200/80 py-24"
    >
      <Reveal className="relative z-10 fluid-container">
        <SectionHeader
          eyebrow={t.capabilitiesEyebrow as string}
          title={t.capabilitiesTitle as string}
          text={t.capabilitiesText as string}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(
            ({
              icon: Icon,
              enTitle,
              esTitle,
              enDesc,
              esDesc,
              enPain,
              esPain,
              enOutcome,
              esOutcome,
            }) => {
              const title = language === "en" ? enTitle : esTitle;
              return (
                <a
                  key={enTitle}
                  href="#contacto"
                  onClick={() =>
                    trackEvent("cta_click", {
                      location: "capability_card",
                      capability: enTitle,
                      language,
                      region,
                    })
                  }
                  aria-label={
                    language === "en"
                      ? `Start a conversation about ${enTitle}`
                      : `Iniciar conversación sobre ${esTitle}`
                  }
                  className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white/88 p-6 shadow-[0_24px_70px_-48px_rgba(15,23,42,.38)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300/60 hover:bg-white focus-visible:border-cyan-300/70 sm:p-7"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-gold transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="localized-copy mt-6 text-xl font-semibold leading-7 text-slate-950">
                    {title}
                  </h3>

                  <p className="localized-copy mt-3 leading-7 text-slate-600">
                    {language === "en" ? enDesc : esDesc}
                  </p>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-2xl border border-amber-200/70 bg-amber-50/80 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                        {language === "en" ? "Business pain" : "Dolor"}
                      </p>
                      <p className="localized-copy mt-2 text-sm leading-6 text-slate-700">
                        {language === "en" ? enPain : esPain}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-teal-200 bg-teal-50/80 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                        {language === "en" ? "Expected result" : "Resultado"}
                      </p>
                      <p className="localized-copy mt-2 text-sm font-medium leading-6 text-slate-800">
                        {language === "en" ? enOutcome : esOutcome}
                      </p>
                    </div>
                  </div>

                  <span className="localized-copy mt-auto inline-flex pt-6 text-sm font-semibold text-teal-700 transition group-hover:text-teal-600">
                    {language === "en"
                      ? "Talk about this capability"
                      : "Hablemos de esta capacidad"}
                  </span>
                </a>
              );
            },
          )}
        </div>
      </Reveal>
    </section>
  );
}
