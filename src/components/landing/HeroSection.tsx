import { motion } from "framer-motion";
import mmaLogo from "@/assets/mma-logo.png";
import { GLSLHills } from "./GLSLHills";

const HeroSection = () => {
  return (
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
          <span className="text-gradient-ember">Fully Alive</span>{" "}
          in Christ
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-sans font-light mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          <span className="text-foreground font-medium">Stop drifting. Start training.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg text-muted-foreground font-sans font-light mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          A clear, biblical pathway for men who carry responsibility—but want strength with direction, discipline with purpose, and a faith that forms their whole life.
        </motion.p>

        {/* Trust Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm text-muted-foreground font-sans tracking-wide"
        >
          Clarity. Discipline. Brotherhood. Rooted in Christ. Built to last.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
