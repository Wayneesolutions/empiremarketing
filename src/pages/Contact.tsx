import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, Star, Upload, CalendarDays, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { number: "1", title: "Fill Out the Form", description: "Tell us about your project and preferences." },
  { number: "2", title: "We Reach Out", description: "Our team contacts you within 24 hours." },
  { number: "3", title: "Free In-Home Visit", description: "We visit, measure, and discuss your vision." },
  { number: "4", title: "Get Your Quote", description: "Receive a detailed, no-obligation estimate." },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", propertyType: "", preferredDate: "", message: "",
  });
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "We'll contact you within 24 hours to schedule your free consultation.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", propertyType: "", preferredDate: "", message: "" });
    setFileName("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-14 bg-charcoal">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Get In Touch</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-warm-white mt-4 mb-6">
                Book Your Free{" "}
                <span className="text-gradient-gold">Consultation</span>
              </h1>
              <p className="text-warm-white/60 text-lg">
                Ready to transform your space? Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How Booking Works */}
        <section className="py-16 bg-card border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-gold text-charcoal font-heading font-bold text-lg flex items-center justify-center mx-auto mb-3">
                    {step.number}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16 max-w-6xl mx-auto">
              {/* Form - 3 cols */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Tell Us About Your Project</h2>
                <p className="text-muted-foreground text-sm mb-8">All fields marked with * are required. We'll never share your information.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-heading font-medium text-foreground mb-2 block">Full Name *</label>
                      <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Smith" className="bg-card border-border h-12" />
                    </div>
                    <div>
                      <label className="text-sm font-heading font-medium text-foreground mb-2 block">Email *</label>
                      <Input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@email.com" className="bg-card border-border h-12" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-heading font-medium text-foreground mb-2 block">Phone *</label>
                      <Input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="(123) 456-7890" className="bg-card border-border h-12" />
                    </div>
                    <div>
                      <label className="text-sm font-heading font-medium text-foreground mb-2 block">Service Needed *</label>
                      <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full h-12 rounded-md border border-border bg-card px-3 text-sm text-foreground">
                        <option value="">Select a service</option>
                        <option value="kitchen">Kitchen Cabinets</option>
                        <option value="stairs">Staircases</option>
                        <option value="both">Both</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-heading font-medium text-foreground mb-2 block">Property Type</label>
                      <select value={formData.propertyType} onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })} className="w-full h-12 rounded-md border border-border bg-card px-3 text-sm text-foreground">
                        <option value="">Select type</option>
                        <option value="house">House</option>
                        <option value="condo">Condo / Apartment</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-heading font-medium text-foreground mb-2 block">Preferred Date</label>
                      <div className="relative">
                        <Input type="date" value={formData.preferredDate} onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })} className="bg-card border-border h-12" />
                      </div>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="text-sm font-heading font-medium text-foreground mb-2 block">Upload Reference Photo / Floor Plan</label>
                    <label className="flex items-center justify-center gap-3 h-24 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-gold/40 transition-colors bg-card">
                      <input type="file" accept="image/*,.pdf" className="hidden" onChange={handleFileChange} />
                      {fileName ? (
                        <div className="flex items-center gap-2 text-gold">
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="text-sm font-medium">{fileName}</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-1 text-muted-foreground">
                          <Upload className="w-6 h-6" />
                          <span className="text-xs">Click to upload (JPG, PNG, PDF)</span>
                        </div>
                      )}
                    </label>
                  </div>

                  <div>
                    <label className="text-sm font-heading font-medium text-foreground mb-2 block">Project Details</label>
                    <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your vision — style preferences, budget range, timeline, etc." rows={4} className="bg-card border-border" />
                  </div>

                  <Button type="submit" size="lg" className="bg-gradient-gold text-charcoal font-heading font-semibold tracking-wide w-full hover:opacity-90 transition-opacity h-14 text-base">
                    <CalendarDays className="w-5 h-5 mr-2" />
                    Book My Free Consultation
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">🔒 Your information is secure. We'll never share it with third parties.</p>
                </form>
              </motion.div>

              {/* Sidebar - 2 cols */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-8">
                {/* Contact Info */}
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    {[
                      { icon: Phone, label: "Phone", value: "(123) 456-7890", href: "tel:+11234567890" },
                      { icon: Mail, label: "Email", value: "info@empirestairs.com", href: "mailto:info@empirestairs.com" },
                      { icon: MapPin, label: "Location", value: "Toronto, Ontario, Canada" },
                      { icon: Clock, label: "Hours", value: "Mon-Fri: 8AM-6PM\nSat: 9AM-4PM" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-4 h-4 text-gold" />
                        </div>
                        <div>
                          <p className="font-heading font-medium text-foreground text-sm">{item.label}</p>
                          {'href' in item && item.href ? (
                            <a href={item.href} className="text-muted-foreground text-sm hover:text-gold transition-colors whitespace-pre-line">{item.value}</a>
                          ) : (
                            <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-charcoal rounded-lg p-8">
                  <h3 className="text-lg font-heading font-bold text-warm-white mb-5">Why Trust Empire</h3>
                  <div className="space-y-4">
                    {[
                      { icon: ShieldCheck, text: "Fully Licensed & WSIB Insured" },
                      { icon: Award, text: "15+ Years of Proven Excellence" },
                      { icon: Star, text: "5-Star Rated on Google Reviews" },
                      { icon: CheckCircle2, text: "Free In-Home Consultation" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-gold shrink-0" />
                        <p className="text-warm-white/80 text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-card border border-border rounded-lg p-8">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm italic leading-relaxed mb-4">
                    "From the first consultation to the final installation, Empire was professional, punctual, and the quality was outstanding. Our kitchen looks incredible!"
                  </p>
                  <p className="font-heading font-semibold text-foreground text-sm">— Sarah & Mark T.</p>
                  <p className="text-xs text-muted-foreground">Kitchen Renovation, Toronto</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
