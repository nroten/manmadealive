import { motion } from "framer-motion";
import mmaLogo from "@/assets/mma-logo.png";
import { GLSLHills } from "./GLSLHills";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <>
      {/* Hero with 3D Hills Background */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
        {/* 3D Hills Background */}
        <GLSLHills className="pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <img 
              src={mmaLogo} 
              alt="Man Made Alive" 
              className="h-24 sm:h-32 md:h-40 w-auto invert brightness-90"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6"
          >
            Become a Man{" "}
            <span className="text-gradient-ember">Made</span>{" "}
            <span className="text-gradient-ember">Fully Alive</span>{" "}
            in Christ
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-sans font-light max-w-3xl mx-auto leading-relaxed"
          >
            <span className="text-foreground font-medium">Stop drifting. Start becoming.</span>
          </motion.p>
        </div>
      </section>

      {/* Content Section Below the Hills */}
      <section className="relative bg-background py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed mb-8"
          >
            Most men don't wake up one day and decide to drift. Drift happens quietly—over years. Responsibilities increase. Pressure mounts. And somewhere along the way, clarity fades.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed mb-8"
          >
            That's the rub many men feel but rarely articulate: responsibility without clarity, strength without direction, and faith without formation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-foreground font-serif font-medium mb-8"
          >
            You weren't made to figure this out alone.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed mb-6"
          >
            A biblical formation pathway for Christian men who want discipline with purpose, clarity with direction, and a band of brothers walking the same road.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-muted-foreground font-sans tracking-wide mb-10"
          >
            Clarity. Discipline. Brotherhood. Rooted in Christ. Built to last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base sm:text-lg rounded-md"
            >
              Start Your Free Formation Journey
            </Button>
            <p className="text-sm text-muted-foreground font-sans max-w-md">
              A 30-day email series (8 emails) that moves you from drift to direction—and ends with a Personal Formation Charter you'll use for years.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
