'use client';
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to toggle background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-12 py-6 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      {/* Centered Brand */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-white text-lg tracking-[0.35em] uppercase font-[700] font-poppins text-center">
          SovraTech
        </h1>
      </div>

      {/* Navigation Links (Right) */}
      <div className="ml-auto flex space-x-10 text-sm tracking-wide">
        {["Services", "About", "Contact"].map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className="text-gray-300 hover:text-white transition-colors"
          >
            {section}
          </a>
        ))}
      </div>
    </nav>
  );
}
