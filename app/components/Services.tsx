"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "We design and develop fully custom websites from the ground up — no templates, no limitations. Every line of code and animation is handcrafted to fit your brand’s identity and goals.",
    image: "/services/webdev.jpg",
    link: "/services/web-development",
  },
  {
    title: "Odoo Customization",
    description:
      "End-to-end customization of Odoo ERP to automate your sales, inventory, and finance workflows — seamlessly integrated with your business processes.",
    image: "/services/odoo.jpg",
    link: "/services/odoo-customization",
  },
  {
    title: "AI & Dashboard Solutions",
    description:
      "We build intelligent dashboards and workflow automations powered by AI — transforming data into actionable insights for smarter decisions.",
    image: "/services/ai.jpg",
    link: "/services/ai-dashboards",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black py-24 text-center border-t border-neutral-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-playfair text-gray-200 mb-12"
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Link key={index} href={service.link}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04, y: -5 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden bg-neutral-900/40 hover:bg-neutral-800/60 backdrop-blur-[2px] transition-all duration-300 border border-neutral-800 cursor-pointer"
            >
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
