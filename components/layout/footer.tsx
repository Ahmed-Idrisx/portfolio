"use client";
import { Github, Linkedin, ArrowUp, Terminal } from "lucide-react";
import { personalInfo } from "@/constants/personalInfo";
import Link from "next/link";

export const footerLinks = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "My Tech Stack",
    href: "#tech-stack",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-6 md:py-12 px-4 md:px-8 overflow-hidden select-none">
      <div className="container max-w-7xl mx-auto">
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 pb-6">
          {/* Column 1: About Me */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <Link href="" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-tr from-primary to-secondary shadow-lg shadow-primary/20">
                <Terminal className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-12" />
              </div>

              <div className="flex flex-col leading-none">
                <span className="font-display font-bold tracking-wide text-text-primary">
                  Ahmed
                  <span className="text-primary">.</span>
                </span>

                <span className="text-xs uppercase text-text-muted">
                  Frontend Developer
                </span>
              </div>
            </Link>
            <p className="text-xs md:text-sm text-zinc-400 font-sans leading-relaxed max-w-xs">
              A passionate Frontend developer and Web designer focused on
              creating high-performance digital products and elegant user
              experiences.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-xs md:text-sm text-zinc-400 font-sans">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Skills */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider">
              Skills
            </h3>
            <ul className="flex flex-col gap-2 text-xs md:text-sm text-zinc-400 font-sans">
              {personalInfo.roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex items-center gap-4 text-zinc-400">
              <Link
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="relative border-t border-white/10 pt-6">
          <p className="text-center text-xs font-sans text-zinc-500">
            © {new Date().getFullYear()} Ahmed Idris. All rights reserved.
          </p>

          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            title="Back to Top"
            className="absolute right-0 top-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-950/50 text-zinc-400 transition-all duration-300 hover:translate-y-[-20%] hover:border-primary/20 hover:text-white"
          >
            <ArrowUp className="h-4 w-4 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
