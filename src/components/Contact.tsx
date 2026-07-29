"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xjgnzrvl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[3px] text-[var(--color-accent-light)] font-semibold mb-4">
            Get in Touch
          </p>
          <h2 className="font-['Space_Grotesk',sans-serif] text-3xl md:text-4xl font-bold mb-5">
            Let&apos;s build something
            <br />
            great together.
          </h2>
          <p className="text-[var(--color-secondary)] mb-8 leading-relaxed max-w-md">
            I&apos;m always open to discussing software engineering, backend
            development, AI-powered applications, or interesting technical
            challenges.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="https://linkedin.com/in/rajeshojhain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[var(--color-secondary)] hover:text-[var(--color-accent-light)] transition-colors"
            >
              <span className="w-10 h-10 rounded-lg bg-[var(--color-accent-glow)] flex items-center justify-center text-[var(--color-accent-light)]">
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              linkedin.com/in/rajeshojhain
            </a>
            <a
              href="https://github.com/rajeshojha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[var(--color-secondary)] hover:text-[var(--color-accent-light)] transition-colors"
            >
              <span className="w-10 h-10 rounded-lg bg-[var(--color-accent-glow)] flex items-center justify-center text-[var(--color-accent-light)]">
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </span>
              github.com/rajeshojha
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-5 py-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-white text-sm outline-none focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_var(--color-accent-glow)] transition-all duration-300 placeholder:text-[var(--color-muted)]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            className="w-full px-5 py-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-white text-sm outline-none focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_var(--color-accent-glow)] transition-all duration-300 placeholder:text-[var(--color-muted)]"
          />
          <textarea
            name="message"
            placeholder="Your message..."
            rows={5}
            required
            className="w-full px-5 py-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-white text-sm outline-none focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_var(--color-accent-glow)] transition-all duration-300 resize-y placeholder:text-[var(--color-muted)]"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-semibold hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(99,102,241,0.4)] transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none"
          >
            {status === "submitting" ? (
              "Sending..."
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </button>
          {status === "success" && (
            <p className="flex items-center gap-2 text-sm text-green-400 mt-1">
              <CheckCircle size={16} /> Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 mt-1">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
