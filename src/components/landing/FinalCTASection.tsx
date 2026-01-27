import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TopographyPattern, ScratchedMetal } from "./BackgroundTextures";

const FinalCTASection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('conversion-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWaitlistPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    const formId = "59e1609c-faee-11f0-a879-6db35601943e";
    
    // Check if script is already loaded
    if (!document.querySelector(`script[data-form="${formId}"]`)) {
      const script = document.createElement('script');
      script.src = `https://eomail5.com/form/${formId}.js`;
      script.setAttribute('data-form', formId);
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Script already loaded, trigger the form manually if possible
      const formLink = document.querySelector(`[data-form="${formId}"]`);
      if (formLink) {
        formLink.dispatchEvent(new Event('click', { bubbles: true }));
      }
    }
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Texture layers */}
      <TopographyPattern className="text-muted-foreground opacity-25" />
      <ScratchedMetal className="text-foreground opacity-15" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Warm glow accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.08]"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--primary)) 0%, transparent 70%)'
        }}
      />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Header */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
            Ready to <span className="text-gradient-ember">begin?</span>
          </h2>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start the Free 30-Day Formation Series
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              8 emails over 30 days that help you name the drift, replace trying with training, and discover the four arenas where biblical manhood is actually lived.
            </p>
            <p className="text-foreground font-medium">
              You'll walk away with a Personal Formation Charter—a personalized roadmap you'll use for years.
            </p>
          </motion.div>
          
          {/* Founding Members Waitlist */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-border/30"
          >
            <p className="text-muted-foreground mb-3">
              Already know you want ongoing formation with brothers?
            </p>
            <a 
              href="#" 
              onClick={openWaitlistPopup}
              data-form="59e1609c-faee-11f0-a879-6db35601943e"
              className="text-primary hover:text-primary/80 font-semibold underline underline-offset-4 transition-colors cursor-pointer"
            >
              Join the Founding Members Waitlist
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
