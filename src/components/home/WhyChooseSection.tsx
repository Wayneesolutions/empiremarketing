import { motion } from "framer-motion";
import { Palette, ShieldCheck, Gem, Clock, Award, Wrench } from "lucide-react";

const features = [
  { icon: Palette, title: "Custom Designs", description: "Tailored to your vision, lifestyle, and space requirements." },
  { icon: ShieldCheck, title: "Licensed & Insured", description: "Fully licensed professionals you can trust with your home." },
  { icon: Gem, title: "Premium Materials", description: "Only the finest woods, stones, and hardware for lasting quality." },
  { icon: Clock, title: "On-Time Delivery", description: "We respect your schedule with precise project timelines." },
  { icon: Award, title: "Warranty Protection", description: "Every project backed by our comprehensive warranty." },
  { icon: Wrench, title: "Expert Installation", description: "Skilled craftsmen with 15+ years of hands-on experience." },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Why Empire</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-warm-white mt-4">
            Why Choose <span className="text-gradient-gold">Empire</span>
          </h2>
          <p className="text-warm-white/60 mt-4 max-w-lg mx-auto">
            We combine old-world craftsmanship with modern design to deliver results that exceed expectations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-8 rounded-lg border border-warm-white/5 bg-warm-white/[0.02] hover:border-gold/20 hover:bg-gold/[0.03] transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-gold mb-5" />
              <h3 className="font-heading font-semibold text-warm-white text-lg mb-2">{feature.title}</h3>
              <p className="text-warm-white/50 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
