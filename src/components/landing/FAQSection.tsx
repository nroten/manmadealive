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
    answer: "MMA is a Christ-centered formation pathway for men. It's not a program you complete—it's a framework that helps you grow in biblical manhood through clarity, discipline, and brotherhood. Think of it as training for the life you've already been given in Christ.",
  },
  {
    question: "What will I receive in the free 30-day email series?",
    answer: "Over 30 days, you'll receive 8 carefully crafted emails that move you from drift to direction. You'll learn why willpower fails, how real training works, and discover the four concrete arenas where biblical manhood is actually lived (Shield, Shepherd, Supply, Sacrificial Leader). By the end, you'll have created a Personal Formation Charter—a personalized roadmap that consolidates your vision, rhythms, and next steps. It's yours to keep and use for years.",
  },
  {
    question: "What is the Personal Formation Charter?",
    answer: "The Personal Formation Charter is a practical, personalized tool you'll create during the email series. It helps you consolidate your vision for biblical manhood, identify which of the Four Arenas needs attention, establish sustainable rhythms, and define clear next steps. It's not a rigid plan—it's a living document that helps you stay aligned with who God is calling you to become. Many men return to it quarterly to recalibrate.",
  },
  {
    question: "What are the Four Arenas?",
    answer: "The Four Arenas are the concrete places where biblical manhood is lived: Shield (protecting what God entrusts), Shepherd (guiding and caring for others), Supply (providing faithfully and responsibly), and Sacrifice (laying down self to serve). These aren't abstract concepts—they're specific responsibilities where you'll learn to lead with clarity and strength.",
  },
  {
    question: "What's the difference between trying and training?",
    answer: "Trying depends on willpower and motivation—which are finite and collapse under pressure. Training builds capacity through rhythms, practices, and obedience over time. Scripture doesn't tell us to try harder—it tells us to \"train yourself for godliness\" (1 Timothy 4:7). MMA teaches you how to train, not just try.",
  },
  {
    question: "How do I know if I'm making progress?",
    answer: "MMA measures progress through awareness, intentionality, and consistency—not perfection. You'll learn to do simple self-check-ins using the Four Arenas (Strong / Inconsistent / Neglected) without shame or comparison. Progress isn't about flawless performance—it's about faithful return.",
  },
  {
    question: "Is this just another men's group?",
    answer: "No. MMA is formation-focused, not event-focused. While brotherhood is central, the goal isn't accountability for its own sake—it's becoming a man fully alive in Christ through Scripture, the Holy Spirit, and faithful obedience over time. You'll be formed alongside other men, not managed by them.",
  },
  {
    question: "How does the brotherhood aspect work?",
    answer: "After the 30-day email series, you'll be invited to join a community of men walking the same formation pathway. It's not a weekly meeting you have to attend—it's an ongoing brotherhood where you process honestly, encourage faithfully, and grow consistently. Formation happens best in relationship, and MMA gives you the community you need to succeed.",
  },
  {
    question: "How much time does this require?",
    answer: "Formation happens in the margins. MMA is designed for men with real responsibilities. You're not adding another burden—you're learning how to align what you're already doing with who God is calling you to be. The email series requires just 5-10 minutes per email. The ongoing formation pathway is built around sustainable rhythms, not overwhelming commitments.",
  },
  {
    question: "I've tried men's ministries before and burned out. How is this different?",
    answer: "MMA rejects the hype-and-crash cycle. We don't promise intensity or quick transformation. We teach sustainable, biblical rhythms—small faithfulness over time. When you stumble, you return. That's formation, not performance. The focus is on consistency over intensity and faithfulness over perfection.",
  },
  {
    question: "Do I need to be part of a church to join?",
    answer: "Yes. MMA assumes you're part of a local church body. Formation happens in relationship, and the local church is God's primary design for that. If you're looking for a church home, we're happy to help you find one.",
  },
  {
    question: "What happens after the 30 days?",
    answer: "At the end of the 30-day email series, you'll have clarity, language, a Personal Formation Charter, and a clear pathway forward. You can continue on your own or choose to walk it alongside other men in the MMA brotherhood. There's no pressure—just an invitation to keep training faithfully.",
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
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="text-gradient-ember">Questions</span>
          </h2>
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
