import { motion } from "framer-motion";
import { LucideIcon, AlertTriangle, ArrowRight } from "lucide-react";

interface PillarCardProps {
  pillarNumber: number;
  title: string;
  titleAccent?: string; // optional italic-accented suffix on the title
  problem: string;
  solution: string;
  outcome: string;
  icon: LucideIcon;
  delay?: number;
}

const PillarCard = ({
  pillarNumber,
  title,
  titleAccent,
  problem,
  solution,
  outcome,
  icon: Icon,
  delay = 0,
}: PillarCardProps) => {
  const num = String(pillarNumber).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-card border border-gold/25 rounded-2xl overflow-hidden hover:border-gold/50 transition-colors duration-500"
    >
      {/* Tinted radial glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 w-72 h-72 rounded-full opacity-15 blur-[80px] pointer-events-none"
        style={{ background: "hsl(var(--gold))" }}
      />

      <div className="relative p-8 sm:p-10">
        {/* HEADER row — pillar number + icon + title */}
        <div className="flex items-start gap-5 mb-8">
          {/* Number tile */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <Icon className="w-7 h-7 text-gold-light" strokeWidth={1.6} />
            </div>
            <span className="font-mono-tech text-[10px] font-bold tracking-[0.16em] text-gold-light/70 mt-2">
              PILLAR {num}
            </span>
          </div>

          {/* Title */}
          <div className="flex-1 pt-1">
            <h3 className="font-display font-bold uppercase text-2xl sm:text-3xl tracking-tight leading-[1.05] text-foreground">
              {title}
              {titleAccent && (
                <>
                  {" "}
                  <span className="accent-italic">{titleAccent}</span>
                </>
              )}
            </h3>
          </div>
        </div>

        {/* PROBLEM — slate diagnostic */}
        <div className="border-l-2 border-slate/40 pl-5 mb-7">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-3.5 h-3.5 text-slate-light" strokeWidth={2.2} />
            <span className="font-mono-tech text-[10px] font-bold uppercase tracking-[0.22em] text-slate-light">
              ▲ The diagnosis
            </span>
          </div>
          <p className="font-sans text-base leading-relaxed text-muted-foreground">
            {problem}
          </p>
        </div>

        {/* SOLUTION — gold prescription */}
        <div className="border-l-2 border-gold/50 pl-5 mb-7">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gold text-sm leading-none">◆</span>
            <span className="font-mono-tech text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
              How MMA helps
            </span>
          </div>
          <p className="font-sans text-base leading-relaxed text-foreground/95">
            {solution}
          </p>
        </div>

        {/* OUTCOME — green forward, italic */}
        <div className="border-l-2 border-mma-green/60 pl-5">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight className="w-3.5 h-3.5 text-mma-green-light" strokeWidth={2.4} />
            <span className="font-mono-tech text-[10px] font-bold uppercase tracking-[0.22em] text-mma-green-light">
              The outcome
            </span>
          </div>
          <p className="font-italic text-lg leading-relaxed text-foreground/95">
            {outcome}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default PillarCard;
