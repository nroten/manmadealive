import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is Man Made Alive?",
    answer:
      "MMA is a Christ-centered formation pathway for men — a structured, five-module progression built to form men into the likeness of Christ, for the glory of God. Not motivate them for a week. Form them — slowly, biblically, alongside brothers.",
  },
  {
    question: "What will I receive when I sign up?",
    answer:
      "Immediate access to the free 3-part video series. Video 1 names the drift. Video 2 exposes the cultural stories shaping you. Video 3 introduces Jesus as the only true pattern and MMA as the formation pathway toward him. The final video also offers a free Personal Formation Charter — a one-page living document to keep you oriented as you begin.",
  },
  {
    question: "What is the Personal Formation Charter?",
    answer:
      "Think of it as the compass we've been describing across the three videos — made tangible. Not a quiz result. Not a checklist. A single tool that holds two things together: where you actually are right now, and the direction you're choosing to move toward. Four sections that grow with you. Something worth returning to every week, not just reading once. Yours free, regardless of what you decide next.",
  },
  {
    question: "What are the Four Arenas?",
    answer:
      "Shield, Shepherd, Supply, and Sacrifice — four concrete areas of responsibility where a man's strength is meant to be spent. Not abstract concepts, but real, lived arenas: protecting what God has entrusted, guiding those under your influence, providing faithfully, and laying down comfort for the good of others.",
  },
  {
    question: "What's the difference between trying and training?",
    answer:
      "Trying is what most men default to: committing harder, pushing more, hoping the effort holds. Training is different. It builds actual capacity over time through rhythm, structure, and return — not intensity. The man who trains steadily will always outgrow the man who surges and burns out.",
  },
  {
    question: "I've burned out on men's ministries before. How is this different?",
    answer:
      "Most men's programs deliver information. MMA is built for formation — a slower, more structured process that works from the inside out. It moves in a specific order for a reason. It doesn't rush. And it expects you to stumble — and teaches you to return without shame, not restart from scratch.",
  },
  {
    question: "Do I need to be part of a church to join?",
    answer:
      "MMA is designed to support and strengthen men in their local church — not replace it. If you're not currently connected to a church, that's worth addressing alongside your formation here. We'll talk about that honestly inside the program.",
  },
  {
    question: "How much time does this require?",
    answer:
      "The three free videos are 8–12 minutes each. The full formation pathway inside the Skool community is designed for men with real responsibilities — steady and sustainable, not all-consuming. Formation happens at the pace of faithfulness, not intensity.",
  },
  {
    question: "What happens after the three videos?",
    answer:
      "At the end of Video 3, you'll receive an invitation to join the Man Made Alive Skool community — a structured formation environment with the full five-module curriculum, a community of men walking the same road, and the brotherhood that makes formation stick.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div
          className="absolute top-1/3 left-1/4 w-[700px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(var(--gold)) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="eyebrow inline-flex items-center gap-3 mb-6">
            <span className="w-7 h-px bg-gold" />
            ◆ Honest answers
            <span className="w-7 h-px bg-gold" />
          </span>

          <h2 className="font-display font-bold uppercase tracking-tight leading-[1.02] text-foreground text-3xl sm:text-4xl md:text-5xl mb-8">
            You've probably<br />
            <span className="accent-italic">been here before.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
            Maybe you've done a men's program that moved you for three weeks and faded. Maybe you've attended the retreat, done the accountability group, read the books. Maybe the fact that you're still reading this means some part of you is{" "}
            <em className="font-italic-accent text-gold-light">still hungry</em> — and another part is a little skeptical, because you've been here before and{" "}
            <em className="font-italic-accent text-foreground">it didn't hold</em>.
          </p>
          <p className="font-italic text-lg sm:text-xl text-foreground/95">
            That skepticism is honest. <span className="text-gold">And it deserves an honest answer.</span>
          </p>
        </motion.div>

        {/* FAQ Accordion — Radix accordion structure preserved */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => {
              const num = String(idx + 1).padStart(2, "0");
              return (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-card border border-gold/20 rounded-xl px-6 sm:px-7 data-[state=open]:border-gold/50 data-[state=open]:bg-card/80 transition-colors duration-300"
                >
                  <AccordionTrigger
                    className="text-left hover:no-underline py-6 group"
                  >
                    <span className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                      <span className="font-mono-tech text-[10px] font-bold tracking-[0.18em] text-gold-light/70 pt-1.5 flex-shrink-0">
                        Q.{num}
                      </span>
                      <span className="font-display font-bold uppercase text-base sm:text-lg tracking-[0.005em] text-foreground group-hover:text-gold-light group-data-[state=open]:text-gold-light transition-colors leading-snug">
                        {faq.question}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-base text-muted-foreground leading-relaxed pb-6 pl-12 sm:pl-14 pr-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
