import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SecondCTASection = () => {
  const scrollToForm = () => {
    document.getElementById("conversion-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-[0.10]"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(var(--gold)) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Eyebrow */}
          <span className="eyebrow inline-flex items-center gap-3 mb-6">
            <span className="w-7 h-px bg-gold" />
            ◆ Your next step
            <span className="w-7 h-px bg-gold" />
          </span>

          {/* Headline */}
          <h2 className="font-display font-bold uppercase tracking-tight leading-[1.02] text-foreground text-3xl sm:text-4xl md:text-5xl mb-10">
            Drift has a name.<br />
            <span className="accent-italic">Here's your next step.</span>
          </h2>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-5 mb-12 max-w-2xl mx-auto"
          >
            <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
              Three videos. Free. <em className="font-italic-accent text-gold-light">No fluff. No performance required.</em> Just an honest look at why good men drift, what's been shaping you without your knowledge, and the only pattern actually worth building a life around.
            </p>
            <p className="font-italic text-lg sm:text-xl text-foreground/95 leading-relaxed">
              Watch them at your own pace. If what you hear resonates — the door into the full formation pathway is open.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <Button
              onClick={scrollToForm}
              size="lg"
              className="group bg-mma-green hover:bg-mma-green-light text-charcoal font-display font-bold uppercase tracking-wider px-10 py-7 text-base sm:text-lg rounded-md animate-pulse-green hover:scale-[1.02] transition-transform border border-mma-green-light"
            >
              Watch the Free Series
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70 mt-5">
              // Enter your email · Get immediate access · No spam, ever
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondCTASection;
