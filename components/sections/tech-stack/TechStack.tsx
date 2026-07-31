import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Atom,
  Code2,
  Wind,
  Cpu,
  Layers,
  Database,
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
  LucideIcon,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Section from "@/components/ui/Section";

type Accent = "primary" | "secondary" | "cyan" | "success";
interface StackItem {
  name: string;
  icon: LucideIcon;
  color: string;
}
interface Category {
  title: string;
  description: string;
  headerIcon: LucideIcon;
  accent: Accent;
  items: StackItem[];
}
const categories: Category[] = [
  {
    title: "Core Technologies",
    description:
      "Primary technologies I use for building modern web applications",
    headerIcon: Atom,
    accent: "primary",
    items: [
      { name: "TypeScript", icon: Terminal, color: "text-blue-400" },
      { name: "JavaScript", icon: Blocks, color: "text-amber-400" },
      { name: "React.js", icon: Atom, color: "text-sky-400" },
      { name: "Next.js", icon: Workflow, color: "text-zinc-100" },
      { name: "Tailwind CSS", icon: Wind, color: "text-cyan-400" },
      { name: "HTML/CSS", icon: Code2, color: "text-orange-400" },
    ],
  },
  {
    title: "ORMs & Server Side",
    description: "Technologies for server-side development and cloud services",
    headerIcon: Cpu,
    accent: "secondary",
    items: [
      { name: "Prisma", icon: Layers, color: "text-zinc-400" },
      { name: "PostgreSQL", icon: Database, color: "text-primary" },
      { name: "RESTful APIs", icon: Workflow, color: "text-sky-500" },
      { name: "API Integrating", icon: Link2, color: "text-purple-500" },
    ],
  },
  {
    title: "Development Tools",
    description: "Essential tools for development workflow and deployment",
    headerIcon: Settings,
    accent: "cyan",
    items: [
      { name: "Redux Toolkit", icon: Settings, color: "text-purple-400" },
      { name: "TanStack Query", icon: Layers3, color: "text-emerald-400" },
      { name: "React Router", icon: Compass, color: "text-rose-400" },
      { name: "GitHub", icon: Github, color: "text-zinc-100" },
    ],
  },
  {
    title: "Professional Skills",
    description:
      "Soft skills and professional competencies that enhance technical work",
    headerIcon: Sparkles,
    accent: "success",
    items: [
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
    ],
  },
];

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

const ACCENT_CLASSES: Record<Accent, { icon: string; iconBg: string }> = {
  primary: { icon: "text-primary", iconBg: "bg-primary/10 border-primary/15" },
  secondary: {
    icon: "text-secondary",
    iconBg: "bg-secondary/10 border-secondary/15",
  },
  cyan: { icon: "text-cyan", iconBg: "bg-cyan/10 border-cyan/15" },
  success: { icon: "text-success", iconBg: "bg-success/10 border-success/15" },
};

function TechCategory({
  category,
  delay,
}: {
  category: Category;
  delay: number;
}) {
  const HeaderIcon = category.headerIcon;
  const accent = ACCENT_CLASSES[category.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col border-b border-border pb-4">
        <h3 className="flex items-center gap-2 text-lg font-bold tracking-tight text-text-primary sm:text-2xl">
          <HeaderIcon className={`h-6 w-6 ${accent.icon}`} />
          {category.title}
        </h3>

        <p className="mt-1 text-xs font-sans text-text-muted md:text-sm">
          {category.description}
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 gap-2 sm:gap-4"
      >
        {category.items.map((skill) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="card-interactive flex w-full cursor-default items-center gap-4 rounded-2xl p-3"
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border p-2.5 sm:h-11 sm:w-11 ${accent.iconBg}`}
              >
                <Icon className={`h-5 w-5 ${skill.color}`} />
              </div>

              <span className="truncate text-xs font-semibold text-text-primary sm:text-sm">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <Section id="tech-stack" bordered>
      <SectionHeader
        icon={Wrench}
        sectionNumber="03"
        eyebrowTitle="STACK & SKILLS"
        heading="Tools & Skills"
      />

      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-text-muted md:text-base">
        Develop using modern web standards. Here is the breakdown of my
        technology ecosystem, tools, and professional core competencies.
      </p>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
        {categories.map((category, index) => (
          <TechCategory
            key={category.title}
            category={category}
            delay={index * 0.1}
          />
        ))}
      </div>
    </Section>
  );
}
