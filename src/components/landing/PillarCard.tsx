import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PillarCardProps {
  pillarNumber: number;
  title: string;
  problem: string;
  outcome: string;
  result: string[];
  icon: LucideIcon;
  delay?: number;
}

const PillarCard = ({ 
  pillarNumber, 
  title, 
  problem, 
  outcome, 
  result, 
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

        {/* The Problem */}
        <div className="mb-8">
          <h4 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            The Problem
          </h4>
          <p className="font-sans text-base leading-relaxed text-muted-foreground">
            {problem}
          </p>
        </div>

        {/* The Outcome */}
        <div className="mb-8">
          <h4 className="font-sans text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            The Outcome
          </h4>
          <p className="font-sans text-base leading-relaxed text-foreground">
            {outcome}
          </p>
        </div>

        {/* Result */}
        <div className="pt-6 border-t border-border/50">
          <h4 className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Result
          </h4>
          <ul className="space-y-2">
            {result.map((item, idx) => (
              <li key={idx} className="font-sans text-base text-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default PillarCard;