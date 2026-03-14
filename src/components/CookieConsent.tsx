import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4"
        >
          <div className="container mx-auto max-w-4xl bg-card border border-border rounded-xl p-6 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Cookie className="w-8 h-8 text-gold shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-foreground font-medium">We use cookies to enhance your experience</p>
              <p className="text-xs text-muted-foreground mt-1">
                By continuing, you agree to our use of cookies.{" "}
                <Link to="/privacy" className="text-gold hover:underline">Learn more</Link>
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button onClick={decline} variant="outline" size="sm" className="font-heading text-xs">
                Decline
              </Button>
              <Button onClick={accept} size="sm" className="bg-gradient-gold text-charcoal font-heading text-xs font-semibold">
                Accept All
              </Button>
            </div>
            <button onClick={decline} className="absolute top-2 right-2 sm:hidden text-muted-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
