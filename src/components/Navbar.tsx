"use client";

import { useState, useEffect } from "react";
import { Download } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 md:px-16 py-5 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0a0a0b]/80 border-b border-[var(--color-border)]"
          : ""
      }`}
    >
      <a href="#home" className="font-['Space_Grotesk',sans-serif] text-xl font-bold gradient-text">
        RO.
      </a>

      <ul className="hidden md:flex gap-8 list-none">
        {["Home", "Projects", "Experience", "Skills", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-[var(--color-secondary)] text-sm font-medium hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[var(--color-accent)] after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="/resume.pdf"
        target="_blank"
        className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] transition-all duration-300"
      >
        <Download size={14} />
        Resume
      </a>
    </nav>
  );
}
