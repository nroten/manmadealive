import { motion } from "framer-motion";
import { Compass, Flame, Heart } from "lucide-react";
import PillarCard from "./PillarCard";
import { IronTexture, WoodGrainPattern, BlueprintGrid } from "./BackgroundTextures";

const pillars = [
  {
    pillarNumber: 1,
    title: "Responsibility Without Clarity",
    problem: "You're carrying weight—at work, at home, in your faith—but no one ever taught you what biblical manhood actually looks like. You feel pressure without direction, strength without alignment.",
    outcome: "MMA gives you clarity. Not cultural masculinity. Not vague spirituality. A biblical vision of manhood rooted in Christ—so you know what you're aiming at and why it matters.",
    result: [
      "Confidence replaces confusion",
      "Responsibility gains direction"
    ],
    icon: Compass,
  },
  {
    pillarNumber: 2,
    title: "Discipline That Doesn't Last",
    problem: "You've tried harder. You've made commitments. You've burned out. Willpower fades. Motivation fluctuates. Shame creeps in.",
    outcome: "MMA teaches training, not trying. You learn how real formation happens—through small, faithful practices that align your life with the new life you've already been given in Christ.",
    result: [
      "Discipline becomes sustainable",
      "Return replaces quitting"
    ],
    icon: Flame,
  },
  {
    pillarNumber: 3,
    title: "Faith Without Formation",
    problem: "You believe the right things—but your faith hasn't fully shaped how you live. Leadership feels heavy. Growth feels lonely. You know something more is possible.",
    outcome: "MMA offers formation, not performance. A pathway where Scripture, prayer, and the work of the Holy Spirit shape your instincts over time—alongside other men walking the same road.",
    result: [
      "Faith becomes embodied",
      "Strength serves others",
      "God is glorified"
    ],
    icon: Heart,
  },
];

const PillarsSection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Rugged texture layers */}
      <IronTexture className="text-stone opacity-50" />
      <WoodGrainPattern className="text-primary opacity-20" />
      
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Corner iron accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-stone/10" />
      <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-stone/10" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-stone/10" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-stone/10" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            The Three <span className="text-gradient-ember">Pillars</span> of Formation
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Addressing the three biggest obstacles between you and the man you're called to become.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {pillars.map((pillar, idx) => (
            <PillarCard 
              key={pillar.pillarNumber} 
              {...pillar} 
              delay={idx * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;