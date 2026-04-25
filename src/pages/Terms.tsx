import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";

const Terms = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <section className="pt-24 pb-8 bg-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold text-warm-white">
            Terms & <span className="text-gradient-gold">Conditions</span>
          </motion.h1>
          <p className="text-warm-white/50 text-sm mt-4">Last updated: February 27, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {[
            { title: "Acceptance of Terms", body: "By accessing and using the Empire Stairs & Kitchens website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services." },
            { title: "Services", body: "Empire provides custom kitchen and staircase design, fabrication, and installation services. All projects are subject to a signed contract specifying scope, timeline, materials, and pricing." },
            { title: "Quotes & Pricing", body: "All quotes provided are valid for 30 days from the date of issue. Prices may vary based on material availability, design changes, and project scope modifications requested after the initial agreement." },
            { title: "Payment Terms", body: "A deposit of 40% is required to begin work. Progress payments are due at agreed-upon milestones. The remaining balance is due upon project completion and your satisfaction walkthrough." },
            { title: "Project Timeline", body: "We provide estimated timelines in good faith. Delays may occur due to material supply, weather, permit processing, or unforeseen structural issues. We will communicate any changes promptly." },
            { title: "Warranty", body: "All craftsmanship is backed by a 5-year warranty covering defects in workmanship. This does not cover normal wear and tear, misuse, or damage caused by third parties. Material warranties are provided by their respective manufacturers." },
            { title: "Limitation of Liability", body: "Empire Stairs & Kitchens' liability is limited to the total contract value of the project. We are not liable for indirect, consequential, or incidental damages arising from our services." },
            { title: "Intellectual Property", body: "All design plans, 3D renderings, and creative work produced by Empire remain our intellectual property until full payment is received, at which point designs transfer to the client for that specific project." },
            { title: "Governing Law", body: "These terms are governed by the laws of the Province of Ontario, Canada. Any disputes will be resolved through the courts of Ontario." },
          ].map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="text-xl font-heading font-bold text-foreground mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Terms;
