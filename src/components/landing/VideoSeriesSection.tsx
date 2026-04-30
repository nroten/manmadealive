import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TopographyPattern, IronTexture } from "./BackgroundTextures";
import { useToast } from "@/hooks/use-toast";

const WEBHOOK_URL = "https://twelvestonepress.app.n8n.cloud/webhook-test/form-submission";

const videos = [
  {
    number: 1,
    label: "Name the Problem",
    title: "Why Do Good Men Feel So Off?",
    description:
      "Most men feel the drift but can't name it. This video does. It names the quiet, persistent sense that something is misaligned — not as weakness or failure, but as an honest diagnosis of what happens when a man moves through life without a clear and examined direction. By the end, you'll have language for something you've been carrying for a long time.",
  },
  {
    number: 2,
    label: "Name the Distortion",
    title: "The Stories You Never Chose",
    description:
      "Every man has been shaped by cultural stories about what it means to be a man — stories that didn't ask permission, that seeped in and began forming habits, reactions, and assumptions he never consciously chose. This video names three of them honestly. You'll recognize yourself in at least one. And you'll begin to see, for the first time, which story has actually been running your life.",
  },
  {
    number: 3,
    label: "Name the Path",
    title: "The Man You Were Made to Become",
    description:
      "Culture has never produced the kind of man most men actually want to be. This video introduces the only pattern that works — not a cultural ideal, not a performance standard, but Jesus himself. It also introduces Man Made Alive as the formation pathway, and offers the Personal Formation Charter as a free tool to keep: your compass for the direction you're choosing to walk.",
  },
];

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
    <section id="conversion-form" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background textures */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <TopographyPattern className="text-primary opacity-40" />
        <IronTexture className="text-muted-foreground opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--background))_100%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground">
            Three videos. One honest look at the man you're becoming.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-base sm:text-lg text-muted-foreground font-sans max-w-2xl mx-auto mb-16"
        >
          Enter your email below and you'll get immediate access to all three — at your own pace, in your own time.
        </motion.p>

        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {videos.map((video, i) => (
            <motion.div
              key={video.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card/60 border border-border/40 rounded-xl p-6 backdrop-blur-sm flex flex-col"
            >
              {/* Play icon */}
              <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center mb-4">
                <Play className="w-5 h-5 text-primary ml-0.5" />
              </div>

              {/* Video label */}
              <p className="text-xs font-sans font-medium tracking-wider uppercase text-primary mb-1">
                Video {video.number} — {video.label}
              </p>
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-3">
                "{video.title}"
              </h3>
              {/* Description */}
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {video.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Email Capture Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl mx-auto text-center"
        >
          {!isSubmitted ? (
            <>
              <p className="text-lg sm:text-xl font-serif font-medium text-foreground mb-2">
                Watch the free series. No cost. No commitment.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground font-sans mb-8">
                Enter your email and get immediate access.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary h-12"
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary h-12"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base sm:text-lg py-6 h-auto font-sans font-semibold glow-ember hover:scale-[1.02] transition-transform duration-300"
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

              <p className="text-xs text-muted-foreground font-sans mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                You're in, {firstName}!
              </h3>
              <p className="text-muted-foreground font-sans">
                Check your inbox for immediate access to the series.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSeriesSection;
