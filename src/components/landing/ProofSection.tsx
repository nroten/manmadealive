import { motion } from "framer-motion";
import { BookOpen, Church, Heart, Scroll, Mountain, GraduationCap } from "lucide-react";
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
    <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
        <div
          className="absolute top-1/4 right-1/4 w-[700px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(var(--gold)) 0%, transparent 70%)",
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
          className="text-center mb-16"
        >
          <span className="eyebrow inline-flex items-center gap-3 mb-6">
            <span className="w-7 h-px bg-gold" />
            ◆ About Nate
            <span className="w-7 h-px bg-gold" />
          </span>
          <h2 className="font-display font-bold uppercase tracking-tight leading-[1.02] text-foreground text-3xl sm:text-4xl md:text-5xl">
            I didn't figure this out.<br />
            <span className="accent-italic">I lived my way into it.</span>
          </h2>
        </motion.div>

        {/* Identity Card with Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative bg-card border border-gold/25 rounded-2xl p-7 sm:p-8 mb-12 overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-24 w-72 h-72 rounded-full opacity-15 blur-[80px] pointer-events-none"
            style={{ background: "hsl(var(--gold))" }}
          />

          <div className="relative flex flex-col sm:flex-row items-center gap-6">
            {/* Photo */}
            <div className="relative flex-shrink-0">
              <div
                aria-hidden="true"
                className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-gold/40 via-transparent to-mma-green/30 blur-md"
              />
              <img
                src={pastorNate}
                alt="Pastor Nate, planting pastor of Ashe Alliance Church in the mountains of North Carolina"
                className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover object-[center_5%] border-2 border-gold/40 shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Name + role */}
            <div className="text-center sm:text-left flex-1">
              <p className="font-mono-tech text-[10px] font-bold uppercase tracking-[0.22em] text-gold-light mb-2">
                ◆ Meet Pastor Nate
              </p>
              <h3 className="font-display font-bold uppercase text-2xl sm:text-3xl tracking-tight text-foreground mb-2">
                Nate Roten
              </h3>
              <p className="font-italic text-base text-muted-foreground flex items-center justify-center sm:justify-start gap-2">
                <Mountain className="w-4 h-4 flex-shrink-0 text-gold-light" />
                Planting Pastor · Ashe Alliance Church, NC
              </p>
            </div>
          </div>
        </motion.div>

        {/* Story Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-7 mb-14"
        >
          <p className="font-sans text-base sm:text-lg leading-relaxed text-foreground/90">
            My name is Nate. I'm the planting pastor of Ashe Alliance Church in the mountains of North Carolina — sent out in 2022 to lead a new church in a small mountain town. I've been married for over 20 years. I have three kids, including a teenage son.
          </p>

          <p className="font-sans text-base sm:text-lg leading-relaxed text-foreground/90">
            I wasn't taught biblical manhood growing up. Early in marriage and fatherhood, I led my home without the clarity or formation I needed —{" "}
            <em className="font-italic-accent text-gold-light">and the people I loved paid for it.</em>{" "}
            That's not easy to say. But it's true. And it's the core reason Man Made Alive exists.
          </p>

          <p className="font-sans text-base sm:text-lg leading-relaxed text-foreground/90">
            Over 20 years of marriage, fatherhood, and pastoral ministry, I learned what real formation looks like:{" "}
            <em className="font-italic-accent text-gold-light">slow, honest, and deeply rooted in Scripture.</em>{" "}
            Not a system invented by someone who figured it all out — but a pathway built from the trenches of real life and refined through years of watching men struggle with the same tensions I once did.
          </p>

          {/* Inset diagnostic mirror — italic Newsreader on tinted strip */}
          <div className="my-10 py-6 px-7 sm:px-9 bg-card/60 border-l-2 border-slate/40 rounded-r-xl">
            <p className="font-mono-tech text-[10px] font-bold uppercase tracking-[0.22em] text-slate-light mb-3">
              ▲ The same tensions I once carried
            </p>
            <p className="font-italic text-lg sm:text-xl text-foreground/95 leading-snug">
              Pressure without clarity. Discipline that didn't last. Faith that was sincere but hadn't fully shaped how I lived.
            </p>
          </div>

          <p className="font-sans text-base sm:text-lg leading-relaxed text-foreground/90">
            I hold a Master's degree in Discipleship and Christian Ministry from Liberty University. But the curriculum you're about to encounter wasn't built in a classroom. It was built{" "}
            <em className="font-italic-accent text-gold-light">in a marriage, in a home, in a church</em>, alongside men who needed something more durable than information and more honest than hype.
          </p>
        </motion.div>

        {/* Pull Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative my-14 mx-auto max-w-2xl border border-gold/30 rounded-xl py-8 px-8 sm:px-12 bg-gradient-to-br from-gold/[0.05] to-mma-green/[0.03] overflow-hidden"
        >
          <span
            aria-hidden="true"
            className="absolute -top-2 left-6 font-italic text-7xl text-gold/40 leading-none"
          >
            "
          </span>
          <p className="font-italic text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed text-center">
            This is a biblical pathway{" "}
            <span className="text-gold">shaped by Scripture</span>, tested in real life, and walked alongside other men.
          </p>
          <p className="font-display font-bold uppercase text-center text-base sm:text-lg tracking-[0.18em] mt-5 text-foreground">
            <span className="accent-italic">I'm still on it.</span>
          </p>
        </motion.blockquote>

        {/* Credibility Markers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="font-mono-tech text-[10px] font-bold uppercase tracking-[0.22em] text-gold-light text-center mb-8">
            ◆ What Nate brings to this work
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credibilityMarkers.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.08 }}
                viewport={{ once: true }}
                className="group flex items-start gap-3 bg-card/60 border border-gold/20 rounded-xl p-5 hover:border-gold/45 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-5 h-5 text-gold-light" strokeWidth={1.6} />
                </div>
                <p className="font-sans text-sm text-foreground/90 leading-relaxed pt-1.5">
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
