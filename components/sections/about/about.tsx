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
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/constants/personalInfo";

export default function About() {
  const technologies = [
    {
      name: "React.js",
      dotColor: "bg-cyan-400",
      glowColor: "rgba(34,211,238,0.25)",
    },
    {
      name: "Next.js",
      dotColor: "bg-slate-300",
      glowColor: "rgba(255,255,255,0.2)",
    },
    {
      name: "TypeScript",
      dotColor: "bg-blue-500",
      glowColor: "rgba(59,130,246,0.25)",
    },
    {
      name: "JavaScript",
      dotColor: "bg-yellow-400",
      glowColor: "rgba(250,204,21,0.25)",
    },
    {
      name: "TanStack Query",
      dotColor: "bg-gray-400",
      glowColor: "rgba(156,163,175,0.2)",
    },
    {
      name: "Redux Toolkit",
      dotColor: "bg-green-600",
      glowColor: "rgba(22,163,74,0.25)",
    },
    {
      name: "Prisma",
      dotColor: "bg-teal-400",
      glowColor: "rgba(45,212,191,0.25)",
    },
    {
      name: "PostgreSQL",
      dotColor: "bg-indigo-500",
      glowColor: "rgba(99,102,241,0.25)",
    },
    {
      name: "Tailwind CSS",
      dotColor: "bg-sky-400",
      glowColor: "rgba(56,189,248,0.25)",
    },
    {
      name: "Bootstrap",
      dotColor: "bg-orange-500",
      glowColor: "rgba(249,115,22,0.25)",
    },
    {
      name: "Git",
      dotColor: "bg-orange-600",
      glowColor: "rgba(234,88,12,0.25)",
    },
    {
      name: "GitHub",
      dotColor: "bg-neutral-200",
      glowColor: "rgba(255,255,255,0.15)",
    },
  ];

  const achievements = [
    {
      icon: Handshake,
      value: "2+",
      label: "Freelance Projects",
      description: "E-Commerce Websites & Admin Dashboards",
      iconColor: "text-[#10b981]",
      bgColor: "bg-[#10b981]/10 border-[#10b981]/20",
      glowColor: "bg-[#10b981]",
    },
    {
      icon: Award,
      value: "15+",
      label: "Projects Built",
      description: "Real-world client projects",
      iconColor: "text-primary",
      bgColor: "bg-primary/10 border-primary/20",
      glowColor: "bg-primary",
    },
    {
      icon: Code2,
      value: "8+",
      label: "Technologies",
      description: "React, Next.js, and modern web tools",
      iconColor: "text-cyan",
      bgColor: "bg-cyan/10 border-cyan/20",
      glowColor: "bg-cyan",
    },
    {
      icon: Globe,
      value: "Available",
      label: "Available",
      description: "Intern, Hybrid, Remote & Full Time Job",
      iconColor: "text-[#f59e0b]",
      bgColor: "bg-[#f59e0b]/10 border-[#f59e0b]/20",
      glowColor: "bg-[#f59e0b]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-24 px-4 md:px-8 relative bg-background overflow-hidden"
    >
      {/* Background ambient lighting spheres */}
      <div className="absolute top-[20%] left-[5%] w-100 h-100 bg-cyan/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-87.5 h-87.5 bg-primary/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
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
            className="lg:col-span-5 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:border-cyan/30 transition-all duration-500 shadow-2xl shadow-black/40"
          >
            {/* Soft inner color beam */}
            <div className="absolute -right-24 -top-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-700" />

            <div className="flex flex-col gap-6">
              {/* Card Title & Pulsing Status */}
              <div className="ml-auto w-fit text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/30 px-3 py-1 rounded-full flex items-center gap-1.5 select-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                AVAILABLE FOR OPPORTUNITIES
              </div>

              {/* Developer Profile Header */}
              <div className="flex items-center gap-5 mt-2">
                {/* Profile Image */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000" />
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
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight leading-none">
                    {personalInfo.name}
                  </h3>
                  <span className="text-sm font-mono text-cyan mt-1.5 font-semibold">
                    {personalInfo.title}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono mt-2">
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Short professional summary */}
              <hr className="text-white/20 my-2" />

              <p className="text-gray-300 font-sans leading-relaxed text-sm">
                Specializing in crafting premium Frontend applications,
                high-fidelity React/Next.js interfaces, and robust server-side
                infrastructures with a deep focus on performance metrics, clean
                software paradigms, and low-latency API integration.
              </p>
            </div>

            {/* Card ID Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-primary text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/35 relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-primary to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Me
                </span>
              </motion.a>

              <motion.a
                href="/api/resume/download"
                target="_blank"
                download="Ahmed_Idris_Resume.pdf"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-white/10 text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:border-cyan/30 hover:bg-slate-950 group/res"
              >
                <Download className="w-4 h-4 text-cyan group-hover/res:text-white group-hover/res:scale-110 transition-all duration-300" />
                Get Resume
              </motion.a>
            </div>
          </motion.div>

          {/* COLUMN 2: Double-Stacked Dashboard Workspace */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            {/* Top Workspace Card: Core Specialization */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-slate-950/40 backdrop-blur-lg border border-white/10 p-6 md:p-8 relative overflow-hidden flex-1 group hover:border-primary/25 transition-colors duration-300 shadow-2xl"
            >
              <div className="flex flex-col gap-4">
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest font-bold">
                  // SPECIALIZATION PHILOSOPHY
                </span>
                <h4 className="text-lg md:text-xl font-display font-semibold text-white leading-snug">
                  Building digital experiences that are fast, scalable, and
                  built to last.
                </h4>
                <p className="text-gray-400 font-sans text-sm leading-relaxed">
                  I approach every project with a long-term mindset, focusing on
                  performance, scalability, maintainability, and attention to
                  detail. My goal is to build products that are not only
                  visually refined but also engineered to remain reliable,
                  adaptable, and efficient as requirements continue to evolve.
                </p>
              </div>
            </motion.div>

            {/* Bottom Workspace Card: Core Technologies Grid */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-slate-950/40 backdrop-blur-lg border border-white/10 p-6 md:p-8 relative overflow-hidden flex-1 group hover:border-primary/25 transition-colors duration-300 shadow-2xl"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-[10px] font-mono text-cyan uppercase tracking-widest font-bold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />{" "}
                    CORE STACK REGISTRY
                  </span>
                  <span className="text-[9px] font-mono text-gray-500">
                    12 TECHNOLOGIES ACTIVE
                  </span>
                </div>

                {/* Badges container wrapping naturally */}
                <div className="flex flex-wrap gap-2.5">
                  {technologies.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                        boxShadow: `0 8px 20px -4px ${tech.glowColor}`,
                        borderColor: "border",
                      }}
                      className="px-3.5 py-2 rounded-xl bg-slate-900/60 border border-border text-gray-200 text-xs font-mono flex items-center gap-2 select-none cursor-default transition-colors duration-300 hover:text-white"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${tech.dotColor} shadow-sm`}
                      />
                      {tech.name}
                    </motion.div>
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
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: `0 20px 40px -15px ${item.glowColor}`,
                  borderColor: "rgba(255,255,255,0.15)",
                }}
                className="p-6 rounded-2xl bg-slate-950/50 backdrop-blur-xl border border-white/10 relative overflow-hidden group flex flex-col justify-between h-44 transition-all duration-500 shadow-xl"
              >
                {/* Floating graphic overlay */}
                <div
                  className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none ${item.glowColor}`}
                />

                {/* Top Section: Icon & Category Label */}
                <div className="flex items-center justify-between">
                  <div
                    className={`p-2 rounded-xl border ${item.bgColor} ${item.iconColor}`}
                  >
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.3,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    {item.label}
                  </span>
                </div>

                {/* Bottom Section: Achievement & Description */}
                <div className="flex flex-col gap-0.5 mt-4">
                  <h5 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                    {item.value}
                  </h5>
                  <p className="text-xs font-mono text-gray-400 leading-normal mt-1 truncate">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
