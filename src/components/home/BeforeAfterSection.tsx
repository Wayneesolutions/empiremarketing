import { motion } from "framer-motion";
import BeforeAfterCard from "./BeforeAfterCard";
import { caseStudies } from "@/data/caseStudies";

const BeforeAfterSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Transformations</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4">
            Before & <span className="text-gradient-gold">After</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Click any card to view the full case study. Drag the center line to compare before and after.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <BeforeAfterCard
                beforeSrc={study.before}
                afterSrc={study.after}
                to={`/case-study/${study.id}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
