import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import kitchenImg from "@/assets/kitchen-service.jpg";
import stairsImg from "@/assets/stairs-service.jpg";

const services = [
  {
    title: "Kitchen Solutions",
    description: "Custom cabinets, countertops, and full kitchen renovations designed to match your lifestyle and taste.",
    image: kitchenImg,
    link: "/services/kitchens",
    alt: "Modern luxury kitchen with white cabinets and gold accents",
  },
  {
    title: "Staircase Solutions",
    description: "From elegant wooden staircases to modern glass railings, we craft stairs that become the centerpiece of your home.",
    image: stairsImg,
    link: "/services/stairs",
    alt: "Contemporary wooden staircase with glass railing",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Our Services</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3">
            What We <span className="text-gradient-gold">Specialize In</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link to={service.link} className="group block relative overflow-hidden rounded-lg">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-warm-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-warm-white/70 text-sm leading-relaxed mb-4 max-w-sm">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold font-heading font-semibold text-sm tracking-wide group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
