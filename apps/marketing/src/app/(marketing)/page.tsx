import { HeroHome } from "@/components/sections/HeroHome";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

export default function Page() {
  return (
    <>
      <HeroHome />
      <ServicesGrid />
      <ContactFormSection />
    </>
  );
}
