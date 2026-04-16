import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TopographyPattern, IronTexture } from "./BackgroundTextures";

const faqs = [
  {
    question: "What exactly is Man Made Alive?",
    answer:
      "MMA is a Christ-centered formation pathway for men — a structured, five-module progression built to form men into biblical manhood over time. Not motivate them for a week. Form them — slowly, biblically, alongside brothers.",
  },
  {
    question: "What will I receive when I sign up?",
    answer:
      "Immediate access to the free 3-part video series. Video 1 names the drift. Video 2 exposes the cultural stories shaping you. Video 3 introduces Jesus as the only true pattern and MMA as the formation pathway toward him. The final video also offers a free Personal Formation Charter — a one-page living document to keep you oriented as you begin.",
  },
  {
    question: "What is the Personal Formation Charter?",
    answer:
      "It's not a quiz result or a checklist. It's a one-page tool — yours to keep and return to — that holds two things together: where you actually are right now, and the direction you're choosing to aim your life. It grows with you across the full program.",
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
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle texture layers */}
      <TopographyPattern className="text-muted-foreground opacity-20" />
      <IronTexture className="text-foreground opacity-15" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            You've probably <span className="text-gradient-ember">been here before.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
            Maybe you've done a men's program that moved you for three weeks and faded. Maybe you've attended the retreat, done the accountability group, read the books. Maybe the fact that you're still reading this means some part of you is still hungry — and another part is a little skeptical, because you've been here before and it didn't hold.
          </p>
          <p className="font-sans text-base sm:text-lg text-foreground/90 leading-relaxed mt-4">
            That skepticism is honest. And it deserves an honest answer.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-card/50 border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/30 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-serif text-lg sm:text-xl hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
