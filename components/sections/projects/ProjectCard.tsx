"use client";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import Link from "next/link";
import TechChip from "@/components/ui/TechChip";
import BrowserMockup from "./BrowserMockup";

interface ProjectCardProps {
  project: Project;
  onCardClick: (proj: Project) => void;
}

export default function ProjectCard({
  project,
  onCardClick,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.12 }}
      onClick={() => onCardClick(project)}
      className="relative flex flex-col gap-5 p-4 md:p-6 card-interactive hover:border-cyan/30 cursor-pointer group"
    >
      {/* Soft inner color beam */}
      <div className="absolute -right-24 -top-24 w-48 h-48 bg-cyan/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan/10 transition-colors duration-700" />

      {/* Info block */}
      <div className="flex-1 flex flex-col justify-between gap-3 rounded-xl border border-border bg-surface/60 p-5">
        <div>
          <span className="text-[9px] font-mono font-bold text-primary bg-primary/10 border border-primary/25 px-2 py-0.5 rounded uppercase tracking-widest">
            {project.tag}
          </span>
          <h3 className="text-lg md:text-2xl font-display font-extrabold text-text-primary tracking-tight leading-snug mt-1.5 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-text-muted mt-1.5 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {project.tech.map((techItem) => (
            <TechChip key={techItem.name} tech={techItem} />
          ))}
        </div>

        <div className="flex items-center gap-2 pt-1">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="px-3.5 py-2 text-[11px] font-mono font-bold text-text-secondary bg-card hover:bg-card-hover border border-border rounded-md flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </Link>
          )}
          {project.mockUrl && (
            <Link
              href={project.mockUrl}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="px-3.5 py-2 text-[11px] font-mono font-bold text-white bg-linear-to-r from-primary to-secondary rounded-md flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </Link>
          )}
        </div>
      </div>

      {/* Image block */}
      <div className="aspect-video overflow-hidden rounded-xl border border-border">
        <BrowserMockup
          src={project.images}
          alt={project.title}
          url={project.mockUrl}
          projectId={project.id}
        />
      </div>

      {/* Interaction hint */}
      <div className="absolute top-10 right-8 z-10 px-2 py-0.5 bg-overlay-medium border border-border rounded text-[8px] font-mono text-text-muted uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Click to Inspect
      </div>
    </motion.div>
  );
}
