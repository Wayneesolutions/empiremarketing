import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { stairsData } from "@/data/stairCaseData";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";

const StairsDetail = () => {
  const { slug } = useParams();
  const data = stairsData[slug];

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Page not found.</p>
      </div>
    );
  }

  const heroImage = data.heroImage || data.images[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection
        label="Stairs Portfolio"
        title={data.title}
        description={data.description}
        image={heroImage}
      />

      {/* Written case study */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <span className="font-heading text-xs tracking-[0.35em] uppercase text-gold">Case Study</span>
          <h2 className="font-heading font-bold text-foreground text-2xl mt-3 mb-6">{data.title}</h2>
          <p className="text-foreground/90 text-lg leading-relaxed">{data.description}</p>
          {data.caseStudySummary && (
            <p className="text-foreground/80 mt-6 leading-relaxed">{data.caseStudySummary}</p>
          )}

          {data.points && data.points.length > 0 && (
            <div className="mt-10 pt-10 border-t border-border">
              <h3 className="font-heading font-semibold text-foreground text-lg mb-6">What we delivered</h3>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center border border-gold/30">
                      <Check className="w-3 h-3 text-gold" strokeWidth={2.5} />
                    </span>
                    <span className="text-foreground/85 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-xl shadow-lg border border-border"
            >
              <img
                src={img}
                alt={data.title}
                className="w-full h-[320px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-warm-white mb-4">
            Ready to transform your staircase?
          </h2>
          <p className="text-warm-white/60 mb-8 max-w-lg mx-auto">
            {data.ctaTitle || "Book a free consultation and we'll help you bring your vision to life."}
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gradient-gold text-charcoal font-heading font-semibold tracking-wide px-8 py-6 hover:opacity-90 transition-opacity"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StairsDetail;
