import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import PricingSection from "@/components/sections/PricingSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <ProblemSection />
        <section id="solution">
          <SolutionSection />
        </section>
        <FeaturesSection />
        <section id="benefits">
          <BenefitsSection />
        </section>
        <SocialProofSection />
        <PricingSection />
        <FinalCTASection />
      </main>
    </div>
  );
};

export default Index;
