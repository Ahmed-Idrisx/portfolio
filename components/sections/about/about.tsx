"use client";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Award,
  Code2,
  Zap,
  Globe,
  Mail,
  Download,
  MapPin,
  Cpu,
  Handshake,
} from "lucide-react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import TechChip from "@/components/ui/TechChip";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/constants/personalInfo";
import { TECH_COLORS } from "@/constants/techColors";
import type { AchievementStat } from "@/types";

const CORE_STACK = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "TanStack Query",
  "Redux Toolkit",
  "Prisma",
  "PostgreSQL",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
].map((name) => ({ name, color: TECH_COLORS[name] ?? "#94a3b8" }));

const achievements: AchievementStat[] = [
  {
    icon: Handshake,
    value: "2+",
    label: "Freelance Projects",
    description: "E-Commerce Websites & Admin Dashboards",
    accent: "success",
  },
  {
    icon: Award,
    value: "15+",
    label: "Projects Built",
    description: "Real-world client projects",
    accent: "primary",
  },
  {
    icon: Code2,
    value: "8+",
    label: "Technologies",
    description: "React, Next.js, and modern web tools",
    accent: "cyan",
  },
  {
    icon: Globe,
    value: "Available",
    label: "Available",
    description: "Intern, Hybrid, Remote & Full Time Job",
    accent: "warning",
  },
];

const ACCENT_CLASSES: Record<
  AchievementStat["accent"],
  { icon: string; chip: string }
> = {
  success: { icon: "text-success", chip: "bg-success/10 border-success/20" },
  primary: { icon: "text-primary", chip: "bg-primary/10 border-primary/20" },
  cyan: { icon: "text-cyan", chip: "bg-cyan/10 border-cyan/20" },
  warning: { icon: "text-warning", chip: "bg-warning/10 border-warning/20" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        icon={Zap}
        sectionNumber="01"
        eyebrowTitle="ABOUT ME"
        heading="About Me"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12"
      >
        {/* COLUMN 1: Developer Identity Card */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 card-interactive p-6 md:p-8 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            {/* Status */}
            <div className="ml-auto w-fit text-xs font-mono text-success bg-success/10 border border-success/20 px-3 py-1 rounded-full flex items-center gap-1.5 select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            {/* Profile Header */}
            <div className="flex items-center gap-5 mt-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-r from-cyan to-primary rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000" />
                <div className="relative w-25 h-25 rounded-full overflow-hidden">
                  <Image
                    src="/images/me.png"
                    alt="Ahmed Idris"
                    fill
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-2xl font-display font-bold text-text-primary tracking-tight leading-none">
                  {personalInfo.name}
                </h3>
                <span className="text-sm font-mono text-cyan mt-1.5 font-semibold">
                  {personalInfo.title}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono mt-2">
                  <MapPin className="w-3.5 h-3.5 text-danger" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <hr className="border-border my-2" />

            <p className="text-text-secondary font-sans leading-relaxed text-sm">
              Specializing in crafting premium Frontend applications,
              high-fidelity React/Next.js interfaces, and robust server-side
              infrastructures with a deep focus on performance metrics, clean
              software paradigms, and low-latency API integration.
            </p>
          </div>

          <div className="flex flex-row gap-3 mt-8">
            <Button asChild variant="primary" className="text-xs sm:text-sm">
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="w-4 h-4" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="secondary" className="text-xs sm:text-sm">
              <a
                href="/api/resume/download"
                target="_blank"
                download="Ahmed_Idris_Resume.pdf"
              >
                <Download className="w-4 h-4 text-cyan" />
                Get Resume
              </a>
            </Button>
          </div>
        </motion.div>

        {/* COLUMN 2: Workspace cards */}
        <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
          <motion.div
            variants={itemVariants}
            className="card-surface p-6 md:p-8 flex-1"
          >
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest font-bold">
                SPECIALIZATION PHILOSOPHY
              </span>
              <h4 className="text-lg md:text-xl font-display font-semibold text-text-primary leading-snug">
                Building digital experiences that are fast, scalable, and built
                to last.
              </h4>
              <p className="text-text-muted font-sans text-sm leading-relaxed">
                I approach every project with a long-term mindset, focusing on
                performance, scalability, maintainability, and attention to
                detail. My goal is to build products that are not only visually
                refined but also engineered to remain reliable, adaptable, and
                efficient as requirements continue to evolve.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="card-surface p-6 md:p-8 flex-1"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-[10px] font-mono text-cyan uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 animate-pulse" />
                  CORE STACK REGISTRY
                </span>
                <span className="text-[9px] font-mono text-text-faint">
                  {CORE_STACK.length} TECHNOLOGIES ACTIVE
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {CORE_STACK.map((techItem) => (
                  <TechChip key={techItem.name} tech={techItem} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* BOTTOM Achievement Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {achievements.map((item) => {
          const Icon = item.icon;
          const accent = ACCENT_CLASSES[item.accent];
          return (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className="card-interactive p-6 flex flex-col justify-between h-44"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`p-2 rounded-xl border ${accent.chip} ${accent.icon}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-text-faint uppercase tracking-widest">
                  {item.label}
                </span>
              </div>

              <div className="flex flex-col gap-0.5 mt-4">
                <h5 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">
                  {item.value}
                </h5>
                <p className="text-xs font-mono text-text-muted leading-normal mt-1 truncate">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
