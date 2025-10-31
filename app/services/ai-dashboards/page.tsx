"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AIDashboards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What kinds of dashboards do you build?",
      a: "We create business intelligence dashboards, KPI monitors, and predictive AI-driven analytics for startups and enterprises alike.",
    },
    {
      q: "Can you integrate our existing data sources?",
      a: "Yes. We connect to CRMs, ERPs, databases, and spreadsheets — visualizing everything through a unified, interactive interface.",
    },
    {
      q: "Do you use cloud services like Google Cloud or AWS?",
      a: "We design solutions around your needs — from on-prem setups to cloud-hosted architectures using secure APIs.",
    },
    {
      q: "Can AI actually generate insights automatically?",
      a: "Yes. We embed trained models that highlight anomalies, trends, and forecasts — so you don’t have to manually dig through data.",
    },
    {
      q: "Is the data secure?",
      a: "Absolutely. We ensure end-to-end encryption, anonymized datasets, and access control to keep your information protected.",
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
                "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.9)), url('/services/ai.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(3px)",
            }}
            animate={{
              scale: [1, 1.06, 1],
              backgroundPosition: ["50% 50%", "52% 52%", "50% 50%"],
            }}
            transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Hero Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl md:text-6xl font-playfair leading-snug max-w-3xl"
        >
          Turning Data into{" "}
          <span className="text-white/85">Decisions.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative z-10 mt-6 text-gray-300 max-w-2xl text-lg"
        >
          We design AI-powered dashboards that go beyond visuals — uncovering
          patterns, automating insights, and helping you make smarter business
          decisions in real time.
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
              title: "AI-Driven Insights",
              desc: "Go beyond static dashboards. We implement machine learning models that detect trends, predict outcomes, and flag anomalies automatically.",
            },
            {
              title: "Custom Data Visualizations",
              desc: "We craft intuitive visuals — from KPIs and growth funnels to interactive filters and geospatial data maps.",
            },
            {
              title: "Multi-Source Integration",
              desc: "Merge all your data into one intelligent dashboard. From Odoo to Google Sheets — everything stays in sync.",
            },
            {
              title: "Automation & Alerts",
              desc: "Get automated email and chat alerts based on business triggers or AI-detected anomalies.",
            },
            {
              title: "End-to-End Setup",
              desc: "We handle everything — data cleaning, backend setup, UI design, and secure cloud deployment.",
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

      {/* === OUR APPROACH === */}
      <section className="py-28 bg-gradient-to-b from-black via-neutral-950 to-black">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-playfair text-center mb-14"
        >
          Our DAQ Philosophy
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-8">
          {[
            {
              title: "Design",
              desc: "Elegant, responsive dashboards that present complex data simply and beautifully.",
            },
            {
              title: "Automation",
              desc: "AI pipelines that update your visuals automatically — no manual refreshes or queries.",
            },
            {
              title: "Quality",
              desc: "Accurate, consistent, and optimized dashboards that scale with your data and business.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: "0 0 20px rgba(255,255,255,0.05)",
              }}
              className="p-8 bg-neutral-900/50 border border-neutral-800 rounded-2xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === FEATURED INTELLIGENT DASHBOARD === */}
      <section className="py-28 px-6 md:px-20 bg-black border-t border-neutral-900">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-playfair text-center mb-12"
        >
          Intelligent Dashboard Showcase
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-neutral-900/70 rounded-2xl border border-neutral-800 overflow-hidden backdrop-blur-md shadow-xl"
        >
          <Image
            src="/services/Dashboard1.png"
            alt="Agro-Food CO2 Emissions Dashboard"
            width={1200}
            height={800}
            className="object-cover w-full h-auto opacity-95 hover:opacity-100 transition-all duration-500"
          />
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Agro-Food Sector CO₂ Emissions Dashboard
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              An intelligent, AI-powered analytical dashboard designed to track and forecast
              CO₂ emissions across the agro-food sector globally. The system visualizes trends
              in drained organic soils, fertilizer use, temperature variations, and national
              emission patterns — enabling policy planners to identify critical intervention
              points for sustainable food systems.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              The dashboard integrates predictive modeling and live data visualization,
              providing both historical trends and future emission estimates for data-driven
              environmental action.
            </p>
          </div>
        </motion.div>
      </section>


      {/* === FAQ === */}
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
          Build Dashboards that Think for You.
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
