import { motion } from "framer-motion";
import { CrosshairIcon, RotateCcw, Sprout, HandshakeIcon } from "lucide-react";
import PillarCard from "./PillarCard";
import { IronTexture, WoodGrainPattern } from "./BackgroundTextures";

const pillars = [
  {
    pillarNumber: 1,
    title: "Responsibility Without Clarity",
    problem: "You're carrying weight — leading at work, serving at home, showing up at church — but no one ever gave you a clear, biblical picture of what you're actually supposed to be aiming at. You have strength. You don't know where to direct it.",
    solution: "You'll receive a biblical vision of manhood anchored in Christ — not cultural trends, not vague spirituality, but clarity drawn from Scripture. You'll gain a concrete framework for where a man's strength is actually meant to be directed — four specific arenas of responsibility where faith either takes shape in real life or quietly remains abstract. You'll know exactly where to focus and what faithful presence looks like in each one.",
    outcome: "Confidence replaces confusion. Responsibility gains direction. You lead with purpose instead of pressure.",
    icon: CrosshairIcon,
  },
  {
    pillarNumber: 2,
    title: "Discipline That Doesn't Last",
    problem: "You've tried harder. Made commitments to pray more, lead better, be present. But willpower fades. Motivation fluctuates. Discipline collapses under the weight of real life — and the quiet creep of shame makes the next attempt feel less worth starting.",
    solution: "MMA teaches training, not trying. You'll learn how real spiritual formation happens — not through bursts of intensity, but through small, faithful rhythms that align your life with the new life you've already been given in Christ. And when you stumble, you'll learn how to return without restarting from scratch.",
    outcome: "Discipline becomes sustainable. Shame loses its grip. You return after inconsistency instead of quitting.",
    icon: RotateCcw,
  },
  {
    pillarNumber: 3,
    title: "Faith Without Formation",
    problem: "You believe the right things. You go to church. You pray. But your faith hasn't fully shaped how you live, lead, or love. Something more feels possible — but you're not sure how to get from knowing to becoming.",
    solution: "MMA offers a formation pathway where Scripture, prayer, and the work of the Holy Spirit shape your instincts over time — not through performance, but through a process of becoming. This is not about doing better. It's about being formed into the image of Christ so your strength serves others and your life glorifies God.",
    outcome: "Your faith becomes embodied. Strength serves instead of strains. You experience what it means to be a man fully alive in Christ — for the glory of God.",
    icon: Sprout,
  },
  {
    pillarNumber: 4,
    title: "Growing Alone",
    problem: "You've read the books, listened to the podcasts, made the commitments. But you're doing it alone. There's no one to process with. No brothers who understand what you're actually facing. And isolation doesn't just make growth harder — it makes it nearly impossible to sustain.",
    solution: "MMA connects you with other men on the same road. Not accountability for its own sake, but real brotherhood — men being formed in Christ together. A place to process honestly, return when you stumble, and celebrate small faithfulness over time. Men are not formed in isolation. They never have been.",
    outcome: "You stop fighting alone. Brotherhood replaces isolation. Growth becomes sustainable because you're walking it with men who understand.",
    icon: HandshakeIcon,
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
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Why good men stay stuck — and what actually{" "}
            <span className="text-gradient-ember">changes them.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Most programs are built to deliver information. A vision, a framework, good teaching. And information, on its own, does not produce lasting change. It produces temporary motivation. Motivation has a short shelf life.
          </p>
          <p className="font-sans text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            What produces durable change is <span className="text-foreground font-medium">formation</span>. And formation is not the same thing as information. It works from the inside out. It doesn't just change what a man does — it changes who a man is. Slowly. In order. With the right structure. Over time.
          </p>
          <p className="font-sans text-base sm:text-lg text-foreground font-medium max-w-3xl mx-auto">
            Man Made Alive is built for formation. Every module addresses one of the four biggest obstacles between a man and the life he was made for.
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