"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

import "swiper/css";
import "swiper/css/navigation";
import { Rocket } from "lucide-react";
import { Project } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/constants/projects";
import ProjectModel from "./ProjectModel";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useEffect(() => {
    if (selectedProject) {
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
    }
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="py-8 md:py-24 px-4 md:px-8 relative bg-background"
    >
      {/* Background ambient lighting spheres */}
      <div className="absolute top-[20%] left-[5%] w-100 h-100 bg-cyan/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-87.5 h-87.5 bg-primary/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative">
        <SectionHeader
          icon={Rocket}
          sectionNumber="03"
          eyebrowTitle="PROJECTS"
          heading="Projects"
          headingId="projects-title"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onCardClick={(project: Project) => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModel
            setSelectedProject={setSelectedProject}
            selectedProject={selectedProject}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
