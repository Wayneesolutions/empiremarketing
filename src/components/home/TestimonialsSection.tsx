import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner, Toronto",
    text: "Empire completely transformed our kitchen. The attention to detail in the cabinetry was incredible. They delivered on time and exceeded our expectations.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Property Developer",
    text: "We've used Empire for multiple projects. Their staircase work is second to none — the craftsmanship speaks for itself. Highly recommended for premium builds.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Interior Designer",
    text: "As a designer, I need partners who understand quality. Empire delivers consistently. Their 3D visualization process makes collaboration seamless.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4">
            What Our Clients <span className="text-gradient-gold">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 rounded-lg border border-border relative"
            >
              <Quote className="w-8 h-8 text-gold/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
