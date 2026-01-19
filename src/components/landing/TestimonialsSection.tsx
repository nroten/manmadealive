import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { ScratchedMetal, IronTexture } from "./BackgroundTextures";

const testimonials = [
  {
    quote: "This put language to what I've felt for years—but never knew how to name.",
    attribution: "Husband and father, North Carolina",
  },
  {
    quote: "For the first time, discipline feels doable instead of defeating.",
    attribution: "Church leader, 8 years in ministry",
  },
  {
    quote: "The Personal Formation Charter gave me a roadmap I can actually use. It's not vague—it's clear and actionable.",
    attribution: "Father of two, small business owner",
  },
  {
    quote: "I didn't realize how much I needed other men until I found them here. I'm not doing this alone anymore.",
    attribution: "Father of three, business owner",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle texture layers */}
      <IronTexture className="text-muted-foreground opacity-30" />
      <ScratchedMetal className="text-foreground opacity-20" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Warm glow accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full opacity-[0.05]"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--primary)) 0%, transparent 70%)'
        }}
      />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
            What Men Are <span className="text-gradient-ember">Saying</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-card border border-border/50 rounded-lg p-8 sm:p-10 h-full hover:border-primary/30 transition-all duration-500">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                {/* Quote text */}
                <blockquote className="font-serif text-xl sm:text-2xl text-foreground leading-relaxed pt-4 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Attribution */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                  <p className="font-sans text-sm text-muted-foreground">
                    {testimonial.attribution}
                  </p>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;