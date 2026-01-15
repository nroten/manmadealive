import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import mmaLogo from "@/assets/mma-logo.png";
import { TopographyPattern, KevlarPattern, ScratchedMetal } from "./BackgroundTextures";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Rugged texture layers */}
      <TopographyPattern className="text-stone opacity-40" />
      <KevlarPattern className="text-foreground opacity-60" />
      <ScratchedMetal className="text-primary opacity-30" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cosmic blue gradient orb */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        
        {/* Iron edge accents */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-stone/5 to-transparent" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-stone/5 to-transparent" />
        
        {/* Floating ember particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/50 rounded-full"
            style={{
              left: `${15 + i * 10}%`,
              top: `${25 + (i % 4) * 15}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <img 
              src={mmaLogo} 
              alt="Man Made Alive" 
              className="h-32 sm:h-40 md:h-48 w-auto invert brightness-90"
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
            className="text-base sm:text-lg text-muted-foreground font-sans font-light mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            A clear, biblical pathway for men who carry responsibility—but want strength with direction, discipline with purpose, and a faith that forms their whole life.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto font-sans font-semibold glow-ember hover:scale-105 transition-transform duration-300"
            >
              👉 Start the Free 30-Day Formation Journey
            </Button>
          </motion.div>

          {/* Trust Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-muted-foreground font-sans tracking-wide"
          >
            Clarity. Discipline. Brotherhood. Rooted in Christ. Built to last.
          </motion.p>
        </motion.div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;