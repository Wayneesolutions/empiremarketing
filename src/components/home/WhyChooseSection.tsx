import { motion } from "framer-motion";

const steps = [
  { img: "/whychoose us/1.png", title: "3D Design", description: "Visualize your space before a single nail is hammered." },
  { img: "/whychoose us/2.png", title: "Construct", description: "Expert craftsmen bring the design to life." },
  { img: "/whychoose us/3.png", title: "Install", description: "Professional installation — clean and on schedule." },
  { img: "/whychoose us/4.png", title: "Finish", description: "Flawless finishing touches that make it truly yours." },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-heading text-xs tracking-[0.4em] uppercase text-gold">Why Empire</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-warm-white mt-3">
            Why Choose <span className="text-gradient-gold">Empire</span>
          </h2>
          <p className="text-warm-white/60 mt-4 max-w-lg mx-auto text-sm">
            From concept to completion — every step handled by Empire.
          </p>
        </motion.div>

        {/* Timeline row */}
        <div className="relative max-w-4xl mx-auto">

          {/* Horizontal line through circles */}
          <div className="hidden lg:block absolute top-5 left-[12%] right-[12%] h-px bg-gold/30 z-0" />

          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.45 }}
                className="flex flex-col items-center text-center w-full lg:w-[22%]"
              >
                {/* Circle */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-gold flex items-center justify-center mb-4 shadow-[0_0_16px_rgba(201,168,76,0.4)] border-2 border-charcoal">
                  <span className="text-white font-heading font-semibold text-sm">{`0${i + 1}`}</span>
                </div>

                {/* Card */}
                <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                  {/* Image */}
                  <div className="w-full h-44 overflow-hidden bg-white">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-contain object-top"
                    />
                  </div>
                  {/* Divider */}
                  <div className="mx-4 h-px bg-gold/20" />
                  {/* Text */}
                  <div className="px-4 py-3">
                    <h3 className="font-heading font-bold text-charcoal text-sm mb-1">{step.title}</h3>
                    <p className="text-charcoal/50 text-xs leading-relaxed">{step.description}</p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
