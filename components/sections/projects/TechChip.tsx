"use client";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import { Tech } from "@/types";
const TechChip = ({ tech }: { tech: Tech }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -3 }}
      className="px-2.5 py-1 rounded-xl bg-slate-900/60 border border-white/10 text-gray-200 text-[10px] font-mono flex items-center gap-2 select-none cursor-default transition-colors duration-300 hover:border-primary/30 hover:text-white"
    >
      <span className={`w-1.5 h-1.5 rounded-full ${tech.dotColor} shadow-sm`} />
      {tech.name}
    </motion.div>
  );
};
export default TechChip;
