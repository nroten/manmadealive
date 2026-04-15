import { motion } from "framer-motion";
import mmaLogo from "@/assets/mma-logo.png";
import { GLSLHills } from "./GLSLHills";
import { Button } from "@/components/ui/button";
import { TopographyPattern, IronTexture } from "./BackgroundTextures";

const HeroSection = () => {
  const handleCTAClick = () => {
    document.getElementById('conversion-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero with 3D Hills Background */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
        {/* 3D Hills Background */}
        <GLSLHills className="pointer-events-none" />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/60 z-[5]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img 
              src={mmaLogo} 
              alt="Man Made Alive" 
              className="h-24 sm:h-32 md:h-40 w-auto invert brightness-90"
            />
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base tracking-[0.2em] uppercase text-muted-foreground font-sans font-medium mb-6"
          >
            A free 3-part video series for Christian men
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif font-bold tracking-tight mb-2"
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              Something <span className="text-gradient-ember">feels off.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-muted-foreground mb-8"
          >
            This is <span className="text-gradient-ember">why</span> — and what to do about it.
          </motion.p>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg text-muted-foreground font-sans font-light max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Most men carrying real responsibility feel a quiet, persistent sense that something isn't right. Not broken — just off. The weight is real, the effort is genuine, but direction feels unclear and formation feels missing. This free series names what you're feeling, shows you what's been shaping you without your knowledge, and points you toward the only pattern that actually works.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col items-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base sm:text-lg rounded-md"
              onClick={handleCTAClick}
            >
              Watch the Free Series →
            </Button>
            <p className="text-sm text-muted-foreground font-sans max-w-md">
              Three videos. No fluff. No hype. Just clarity about who you're becoming and why it matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section Below the Hills */}
      <section className="relative bg-background py-20 sm:py-28 lg:py-32 overflow-hidden">
        {/* Layered Masculine Background Textures */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <TopographyPattern className="text-primary opacity-60" />
          <IronTexture className="text-muted-foreground opacity-40" />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-[0.08]"
            style={{
              background: 'radial-gradient(ellipse at center, hsl(var(--primary)) 0%, transparent 70%)'
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--background))_100%)]" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              onClick={handleCTAClick}
            >
              Watch the Free Series →
            </Button>
            <p className="text-sm text-muted-foreground font-sans max-w-md">
              Three videos. No fluff. No hype. Just clarity about who you're becoming and why it matters.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
