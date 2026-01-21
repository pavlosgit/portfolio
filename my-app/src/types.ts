
export type Link = { label: string; href: string };

export type Experience = {
  period: string;
  org: string;
  role: string;
  location?: string;
  highlights: string[];
  stack?: string[];
};

export type Education = {
  period?: string;
  school: string;
  program: string;
  notes?: string[];
  courses?: string[];
  thesisLink?: string;
  modalDescription?: string;
};

export type Project = {
  name: string;
  description: string;
  stack?: string[];
  links?: Link[];
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type ResumeData = {
  name: string;
  title: string;
  location: string;
  summary: string;
  links: {
    email?: string;
    phone?: string;
    website?: string;
    github?: string;
    linkedin?: string;
  };
  skills: SkillCategory[];
  languages?: string[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
};
