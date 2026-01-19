import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import { BlueprintGrid, IronTexture } from "./BackgroundTextures";

interface PainPointOption {
  label: string;
  description: string;
  value: string;
}

const painPoints: PainPointOption[] = [
  {
    label: "Carrying responsibility but lacking biblical clarity",
    description: "I know I need to lead, but I don't know what I'm aiming at",
    value: "clarity",
  },
  {
    label: "Disciplined in some areas, but struggling to sustain it",
    description: "My follow-through is inconsistent and it's discouraging",
    value: "discipline",
  },
  {
    label: "My faith is important, but it's not fully shaping how I live",
    description: "I believe the right things, but something's missing in how I lead and love",
    value: "faith",
  },
  {
    label: "I'm growing, but I'm doing it alone",
    description: "I need brothers who understand what I'm facing",
    value: "brotherhood",
  },
];

const lifeStages = [
  { label: "Single", value: "single" },
  { label: "Married, no kids", value: "married-no-kids" },
  { label: "Married with young kids", value: "young-kids" },
  { label: "Married with teens", value: "teens" },
  { label: "Empty nester", value: "empty-nester" },
  { label: "Prefer not to say", value: "prefer-not" },
];

const ConversionForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [painPoint, setPainPoint] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lifeStage, setLifeStage] = useState("");

  const handlePainPointSelect = (value: string) => {
    setPainPoint(value);
    setCurrentStep(2);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && email) {
      setCurrentStep(3);
    }
  };

  const handleFinalSubmit = () => {
    // This would integrate with ConvertKit/Mailchimp
    // For now, we'll just show a success state
    console.log("Form submitted:", { painPoint, firstName, email, lifeStage });
    // In production, redirect to email confirmation or trigger API
  };

  const progress = (currentStep / 3) * 100;

  return (
    <section id="conversion-form" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Rugged texture layers */}
      <BlueprintGrid className="text-primary opacity-30" />
      <IronTexture className="text-stone opacity-40" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      {/* Corner rivets/bolts visual accents */}
      <div className="absolute top-8 left-8 w-4 h-4 rounded-full border-2 border-stone/20 bg-secondary/30" />
      <div className="absolute top-8 right-8 w-4 h-4 rounded-full border-2 border-stone/20 bg-secondary/30" />
      <div className="absolute bottom-8 left-8 w-4 h-4 rounded-full border-2 border-stone/20 bg-secondary/30" />
      <div className="absolute bottom-8 right-8 w-4 h-4 rounded-full border-2 border-stone/20 bg-secondary/30" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Take One Honest Step{" "}
              <span className="text-gradient-ember">Forward</span>
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              This pathway isn't for everyone. It's for men who are ready to stop
              drifting and start training—faithfully, biblically, and alongside
              brothers in Christ.
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-xl p-8 sm:p-10"
          >
            <AnimatePresence mode="wait">
              {/* STEP 1: Pain Point Selection */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-sans text-sm text-muted-foreground">
                        Step 1 of 3 – Takes less than 60 seconds
                      </span>
                      <span className="font-sans text-sm text-primary">
                        {Math.round(progress)}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-8 text-foreground">
                    Which best describes where you are right now?
                  </h3>

                  {/* Options */}
                  <div className="space-y-4">
                    {painPoints.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handlePainPointSelect(option.value)}
                        className="w-full text-left p-5 bg-secondary/50 border border-border/50 rounded-lg hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <span className="font-sans text-base font-medium text-foreground group-hover:text-primary transition-colors block">
                              {option.label}
                            </span>
                            <span className="font-sans text-sm text-muted-foreground mt-1 block">
                              {option.description}
                            </span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Contact Info + Life Stage */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-sans text-sm text-muted-foreground">
                        Step 2 of 3
                      </span>
                      <span className="font-sans text-sm text-primary">
                        {Math.round(progress)}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: "33%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>

                  {/* Header */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2 text-foreground">
                    Where should we send your first email?
                  </h3>
                  <p className="font-sans text-muted-foreground mb-8">
                    We'll start you on the 30-day Formation Journey.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="font-sans text-foreground">
                          First Name <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Your first name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                          className="bg-secondary/50 border-border/50 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-sans text-foreground">
                          Email <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="bg-secondary/50 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lifeStage" className="font-sans text-foreground">
                        Life Stage <span className="text-muted-foreground text-sm">(optional)</span>
                      </Label>
                      <Select value={lifeStage} onValueChange={setLifeStage}>
                        <SelectTrigger className="bg-secondary/50 border-border/50 focus:border-primary">
                          <SelectValue placeholder="Select your life stage..." />
                        </SelectTrigger>
                        <SelectContent>
                          {lifeStages.map((stage) => (
                            <SelectItem key={stage.value} value={stage.value}>
                              {stage.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="font-sans text-xs text-muted-foreground">
                        This helps us personalize your formation journey.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg py-6 h-auto font-sans font-semibold glow-ember hover:scale-[1.02] transition-transform duration-300"
                      disabled={!firstName || !email}
                    >
                      Continue
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </motion.div>
              )}

              {/* STEP 3: Confirmation + Expectations */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-sans text-sm text-muted-foreground">
                        Step 3 of 3
                      </span>
                      <span className="font-sans text-sm text-primary">100%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-full" />
                    </div>
                  </div>

                  {/* Success Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2 text-foreground">
                    Almost there, {firstName}!
                  </h3>
                  <p className="font-sans text-lg text-muted-foreground mb-8">
                    Here's what to expect:
                  </p>

                  {/* Expectations */}
                  <div className="bg-secondary/30 border border-border/30 rounded-lg p-6 mb-8 text-left space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="font-sans text-foreground">
                        <strong>Your first email arrives within 24 hours</strong>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="font-sans text-foreground">
                        <strong>8 emails over 30 days</strong> – not daily, but consistent
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="font-sans text-foreground">
                        <strong>You'll create your Personal Formation Charter</strong> – a personalized roadmap you'll use for years
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="font-sans text-foreground">
                        <strong>No spam. No sales pitches. Just formation.</strong>
                      </p>
                    </div>
                  </div>

                  {/* Pastoral instruction */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
                    <p className="font-serif text-foreground italic leading-relaxed">
                      "Give 5-10 minutes when an email arrives. Do the one action. Be honest, not impressive. If you miss a day, don't quit—just re-enter."
                    </p>
                    <p className="font-sans text-sm text-muted-foreground mt-3">
                      — Pastor Nate
                    </p>
                  </div>

                  {/* Final CTA */}
                  <Button
                    onClick={handleFinalSubmit}
                    size="lg"
                    className="text-lg px-8 py-6 h-auto font-sans font-semibold glow-ember hover:scale-105 transition-transform duration-300 mb-4"
                  >
                    Start My 30-Day Formation Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  {/* Post-click note */}
                  <p className="font-sans text-sm text-muted-foreground max-w-md mx-auto">
                    By clicking the button above, you'll be redirected to your email to confirm your subscription. Check your inbox (and spam folder) for your first email from Pastor Nate.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConversionForm;
