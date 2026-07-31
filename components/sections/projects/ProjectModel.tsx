"use client";

import { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  X,
  Cpu,
  Sparkles,
  Check,
  ChevronRight,
  HelpCircle,
  Lightbulb,
} from "lucide-react";
import { Project, Tech } from "@/types";
import TechChip from "./TechChip";
import BrowserMockup from "./BrowserMockup";

interface ProjectModelProps {
  selectedProject: Project;
  setSelectedProject: Dispatch<SetStateAction<Project | null>>;
}
const ProjectModel = ({
  setSelectedProject,
  selectedProject,
}: ProjectModelProps) => {
  return (
    <div
      onClick={() => setSelectedProject(null)}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-2 sm:px-8"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-6xl h-[85vh] rounded-2xl bg-surface relative border border-white/10 flex flex-col lg:flex-row overflow-hidden shadow-2xl overflow-y-auto scrollbar-none"
      >
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-xl bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all z-30"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* LEFT — Showcase */}
        <div className="w-full lg:w-[40%] flex flex-col border-b lg:border-b-0 lg:border-r border-white/5 bg-surface/30 p-4 sm:p-6 lg:p-8 ">
          <div className="flex-1 overflow-y-auto scrollbar-none">
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="space-y-2 sm:space-y-3">
                <span className="text-[9px] font-mono px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider inline-block font-bold">
                  {selectedProject.tag} Release
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-display font-semibold text-primary">
                  {selectedProject.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  {selectedProject.description}
                </p>
              </div>

              <div className="aspect-video overflow-hidden rounded-xl border border-white/5">
                <BrowserMockup
                  projectId={selectedProject.id}
                  src={selectedProject.images}
                  alt={selectedProject.title}
                  url={selectedProject.mockUrl}
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-3 sm:p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">
                  Technology Ecosystem
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((techItem: Tech, tIdx: number) => (
                    <TechChip key={tIdx} tech={techItem} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Details */}
        <div className="flex-1 lg:overflow-y-auto scrollbar-none p-4 sm:p-6 lg:p-8 flex flex-col gap-5 sm:gap-6 bg-black/40">
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-xs font-mono text-primary uppercase tracking-widest flex items-center gap-1.5 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Primary Features</span>
            </h4>
            <ul className="flex flex-col gap-2">
              {selectedProject.features.map((feat: string, fIdx: number) => (
                <li
                  key={fIdx}
                  className="flex items-center gap-2 text-xs text-zinc-400 leading-relaxed font-sans"
                >
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-xs font-mono text-secondary uppercase tracking-widest flex items-center gap-1.5 font-bold">
              <Cpu className="w-4 h-4" />
              <span>Developer Responsibilities</span>
            </h4>
            <ul className="flex flex-col gap-2">
              {selectedProject.responsibilities.map(
                (resp: string, rIdx: number) => (
                  <li
                    key={rIdx}
                    className="flex gap-2 items-start text-xs text-zinc-400 leading-relaxed font-sans"
                  >
                    <ChevronRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-xl bg-surface/50 border border-white/5">
              <div className="text-xs font-mono text-rose-400 uppercase tracking-widest flex items-center gap-1 font-bold">
                <HelpCircle className="w-3.5 h-3.5" />
                <p>Technical Challenge</p>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {selectedProject.challenges}
              </p>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-surface/50 border border-white/5">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1 font-bold">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Resolution Strategy</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {selectedProject.solutions}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default ProjectModel;
