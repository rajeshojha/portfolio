"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-20 pt-28 pb-20 relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute -top-1/2 -right-1/5 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute -bottom-1/3 -left-1/10 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent-glow)] border border-indigo-500/30 rounded-full text-xs text-[var(--color-accent-light)] font-medium mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-dot" />
          Available for opportunities
        </div>

        <h1 className="font-['Space_Grotesk',sans-serif] text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
          Crafting
          <br />
          <span className="gradient-text">Scalable</span>
          <br />
          Digital Systems
        </h1>

        <p className="text-lg text-[var(--color-secondary)] max-w-md mb-10 leading-relaxed">
          Senior Software Engineer with 12+ years building enterprise platforms,
          backend services, and AI-powered developer tools across global teams.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-xl text-white font-semibold hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(99,102,241,0.4)] transition-all duration-300"
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--color-border)] rounded-xl text-white font-semibold hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-glow)] hover:-translate-y-1 transition-all duration-300"
          >
            Let&apos;s Talk
          </a>
        </div>
      </motion.div>

      {/* Visual */}
      <motion.div
        className="hidden lg:flex justify-center items-center relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="relative w-[380px] h-[380px]">
          {/* Morphing blob with profile image */}
          <div className="w-full h-full animate-morph bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 shadow-[0_20px_60px_rgba(99,102,241,0.3)] overflow-hidden flex items-center justify-center">
            <Image
              src="/profile.jpg"
              alt="Rajesh Ojha"
              width={380}
              height={380}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Floating cards */}
          <div className="absolute -top-2 -right-6 animate-float">
            <div className="px-5 py-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <div className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                Experience
              </div>
              <div className="font-['Space_Grotesk',sans-serif] text-xl font-bold gradient-text">
                12+ yrs
              </div>
            </div>
          </div>

          <div className="absolute bottom-16 -left-12 animate-float-delayed">
            <div className="px-5 py-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <div className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                Projects
              </div>
              <div className="font-['Space_Grotesk',sans-serif] text-xl font-bold gradient-text">
                30+
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 right-8 animate-float-delayed-2">
            <div className="px-5 py-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <div className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
                Countries
              </div>
              <div className="font-['Space_Grotesk',sans-serif] text-xl font-bold gradient-text">
                6+
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
