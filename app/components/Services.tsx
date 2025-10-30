'use client';
import { motion } from "framer-motion";

const services = [
  {
    title: "AI-Enhanced Websites",
    desc: "We build sleek, intelligent websites that integrate AI-powered workflows and automation.",
  },
  {
    title: "Odoo Customization",
    desc: "Custom ERP solutions, automation modules, and tailored dashboards for your business.",
  },
  {
    title: "Data Dashboards",
    desc: "Insightful, interactive dashboards powered by advanced analytics and visualization tools.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black text-center py-24 border-t border-neutral-800"
    >
      <h3 className="text-2xl md:text-3xl font-playfair text-gray-300 mb-12">
        Our Services
      </h3>
      <motion.div
        className="grid md:grid-cols-3 gap-10 px-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 hover:border-blue-400 transition-all"
          >
            <h4 className="text-xl font-semibold mb-3 text-white">{s.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
