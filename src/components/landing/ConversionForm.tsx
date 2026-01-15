import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Mail, Gift, FileText, Calendar } from "lucide-react";

interface FormStep {
  question: string;
  options: { label: string; value: string }[];
}

const formSteps: FormStep[] = [
  {
    question: "Which best describes you right now?",
    options: [
      { label: "Carrying responsibility but lacking clarity", value: "clarity" },
      { label: "Disciplined in some areas, inconsistent in others", value: "discipline" },
      { label: "Faith is important, but not fully forming my life", value: "faith" },
    ],
  },
  {
    question: "What do you want most right now?",
    options: [
      { label: "Clear direction", value: "direction" },
      { label: "Sustainable discipline", value: "sustainable" },
      { label: "Brotherhood and accountability", value: "brotherhood" },
      { label: "All of the above", value: "all" },
    ],
  },
  {
    question: "Are you willing to slow down and train rather than rush for results?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "I want to learn how", value: "learn" },
    ],
  },
];

const benefits = [
  { icon: Mail, text: "8 high-impact emails" },
  { icon: FileText, text: "One clear idea per message" },
  { icon: CheckCircle2, text: "One simple action step" },
  { icon: Gift, text: "A Personal Formation Charter you can keep" },
];

const ConversionForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleSelect = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const progress = ((currentStep + 1) / formSteps.length) * 100;

  return (
    <section className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
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
              Begin with{" "}
              <span className="text-gradient-ember">One Honest Step</span>
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              This isn't for everyone. It's for men ready to stop drifting and start training—faithfully.
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
              {!isComplete ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-sans text-sm text-muted-foreground">
                        Step {currentStep + 1} of {formSteps.length}
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
                    {formSteps[currentStep].question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-4">
                    {formSteps[currentStep].options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelect(option.value)}
                        className="w-full text-left p-5 bg-secondary/50 border border-border/50 rounded-lg hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-sans text-base text-foreground group-hover:text-primary transition-colors">
                            {option.label}
                          </span>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="complete"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  {/* Success Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                    Your Next Step (Free)
                  </h3>

                  <p className="font-sans text-lg text-muted-foreground mb-8">
                    Upon completion, unlock:
                  </p>

                  {/* What you get */}
                  <div className="bg-secondary/30 border border-border/30 rounded-lg p-6 mb-8">
                    <h4 className="font-serif text-xl font-bold mb-6 text-primary">
                      The Free MMA 30-Day Email Journey
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-left">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <benefit.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-sans text-sm text-foreground">
                            {benefit.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="font-sans text-base text-muted-foreground mb-8 italic">
                    Even if you never go further, this will be worth your time.
                  </p>

                  {/* CTA */}
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 h-auto font-sans font-semibold glow-ember hover:scale-105 transition-transform duration-300 mb-4"
                  >
                    👉 Start the Free Formation Journey
                  </Button>

                  {/* Trust layer */}
                  <p className="font-sans text-sm text-muted-foreground">
                    No spam. No hype. No pressure.<br />
                    Just the next faithful step.
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