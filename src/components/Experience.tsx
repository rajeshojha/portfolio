"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-20">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs uppercase tracking-[3px] text-[var(--color-accent-light)] font-semibold mb-4">
          Career
        </p>
        <h2 className="font-['Space_Grotesk',sans-serif] text-4xl md:text-5xl font-bold tracking-tight">
          Professional Experience
        </h2>
      </motion.div>

      <div className="relative max-w-3xl">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-border)]" />

        {experience.map((item, index) => (
          <motion.div
            key={index}
            className="pl-12 pb-14 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Dot */}
            <div
              className={`absolute left-[-5px] top-1.5 w-3 h-3 rounded-full border-[3px] border-[var(--color-background)] ${
                item.current
                  ? "bg-[var(--color-accent)] shadow-[0_0_0_3px_var(--color-accent),0_0_20px_rgba(99,102,241,0.5)] animate-pulse-dot"
                  : "bg-[var(--color-accent)]"
              }`}
            />

            <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
              {item.period}
            </div>
            <h3 className="text-xl font-bold mb-1">{item.role}</h3>
            <p className="text-[var(--color-accent-light)] font-medium mb-3">
              {item.company}
            </p>
            <p className="text-sm text-[var(--color-secondary)] leading-relaxed mb-3">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs bg-[var(--color-card)] border border-[var(--color-border)] rounded-md text-[var(--color-secondary)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
