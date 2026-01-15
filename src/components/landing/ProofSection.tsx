import { motion } from "framer-motion";
import { BookOpen, Church, Users, Target } from "lucide-react";
import { KevlarPattern, TopographyPattern, ScratchedMetal } from "./BackgroundTextures";

const credentials = [
  { icon: Church, text: "Developed by Pastor Nate, pastor of Ashe Alliance Church" },
  { icon: BookOpen, text: "Grounded in Scripture, not trends" },
  { icon: Users, text: "Designed for men with real responsibilities" },
  { icon: Target, text: "Focused on formation, not hype" },
];

const testimonials = [
  "This put language to what I've felt for years—but never knew how to name.",
  "For the first time, discipline feels doable instead of defeating.",
  "This didn't add pressure—it gave me clarity.",
];

const ProofSection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Rugged texture layers */}
      <KevlarPattern className="text-foreground opacity-40" />
      <TopographyPattern className="text-primary opacity-25" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      {/* Diagonal iron stripes accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, hsl(var(--stone)) 20px, hsl(var(--stone)) 21px)'
        }} />
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Built by a Pastor. Shaped by Scripture.{" "}
            <span className="text-gradient-ember">Tested in Real Life.</span>
          </h2>
        </motion.div>

        {/* Credentials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {credentials.map((cred, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-4 p-5 bg-card/50 border border-border/30 rounded-lg"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <cred.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-sans text-sm text-foreground leading-snug">
                {cred.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center font-sans text-sm uppercase tracking-widest text-muted-foreground mb-10"
          >
            What Men Are Saying
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((quote, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative bg-card border border-border/50 rounded-lg p-8 h-full">
                  {/* Quote mark */}
                  <div className="absolute -top-3 left-6">
                    <span className="text-5xl text-primary/30 font-serif leading-none">"</span>
                  </div>
                  
                  <blockquote className="font-serif text-xl sm:text-2xl text-foreground leading-relaxed pt-4">
                    {quote}
                  </blockquote>
                  
                  {/* Decorative line */}
                  <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;