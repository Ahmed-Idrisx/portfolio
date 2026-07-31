import type { LucideIcon } from "lucide-react";

export interface Tech {
  name: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: Tech[];
  features: string[];
  responsibilities: string[];
  challenges: string;
  solutions: string;
  tag: string;
  githubUrl?: string;
  mockUrl: string;
  images: string[];
}

export interface AchievementStat {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
  accent: "success" | "primary" | "cyan" | "warning";
}
