import { motion } from "framer-motion";
import { BookOpen, Church, Users, Heart, Cross, Mountain } from "lucide-react";
import { KevlarPattern, TopographyPattern } from "./BackgroundTextures";

const groundedIn = [
  { 
    icon: BookOpen, 
    title: "Scripture", 
    text: "Not cultural trends or opinions" 
  },
  { 
    icon: Cross, 
    title: "Historic Christian Theology", 
    text: "Drawing from the wisdom of the early church fathers" 
  },
  { 
    icon: Heart, 
    title: "Real-Life Formation", 
    text: "Designed for husbands, fathers, and men carrying weight" 
  },
  { 
    icon: Users, 
    title: "Brotherhood in Christ", 
    text: "Where men are formed together, not in isolation" 
  },
];

const ProofSection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Rugged texture layers */}
      <KevlarPattern className="text-foreground opacity-40" />
      <TopographyPattern className="text-primary opacity-25" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      {/* Diagonal iron stripes accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, hsl(var(--stone)) 20px, hsl(var(--stone)) 21px)'
        }} />
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Built by a Pastor. Shaped by Scripture.{" "}
            <span className="text-gradient-ember">Tested in Real Life.</span>
          </h2>
        </motion.div>

        {/* Pastor Nate Story - Main Narrative */}
        <div className="max-w-4xl mx-auto mb-20">
          {/* Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative bg-card/80 border border-border/50 rounded-lg p-8 sm:p-10 mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Church className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Pastor Nate</h3>
                <p className="font-sans text-sm text-muted-foreground flex items-center gap-2">
                  <Mountain className="w-4 h-4" />
                  Planting Pastor, Ashe Alliance Church • Mountains of North Carolina
                </p>
              </div>
            </div>
            
            <p className="font-sans text-base sm:text-lg leading-relaxed text-foreground/90 mb-6">
              Man Made Alive was developed by Pastor Nate, planting pastor of Ashe Alliance Church in the mountains of North Carolina. Sent out in 2022 to lead a new church in a small mountain town, Nate has spent the last four years helping men move from confusion to clarity—while walking the same road himself.
            </p>
          </motion.div>

          {/* Personal Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
              Nate wasn't taught biblical manhood growing up. Early in marriage and fatherhood, he made mistakes—leading his home without the clarity or formation he needed. Over 20 years of marriage and raising three kids (including a teenage son), he's learned what real formation looks like: <span className="text-foreground font-medium">slow, honest, and rooted in Scripture.</span>
            </p>
            
            <p className="font-sans text-base sm:text-lg leading-relaxed text-muted-foreground">
              With a Master's degree in Discipleship and Christian Ministry from Liberty University, Nate built MMA not from theory, but from the trenches of pastoral ministry and family life. After years of watching men struggle with the same tensions—pressure without clarity, discipline that didn't last, faith that hadn't fully formed their lives—he developed the <span className="text-foreground font-medium">Four Arenas framework</span> and a complete biblical formation curriculum designed to help men become faithful over time.
            </p>
          </motion.div>

          {/* Quote Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="my-10 py-8 border-l-4 border-primary pl-8"
          >
            <p className="font-serif text-xl sm:text-2xl italic text-foreground leading-relaxed">
              "This isn't a system invented by someone who 'figured it all out'—it's a biblical pathway shaped by Scripture, tested in real life, and walked alongside other men."
            </p>
          </motion.div>
        </div>

        {/* Grounded In Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="font-sans text-sm uppercase tracking-widest text-muted-foreground text-center mb-10">
            MMA is Grounded In
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {groundedIn.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card/50 border border-border/30 rounded-lg p-6 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofSection;