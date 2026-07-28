"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import {
  Coffee,
  Leaf,
  Atom,
  FileCode2,
  Server,
  Brain,
  Container,
  Globe,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Coffee: <Coffee size={28} />,
  Leaf: <Leaf size={28} />,
  Atom: <Atom size={28} />,
  FileCode2: <FileCode2 size={28} />,
  Server: <Server size={28} />,
  Brain: <Brain size={28} />,
  Container: <Container size={28} />,
  Globe: <Globe size={28} />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-20 bg-[#111113]">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs uppercase tracking-[3px] text-[var(--color-accent-light)] font-semibold mb-4">
          Expertise
        </p>
        <h2 className="font-['Space_Grotesk',sans-serif] text-4xl md:text-5xl font-bold tracking-tight">
          Technical Skills
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="p-7 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl text-center hover:border-[var(--color-accent)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(99,102,241,0.1)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="text-[var(--color-accent-light)] flex justify-center mb-3">
              {iconMap[skill.icon]}
            </div>
            <div className="font-semibold text-sm mb-1">{skill.name}</div>
            <div className="text-xs text-[var(--color-muted)]">{skill.level}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
