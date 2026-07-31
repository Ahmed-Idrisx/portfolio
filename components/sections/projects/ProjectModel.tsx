"use client";

import { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
import {
  X,
  Cpu,
  Sparkles,
  Check,
  ChevronRight,
  HelpCircle,
  Lightbulb,
} from "lucide-react";
import type { Project } from "@/types";
import TechChip from "@/components/ui/TechChip";
import BrowserMockup from "./BrowserMockup";

interface ProjectModalProps {
  selectedProject: Project;
  setSelectedProject: Dispatch<SetStateAction<Project | null>>;
}

export default function ProjectModal({
  setSelectedProject,
  selectedProject,
}: ProjectModalProps) {
  return (
    <div
      onClick={() => setSelectedProject(null)}
      className="fixed inset-0 z-50 bg-overlay-medium backdrop-blur-md flex items-center justify-center p-2 sm:px-8"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-6xl h-[85vh] rounded-2xl bg-surface relative border border-border-medium flex flex-col lg:flex-row overflow-hidden shadow-2xl overflow-y-auto scrollbar-none"
      >
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-xl bg-card text-text-muted hover:text-text-primary hover:bg-card-hover transition-all z-30"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* LEFT — Showcase */}
        <div className="w-full lg:w-[40%] flex flex-col border-b lg:border-b-0 lg:border-r border-border bg-surface/50 p-4 sm:p-6 lg:p-8">
          <div className="flex-1 overflow-y-auto scrollbar-none">
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="space-y-2 sm:space-y-3">
                <span className="text-[9px] font-mono px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider inline-block font-bold">
                  {selectedProject.tag} Release
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-text-primary tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-display font-semibold text-primary">
                  {selectedProject.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
                  {selectedProject.description}
                </p>
              </div>

              <div className="aspect-video overflow-hidden rounded-xl border border-border">
                <BrowserMockup
                  projectId={selectedProject.id}
                  src={selectedProject.images}
                  alt={selectedProject.title}
                  url={selectedProject.mockUrl}
                />
              </div>

              <div className="rounded-2xl border border-border bg-overlay-light p-3 sm:p-4">
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-widest font-bold mb-2">
                  Technology Ecosystem
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((techItem) => (
                    <TechChip key={techItem.name} tech={techItem} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Details */}
        <div className="flex-1 lg:overflow-y-auto scrollbar-none p-4 sm:p-6 lg:p-8 flex flex-col gap-5 sm:gap-6 bg-overlay-light">
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-xs font-mono text-primary uppercase tracking-widest flex items-center gap-1.5 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Primary Features</span>
            </h4>
            <ul className="flex flex-col gap-2">
              {selectedProject.features.map((feat, fIdx) => (
                <li
                  key={fIdx}
                  className="flex items-center gap-2 text-xs text-text-muted leading-relaxed font-sans"
                >
                  <Check className="w-4 h-4 text-success shrink-0" />
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
              {selectedProject.responsibilities.map((resp, rIdx) => (
                <li
                  key={rIdx}
                  className="flex gap-2 items-start text-xs text-text-muted leading-relaxed font-sans"
                >
                  <ChevronRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-xl bg-surface/60 border border-border">
              <div className="text-xs font-mono text-danger uppercase tracking-widest flex items-center gap-1 font-bold mb-1">
                <HelpCircle className="w-3.5 h-3.5" />
                <p>Technical Challenge</p>
              </div>
              <p className="text-xs text-text-muted leading-relaxed font-sans">
                {selectedProject.challenges}
              </p>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-surface/60 border border-border">
              <div className="text-xs font-mono text-success uppercase tracking-widest flex items-center gap-1 font-bold mb-1">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Resolution Strategy</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed font-sans">
                {selectedProject.solutions}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
