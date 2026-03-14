import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => (
  <a
    href="https://wa.me/1234567890?text=Hi%20Empire!%20I%27m%20interested%20in%20a%20consultation."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-20 lg:bottom-24 right-4 z-50 w-14 h-14 rounded-full bg-[hsl(142_70%_40%)] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppWidget;
