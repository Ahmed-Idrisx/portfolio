import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Atom,
  Code2,
  Wind,
  Cpu,
  Layers,
  Database,
  Leaf,
  Compass,
  Settings,
  Brain,
  Blocks,
  Palette,
  CheckSquare,
  Link2,
  Terminal,
  MessageSquare,
  Sparkles,
  Workflow,
  Wrench,
  Layers3,
  Github,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  const coreTechnologies = [
    { name: "TypeScript", icon: Terminal, color: "text-blue-400" },
    { name: "JavaScript", icon: Blocks, color: "text-amber-400" },
    { name: "React.js", icon: Atom, color: "text-sky-400" },
    { name: "Next.js", icon: Workflow, color: "text-zinc-100" },
    { name: "Tailwind CSS", icon: Wind, color: "text-cyan-400" },
    { name: "HTML/CSS", icon: Code2, color: "text-orange-400" },
  ];

  const serverSide = [
    { name: "Prisma", icon: Layers, color: "text-zinc-400" },
    { name: "PostgreSQL", icon: Database, color: "text-primary" },
    { name: "RESTful APIs", icon: Workflow, color: "text-sky-500" },
    { name: "API Integrating", icon: Link2, color: "text-purple-500" },
  ];

  const developmentTools = [
    { name: "Redux Toolkit", icon: Settings, color: "text-purple-400" },
    { name: "TanStack Query", icon: Layers3, color: "text-emerald-400" },
    { name: "React Router", icon: Compass, color: "text-rose-400" },
    { name: "GitHub", icon: Github, color: "text-zinc-100" },
  ];

  const professionalSkills = [
    {
      name: "Problem Solving",
      icon: Brain,
      color: "text-indigo-400",
    },
    {
      name: "Communication",
      icon: MessageSquare,
      color: "text-cyan",
    },
    {
      name: "Critical Thinking",
      icon: CheckSquare,
      color: "text-rose-400",
    },
    {
      name: "Design",
      icon: Palette,
      color: "text-cyan-400",
    },
  ];

  return (
    <section
      id="tech-stack"
      className="py-24 px-4 md:px-8 relative bg-background overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting spheres */}
      <div className="absolute top-[20%] left-[5%] w-100 h-100 bg-cyan/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-87.5 h-87.5 bg-primary/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          icon={Wrench}
          sectionNumber="03"
          eyebrowTitle="STACK & SKILLS"
          heading="Tools & Skills"
        />
        <p className="text-zinc-400 max-w-2xl leading-relaxed text-sm md:text-base mb-16 -mt-10">
          Develop using modern web standards. Here is the breakdown of my
          technology ecosystem, tools, and professional core competencies.
        </p>

        {/* Balanced 2-Column Category Grid Layout for Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-16 lg:gap-y-12 items-start">
          {/* Category 1: Core Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col border-b border-white/5 pb-4">
              <h3 className="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-2">
                <Atom className="w-6 h-6 text-sky-400" />
                Core Technologies
              </h3>
              <p className="text-xs md:text-sm text-zinc-500 mt-1 font-sans">
                Primary technologies I use for building modern web applications
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {coreTechnologies.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                      borderColor: "rgba(255,255,255,0.15)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
                    }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/50 border border-white/5 hover:bg-surface/40 transition-all duration-300 h-18 w-full relative overflow-hidden group/item cursor-default"
                  >
                    <div
                      className={`p-2.5 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 ${skill.color} h-11 w-11`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-sans font-semibold text-sm text-zinc-100 duration-300 truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Category 2: Backend & Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col border-b border-white/5 pb-4">
              <h3 className="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-2">
                <Cpu className="w-6 h-6 text-purple-400" />
                ORMs & Server Side
              </h3>
              <p className="text-xs md:text-sm text-zinc-500 mt-1 font-sans">
                Technologies for server-side development and cloud services
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {serverSide.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                      borderColor: "rgba(255,255,255,0.15)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
                    }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/50 border border-white/5 hover:bg-surface/40 transition-all duration-300 h-18 w-full relative overflow-hidden group/item cursor-default"
                  >
                    <div
                      className={`p-2.5 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 ${skill.color} h-11 w-11`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-sans font-semibold text-sm text-zinc-100 group-hover/item:text-white transition-colors duration-300 truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Category 3: Development Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col border-b border-white/5 pb-4">
              <h3 className="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-2">
                <Settings className="w-6 h-6 text-primary" />
                Development Tools
              </h3>
              <p className="text-xs md:text-sm text-zinc-500 mt-1 font-sans">
                Essential tools for development workflow and deployment
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {developmentTools.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                      borderColor: "rgba(255,255,255,0.15)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
                    }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/50 border border-white/5 hover:bg-surface/40 transition-all duration-300 h-18 w-full relative overflow-hidden group/item cursor-default"
                  >
                    <div
                      className={`p-2.5 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 ${skill.color} h-11 w-11`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-sans font-semibold text-sm text-zinc-100 group-hover/item:text-white transition-colors duration-300 truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Category 4: Professional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col border-b border-white/5 pb-4">
              <h3 className="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-emerald-400" />
                Professional Skills
              </h3>
              <p className="text-xs md:text-sm text-zinc-500 mt-1 font-sans">
                Soft skills and professional competencies that enhance technical
                work
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {professionalSkills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                      borderColor: "rgba(255,255,255,0.15)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
                    }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/50 border border-white/5 hover:bg-surface/40 transition-all duration-300 h-18 w-full relative overflow-hidden group/item cursor-default"
                  >
                    <div
                      className={`p-2.5 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 ${skill.color} h-11 w-11`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-sans font-semibold text-sm text-zinc-100 group-hover/item:text-white transition-colors duration-300 truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
