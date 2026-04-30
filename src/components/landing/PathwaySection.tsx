import { motion } from "framer-motion";
import { ArrowRight, Eye, Dumbbell, Crosshair, Users, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TopographyPattern, IronTexture } from "./BackgroundTextures";

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
    const formSection = document.getElementById("conversion-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Texture layers */}
      <TopographyPattern className="text-muted-foreground opacity-20" />
      <IronTexture className="text-foreground opacity-15" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            The fog lifted. Now here's <span className="text-gradient-ember">the path.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base uppercase tracking-widest text-muted-foreground mb-8">
            The Man Made Alive formation pathway — five stages, one direction.
          </p>
          <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
            The three videos gave you language for what you've been carrying. The Personal Formation Charter gave you a compass. What comes next is the pathway itself — a structured, five-stage formation journey designed to form men into the likeness of Christ, one honest step at a time.
          </p>
        </motion.div>

        {/* Stages */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-card/60 border border-border/50 rounded-lg p-6 sm:p-8 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-5 sm:gap-6">
                  {/* Stage number + icon */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <span className="font-sans text-xs text-muted-foreground tracking-widest mt-2">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-2">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground tracking-wide">
                        {stage.name}
                      </h3>
                      <p className="font-serif text-lg sm:text-xl text-primary italic">
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

        {/* Closing line + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-serif text-xl sm:text-2xl text-foreground/90 italic leading-relaxed mb-8">
            This is not a program to complete. It is a pathway to walk — slowly, in order, with brothers alongside you.
          </p>
          <Button
            size="lg"
            onClick={scrollToForm}
            className="text-base sm:text-lg py-6 px-8 h-auto font-sans font-semibold glow-ember hover:scale-[1.02] transition-transform duration-300"
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
