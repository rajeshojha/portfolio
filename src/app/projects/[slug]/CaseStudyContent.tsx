"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Lightbulb,
  Zap,
  Target,
  Shield,
  Database,
  Rocket,
  Download,
} from "lucide-react";
import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

const challengeIcons = [Zap, Shield, ExternalLink, Shield, Database, Rocket];

export default function CaseStudyContent({ study }: { study: CaseStudy }) {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-16 py-5 flex justify-between items-center backdrop-blur-xl bg-[#0a0a0b]/80 border-b border-[var(--color-border)]">
        <Link
          href="/"
          className="font-['Space_Grotesk',sans-serif] text-xl font-bold gradient-text"
        >
          RO.
        </Link>
        <ul className="hidden md:flex gap-8 list-none">
          {["Home", "Projects", "Experience", "Skills", "Contact"].map(
            (item) => (
              <li key={item}>
                <Link
                  href={`/#${item.toLowerCase()}`}
                  className="text-[var(--color-secondary)] text-sm font-medium hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[var(--color-accent)] after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </Link>
              </li>
            ),
          )}
        </ul>
        <Link
          href="/resume.pdf"
          target="_blank"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] transition-all duration-300"
        >
          <Download size={14} />
          Resume
        </Link>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30">
            <h1 className="font-['Space_Grotesk',sans-serif] text-4xl md:text-5xl font-bold gradient-text">
              {study.title}
            </h1>
          </div>
          <p className="text-lg md:text-xl text-[var(--color-secondary)] mt-4 max-w-3xl mx-auto">
            {study.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-sm bg-[var(--color-card)] border border-[var(--color-border)] rounded-full text-[var(--color-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Overview */}
      <Section title="Overview">
        <p className="text-[var(--color-secondary)] leading-relaxed">
          {study.overview}
        </p>
      </Section>

      {/* Problems */}
      <Section title="Problems" bg>
        <p className="text-[var(--color-secondary)] mb-4">
          Engineering teams spent significant time every day preparing:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[var(--color-secondary)]">
          {study.problems.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        <p className="text-[var(--color-secondary)] mt-4 italic">
          {study.problemSummary}
        </p>
      </Section>

      {/* Solutions */}
      <Section title="Solutions">
        <ul className="space-y-3">
          {study.solutions.map((s, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[var(--color-secondary)]"
            >
              <span className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </Section>

      {/* Architecture */}
      <Section title="Architecture" bg>
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-8 md:p-12">
          <p className="text-center text-sm text-[var(--color-secondary)] mb-6 uppercase tracking-widest">
            {study.architecture.description}
          </p>
          <div className="flex flex-col items-center gap-3">
            {study.architecture.layers.map((layer, i) => (
              <div key={i} className="relative">
                <div className="px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-lg text-sm text-center min-w-[300px]">
                  {layer}
                </div>
                {i < study.architecture.layers.length - 1 && (
                  <div className="flex justify-center my-1">
                    <span className="text-indigo-400">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section title="Tech Stack">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {study.techStack.map((cat) => (
            <div key={cat.category}>
              <p className="text-xs uppercase tracking-widest text-[var(--color-accent-light)] font-semibold mb-3">
                {cat.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg text-[var(--color-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Features */}
      <Section title="Key Features" bg>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {study.features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Target
                size={20}
                className="text-[var(--color-accent-light)] mb-3"
              />
              <h4 className="text-sm font-semibold mb-2">{f.title}</h4>
              <p className="text-xs text-[var(--color-secondary)] leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* My Contributions */}
      <Section title="My Contributions">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {study.contributions.map((c, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4"
            >
              <span className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
              <p className="text-sm text-[var(--color-secondary)]">{c}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Engineering Challenges */}
      <Section title="Engineering Challenges" bg>
        <div className="space-y-5">
          {study.challenges.map((ch, i) => {
            const Icon = challengeIcons[i % challengeIcons.length];
            return (
              <div
                key={ch.title}
                className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon
                    size={18}
                    className="text-[var(--color-accent-light)]"
                  />
                  <h4 className="font-semibold text-sm">{ch.title}</h4>
                </div>
                <p className="text-sm text-[var(--color-secondary)] leading-relaxed">
                  {ch.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Lessons Learned */}
      <Section title="Lessons Learned">
        <div className="space-y-5">
          {study.lessons.map((l, i) => (
            <div key={i} className="flex items-start gap-4">
              <Lightbulb size={20} className="text-yellow-400 mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm mb-1">{l.title}</h4>
                <p className="text-sm text-[var(--color-secondary)] leading-relaxed">
                  {l.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Back link */}
      <div className="py-12 px-6 md:px-20 text-center">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[var(--color-accent-light)] text-sm font-semibold hover:gap-3 transition-all"
        >
          <ArrowLeft size={14} /> Back to Projects
        </Link>
      </div>

      {/* Footer */}
      <footer className="px-6 md:px-20 py-10 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-[var(--color-muted)]">
          © 2026 Rajesh Ojha. Designed with precision.
        </p>
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/rajeshojhain"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)] hover:bg-[var(--color-accent-glow)] hover:-translate-y-1 transition-all duration-300"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/rajeshojha"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)] hover:bg-[var(--color-accent-glow)] hover:-translate-y-1 transition-all duration-300"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a
            href="https://x.com/rajeshojha"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)] hover:bg-[var(--color-accent-glow)] hover:-translate-y-1 transition-all duration-300 font-bold text-sm"
          >
            𝕏
          </a>
        </div>
      </footer>
    </main>
  );
}

function Section({
  title,
  children,
  bg,
}: {
  title: string;
  children: React.ReactNode;
  bg?: boolean;
}) {
  return (
    <section className={`py-16 px-6 md:px-20 ${bg ? "bg-[#111113]" : ""}`}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-['Space_Grotesk',sans-serif] text-2xl md:text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}
