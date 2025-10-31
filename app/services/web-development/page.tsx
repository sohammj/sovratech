"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WebDev() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can you build both portfolio and business websites?",
      a: "Yes. Whether it’s a personal brand or a corporate site, we create fully custom experiences aligned with your goals and audience.",
    },
    {
      q: "Do you provide hosting and domain setup?",
      a: "Absolutely. We handle everything from domain linking to deployment — you only deal with us.",
    },
    {
      q: "Will I be able to edit content myself?",
      a: "Yes. We make it easy for clients to manage content without technical knowledge, through a guided, simple interface.",
    },
    {
      q: "How long does a project typically take?",
      a: "Depending on scope and complexity, most projects are completed in 2–6 weeks with continuous feedback cycles.",
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes. We can either refine your existing platform or rebuild it from the ground up for better design, performance, and clarity.",
    },
  ];

  return (
    <main className="bg-black text-gray-200 overflow-hidden">
      {/* === HERO SECTION === */}
      <section className="relative flex flex-col items-center justify-center h-[90vh] text-center px-6 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.8)), url('/services/webdev.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(3px)",
            }}
            animate={{
              scale: [1, 1.04, 1],
              backgroundPosition: ["50% 50%", "53% 53%", "50% 50%"],
            }}
            transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
          />
          {/* Soft gradient lift at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Hero Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl md:text-6xl font-playfair leading-snug max-w-3xl"
        >
          Websites that Speak Your Brand’s Language —{" "}
          <span className="text-white/85">Fully Custom. Fully Coded.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative z-10 mt-6 text-gray-300 max-w-2xl text-lg"
        >
          No templates. No drag-and-drop. Every SovraTech site is handcrafted
          for complete design freedom and performance.
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
              title: "Custom Design & Animation",
              desc: "Pixel-perfect layouts and seamless motion for a fluid, modern experience that fits your brand’s rhythm.",
            },
            {
              title: "End-to-End Development",
              desc: "From concept to launch — we manage design, build, and deployment with precision and care.",
            },
            {
              title: "Full Customization",
              desc: "Every element, feature, and layout is built from scratch to match your exact requirements.",
            },
            {
              title: "Performance & SEO",
              desc: "Optimized for speed, discoverability, and flawless cross-device performance.",
            },
            {
              title: "Maintenance & Scaling",
              desc: "We ensure your site grows smoothly with your business through seamless updates and monitoring.",
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

      {/* === DAQ PHILOSOPHY === */}
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
              desc: "Sleek UI and animations that resonate with your brand.",
            },
            {
              title: "Automation",
              desc: "Smart workflows and custom integrations for smooth operations.",
            },
            {
              title: "Quality",
              desc: "Handcrafted, reliable, and high-performance builds made to last.",
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

      {/* === CLIENT PROJECTS === */}
      <section className="py-28 px-6 md:px-20 bg-black border-t border-neutral-900">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-playfair text-center mb-12"
        >
          Client Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto">
          {[
            {
              title: "Hridmann",
              desc: "A mindful psychology consultancy website — visually calm yet deeply human. A showcase of minimal design and trust-focused UI.",
              img: "/services/Hridmann.png",
              link: "https://hridmann.com", // ✅ live site link
            },
            {
              title: "Enso Mind Matters",
              desc: "A vibrant, brushstroke-inspired art therapy website that embraces creativity, flow, and expression through design.",
              img: "/services/web2.jpg",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.04,
                y: -5,
                boxShadow: project.link ? "0 0 25px rgba(255,255,255,0.05)" : "none",
              }}
              className="relative overflow-hidden bg-neutral-900 rounded-2xl border border-neutral-800 transition-all cursor-pointer"
              onClick={(e) => {
                // --- Ripple logic ---
                const ripple = document.createElement("span");
                const rect = e.currentTarget.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                ripple.style.cssText = `
                  position: absolute;
                  border-radius: 50%;
                  pointer-events: none;
                  width: ${size}px;
                  height: ${size}px;
                  left: ${x}px;
                  top: ${y}px;
                  background: rgba(255,255,255,0.2);
                  transform: scale(0);
                  animation: ripple-effect 0.6s ease-out;
                `;
                e.currentTarget.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);

                // --- Open link if exists ---
                if (project.link) window.open(project.link, "_blank");
              }}
            >
              <Image
                src={project.img}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-t-2xl object-cover h-64 w-full opacity-90 hover:opacity-100 transition-all duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.desc}</p>
              </div>
            </motion.div>

          ))}

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

      {/* === CTA SECTION === */}
      <section className="text-center py-24 border-t border-neutral-900 bg-black">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-playfair mb-6"
        >
          Let’s Build Something That Represents You.
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
