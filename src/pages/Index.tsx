import HeroSection from "@/components/landing/HeroSection";
import PillarsSection from "@/components/landing/PillarsSection";
import ProofSection from "@/components/landing/ProofSection";
// import TestimonialsSection from "@/components/landing/TestimonialsSection"; // TODO: Uncomment when real testimonials are available
import ConversionForm from "@/components/landing/ConversionForm";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <PillarsSection />
      <ProofSection />
      {/* <TestimonialsSection /> */} {/* TODO: Uncomment when real testimonials are available */}
      <ConversionForm />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;