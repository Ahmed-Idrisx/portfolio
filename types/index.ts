export type Tech = {
  name: string;
  dotColor: string;
};
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

  githubUrl: string;
  mockUrl: string;

  tag: string;

  images: string[];
}
