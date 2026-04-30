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
            Most men carrying real responsibility know the feeling: not broken, not in crisis, just off. There's a weight that sits just below the sternum that doesn't have a clean name. The effort is real. The faith is sincere. But direction feels unclear and something deeper feels missing. This free series names what you're carrying, shows you what's been shaping you without your permission, and points you toward the only pattern that actually works.
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
          {/* Section Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground mb-10"
          >
            You didn't wake up one day and decide to <span className="text-gradient-ember">drift.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed mb-8"
          >
            It happened gradually. Responsibilities increased. Expectations multiplied. And somewhere underneath all of it, clarity quietly faded — not through failure or faithlessness, but through the steady accumulation of a life that kept moving faster than your ability to carry it wisely.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed mb-8"
          >
            The result is a feeling most men recognize but rarely name: responsibility without direction. Strength without a clear place to aim it. Faith that's sincere but hasn't fully shaped how you lead, love, or live.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-foreground font-serif font-medium mb-8"
          >
            That ache between who you sense you're supposed to be and how you're actually living — it has a name.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-foreground font-serif font-semibold mb-10"
          >
            It's called <span className="text-gradient-ember">drift</span>. And it's not a character flaw.
          </motion.p>

          {/* Pull Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border-l-4 border-primary pl-6 py-4 mb-10 text-left"
          >
            <p className="text-lg sm:text-xl font-serif italic text-foreground leading-relaxed">
              "Drift is what happens when a man accumulates responsibility faster than he develops the clarity to carry it wisely."
            </p>
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed mb-6"
          >
            Most men in this place aren't lazy. They aren't faithless. They are simply <span className="text-foreground font-medium">unformed</span> — and that is a very different problem, with a very different solution.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg sm:text-xl text-foreground font-serif font-semibold"
          >
            <span className="text-gradient-ember">Man Made Alive</span> exists for that problem.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
