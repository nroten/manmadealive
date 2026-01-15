import { motion } from "framer-motion";
import mmaLogo from "@/assets/mma-logo.png";

const Footer = () => {
  return (
    <footer className="relative py-20 sm:py-28 border-t border-border/30">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-background" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto mb-6">
            "The glory of God is man{" "}
            <span className="text-gradient-ember">fully alive.</span>"
          </blockquote>
          <cite className="font-sans text-lg text-muted-foreground not-italic">
            — Irenaeus
          </cite>
        </motion.div>

        {/* Logo and links */}
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
            className="h-16 w-auto invert brightness-75 mb-8"
          />
          
          <p className="font-sans text-sm text-muted-foreground text-center max-w-md">
            Man Made Alive is a formation pathway for men who want to live with clarity, discipline, and purpose—rooted in Christ.
          </p>

          <div className="mt-8 pt-8 border-t border-border/30 w-full max-w-md">
            <p className="font-sans text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} Man Made Alive. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;