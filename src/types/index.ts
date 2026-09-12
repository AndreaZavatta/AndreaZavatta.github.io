export interface Project {
  id: string;
  name: string;
  repoUrl: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  tags: string[];
  demoUrl?: string;
  isCustom?: boolean;
  featured?: boolean;
  owner?: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location?: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location?: string;
  details?: string;
}
