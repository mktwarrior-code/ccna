import { HeroSection } from "@/components/sections/HeroSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { BusinessHighlight } from "@/components/sections/BusinessHighlight";
import { PnixtaPreview } from "@/components/sections/PnixtaPreview";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <BusinessHighlight />
      <PnixtaPreview />
      <StatsCounter />
      <CTASection />
    </>
  );
}
