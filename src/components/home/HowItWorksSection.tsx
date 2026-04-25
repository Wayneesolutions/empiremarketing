import { motion } from "framer-motion";
import { MessageSquare, Ruler, Boxes, Hammer } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "01", title: "Consultation", description: "We discuss your vision, needs, budget, and timeline in a free consultation." },
  { icon: Ruler, step: "02", title: "Design & 3D Visualization", description: "Our designers create detailed plans and 3D renderings for your approval." },
  { icon: Boxes, step: "03", title: "Material Selection", description: "Choose from our curated selection of premium materials and finishes." },
  { icon: Hammer, step: "04", title: "Professional Installation", description: "Our expert team brings your vision to life with precision craftsmanship." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Our Process</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-7 h-7 text-gold" />
              </div>
              <span className="font-heading text-xs tracking-[0.3em] text-gold/60 uppercase">Step {step.step}</span>
              <h3 className="font-heading font-semibold text-foreground text-lg mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gold/15" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
