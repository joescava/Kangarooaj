import capabilitiesImg from "../../../assets/capabilities-architecture.webp";
import { trackEvent } from "../../../shared/lib/analytics";
import { SectionBackground } from "../../../shared/ui/SectionBackground";
import { SectionHeader } from "../../../shared/ui/SectionHeader";
import { copy } from "../../i18n/constants/copy";
import type { Language } from "../../i18n/types/Language";
import type { Region } from "../../region/types/Region";
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
      className="section-bg section-contained border-t border-white/10 py-24"
    >
      <SectionBackground
        image={capabilitiesImg}
        position="center"
        opacity={0.26}
        overlay="strong"
      />

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
              enBenefit,
              esBenefit,
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
                  className="group min-w-0 rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300/45 hover:bg-white/[0.065] focus-visible:border-cyan-300/60 sm:p-7"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-gold transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="localized-copy mt-6 text-xl font-semibold leading-7 text-white">
                    {title}
                  </h3>

                  <p className="localized-copy mt-3 leading-7 text-slate-400">
                    {language === "en" ? enDesc : esDesc}
                  </p>

                  {(enBenefit || esBenefit) && (
                    <p className="localized-copy mt-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] p-4 text-sm font-medium leading-6 text-cyan-100">
                      {language === "en" ? enBenefit : esBenefit}
                    </p>
                  )}
                </a>
              );
            },
          )}
        </div>
      </Reveal>
    </section>
  );
}
