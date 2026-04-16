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
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
            This pathway <span className="text-gradient-ember">isn't for everyone.</span>
          </h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-5 mb-10"
          >
            <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
              It's for the man who is ready to stop reacting and start aiming. Who wants discipline with purpose, clarity with direction, and brothers walking the same road. Who is willing to move slowly, engage honestly, and stay in the process long enough for something real to happen.
            </p>
            <p className="font-sans text-base sm:text-lg text-foreground/90 leading-relaxed">
              If that's you — even partially, even imperfectly — the door is open.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="mb-5"
          >
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Watch the Free Series
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <p className="font-sans text-sm text-muted-foreground mb-12">
            Three videos. Free. No hype. Just formation.
          </p>

          {/* Founding Members Waitlist */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-border/30"
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
