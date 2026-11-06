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
  /** Small tag shown on the card, e.g. "Published Research". */
  label?: string;
  demoUrl?: string;
  /** Link to a published paper (renders a "Read Paper" button). */
  paperUrl?: string;
  githubUrl?: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
  external?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
  coursework?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  href: string;
}

export interface Involvement {
  title: string;
  org: string;
  period: string;
}

export interface Award {
  title: string;
  org: string;
  year: string;
}
