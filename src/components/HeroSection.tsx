import { motion } from "framer-motion";

const HeroSection = ({ title, description, image, label = "Portfolio" }) => {
  return (
    <section className="pt-24 pb-16 bg-charcoal relative overflow-hidden">

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/90" />

      {/* Floating glow */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-[-150px] top-[-150px] w-[400px] h-[400px] bg-gold/10 blur-3xl rounded-full"
      />

      <div className="container mx-auto px-4 lg:px-8 relative">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            <span className="font-heading text-xs uppercase text-gold tracking-[0.4em]">
              {label}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-warm-white mt-4 mb-6 leading-tight">
              {title}
            </h1>

            {description && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-warm-white/70 text-lg md:text-xl leading-relaxed max-w-2xl font-body"
              >
                {description}
              </motion.p>
            )}

          </motion.div>

          {/* RIGHT IMAGE */}
          {image && (
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={image}
                alt={title}
                className="rounded-xl  object-cover w-full h-[420px]"
              />
            </motion.div>
          )}

        </div>

      </div>

    </section>
  );
};

export default HeroSection;