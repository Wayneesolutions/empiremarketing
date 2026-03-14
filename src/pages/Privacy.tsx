import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";

const Privacy = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <section className="pt-32 pb-10 bg-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold text-warm-white">
            Privacy <span className="text-gradient-gold">Policy</span>
          </motion.h1>
          <p className="text-warm-white/50 text-sm mt-4">Last updated: February 27, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-neutral">
          {[
            { title: "Information We Collect", body: "We collect personal information you provide when booking consultations, including your name, email address, phone number, property address, and project details. We also collect usage data through cookies and analytics tools." },
            { title: "How We Use Your Information", body: "Your information is used to schedule and manage consultations, provide project estimates, communicate about your project, send relevant marketing communications (with your consent), and improve our services and website experience." },
            { title: "Information Sharing", body: "We do not sell or rent your personal information. We may share data with trusted service providers (payment processors, analytics tools) who assist in operating our business, subject to confidentiality agreements." },
            { title: "Cookies", body: "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through our cookie consent banner or your browser settings." },
            { title: "Data Security", body: "We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits." },
            { title: "Your Rights", body: "You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time by contacting us at info@empirestairs.com." },
            { title: "Contact Us", body: "For privacy inquiries, contact us at info@empirestairs.com or call (123) 456-7890." },
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

export default Privacy;
