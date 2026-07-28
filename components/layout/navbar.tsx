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
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-5 z-50 px-4"
    >
      <div
        className={`mx-auto flex h-18 max-w-7xl items-center justify-between rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "border-border bg-background/80 shadow-2xl backdrop-blur-xl"
            : "border-transparent bg-background/45 backdrop-blur-lg"
        }`}
      >
        {/* Logo */}

        <Link
          href="#hero"
          className="flex items-center gap-3 px-6 py-4 transition-transform duration-300 hover:scale-[1.02]"
        >
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

        <nav className="hidden lg:flex items-center rounded-full border border-border bg-surface/70 p-1 backdrop-blur-xl">
          {NAVIGATION_LINKS.map((item) => {
            const active = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  active
                    ? "text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 28,
                    }}
                    className="absolute inset-0 -z-10 rounded-full border border-primary/20 bg-primary/10"
                  />
                )}

                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-3 pr-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface/70 text-text-secondary transition-all duration-300 hover:border-primary/20 hover:bg-primary/10 hover:text-primary md:flex"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface/70 text-text-secondary transition-all duration-300 hover:border-primary/20 hover:bg-primary/10 hover:text-primary md:flex"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <Link
            href="#contact"
            className="flex h-11 items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-5 text-sm font-medium text-primary transition-all duration-300 hover:scale-[1.02] hover:bg-primary/15"
          >
            <Mail className="h-4 w-4" />
            Contact
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
