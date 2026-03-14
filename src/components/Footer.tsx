import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-warm-white/80">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-heading font-bold tracking-wider text-warm-white">EMPIRE</span>
              <p className="text-xs font-heading tracking-[0.3em] text-gold uppercase mt-1">Stairs & Kitchens</p>
            </div>
            <p className="text-sm leading-relaxed text-warm-white/60 mb-6">
              Crafting premium kitchens and elevating staircases with precision, quality materials, and expert installation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10 transition-colors">
                <Instagram className="w-4 h-4 text-gold" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10 transition-colors">
                <Facebook className="w-4 h-4 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-warm-white mb-6 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "Blog", path: "/blog" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-warm-white mb-6 text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>Custom Kitchen Cabinets</li>
              <li>Kitchen Renovations</li>
              <li>Staircase Design</li>
              <li>Staircase Installation</li>
              <li>Railings & Balustrades</li>
              <li>3D Design Visualization</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-warm-white mb-6 text-sm tracking-wider uppercase">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>info@empirestairs.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>Toronto, Ontario, Canada</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-warm-white/40">© 2026 Empire Stairs & Kitchens. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-warm-white/40">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
