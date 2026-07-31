"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { Rocket } from "lucide-react";
import type { Project } from "@/types";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/constants/projects";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModel";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [selectedProject]);

  return (
    <Section id="projects">
      <SectionHeader
        icon={Rocket}
        sectionNumber="03"
        eyebrowTitle="PROJECTS"
        heading="Projects"
        headingId="projects-title"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onCardClick={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            setSelectedProject={setSelectedProject}
            selectedProject={selectedProject}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}
