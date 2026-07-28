"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { BarChart3, Rocket, ShieldCheck, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 size={24} className="text-[var(--color-accent-light)]" />,
  Rocket: <Rocket size={24} className="text-[var(--color-accent-light)]" />,
  ShieldCheck: <ShieldCheck size={24} className="text-[var(--color-accent-light)]" />,
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-20 bg-[#111113]">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs uppercase tracking-[3px] text-[var(--color-accent-light)] font-semibold mb-4">
          Portfolio
        </p>
        <h2 className="font-['Space_Grotesk',sans-serif] text-4xl md:text-5xl font-bold tracking-tight">
          Featured Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group relative bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-8 transition-all duration-400 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-[0_20px_60px_rgba(99,102,241,0.1)] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-glow)] flex items-center justify-center mb-5">
              {iconMap[project.icon]}
            </div>

            <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
            <p className="text-sm text-[var(--color-secondary)] leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[var(--color-accent-light)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent-light)] group-hover:gap-3 transition-all duration-300"
            >
              View Case Study <ArrowRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
