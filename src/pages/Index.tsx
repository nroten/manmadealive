import HeroSection from "@/components/landing/HeroSection";
import PillarsSection from "@/components/landing/PillarsSection";
import ProofSection from "@/components/landing/ProofSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import ConversionForm from "@/components/landing/ConversionForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <PillarsSection />
      <ProofSection />
      <TestimonialsSection />
      <FAQSection />
      <ConversionForm />
      <Footer />
    </main>
  );
};

export default Index;