"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function OdooCustomization() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can you customize existing Odoo modules?",
      a: "Yes. We specialize in tailoring standard Odoo apps to perfectly match your business logic — without breaking the upgrade path.",
    },
    {
      q: "Do you build custom modules from scratch?",
      a: "Absolutely. From inventory automation to CRM enhancements, we build fully custom Odoo modules for seamless integration.",
    },
    {
      q: "Which Odoo versions do you support?",
      a: "We currently support Odoo 17 and 18 (Community & Enterprise) with complete backward compatibility testing.",
    },
    {
      q: "Can you integrate third-party APIs like WhatsApp or Google Drive?",
      a: "Yes — in fact, we’ve developed official modules for WhatsApp messaging and file management within Odoo.",
    },
    {
      q: "Do you provide deployment and hosting?",
      a: "Yes. We handle everything from Odoo.sh setups to on-premise and custom VPS configurations.",
    },
  ];

  return (
    <main className="bg-black text-gray-200 overflow-hidden">
      {/* === HERO SECTION === */}
      <section className="relative flex flex-col items-center justify-center h-[90vh] text-center px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.85)), url('/services/odoo.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(3px)",
            }}
            animate={{
              scale: [1, 1.05, 1],
              backgroundPosition: ["45% 45%", "54% 54%", "45% 45%"],
            }}
            transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl md:text-6xl font-playfair leading-snug max-w-3xl"
        >
          Transform Workflows with{" "}
          <span className="text-white/85">Odoo Customization</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative z-10 mt-6 text-gray-300 max-w-2xl text-lg"
        >
          We extend and optimize Odoo ERP — crafting automation, dashboards, and
          integrations that make your business run smarter and faster.
        </motion.p>
      </section>

      {/* === WHAT WE OFFER === */}
      <section className="py-32 px-6 md:px-20 bg-black border-t border-neutral-900">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-playfair text-center mb-16"
        >
          What We Offer
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            {
              title: "Custom Module Development",
              desc: "End-to-end modules — from Sales and CRM automation to custom workflows that fit your operations perfectly.",
            },
            {
              title: "UI/UX Enhancements",
              desc: "Polished Odoo interfaces that improve usability, accessibility, and efficiency across all devices.",
            },
            {
              title: "Integration Solutions",
              desc: "Seamlessly connect Odoo with WhatsApp, Google Drive, payment gateways, or your internal systems.",
            },
            {
              title: "Performance Optimization",
              desc: "Database tuning, caching, and workflow refactoring for faster, smoother performance.",
            },
            {
              title: "Maintenance & Version Upgrades",
              desc: "Long-term support for updates, bug fixes, and migration to newer Odoo versions.",
            },
          ].map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(255,255,255,0.05)",
              }}
              className="bg-neutral-900/60 p-8 rounded-2xl border border-neutral-800 backdrop-blur-sm transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {offer.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {offer.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === SIGNATURE PROJECT === */}
      <section className="py-28 px-6 md:px-20 bg-gradient-to-b from-black via-neutral-950 to-black border-t border-neutral-900">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-playfair text-center mb-12"
        >
          Signature Project
        </motion.h2>

        <div
          onClick={() =>
            window.open(
              "https://apps.odoo.com/apps/modules/18.0/media_whatsapp_integration",
              "_blank"
            )
          }
          className="max-w-5xl mx-auto bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden cursor-pointer group transition-all hover:shadow-lg hover:scale-[1.01]"
        >
          <Image
            src="/services/cover.png"
            alt="WhatsApp Integration Module"
            width={900}
            height={500}
            className="object-cover w-full h-80 opacity-90 group-hover:opacity-100 transition-all duration-500"
          />
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-3 text-white">
              WhatsApp Integration Module for Odoo 18
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Our in-house developed WhatsApp integration allows real-time
              customer communication directly from Odoo CRM and Sales Orders.
              Send updates, track messages, and automate alerts — all within
              your ERP dashboard.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all"
            >
              View on Odoo Store →
            </motion.button>
          </div>
        </div>
      </section>

      {/* === FAQ SECTION === */}
      <section className="py-24 bg-neutral-950 border-t border-neutral-900">
        <h2 className="text-3xl font-playfair text-center mb-10">FAQs</h2>
        <div className="max-w-4xl mx-auto space-y-4 px-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="cursor-pointer bg-neutral-900/50 border border-neutral-800 p-5 rounded-xl hover:border-gray-600 transition-all"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-white">{faq.q}</h3>
                <span className="text-gray-400">
                  {openIndex === i ? "−" : "+"}
                </span>
              </div>
              {openIndex === i && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 mt-3 text-sm"
                >
                  {faq.a}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* === CTA === */}
      <section className="text-center py-24 border-t border-neutral-900 bg-black">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-playfair mb-6"
        >
          Ready to Automate with Odoo?
        </motion.h2>
        <motion.a
          href="/#contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-8 py-3 text-black bg-white rounded-full hover:bg-gray-200 transition-all"
        >
          Contact SovraTech
        </motion.a>
      </section>
    </main>
  );
}
