import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import kitchenImg from "@/assets/kitchen-service.jpg";
import { useNavigate } from "react-router-dom";
import GalleryGrid from "@/components/GalleryGrid";

const galleryItems = [
  {
    title: "Maple Kitchen Renovation, Burlington",
    type: "video",
    src: "https://res.cloudinary.com/dxn9c9m1m/video/upload/v1776671898/WhatsApp_Video_2026-03-09_at_2.48.19_PM_vwb71c.mp4",
    link: "/kitchen/maple-kitchen-burlington",
  },
  {
    title: "Dynes Kitchen Renovation, Burlington",
    type: "video",
    src: "https://res.cloudinary.com/dxn9c9m1m/video/upload/v1776671867/WhatsApp_Video_2026-03-09_at_2.48.18_PM_xbvcne.mp4",
    link: "/kitchen/dynes-kitchen-burlington",
  },
  {
    title: "Clearview Kitchen Renovation, Oakville",
    type: "image",
    src: "/beforeafter/after3.png",
    link: "/kitchen/clearview-kitchen-oakville",
  },
  {
    title: "Lakeview Kitchen Remodel, Mississauga",
    type: "video",
    src: "https://res.cloudinary.com/dxn9c9m1m/video/upload/v1776671506/WhatsApp_Video_2026-03-09_at_2.48.17_PM_vrvvv5.mp4",
    link: "/kitchen/lakeview-kitchen-mississauga",
  },
  {
    title: "Modern Kitchen Design, Toronto",
    type: "video",
    src: "https://res.cloudinary.com/dxn9c9m1m/video/upload/v1776671435/WhatsApp_Video_2026-03-09_at_2.48.16_PM_lj1ln1.mp4",
    link: "/kitchen/modern-kitchen-toronto",
  },
  {
    title: "Custom Cabinet Install, Hamilton",
    type: "image",
    src: "/beforeafter/afterk3.webp",
    link: "/kitchen/custom-cabinet-hamilton",
  },
];

const ServiceKitchens = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-24 pb-16 bg-charcoal relative overflow-hidden">
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
        <div className="absolute inset-0 bg-black/80" />
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-warm-white mt-4 mb-6">
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

      <div className="bg-background pt-12 pb-0">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="font-heading text-xs tracking-[0.35em] uppercase text-gold text-center mb-2">Portfolio</p>
          <h2 className="font-heading font-bold text-foreground text-2xl md:text-3xl text-center mb-0">
            Kitchen Projects
          </h2>
        </div>
        <GalleryGrid items={galleryItems} onItemClick={(item: { link: string }) => navigate(item.link)} />
      </div>

      <Footer />
    </div>
  );
};

export default ServiceKitchens;
