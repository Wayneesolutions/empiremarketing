import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

const faqCategories = [
  {
    title: "Services & Pricing",
    faqs: [
      { q: "What services does Empire Stairs & Kitchens offer?", a: "We specialize in custom kitchen cabinet design and installation, custom staircase design and construction, railings and balustrades, full kitchen renovations, and 3D design visualization. All our work is done in-house by skilled craftsmen." },
      { q: "How much does a custom kitchen cost?", a: "Kitchen projects typically range from $15,000 to $60,000+ depending on size, materials, and complexity. We provide a detailed, transparent quote after your free consultation — no hidden fees." },
      { q: "How much does a custom staircase cost?", a: "Staircase projects generally range from $8,000 to $35,000+ depending on design, materials (oak, maple, glass, iron), and the number of flights. We'll give you an accurate estimate after reviewing your space." },
      { q: "Do you offer financing?", a: "Yes! We partner with financing providers to offer flexible payment plans so you can get your dream kitchen or staircase without the financial stress. Ask us during your consultation." },
    ],
  },
  {
    title: "Process & Timeline",
    faqs: [
      { q: "How long does a kitchen renovation take?", a: "Most kitchen projects take 4–8 weeks from design approval to completion. Complex projects may take longer. We'll provide a detailed timeline during your consultation." },
      { q: "How long does a staircase installation take?", a: "Staircase installations typically take 1–3 weeks depending on complexity. Simple replacements can be done in as little as 3–5 days." },
      { q: "What is the consultation process like?", a: "It starts with a free in-home visit where we assess your space, discuss your vision, and take measurements. We then create a 3D design for your approval before any work begins." },
      { q: "Do I need to leave my home during renovation?", a: "No! We work efficiently and contain our work areas to minimize disruption. You can continue living in your home throughout the project." },
    ],
  },
  {
    title: "Quality & Warranty",
    faqs: [
      { q: "What materials do you use?", a: "We use premium materials including solid hardwoods (oak, maple, walnut), high-grade plywood, quartz and granite countertops, tempered glass, and wrought iron. We never cut corners on quality." },
      { q: "Do you offer a warranty?", a: "Absolutely. All our work comes with a 5-year craftsmanship warranty and we pass along all manufacturer warranties on materials and hardware." },
      { q: "Are you licensed and insured?", a: "Yes. Empire is fully licensed by the Ontario government, WSIB insured, OHSA compliant, and a proud member of TECA. Your home is in safe hands." },
    ],
  },
  {
    title: "Service Areas",
    faqs: [
      { q: "What areas do you serve?", a: "We serve the Greater Toronto Area (GTA) including Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, and surrounding communities." },
      { q: "Do you work on commercial projects?", a: "Yes, we take on select commercial projects including restaurants, offices, and retail spaces. Contact us to discuss your commercial needs." },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-24 pb-14 bg-charcoal">
          <div className="container mx-auto px-4 lg:px-8">
            <Breadcrumbs items={[{ label: "FAQ" }]} />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Help Center</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-warm-white mt-4">
                Frequently Asked <span className="text-gradient-gold">Questions</span>
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            {faqCategories.map((category, ci) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, fi) => (
                    <AccordionItem
                      key={fi}
                      value={`${ci}-${fi}`}
                      className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-gold/30"
                    >
                      <AccordionTrigger className="font-heading font-medium text-foreground text-left hover:no-underline hover:text-gold">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16 p-10 bg-card border border-border rounded-lg"
            >
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">We're happy to help. Reach out and we'll get back to you within 24 hours.</p>
              <Link to="/contact">
                <Button className="bg-gradient-gold text-charcoal font-heading font-semibold tracking-wide">
                  Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
