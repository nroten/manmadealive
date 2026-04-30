import { motion } from "framer-motion";
import { ArrowRight, Eye, Dumbbell, Crosshair, Users, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import brotherhoodPath from "@/assets/brotherhood-path.jpg";

const stages = [
  {
    name: "TRUTH",
    icon: Eye,
    headline: "Lifting the fog.",
    body: "Naming the drift, exposing the cultural distortions, and anchoring everything in the only pattern that actually works.",
  },
  {
    name: "TRAINING",
    icon: Dumbbell,
    headline: "From trying to training.",
    body: "Building the rhythms and capacity that sustain formation over time, rather than intensity that burns out.",
  },
  {
    name: "TACTICS",
    icon: Crosshair,
    headline: "Where manhood is lived.",
    body: "Four concrete arenas where a man's strength is meant to be directed — and what faithful presence in each one actually looks like.",
  },
  {
    name: "TRACTION",
    icon: Users,
    headline: "Faithfulness over time.",
    body: "Real brotherhood, honest accountability, and the consistent momentum that willpower alone can never sustain.",
  },
  {
    name: "TRIUMPH",
    icon: Mountain,
    headline: "The long arc.",
    body: "Legacy, mission, and the slow faithful work of becoming a man whose life is aimed outward — for the good of others and the glory of God.",
  },
];

const PathwaySection = () => {
  const scrollToForm = () => {
    document.getElementById("conversion-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(var(--mma-green)) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="eyebrow eyebrow-green inline-flex items-center gap-3 mb-6">
            <span className="w-7 h-px bg-mma-green" />
            ◆ The formation pathway · 5 stages
            <span className="w-7 h-px bg-mma-green" />
          </span>

          <h2 className="font-display font-bold uppercase tracking-tight leading-[1.02] text-foreground text-3xl sm:text-4xl md:text-5xl mb-8">
            The fog lifted.<br />
            Now here's <span className="accent-italic-green">the path.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed mb-3">
            The three videos gave you{" "}
            <em className="font-italic-accent text-gold-light">language</em> for what you've been carrying. The Personal Formation Charter gave you a{" "}
            <em className="font-italic-accent text-gold-light">compass</em>.
          </p>
          <p className="font-sans text-base sm:text-lg text-foreground/90 leading-relaxed">
            What comes next is{" "}
            <em className="font-italic-accent text-mma-green-light">the pathway itself</em> — a structured, five-stage formation journey designed to form men into the likeness of Christ, one honest step at a time.
          </p>
        </motion.div>

        {/* Pathway banner — visual proof of the metaphor before the stages list.
            Bookends the Hero (man alone in fog) with this (men together on the path). */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-14 border border-mma-green/25"
        >
          <div
            className="aspect-[21/9] sm:aspect-[21/8] bg-cover bg-center"
            style={{ backgroundImage: `url(${brotherhoodPath})` }}
          />
          {/* Atmospheric overlays — soft darken edges, subtle green wash, bottom fade into card */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,11,0.55),transparent_25%,transparent_75%,rgba(10,10,11,0.55))]"
          />
          {/* Caption */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <span className="font-mono-tech text-[10px] font-bold uppercase tracking-[0.22em] text-mma-green-light mb-2 inline-block">
              ◆ The pathway
            </span>
            <p className="font-italic text-lg sm:text-xl md:text-2xl text-foreground/95 leading-snug max-w-xl">
              Faithful and unhurried.{" "}
              <span className="accent-italic-green">With brothers alongside you.</span>
            </p>
          </div>
        </motion.div>

        {/* Stages — vertical timeline */}
        <div className="relative">
          {/* Vertical connector line — runs from first stage to last */}
          <div
            aria-hidden="true"
            className="absolute left-[27px] sm:left-[35px] top-7 bottom-7 w-px bg-gradient-to-b from-mma-green/40 via-mma-green/20 to-mma-green/0"
          />

          <div className="space-y-5">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const num = String(idx + 1).padStart(2, "0");
              return (
                <motion.div
                  key={stage.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  viewport={{ once: true, margin: "-40px" }}
                  className="relative group"
                >
                  <div className="relative bg-card border border-mma-green/25 rounded-2xl pl-20 sm:pl-24 pr-7 sm:pr-9 py-7 sm:py-8 hover:border-mma-green/55 transition-colors duration-300 overflow-hidden">
                    {/* Tinted radial glow */}
                    <div
                      aria-hidden="true"
                      className="absolute -top-24 -right-24 w-56 h-56 rounded-full opacity-[0.10] blur-[60px] pointer-events-none"
                      style={{ background: "hsl(var(--mma-green))" }}
                    />

                    {/* Number/icon tile — anchored to the timeline */}
                    <div className="absolute top-7 sm:top-8 left-3 sm:left-4 flex flex-col items-center">
                      <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-background border-2 border-mma-green/40 flex items-center justify-center group-hover:bg-mma-green/15 group-hover:border-mma-green/70 transition-all duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-mma-green-light" strokeWidth={1.7} />
                      </div>
                      <span className="font-mono-tech text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-mma-green-light/70 mt-2">
                        {num}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-2">
                        <h3 className="font-display font-bold uppercase text-2xl sm:text-3xl tracking-[0.02em] text-foreground leading-none">
                          {stage.name}
                        </h3>
                        <p className="accent-italic-green text-lg sm:text-xl mt-1 sm:mt-0">
                          {stage.headline}
                        </p>
                      </div>
                      <p className="font-sans text-base text-muted-foreground leading-relaxed">
                        {stage.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing line + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mt-16"
        >
          <p className="font-italic text-xl sm:text-2xl text-foreground/95 leading-snug mb-3">
            This is not a program to complete.
          </p>
          <p className="font-display font-bold uppercase text-2xl sm:text-3xl tracking-tight text-foreground mb-10">
            It is a pathway to{" "}
            <span className="accent-italic-green">walk.</span>
          </p>
          <p className="font-italic text-base sm:text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Slowly. In order. With brothers alongside you.
          </p>

          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-mma-green hover:bg-mma-green-light text-charcoal font-display font-bold uppercase tracking-wider px-10 py-7 text-base sm:text-lg rounded-md animate-pulse-green hover:scale-[1.02] transition-transform border border-mma-green-light"
          >
            Start with the Free Videos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PathwaySection;
