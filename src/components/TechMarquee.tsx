"use client";

import { techStack } from "@/data/skills";

export default function TechMarquee() {
  const doubled = [...techStack, ...techStack];

  return (
    <div className="py-8 border-t border-b border-[var(--color-border)] overflow-hidden">
      <div className="flex gap-12 animate-marquee w-max">
        {doubled.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 whitespace-nowrap text-sm text-[var(--color-muted)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
