import { motion } from "framer-motion";
import { BookOpen, Church, Heart, Scroll, Mountain, GraduationCap } from "lucide-react";
import { KevlarPattern, TopographyPattern } from "./BackgroundTextures";
import pastorNate from "@/assets/pastor-nate.png";

const credibilityMarkers = [
  {
    icon: Church,
    text: "Planting pastor, Ashe Alliance Church, NC (2022–present)",
  },
  {
    icon: Heart,
    text: "20+ years of marriage and fatherhood",
  },
  {
    icon: GraduationCap,
    text: "M.A. in Discipleship & Christian Ministry, Liberty University",
  },
  {
    icon: BookOpen,
    text: "Built on Scripture, not cultural trends",
  },
  {
    icon: Scroll,
    text: "Tested in real pastoral ministry and family life",
  },
];

const ProofSection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Rugged texture layers */}
      <KevlarPattern className="text-foreground opacity-40" />
      <TopographyPattern className="text-primary opacity-25" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      {/* Diagonal iron stripes accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, hsl(var(--stone)) 20px, hsl(var(--stone)) 21px)",
          }}
        />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <p className="font-sans text-sm uppercase tracking-widest text-primary mb-4">
            About Nate
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            I didn't figure this out.{" "}
            <span className="text-gradient-ember">I lived my way into it.</span>
          </h2>
        </motion.div>

        {/* Personal Narrative */}
        <div className="max-w-3xl mx-auto mb-16">
          {/* Identity Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 mb-10 pb-8 border-b border-border/40"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mountain className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Pastor Nate
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                Planting Pastor • Ashe Alliance Church • Mountains of North Carolina
              </p>
            </div>
          </motion.div>

          {/* Story Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="font-sans text-base sm:text-lg leading-relaxed text-foreground/90">
              My name is Nate. I'm the planting pastor of Ashe Alliance Church in the mountains of North Carolina — sent out in 2022 to lead a new church in a small mountain town. I've been married for over 20 years. I have three kids, including a teenage son.
            </p>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-foreground/90">
              I wasn't taught biblical manhood growing up. Early in marriage and fatherhood, I led my home without the clarity or formation I needed — <span className="text-foreground font-medium">and the people I loved paid for it.</span> That's not easy to say. But it's true. And it's the core reason Man Made Alive exists.
            </p>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-foreground/90">
              Over 20 years of marriage, fatherhood, and pastoral ministry, I learned what real formation looks like: <span className="text-foreground font-medium">slow, honest, and deeply rooted in Scripture.</span> Not a system invented by someone who figured it all out — but a pathway built from the trenches of real life and refined through years of watching men struggle with the same tensions I once did.
            </p>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-foreground/90 italic">
              Pressure without clarity. Discipline that didn't last. Faith that was sincere but hadn't fully shaped how I lived.
            </p>

            <p className="font-sans text-base sm:text-lg leading-relaxed text-foreground/90">
              I hold a Master's degree in Discipleship and Christian Ministry from Liberty University. But the curriculum you're about to encounter wasn't built in a classroom. It was built in a marriage, in a home, in a church, alongside men who needed something more durable than information and more honest than hype.
            </p>
          </motion.div>

          {/* Pull Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="my-12 py-6 border-l-4 border-primary pl-8"
          >
            <p className="font-serif text-xl sm:text-2xl italic text-foreground leading-relaxed">
              "This is a biblical pathway shaped by Scripture, tested in real life, and walked alongside other men. I'm still on it."
            </p>
          </motion.div>
        </div>

        {/* Credibility Markers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="font-sans text-sm uppercase tracking-widest text-muted-foreground text-center mb-8">
            Credibility Markers
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credibilityMarkers.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.08 }}
                viewport={{ once: true }}
                className="group flex items-start gap-3 bg-card/50 border border-border/30 rounded-lg p-5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-sans text-sm text-foreground/90 leading-relaxed pt-1">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;
