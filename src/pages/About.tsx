import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, Users, Calendar, Target, ShieldCheck, BadgeCheck, Hammer, HardHat } from "lucide-react";
import teamCeo from "@/assets/team-ceo.jpg";
import teamDesigner from "@/assets/team-designer.jpg";
import teamLead from "@/assets/team-lead.jpg";
import teamPm from "@/assets/team-pm.jpg";

const team = [
  { name: "Michael Reynolds", role: "Founder & CEO", bio: "With over 20 years in the renovation industry, Michael founded Empire with a vision to deliver unmatched quality.", image: teamCeo },
  { name: "Sarah Mitchell", role: "Lead Designer", bio: "Sarah brings spaces to life with her award-winning eye for detail and deep understanding of functional design.", image: teamDesigner },
  { name: "David Kowalski", role: "Master Craftsman", bio: "David leads our installation team with 18 years of hands-on expertise in fine woodworking and staircase construction.", image: teamLead },
  { name: "James Chen", role: "Project Manager", bio: "James ensures every project runs on time and on budget, keeping clients informed at every stage.", image: teamPm },
];

const certifications = [
  { icon: ShieldCheck, title: "Fully Licensed", description: "Licensed by the Ontario government for residential and commercial renovations." },
  { icon: BadgeCheck, title: "WSIB Insured", description: "Workplace Safety & Insurance Board certified for your peace of mind." },
  { icon: Hammer, title: "TECA Member", description: "Proud member of the Toronto Electrical Contractors Association." },
  { icon: HardHat, title: "OHSA Compliant", description: "Fully compliant with Occupational Health and Safety Act standards." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-14 bg-charcoal">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">About Us</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-warm-white mt-4 mb-6">
                Craftsmanship That{" "}
                <span className="text-gradient-gold">Speaks Volumes</span>
              </h1>
              <p className="text-warm-white/60 text-lg leading-relaxed">
                With over 15 years of experience, Empire Stairs & Kitchens has been transforming homes across the Greater Toronto Area with premium kitchen cabinets and custom staircases built to last.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Empire was founded on a simple belief: every home deserves craftsmanship that reflects the people who live in it. What started as a small woodworking shop has grown into one of the most trusted names in kitchen and staircase installation.
                  </p>
                  <p>
                    Our team of skilled artisans, designers, and project managers work together to deliver results that consistently exceed expectations. From the first consultation to the final reveal, we're committed to transparency, quality, and your complete satisfaction.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { icon: Award, value: "15+", label: "Years of Excellence" },
                  { icon: Users, value: "500+", label: "Happy Clients" },
                  { icon: Calendar, value: "98%", label: "On-Time Delivery" },
                  { icon: Target, value: "100%", label: "Licensed & Insured" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card border border-border rounded-lg p-6 text-center">
                    <stat.icon className="w-6 h-6 text-gold mx-auto mb-3" />
                    <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Our People</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
                Meet the <span className="text-gradient-gold">Team</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                The skilled professionals behind every Empire project.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group text-center"
                >
                  <div className="relative overflow-hidden rounded-lg mb-5 aspect-[3/4]">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role} at Empire Stairs & Kitchens`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg">{member.name}</h3>
                  <p className="text-gold text-sm font-heading font-medium mt-1">{member.role}</p>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Trust & Safety</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
                Certifications & <span className="text-gradient-gold">Compliance</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                Fully certified and insured — so you can trust us with your home.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-lg p-8 text-center hover:border-gold/30 transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-charcoal">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-warm-white mt-4 mb-6">
                Where Design Meets Precision
              </h2>
              <p className="text-warm-white/60 text-lg leading-relaxed">
                To deliver the highest standard of kitchen and staircase craftsmanship by combining innovative design, premium materials, and expert installation — all while providing an exceptional client experience from start to finish.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
