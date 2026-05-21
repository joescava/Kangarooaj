import { CookieConsentBanner } from "@/features/consent/components/CookieConsentBanner";
import { Contact } from "@/features/contact/components/Contact";
import { useRegion } from "@/features/region/hooks/useRegion";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { IndustriesOperations } from "./IndustriesOperations";
import { Process } from "./Process";
import { Services } from "./Services";
import { Tech } from "./Tech";
import { WhyUs } from "./WhyUs";

export function LandingPage() {
  const { language, region, setLanguage, setRegion } = useRegion();
  return (
    <div className="ambient-bg min-h-screen text-foreground">
      <Header
        language={language}
        region={region}
        onLanguageChange={setLanguage}
        onRegionChange={setRegion}
      />
      <main>
        <Hero language={language} region={region} />
        <Services language={language} region={region} />
        <WhyUs language={language} region={region} />
        <Process language={language} />
        <IndustriesOperations language={language} />
        <Tech language={language} />
        <CTASection language={language} region={region} />
        <Contact language={language} region={region} />
      </main>
      <Footer language={language} region={region} />
      <CookieConsentBanner language={language} region={region} />
    </div>
  );
}
