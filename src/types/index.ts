export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface InfoItem {
  label: string;
  value: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  bullets: string[];
  tech: string[];
}

export interface SkillCategory {
  title: string;
  /** SVG path data (24x24 outline icon). */
  iconPath: string;
  skills: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
  external?: boolean;
}
