"use client";

import { motion } from "motion/react";
import type { Tech } from "@/types";

export default function TechChip({ tech }: { tech: Tech }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -3,
        boxShadow: `0 8px 20px -4px ${tech.color}40`,
      }}
      className="px-2.5 py-1.5 rounded-xl bg-surface-2/60 border border-border text-text-secondary text-[10px] font-mono flex items-center gap-2 select-none cursor-default transition-colors duration-300 hover:border-border-hover hover:text-text-primary"
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: tech.color }}
      />
      {tech.name}
    </motion.div>
  );
}
