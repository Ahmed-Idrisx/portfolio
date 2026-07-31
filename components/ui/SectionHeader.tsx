import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon: LucideIcon;
  sectionNumber: string;
  eyebrowTitle: string;
  heading: string;
  headingId?: string;
}

export default function SectionHeader({
  icon: Icon,
  sectionNumber,
  eyebrowTitle,
  heading,
  headingId,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-start sm:mb-16 w-full"
    >
      <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-2 flex items-center gap-1.5 font-bold">
        <Icon className="w-4 h-4" />
        <span>
          {sectionNumber} / {eyebrowTitle}
        </span>
      </span>
      <h2
        id={headingId}
        className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white mb-4"
      >
        {heading}
      </h2>
    </motion.div>
  );
}
