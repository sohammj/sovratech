'use client';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-center py-24 border-t border-neutral-800 px-8"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-playfair text-gray-300 mb-8"
      >
        About Us
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-gray-400 leading-relaxed"
      >
        SovraTech is a digital studio that merges design, data, and technology.  
        We help brands build a powerful online presence through visually stunning websites,  
        smart automations, and AI-driven insights — empowering businesses to grow faster  
        in the digital era.
      </motion.p>
    </section>
  );
}
