import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

import heroFog from "@/assets/hero-fog-driving.jpg";
import teabag from "@/assets/v2-teabag.jpg";
import riverWithBanks from "@/assets/river-with-banks.jpg";

const WEBHOOK_URL = "https://twelvestonepress.app.n8n.cloud/webhook-test/form-submission";

type Theme = "gold" | "slate" | "green";

interface Video {
  number: number;
  label: string;
  title: string;
  description: string;
  image: string;
  theme: Theme;
}

const videos: Video[] = [
  {
    number: 1,
    label: "Name the Problem",
    title: "Why Do Good Men Feel So Off?",
    description:
      "Most men feel the drift but can't name it. This video does. It names the quiet, persistent sense that something is misaligned — not as weakness or failure, but as an honest diagnosis of what happens when a man moves through life without a clear and examined direction. By the end, you'll have language for something you've been carrying for a long time.",
    image: heroFog,
    theme: "gold",
  },
  {
    number: 2,
    label: "Name the Distortion",
    title: "The Stories You Never Chose",
    description:
      "Every man has been shaped by cultural stories about what it means to be a man — stories that didn't ask permission, that seeped in and began forming habits, reactions, and assumptions he never consciously chose. This video names three of them honestly. You'll recognize yourself in at least one. And you'll begin to see, for the first time, which story has actually been running your life.",
    image: teabag,
    theme: "slate",
  },
  {
    number: 3,
    label: "Name the Path",
    title: "The Man You Were Made to Become",
    description:
      "Culture has never produced the kind of man most men actually want to be. This video introduces the only pattern that works — not a cultural ideal, not a performance standard, but Jesus himself. It also introduces Man Made Alive as the formation pathway, and offers the Personal Formation Charter as a free tool to keep: your compass for the direction you're choosing to walk.",
    image: riverWithBanks,
    theme: "green",
  },
];

// Theme → tailwind class fragments. Plain string interpolation lets Tailwind's
// JIT pick them up at build time (no dynamic class names that JIT can't see).
const themeClasses: Record<
  Theme,
  {
    border: string;
    borderHover: string;
    eyebrow: string;
    titleAccent: string;
    iconBg: string;
    iconText: string;
    glow: string;
  }
> = {
  gold: {
    border: "border-gold/30",
    borderHover: "hover:border-gold/60",
    eyebrow: "text-gold",
    titleAccent: "text-gold-light",
    iconBg: "bg-gold/15 border border-gold/40",
    iconText: "text-gold-light",
    glow: "from-gold/[0.10]",
  },
  slate: {
    border: "border-slate/30",
    borderHover: "hover:border-slate/60",
    eyebrow: "text-slate-light",
    titleAccent: "text-slate-light",
    iconBg: "bg-slate/15 border border-slate/40",
    iconText: "text-slate-light",
    glow: "from-slate/[0.10]",
  },
  green: {
    border: "border-mma-green/30",
    borderHover: "hover:border-mma-green/60",
    eyebrow: "text-mma-green-light",
    titleAccent: "text-mma-green-light",
    iconBg: "bg-mma-green/15 border border-mma-green/40",
    iconText: "text-mma-green-light",
    glow: "from-mma-green/[0.10]",
  },
};

const VideoSeriesSection = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          email,
          source: "video-series-section",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setIsSubmitted(true);
      toast({
        title: "You're in!",
        description: "Check your inbox for immediate access to the series.",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="conversion-form"
      className="relative py-24 sm:py-32 overflow-hidden bg-background"
    >
      {/* Atmospheric backdrop layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(var(--gold)) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="eyebrow inline-flex items-center gap-3">
            <span className="w-7 h-px bg-gold" />
            ◆ The free 3-part series
            <span className="w-7 h-px bg-gold" />
          </span>
        </motion.div>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display font-bold uppercase tracking-tight leading-[1.02] text-center text-foreground text-3xl sm:text-4xl md:text-5xl mb-5"
        >
          Three videos.<br />
          <span className="accent-italic">One honest look.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center font-sans text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Enter your email below and you'll get immediate access to all three —{" "}
          <em className="font-italic-accent text-gold-light">at your own pace, in your own time.</em>
        </motion.p>

        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {videos.map((video, i) => {
            const t = themeClasses[video.theme];
            return (
              <motion.article
                key={video.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`group relative bg-card border ${t.border} ${t.borderHover} rounded-2xl overflow-hidden flex flex-col transition-colors duration-300`}
              >
                {/* Painterly thumbnail */}
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${video.image})` }}
                  />
                  {/* Bottom-fade so the title area below reads cleanly */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  {/* Play icon */}
                  <div
                    className={`absolute bottom-4 left-5 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm ${t.iconBg}`}
                  >
                    <Play className={`w-5 h-5 ml-0.5 ${t.iconText}`} fill="currentColor" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Eyebrow: video number + label */}
                  <p
                    className={`font-mono-tech text-[10px] font-semibold tracking-[0.18em] uppercase ${t.eyebrow} mb-2`}
                  >
                    Video 0{video.number} <span className="opacity-50 mx-1">/</span> {video.label}
                  </p>

                  {/* Title */}
                  <h3 className="font-display font-bold uppercase text-lg sm:text-xl tracking-tight leading-tight text-foreground mb-3">
                    {video.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1">
                    {video.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Email Capture Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-2xl mx-auto"
        >
          {!isSubmitted ? (
            <div className="relative bg-card/80 border border-gold/30 rounded-2xl p-8 sm:p-10 overflow-hidden backdrop-blur-sm">
              {/* Tinted glow */}
              <div
                aria-hidden="true"
                className="absolute -top-32 -right-24 w-72 h-72 rounded-full opacity-30 blur-[80px] pointer-events-none"
                style={{ background: "hsl(var(--gold))" }}
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-32 -left-24 w-72 h-72 rounded-full opacity-25 blur-[80px] pointer-events-none"
                style={{ background: "hsl(var(--mma-green))" }}
              />

              <div className="relative text-center mb-8">
                <span className="eyebrow text-mma-green-light mb-3 inline-block">
                  ◆ Step 01 · Watch
                </span>
                <h3 className="font-display font-bold uppercase text-2xl sm:text-3xl tracking-tight text-foreground mb-3">
                  Watch the free series.<br />
                  <span className="accent-italic">No cost. No commitment.</span>
                </h3>
                <p className="font-sans text-sm sm:text-base text-muted-foreground">
                  Enter your email and get immediate access.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="relative space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="bg-background/60 border-border/50 focus:border-gold focus-visible:ring-gold/40 h-12 font-sans"
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background/60 border-border/50 focus:border-gold focus-visible:ring-gold/40 h-12 font-sans"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base sm:text-lg py-7 h-auto font-display font-bold uppercase tracking-wider bg-mma-green hover:bg-mma-green-light text-charcoal border border-mma-green-light animate-pulse-green hover:scale-[1.02] transition-transform"
                  disabled={isSubmitting || !firstName || !email}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get Instant Access
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>

              <p className="relative font-mono-tech text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70 mt-5 text-center">
                // No spam. Unsubscribe anytime.
              </p>
            </div>
          ) : (
            <div className="relative bg-card/80 border border-mma-green/40 rounded-2xl p-10 sm:p-12 overflow-hidden text-center">
              <div
                aria-hidden="true"
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-30 blur-[100px] pointer-events-none"
                style={{ background: "hsl(var(--mma-green))" }}
              />
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-mma-green/20 border border-mma-green/40 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-mma-green-light" />
                </div>
                <h3 className="font-display font-bold uppercase text-3xl sm:text-4xl tracking-tight text-foreground mb-3">
                  You're in,{" "}
                  <span className="accent-italic-green">{firstName}.</span>
                </h3>
                <p className="font-italic text-lg sm:text-xl text-foreground/85 max-w-md mx-auto leading-snug">
                  Check your inbox for immediate access to the series.
                </p>
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70 mt-6">
                  // Welcome to the path · Stay steady.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSeriesSection;
