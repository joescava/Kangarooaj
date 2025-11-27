import { HeroHome } from "@/components/sections/HeroHome";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TalentProfilesSection } from "@/components/sections/TalentProfiles";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

export default function Page() {
  return (
    <>
      <HeroHome />
      <ServicesGrid />
      <TalentProfilesSection />
      <ClientsSection />
      <ContactFormSection />
    </>
  );
}
