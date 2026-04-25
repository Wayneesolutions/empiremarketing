import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const data = [
  { id: "kitchen-modern",  category: "kitchens",   title: "Modern Kitchen Design",    description: "Elegant modular kitchens with smart storage solutions", image: "/kitchen/images/modernKitchen/modern-kitchen1.png" },
  { id: "kitchen-luxury",  category: "kitchens",   title: "Luxury Kitchen Interiors",  description: "Premium finishes and high-end kitchen layouts",           image: "/kitchen/images/modernKitchen/modern-kitchen2.png" },
  { id: "kitchen-compact", category: "kitchens",   title: "Compact Kitchen Setup",     description: "Space-saving designs perfect for small homes",            image: "/kitchen/images/modernKitchen/modern-kitchen3.png" },
  { id: "staircase-wooden", category: "staircases", title: "Wooden Staircase Design",  description: "Classic wooden stairs with durable craftsmanship",        image: "/staircase/images/staircase-01.jpeg" },
  { id: "staircase-spiral", category: "staircases", title: "Spiral Staircase",         description: "Stylish spiral stairs for modern interiors",              image: "/staircase/images/staircase-03.jpeg" },
  { id: "staircase-glass",  category: "staircases", title: "Glass Staircase Design",   description: "Contemporary glass stairs with sleek finish",             image: "/staircase/images/stairs4.webp" },
];

const filters = ["all", "kitchens", "staircases"];

const Products = () => {
  const [active, setActive] = useState("all");
  const navigate = useNavigate();

  const filtered = active === "all" ? data : data.filter((d) => d.category === active);

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <HeroSection
        title="Products"
        description="Explore stylish and functional designs for modern kitchens and staircases. We focus on quality, detail, and smart space utilization. Creating interiors that are both beautiful and practical."
        image="/kitchen/images/kitchen-04.jpeg"
      />

      {/* Section header */}
      <div className="flex flex-col items-center pt-16 pb-10 px-4">
        <span className="text-xs tracking-[0.4em] uppercase text-gold font-heading mb-2">Our Collection</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal tracking-[6px] font-heading">
          PRODUCTS
        </h1>
        <p className="mt-3 text-sm tracking-[5px] text-gold">Explore Premium Products</p>
        <div className="w-16 h-[2px] bg-gold mt-4 mb-10" />

        {/* Filter tabs */}
        <div className="flex gap-3 flex-wrap justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2 rounded-full text-sm font-heading font-semibold capitalize tracking-wider border transition-all duration-300 ${
                active === f
                  ? "bg-gold text-white border-gold shadow-md"
                  : "bg-white text-charcoal border-charcoal/20 hover:border-gold hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400"
                onClick={() => navigate(`/products/${item.id}`)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Category badge */}
                  <span className="absolute top-4 left-4 bg-gold/90 text-white text-[10px] font-heading font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 border-t-2 border-gold/20">
                  <h2 className="font-heading font-bold text-charcoal text-lg mb-1">{item.title}</h2>
                  <p className="text-charcoal/55 text-sm leading-relaxed mb-4">{item.description}</p>
                  <button className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors duration-200">
                    Explore →
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
