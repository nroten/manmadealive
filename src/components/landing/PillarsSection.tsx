import { motion } from "framer-motion";
import { Compass, Flame, Heart, Users } from "lucide-react";
import PillarCard from "./PillarCard";
import { IronTexture, WoodGrainPattern } from "./BackgroundTextures";

const pillars = [
  {
    pillarNumber: 1,
    title: "Responsibility Without Clarity",
    problem: "You're carrying weight—leading at work, serving at home, showing up at church—but no one ever taught you what biblical manhood actually looks like. You feel the pressure of responsibility without the clarity of direction. You have strength, but you don't know where to aim it.",
    solution: "Man Made Alive gives you a biblical vision of manhood rooted in Christ—not cultural masculinity, not vague spirituality, but clarity drawn from Scripture and shaped by the Holy Spirit. You'll learn the four concrete arenas where biblical manhood is actually lived: Shield, Shepherd, Supply, and Sacrifice. You'll know exactly where to focus and how to lead faithfully.",
    outcome: "Confidence replaces confusion. Responsibility gains direction. You lead with purpose instead of pressure.",
    icon: Compass,
  },
  {
    pillarNumber: 2,
    title: "Discipline That Doesn't Last",
    problem: "You've tried harder. You've made commitments—to pray more, lead better, be present. But willpower fades. Motivation fluctuates. Discipline collapses under the weight of real life, and shame quietly creeps in.",
    solution: "MMA teaches training, not trying. You'll learn how real spiritual formation happens—not through bursts of intensity, but through small, faithful rhythms that align your life with the new life you've already been given in Christ. Discipline becomes a sustainable practice, not a burden. And when you stumble, you'll learn how to return, not restart.",
    outcome: "Discipline becomes sustainable. Shame loses its grip. When you stumble, you return instead of quitting.",
    icon: Flame,
  },
  {
    pillarNumber: 3,
    title: "Faith Without Formation",
    problem: "You believe the right things. You go to church. You pray. But your faith hasn't fully shaped how you live, lead, or love. Leadership feels heavy. Spiritual growth feels lonely. You know something more is possible—but you're not sure how to get there.",
    solution: "MMA offers a formation pathway where Scripture, prayer, and the work of the Holy Spirit shape your instincts over time—not in isolation, but alongside other men walking the same road. This isn't about performing better. It's about being formed into the image of Christ so your strength serves others and your life glorifies God.",
    outcome: "Your faith becomes embodied. Strength serves instead of strains. You experience the joy of being a man fully alive in Christ—for the glory of God.",
    icon: Heart,
  },
  {
    pillarNumber: 4,
    title: "Growing Alone",
    problem: "You've tried to grow on your own. You've read the books, listened to the podcasts, made the commitments—but you're doing it alone. There's no one checking in. No one to process with. No brothers who actually understand what you're facing. Isolation makes everything harder.",
    solution: "MMA connects you with other men on the same road. Not accountability for its own sake, but real brotherhood—men who are being formed in Christ together. You'll have a place to process honestly, return when you stumble, and celebrate small faithfulness. Formation doesn't happen in isolation. It happens in relationship.",
    outcome: "You stop fighting alone. Brotherhood replaces isolation. Growth becomes sustainable because you're walking it out alongside men who get it.",
    icon: Users,
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
            The Four <span className="text-gradient-ember">Pillars</span> of Biblical Formation
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            The four biggest obstacles standing between you and the man God is calling you to become—and how MMA addresses each one.
          </p>
        </motion.div>

        {/* Pillars Grid - 2x2 on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar, idx) => (
            <PillarCard 
              key={pillar.pillarNumber} 
              {...pillar} 
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;