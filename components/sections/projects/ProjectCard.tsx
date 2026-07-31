"use client";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import Link from "next/link";
import TechChip from "./TechChip";
import BrowserMockup from "./BrowserMockup";
interface ProjectCardProps {
  project: Project;
  onCardClick: (proj: Project) => void;
}
const ProjectCard = ({ project, onCardClick }: ProjectCardProps) => {
  const InfoBlock = (
    <div className="flex-1 flex flex-col justify-between gap-3 rounded-xl border border-white/5 bg-zinc-950/50 p-5">
      <div>
        <span className="text-[9px] font-mono font-bold text-primary bg-primary/10 border border-primary/25 px-2 py-0.5 rounded uppercase tracking-widest">
          {project.tag}
        </span>
        <h3 className="text-lg md:text-2xl font-display font-extrabold text-white tracking-tight leading-snug mt-1.5 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p
          className={`text-xs md:text-sm text-zinc-400 mt-1.5 leading-relaxed`}
        >
          {project.description}
        </p>
      </div>

      <div className="flex items-center gap-1.5 flex-wrap">
        {project.tech.map((tech, i) => (
          <TechChip key={i} tech={tech} />
        ))}
      </div>

      <div className="flex items-center gap-2 pt-1">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="px-3.5 py-1.5 text-[11px] font-mono font-bold text-zinc-300 bg-white/4 hover:bg-white/8 border border-white/8 rounded-sm flex items-center gap-1.5"
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
            className="px-3.5 py-1.5 text-[11px] font-mono font-bold text-white bg-linear-to-r from-primary to-secondary rounded-sm flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );

  const ImageBlock = (
    <div className="aspect-video overflow-hidden rounded-xl border border-white/5">
      <BrowserMockup
        src={project.images}
        alt={project.title}
        url={project.mockUrl}
        projectId={project.id}
      />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.12 }}
      onClick={() => onCardClick(project)}
      className="flex flex-col gap-5 p-4 md:p-6  rounded-xl border border-white/10 bg-slate-950/50 backdrop-blur-xl group hover:border-cyan/30 transition-all duration-500 shadow-2xl shadow-black/40"
    >
      {/* Soft inner color beam */}
      <div className="absolute -right-24 -top-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-700" />
      {InfoBlock}
      {ImageBlock}
      {/* Top indicator of interactive modal */}
      <div className="absolute top-10 right-8 z-10 px-2 py-0.5 bg-black/60 border border-white/5 rounded text-[8px] font-mono text-zinc-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Click to Inspect
      </div>
    </motion.div>
  );
};
export default ProjectCard;
