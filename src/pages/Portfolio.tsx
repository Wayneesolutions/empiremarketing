import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/home/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { motion } from "framer-motion";
import { useState } from "react";
import { kitchenData } from "@/data/kitchenData";
import { stairsData } from "@/data/stairCaseData";

type Project = {
  id: string;
  title: string;
  category: "kitchens" | "stairs";
  image: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  ...Object.entries(kitchenData).map(([slug, d]) => ({
    id: `kitchen:${slug}`,
    title: d.title,
    category: "kitchens" as const,
    image: d.heroImage,
    description: d.description,
    link: `/kitchen/${slug}`,
  })),
  ...Object.entries(stairsData).map(([slug, d]) => ({
    id: `stairs:${slug}`,
    title: d.title,
    category: "stairs" as const,
    image: d.heroImage,
    description: d.description,
    link: `/stairs/${slug}`,
  })),
];

const filters = ["all", "kitchens", "stairs"];

const Portfolio = () => {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-charcoal">
          <div className="container mx-auto px-4 lg:px-8">
            <Breadcrumbs items={[{ label: "Portfolio" }]} />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Our Work</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-warm-white mt-4">
                Project <span className="text-gradient-gold">Portfolio</span>
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex justify-center gap-4 mb-12">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`font-heading text-sm tracking-wider uppercase px-6 py-2 rounded-full transition-all ${
                    active === f
                      ? "bg-gold text-charcoal font-semibold"
                      : "border border-border text-muted-foreground hover:border-gold/30 hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <Link to={project.link} className="block">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/70 transition-all duration-300 flex items-end">
                      <div className="p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="font-heading font-semibold text-warm-white text-lg">{project.title}</h3>
                        <p className="text-warm-white/60 text-sm mt-1">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Transformations</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
                Before & <span className="text-gradient-gold">After</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <BeforeAfterSlider
                before="/beforeafter/before1.png"
                after="/beforeafter/after1.png"
                beforeLabel="Before"
                afterLabel="After"
              />
              <BeforeAfterSlider
                before="/beforeafter/before6.png"
                after="/beforeafter/after6.png"
                beforeLabel="Before"
                afterLabel="After"
              />
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
