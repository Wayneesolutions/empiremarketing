import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "Sub-millimetre precision cutting on every cabinet panel",
  "Consistent results across every project — no human error",
  "Faster turnaround without compromising quality",
  "Complex shapes & custom profiles cut flawlessly",
  "Optimised material usage to reduce waste",
];

const CNCSection = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/kitchen/cnc.png"
                alt="Empire CNC Machine"
                className="w-full h-[420px] object-cover"
              />
              {/* gold accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold" />
            </div>
            {/* floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#014631] text-white rounded-xl px-5 py-4 shadow-xl border border-gold/20">
              <p className="font-heading font-bold text-2xl text-gold leading-none">±0.1<span className="text-sm">mm</span></p>
              <p className="text-white/70 text-xs mt-1 font-heading tracking-wide">Cut Precision</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Our Technology</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
              Precision Built With{" "}
              <span className="text-gradient-gold">CNC Technology</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every kitchen cabinet and staircase component we produce is cut and shaped using
              industrial-grade CNC machines. This means each piece fits perfectly the first time —
              no gaps, no guesswork, no rework. The result is a flawless finish that hand-cutting
              simply cannot guarantee.
            </p>

            <ul className="space-y-3">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                    <Check className="w-3 h-3 text-gold" strokeWidth={2.5} />
                  </span>
                  <span className="text-foreground/80 text-sm leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CNCSection;
