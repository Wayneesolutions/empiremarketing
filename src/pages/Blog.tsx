import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import kitchenImg from "@/assets/kitchen-service.jpg";
import stairsImg from "@/assets/stairs-service.jpg";
import heroImg from "@/assets/hero-kitchen.jpg";
import Breadcrumbs from "@/components/Breadcrumbs";

const articles = [
  {
    id: 1,
    title: "How to Choose the Right Kitchen Cabinets for Your Home",
    excerpt: "From shaker-style to flat-panel modern — learn how to pick cabinets that match your lifestyle, space, and budget.",
    image: kitchenImg,
    category: "Kitchens",
    readTime: "5 min read",
    date: "Feb 15, 2026",
  },
  {
    id: 2,
    title: "2026 Staircase Design Trends You Need to Know",
    excerpt: "Floating stairs, glass balustrades, and mixed materials — discover the hottest staircase trends this year.",
    image: stairsImg,
    category: "Stairs",
    readTime: "4 min read",
    date: "Feb 8, 2026",
  },
  {
    id: 3,
    title: "The Complete Guide to Kitchen Renovation Costs in Toronto",
    excerpt: "A transparent breakdown of what kitchen renovations actually cost in the GTA — from budget-friendly to luxury.",
    image: heroImg,
    category: "Kitchens",
    readTime: "7 min read",
    date: "Jan 28, 2026",
  },
  {
    id: 4,
    title: "Wood vs. Glass Railings: Which is Right for You?",
    excerpt: "Comparing durability, aesthetics, maintenance, and cost between the two most popular railing materials.",
    image: stairsImg,
    category: "Stairs",
    readTime: "4 min read",
    date: "Jan 15, 2026",
  },
  {
    id: 5,
    title: "5 Signs Your Kitchen Needs a Renovation",
    excerpt: "Not sure if it's time? These five telltale signs mean your kitchen is overdue for an upgrade.",
    image: kitchenImg,
    category: "Kitchens",
    readTime: "3 min read",
    date: "Jan 5, 2026",
  },
  {
    id: 6,
    title: "How to Maintain Your Hardwood Staircase",
    excerpt: "Simple maintenance tips to keep your wood staircase looking brand new for decades.",
    image: heroImg,
    category: "Stairs",
    readTime: "3 min read",
    date: "Dec 20, 2025",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-24 pb-14 bg-charcoal">
          <div className="container mx-auto px-4 lg:px-8">
            <Breadcrumbs items={[{ label: "Blog" }]} />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Resources</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-warm-white mt-4">
                Blog & <span className="text-gradient-gold">Insights</span>
              </h1>
              <p className="text-warm-white/60 text-lg mt-4">Tips, trends, and guides for your home renovation journey.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {articles.map((article, i) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:border-gold/30 transition-colors duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex items-center gap-1 text-xs text-gold font-heading font-medium">
                        <Tag className="w-3 h-3" /> {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-2 group-hover:text-gold transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.excerpt}</p>
                    <span className="inline-flex items-center text-sm font-heading font-medium text-gold group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
