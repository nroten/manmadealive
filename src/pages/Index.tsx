import HeroSection from "@/components/landing/HeroSection";
import VideoSeriesSection from "@/components/landing/VideoSeriesSection";
import PillarsSection from "@/components/landing/PillarsSection";
import ProofSection from "@/components/landing/ProofSection";
import SecondCTASection from "@/components/landing/SecondCTASection";
// import TestimonialsSection from "@/components/landing/TestimonialsSection"; // TODO: Uncomment when real testimonials are available
// import ConversionForm from "@/components/landing/ConversionForm"; // Removed - email capture now lives in VideoSeriesSection
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <VideoSeriesSection />
      <PillarsSection />
      <ProofSection />
      <SecondCTASection />
      {/* <TestimonialsSection /> */} {/* TODO: Uncomment when real testimonials are available */}
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;