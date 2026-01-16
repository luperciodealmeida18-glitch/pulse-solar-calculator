import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import CitySection from "@/components/CitySection";
import SolarCalculator from "@/components/SolarCalculator";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <CitySection />
        <SolarCalculator />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
