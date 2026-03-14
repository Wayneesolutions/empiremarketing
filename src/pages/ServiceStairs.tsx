import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";
import { motion } from "framer-motion";
import stairsImg from "@/assets/stairs-service.jpg";
import GalleryGrid from "@/components/GalleryGrid";
import { useNavigate } from "react-router-dom";

const staircaseGalleryItems = [
  {
    title: "Custom Staircase Design",
    type: "image",
    src: "/staircase/images/stairs.png",
    link: "/stairs/custom-design",
  },
  {
    title: "Wood, Glass & Metal Railings",
    type: "image",
    src: "/staircase/images/staircase-01.jpeg",
    link: "/stairs/railings",
  },
  {
    title: "Floating Staircases",
    type: "image",
    src: "/staircase/images/stairs4.webp",
    link: "/stairs/floating-stairs",
  },
  {
    title: "Spiral Staircase Installation",
    type: "image",
    src: "/staircase/images/stairs6.webp",
    link: "/stairs/spiral-staircase",
  },
  {
    title: "Balustrade & Handrail Systems",
    type: "image",
    src: "/staircase/images/stairs5.webp",
    link: "/stairs/balustrade-handrail",
  },
  {
    title: "Staircase Renovation & Refinishing",
    type: "image",
    src: "/staircase/images/stairs7.webp",
    link: "/stairs/renovation",
  },
];

const ServiceStairs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-charcoal relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={stairsImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-charcoal/80" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Staircase Solutions</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-warm-white mt-4 mb-6">
                Custom Staircase{" "}
                <span className="text-gradient-gold">Design & Installation</span>
              </h1>
              <p className="text-warm-white/60 text-lg leading-relaxed">
                Transform your home with a stunning staircase that combines safety, style, and expert craftsmanship.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <p className="font-heading text-xs tracking-[0.35em] uppercase text-gold text-center mb-2">Portfolio</p>
            <h2 className="font-heading font-bold text-foreground text-2xl md:text-3xl text-center mb-12">
              Staircase Projects
            </h2>
            <GalleryGrid
              items={staircaseGalleryItems}
              onItemClick={(item: { link: string }) => navigate(item.link)}
            />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceStairs;
