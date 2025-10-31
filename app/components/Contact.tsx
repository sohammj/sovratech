"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    const res = await fetch("https://formspree.io/f/xanlpzkr", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-black text-center py-24 border-t border-neutral-800 text-gray-300"
    >
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-playfair mb-3"
      >
        Contact Us
      </motion.h3>

      <div className="w-12 h-[2px] bg-gray-600 mx-auto mb-10"></div>

      {/* --- Social Links --- */}
      <div className="flex justify-center gap-8 mb-10">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="mailto:hello.sovratech@gmail.com"
          className="flex items-center gap-2 hover:text-white transition-all"
        >
          <Mail className="w-5 h-5" />
          <span>Email</span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://www.instagram.com/sovratech/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-all"
        >
          <Instagram className="w-5 h-5" />
          <span>Instagram</span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="YOUR_LINKEDIN_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-all"
        >
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </motion.a>
      </div>

      {/* --- Live Enquiry Form --- */}
      <motion.form
        onSubmit={handleSubmit}
        method="POST"
        action="https://formspree.io/f/xanlpzkr"
        className="max-w-md mx-auto space-y-5 text-left"
      >
        <div>
          <label className="block text-sm text-gray-400 mb-1">Name</label>
          <input
            name="name"
            required
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
            placeholder="Tell us what you’re looking for..."
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          type="submit"
          disabled={status === "sending"}
          className="w-full mt-4 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Enquiry"}
        </motion.button>

        {status === "sent" && (
          <p className="text-green-400 text-sm mt-2 text-center">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm mt-2 text-center">
            ⚠️ Something went wrong. Please try again.
          </p>
        )}
      </motion.form>
    </section>
  );
}
