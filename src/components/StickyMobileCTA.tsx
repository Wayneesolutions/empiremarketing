import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const StickyMobileCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#014631]/95 backdrop-blur-md border-t border-gold/20 p-3"
        >
          <div className="flex gap-3">
            <a
              href="tel:+1234567890"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-gold/30 text-warm-white font-heading text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-gold" /> Call Now
            </a>
            <Link
              to="/contact"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-gold text-charcoal font-heading text-sm font-semibold"
            >
              <Calendar className="w-4 h-4" /> Book Free Consult
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
