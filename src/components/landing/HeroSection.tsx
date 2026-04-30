import { motion } from "framer-motion";
import mmaLogo from "@/assets/mma-logo.png";
import heroFog from "@/assets/hero-fog-driving.jpg";
import archerImage from "@/assets/archer-no-target.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleCTAClick = () => {
    document.getElementById("conversion-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ============================================================
          HERO — full-bleed painterly fog driving image as backdrop.
          Same visual world as V1 video so a man who watched the
          series sees instant continuity when he lands here.
          ============================================================ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
        {/* Painterly editorial backdrop */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroFog})` }}
        />
        {/* Atmospheric overlays — radial darken so text is readable, gold-warm glow */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div
          className="absolute inset-0 z-[2] pointer-events-none animate-drift-slow"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, hsl(var(--gold) / 0.10) 0%, transparent 55%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img
              src={mmaLogo}
              alt="Man Made Alive"
              className="h-20 sm:h-24 md:h-28 w-auto invert brightness-95 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
            />
          </motion.div>

          {/* Eyebrow tag with pulsing gold glow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-2 mb-8 border border-gold/40 bg-gold/[0.06] rounded-full font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold-light animate-pulse-gold"
          >
            ◆ A Free 3-Part Video Series for Christian Men
          </motion.span>

          {/* Main Headline — Oswald with Newsreader italic accent */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-bold uppercase tracking-tight leading-[0.95] mb-5 text-foreground drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              Something feels{" "}
              <span className="accent-italic">off.</span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-italic text-xl sm:text-2xl md:text-3xl text-gold-light mb-10 max-w-3xl mx-auto leading-snug"
          >
            This is <span className="accent-italic">why</span> — and what to do about it.
          </motion.p>

          {/* Standfirst */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            You're showing up. Carrying responsibilities. Doing your best. But somewhere underneath all of it is a tension that won't go away — the sense that you're moving forward{" "}
            <em className="font-italic-accent text-gold-light">without knowing where you're actually headed</em>.
          </motion.p>

          {/* Brand chip row with descriptor */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col items-center mb-10 max-w-2xl"
          >
            <p className="font-display text-[11px] sm:text-xs uppercase tracking-[0.22em] text-foreground/60 mb-3">
              For the man who's:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="brand-chip green">Still showing up</span>
              <span className="brand-chip">Still working hard</span>
              <span className="brand-chip">Still in the pew</span>
              <span className="brand-chip gold">Still feels off</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="bg-mma-green hover:bg-mma-green-light text-charcoal font-display font-bold uppercase tracking-wider px-10 py-7 text-base sm:text-lg rounded-md animate-pulse-green hover:scale-[1.02] transition-transform border border-mma-green-light"
            >
              Watch the Free Series →
            </Button>
            <p className="font-sans text-sm text-foreground/70 max-w-md">
              Three videos. No fluff. No hype. <em className="font-italic-accent text-gold-light">Just clarity</em> about who you're becoming and why it matters.
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1.2, delay: 1.4 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-foreground/60">
              Read on
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent animate-pulse-glow" />
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          DRIFT — the body section that names the tension. Layered with
          a subtle archer image as atmospheric backdrop, italic-accent
          treatment on every key word, a pull quote callout, and a
          small SVG "one degree off" diagram as visual proof.
          ============================================================ */}
      <section className="relative bg-background py-24 sm:py-32 overflow-hidden">
        {/* Subtle backdrop — archer-no-target image at very low opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
          style={{ backgroundImage: `url(${archerImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-[0.10] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(var(--gold)) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <span className="eyebrow inline-flex items-center gap-3">
              <span className="w-7 h-px bg-gold" />
              Name the tension
              <span className="w-7 h-px bg-gold" />
            </span>
          </motion.div>

          {/* Section headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold uppercase text-center tracking-tight leading-[1.02] text-foreground mb-12 text-3xl sm:text-4xl md:text-5xl"
          >
            You didn't wake up one day<br />
            and decide to <span className="accent-italic">drift.</span>
          </motion.h2>

          {/* Body paragraphs */}
          <div className="space-y-6 text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              It happened gradually, <em className="font-italic-accent text-gold-light">the way it always does</em> — your responsibilities increase, expectations placed on your shoulders multiply, and somewhere in the middle of all of it, the clarity of who you are and what your mission is quietly fades. This doesn't always happen through failure or faithlessness, but through the steady accumulation of life circumstances that kept moving faster than your ability to carry them wisely.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              The result is something most men recognize <em className="font-italic-accent text-gold-light">the moment it's named</em>: you continue to carry responsibility without a sense of direction, wield strength without a clear place to aim it, and possess a faith that's sincere but hasn't fully shaped the way you lead, love, or live.
            </motion.p>
          </div>

          {/* SVG chart: 1° off → entirely different destination
              Visual proof of the math before the closing beat names it. */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="my-14 flex flex-col items-center"
          >
            <span className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 mb-4">
              // 1° off · sustained over time
            </span>
            <svg viewBox="0 0 480 100" className="w-full max-w-lg h-auto" aria-hidden="true">
              <defs>
                <linearGradient id="trueLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="hsl(var(--gold))" stopOpacity="0.9" />
                  <stop offset="1" stopColor="hsl(var(--gold))" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="driftLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="hsl(var(--destructive))" stopOpacity="0.4" />
                  <stop offset="1" stopColor="hsl(var(--destructive))" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              {/* origin point */}
              <circle cx="20" cy="50" r="5" fill="hsl(var(--gold))" />
              <text x="20" y="80" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="hsl(var(--muted-foreground))">START</text>
              {/* true heading */}
              <line x1="22" y1="50" x2="455" y2="20" stroke="url(#trueLine)" strokeWidth="1.8" strokeDasharray="6,5" />
              <circle cx="455" cy="20" r="5" fill="hsl(var(--gold))" />
              <text x="455" y="14" textAnchor="end" fontFamily="Oswald" fontSize="11" fontWeight="700" fill="hsl(var(--gold))">INTENDED</text>
              {/* drift heading */}
              <path d="M 22 50 Q 240 60 455 80" fill="none" stroke="url(#driftLine)" strokeWidth="2.2" />
              <circle cx="455" cy="80" r="5" fill="hsl(var(--destructive))" />
              <text x="455" y="98" textAnchor="end" fontFamily="Oswald" fontSize="11" fontWeight="700" fill="hsl(var(--destructive))">ACTUAL</text>
              {/* gap annotation */}
              <line x1="468" y1="22" x2="468" y2="78" stroke="hsl(var(--destructive))" strokeWidth="1" strokeDasharray="2,3" opacity="0.6" />
              <text x="476" y="55" fontFamily="Oswald" fontSize="10" fontWeight="700" fill="hsl(var(--destructive))">1°</text>
            </svg>
          </motion.div>

          {/* Closing beat — the lines earned by everything above. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="text-center my-16 max-w-3xl mx-auto"
          >
            <p className="font-italic text-xl sm:text-2xl md:text-3xl text-foreground/90 leading-snug mb-4">
              That ache between who you sense you're supposed to be and how you're actually living
            </p>
            <p className="font-display font-bold uppercase text-2xl sm:text-3xl md:text-4xl tracking-tight mb-3">
              <span className="accent-italic">has a name.</span>
            </p>
            <p className="font-display font-bold uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight">
              It is called <span className="accent-italic">DRIFT.</span>
            </p>
          </motion.div>

          {/* Pull quote — definition that follows the naming.
              Newsreader italic on tinted gold/green card. */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="relative my-14 mx-auto max-w-2xl border border-gold/30 rounded-xl py-8 px-8 sm:px-12 bg-gradient-to-br from-gold/[0.05] to-mma-green/[0.03] overflow-hidden"
          >
            <span
              aria-hidden="true"
              className="absolute -top-2 left-6 font-italic text-7xl text-gold/40 leading-none"
            >
              "
            </span>
            <p className="font-italic text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed text-center">
              Drift is unintentionally veering off course. When you are <span className="text-gold">one degree off, sustained over time</span>, you arrive at an entirely different life than the one you intended.
            </p>
          </motion.blockquote>

          {/* Closing copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-base sm:text-lg text-muted-foreground text-center leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            Most men in this place aren't lazy. They aren't faithless. They are simply{" "}
            <span className="font-italic-accent text-foreground">unformed</span> — and that is a very different problem, with a very different solution.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-display font-bold uppercase text-center text-2xl sm:text-3xl tracking-tight"
          >
            <span className="accent-italic">Man Made Alive</span> exists for that problem.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
