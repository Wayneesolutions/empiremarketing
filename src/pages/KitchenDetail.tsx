import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { kitchenData } from "@/data/kitchenData";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const KitchenDetail = () => {
  const { slug } = useParams();
  const data = kitchenData[slug];

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Page not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — full-width background image with dark overlay */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        {/* Background image */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

        {/* Content */}
        <div className="relative container mx-auto px-4 lg:px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-1.5 text-gold font-heading text-xs tracking-[0.3em] uppercase mb-4">
              <MapPin className="w-3.5 h-3.5" />
              {data.city} · Kitchen
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-wide leading-tight">
              {data.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Before Section */}
      <section className="pt-14 pb-6 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-heading font-bold text-foreground mb-6 uppercase tracking-widest border-l-4 border-gold pl-4"
          >
            Before
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.beforeImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  alt={`Before ${i + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* After Section */}
      <section className="pt-8 pb-14 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-heading font-bold text-foreground mb-6 uppercase tracking-widest border-l-4 border-gold pl-4"
          >
            After
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.afterImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  alt={`After ${i + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#014631] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Ready to transform your kitchen?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            {data.ctaTitle}
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gradient-gold text-[#014631] font-heading font-semibold tracking-wide px-8 py-5 hover:opacity-90 transition-opacity"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KitchenDetail;
