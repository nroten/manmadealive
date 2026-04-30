import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const scrollToForm = () => {
    document.getElementById("conversion-form")?.scrollIntoView({ behavior: "smooth" });
  };

  // EmailOctopus popup form trigger — preserves existing integration
  const openWaitlistPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    const formId = "59e1609c-faee-11f0-a879-6db35601943e";

    if (!document.querySelector(`script[data-form="${formId}"]`)) {
      const script = document.createElement("script");
      script.src = `https://eomail5.com/form/${formId}.js`;
      script.setAttribute("data-form", formId);
      script.async = true;
      document.body.appendChild(script);
    } else {
      const formLink = document.querySelector(`[data-form="${formId}"]`);
      if (formLink) {
        formLink.dispatchEvent(new Event("click", { bubbles: true }));
      }
    }
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full opacity-[0.10]"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(var(--mma-green)) 0%, transparent 70%)",
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
          <span className="eyebrow eyebrow-green inline-flex items-center gap-3 mb-6">
            <span className="w-7 h-px bg-mma-green" />
            ◆ The honest invitation
            <span className="w-7 h-px bg-mma-green" />
          </span>

          {/* Headline */}
          <h2 className="font-display font-bold uppercase tracking-tight leading-[1.02] text-foreground text-3xl sm:text-4xl md:text-5xl mb-10">
            This pathway<br />
            <span className="accent-italic-green">isn't for everyone.</span>
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
              It's for the man who is ready to{" "}
              <em className="font-italic-accent text-mma-green-light">stop reacting and start aiming</em>. Who wants discipline with purpose, clarity with direction, and brothers walking the same road. Who is willing to move slowly, engage honestly, and stay in the process long enough for something real to happen.
            </p>
            <p className="font-italic text-xl sm:text-2xl text-foreground/95 leading-snug">
              If that's you — even partially, even imperfectly —{" "}
              <span className="text-mma-green-light">the door is open.</span>
            </p>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-14"
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
              // Three videos · Free · No hype · Just formation
            </p>
          </motion.div>

          {/* Founding Members Waitlist */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-10 border-t border-gold/20"
          >
            <p className="font-italic text-base sm:text-lg text-muted-foreground mb-3">
              Already know you want ongoing formation with brothers?
            </p>
            <a
              href="#"
              onClick={openWaitlistPopup}
              data-form="59e1609c-faee-11f0-a879-6db35601943e"
              className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-[0.14em] text-base text-gold hover:text-gold-light underline underline-offset-[6px] decoration-gold/40 hover:decoration-gold-light transition-colors cursor-pointer"
            >
              Join the Founding Members Waitlist
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
