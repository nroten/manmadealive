import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PillarCardProps {
  pillarNumber: number;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  icon: LucideIcon;
  delay?: number;
}

const PillarCard = ({ 
  pillarNumber, 
  title, 
  problem, 
  solution,
  outcome, 
  icon: Icon,
  delay = 0 
}: PillarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      <div className="relative bg-card border border-border/50 rounded-lg p-8 sm:p-10 h-full hover:border-primary/30 transition-all duration-500">
        {/* Pillar number badge */}
        <div className="absolute -top-4 left-8">
          <span className="bg-secondary text-muted-foreground text-xs font-sans font-semibold tracking-widest uppercase px-4 py-2 rounded-sm">
            Pillar {pillarNumber}
          </span>
        </div>

        {/* Icon */}
        <div className="mb-6 mt-4">
          <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="w-7 h-7 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-6 text-foreground">
          {title}
        </h3>

        {/* The Problem You're Facing */}
        <div className="mb-8">
          <h4 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            The Problem You're Facing
          </h4>
          <p className="font-sans text-base leading-relaxed text-muted-foreground">
            {problem}
          </p>
        </div>

        {/* How MMA Helps */}
        <div className="mb-8">
          <h4 className="font-sans text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            How MMA Helps
          </h4>
          <p className="font-sans text-base leading-relaxed text-foreground">
            {solution}
          </p>
        </div>

        {/* The Outcome */}
        <div className="pt-6 border-t border-border/50">
          <h4 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            The Outcome
          </h4>
          <p className="font-sans text-base leading-relaxed text-foreground italic">
            {outcome}
          </p>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default PillarCard;