import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import kitchenImg from "@/assets/kitchen-service.jpg";
import { useNavigate } from "react-router-dom";
import GalleryGrid from "@/components/GalleryGrid";

const galleryItems = [
  {
    title: "Modern Kitchen Design",
    type: "image",
    src: "/kitchen/images/modernKitchen/modern-kitchen1.png",
    link: "/kitchen/modern-design",
  },
  {
    title: "Luxury Cabinet Installation",
    type: "video",
    src: "/kitchen/videos/kitchen1.mp4",
    link: "/kitchen/cabinet-installation",
  },
  {
    title: "Elegant Kitchen Island",
    type: "image",
    src: "/kitchen/images/kitchen2.jpeg",
    link: "/kitchen/kitchen-island",
  },
  {
    title: "Premium Marble & Stone Countertops",
    type: "video",
    src: "/kitchen/videos/kitchen2.mp4",
    link: "/kitchen/marble-countertops",
  },
  {
    title: "Minimalist Cabinet Design",
    type: "image",
    src: "/kitchen/images/kitchen3.jpeg",
    link: "/kitchen/minimal-cabinets",
  },
  {
    title: "Complete Kitchen Renovation",
    type: "video",
    src: "/kitchen/videos/kitchen3.mp4",
    link: "/kitchen/renovation",
  },
];

const ServiceKitchens = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-24 bg-charcoal relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="absolute inset-0 opacity-20"
        >
          <img
            src={kitchenImg}
            alt="Kitchen background"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-charcoal/80" />
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-150px] top-[-150px] w-[400px] h-[400px] bg-gold/10 blur-3xl rounded-full"
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="font-heading text-xs uppercase text-gold tracking-[0.4em]">
              Kitchen Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-warm-white mt-4 mb-6">
              Custom Kitchen{" "}
              <span className="text-gradient-gold relative inline-block overflow-hidden">
                Cabinets & Design
                <motion.span
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </span>
            </h1>
            <p className="text-warm-white/60 text-lg leading-relaxed max-w-xl">
              From sleek modern kitchens to timeless classic designs, we create
              custom cabinetry and complete kitchen solutions tailored to your
              lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="font-heading text-xs tracking-[0.35em] uppercase text-gold text-center mb-2">Portfolio</p>
          <h2 className="font-heading font-bold text-foreground text-2xl md:text-3xl text-center mb-12">
            Kitchen Projects
          </h2>
          <GalleryGrid items={galleryItems} onItemClick={(item: { link: string }) => navigate(item.link)} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceKitchens;
