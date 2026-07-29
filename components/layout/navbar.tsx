"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

import { NAVIGATION_LINKS } from "@/constants/navigation";
import { personalInfo } from "@/constants/personalInfo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 200;

      for (const item of NAVIGATION_LINKS) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(item.id);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-background/75 backdrop-blur-md  shadow-xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="" className="flex items-center gap-2 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-tr from-primary to-secondary shadow-lg shadow-primary/20">
            <Terminal className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-12" />
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-wide text-text-primary">
              Ahmed
              <span className="text-primary">.</span>
            </span>

            <span className="text-[11px] uppercase tracking-[0.25em] text-text-muted">
              Frontend Developer
            </span>
          </div>
        </Link>

        {/* Navigation */}

        <nav className="hidden lg:flex items-center gap-1.5 border border-border bg-surface/70 px-2 py-1 rounded-full backdrop-blur-md">
          {NAVIGATION_LINKS.map((item) => {
            const active = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-4 py-1.5 rounded-full text-sm font-mono uppercase tracking-wider transition-colors duration-300 z-10 ${
                  active
                    ? "text-primary font-semibold"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activePill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-full border border-primary/20 bg-primary/10"
                  />
                )}

                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-3">
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface/70 text-text-secondary transition-all duration-300 hover:bg-white/10 hover:text-white md:flex"
          >
            <Github className="h-5 w-5" />
          </Link>

          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface/70 text-text-secondary transition-all duration-300 hover:border-primary/20 hover:bg-primary/10 hover:text-primary md:flex"
          >
            <Linkedin className="h-5 w-5" />
          </Link>

          <Link
            href="#contact"
            className="flex h-11 items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-5 text-sm font-medium text-primary transition-all duration-300 hover:scale-[1.02] hover:bg-primary/15"
          >
            <Mail className="h-4 w-4 text-glow-accent animate-pulse" />
            Contact
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
