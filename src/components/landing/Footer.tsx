import { motion } from "framer-motion";
import mmaLogo from "@/assets/mma-logo.png";

const Footer = () => {
  return (
    <footer className="relative py-20 sm:py-28 border-t border-gold/15 bg-background overflow-hidden">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-background" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(var(--gold)) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Irenaeus Quote — the brand thesis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="font-mono-tech text-[10px] font-bold uppercase tracking-[0.22em] text-gold mb-5 inline-block">
            ◆ Irenaeus · 2nd century
          </span>
          <blockquote className="font-display font-bold uppercase text-3xl sm:text-4xl md:text-5xl text-foreground leading-[1.05] tracking-tight max-w-3xl mx-auto">
            "The glory of God<br />
            is man{" "}
            <span className="accent-italic">fully alive.</span>"
          </blockquote>
        </motion.div>

        {/* Logo + tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <img
            src={mmaLogo}
            alt="Man Made Alive"
            className="h-16 w-auto invert brightness-90 mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
          />

          <p className="font-italic text-base sm:text-lg text-foreground/90 text-center max-w-lg leading-relaxed mb-3">
            A formation pathway for Christian men —{" "}
            <span className="accent-italic">made fully alive in Christ</span>, for the glory of God.
          </p>

          <p className="font-mono-tech text-[10px] font-bold uppercase tracking-[0.22em] text-gold-light/80 mt-2">
            Stay steady · Train faithfully · Walk with brothers
          </p>

          <div className="mt-12 pt-8 border-t border-border/30 w-full max-w-md">
            <p className="font-mono-tech text-[10px] tracking-[0.12em] text-muted-foreground/70 text-center">
              © {new Date().getFullYear()} Man Made Alive · manmadealive.com
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
