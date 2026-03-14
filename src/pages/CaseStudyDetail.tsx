import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getCaseStudyById } from "@/data/caseStudies";

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const study = id ? getCaseStudyById(id) : undefined;

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-heading text-2xl text-foreground mb-2">Case study not found</h1>
            <Link to="/" className="text-gold hover:underline font-heading">
              Back to home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-0">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          {/* Page title */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-14"
          >
            <h1 className="font-heading font-bold text-foreground text-3xl md:text-4xl leading-tight">
              {study.title}
            </h1>
          </motion.div>

          {/* BEFORE: How it was — left text, right image */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="order-2 lg:order-1"
              >
                <span className="inline-block font-heading text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  How it was
                </span>
                <p className="text-foreground/90 text-lg leading-relaxed">
                  {study.beforeDescription}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="order-1 lg:order-2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border aspect-[4/3]">
                  <img
                    src={study.before}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 rounded-lg bg-charcoal/90 backdrop-blur-sm px-4 py-2 text-xs font-heading font-semibold text-warm-white uppercase tracking-widest">
                    Before
                  </span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* What we did — bullet points */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-border bg-card/50 p-8 md:p-10"
            >
              <h2 className="font-heading font-semibold text-foreground text-lg mb-6">
                What we did
              </h2>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {study.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                  >
                    <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center border border-gold/25">
                      <Check className="w-3 h-3 text-gold" strokeWidth={2.5} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </section>

          {/* AFTER: How it is now — left image, right text */}
          <section className="mb-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border aspect-[4/3]">
                  <img
                    src={study.after}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 rounded-lg bg-charcoal/90 backdrop-blur-sm px-4 py-2 text-xs font-heading font-semibold text-warm-white uppercase tracking-widest">
                    After
                  </span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: 0.06 }}
              >
                <span className="inline-block font-heading text-xs tracking-[0.3em] uppercase text-gold mb-3">
                  How it is now
                </span>
                <p className="text-foreground/90 text-lg leading-relaxed">
                  {study.afterDescription}
                </p>
              </motion.div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="py-24 bg-charcoal relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="container mx-auto px-4 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-warm-white mb-4">
                Ready to Transform{" "}
                <span className="text-gradient-gold">Your Space?</span>
              </h2>
              <p className="text-warm-white/60 mb-10 text-lg">
                Book a free consultation and we’ll help you get from before to after—with the same care and craftsmanship.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-gold text-charcoal font-heading font-semibold tracking-wide text-base px-10 py-6 hover:opacity-90 transition-opacity"
                >
                  Book Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
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

export default CaseStudyDetail;
