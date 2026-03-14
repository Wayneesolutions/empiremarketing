import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-warm-white mb-6">
            Ready to Transform{" "}
            <span className="text-gradient-gold">Your Space?</span>
          </h2>
          <p className="text-warm-white/60 mb-10 text-lg">
            Book a free consultation and let's bring your dream kitchen or staircase to life.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-gold text-charcoal font-heading font-semibold tracking-wide text-base px-10 py-6 hover:opacity-90 transition-opacity">
              Book My Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
