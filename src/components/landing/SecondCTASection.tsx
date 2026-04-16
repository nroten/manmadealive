import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TopographyPattern, ScratchedMetal } from "./BackgroundTextures";

const SecondCTASection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("conversion-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
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
          background:
            "radial-gradient(ellipse at center, hsl(var(--primary)) 0%, transparent 70%)",
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
            Drift has a name.{" "}
            <span className="text-gradient-ember">Here's your next step.</span>
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
              Three videos. Free. No fluff. No performance required. Just an honest look at why good men drift, what's been shaping you without your knowledge, and the only pattern actually worth building a life around.
            </p>
            <p className="font-sans text-base sm:text-lg text-foreground/90 leading-relaxed">
              Watch them at your own pace. If what you hear resonates — the door into the full formation pathway is open.
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

          <p className="font-sans text-sm text-muted-foreground">
            Enter your email. Get immediate access. No spam, ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondCTASection;
