import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kitchen.jpg";

const HERO_VIDEO_SRC = "/kitchen/videos/kitchen1.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video with Image Fallback */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroImage}
          className="w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block font-heading text-xs tracking-[0.4em] uppercase text-gold border border-gold/30 px-4 py-2 rounded-full">
              Premium Craftsmanship
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-warm-white leading-[1.1] mb-6"
          >
            Custom Kitchens & Stairs{" "}
            <span className="text-gradient-gold">Designed to Elevate</span>{" "}
            Your Home
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-warm-white/70 mb-10 max-w-xl font-light leading-relaxed"
          >
            Premium craftsmanship. Seamless installation. Designed around you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-gold text-charcoal font-heading font-semibold tracking-wide text-base px-8 py-6 hover:opacity-90 transition-opacity">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-warm-white/30 text-warm-white font-heading font-medium tracking-wide text-base px-8 py-6 hover:bg-warm-white/10 bg-transparent"
              >
                <Play className="w-4 h-4 mr-2" />
                View Portfolio
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-12 mt-16 pt-8 border-t border-warm-white/10"
          >
            <div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-gold">
                <AnimatedCounter end={500} suffix="+" />
              </p>
              <p className="text-xs text-warm-white/50 tracking-wider uppercase mt-1">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-gold">
                <AnimatedCounter end={15} suffix="+" />
              </p>
              <p className="text-xs text-warm-white/50 tracking-wider uppercase mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-gold">
                <AnimatedCounter end={100} suffix="%" />
              </p>
              <p className="text-xs text-warm-white/50 tracking-wider uppercase mt-1">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
