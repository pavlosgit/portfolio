
import type { ResumeData } from "./types";

export const resumeData: ResumeData = {
  name: "Your Name",
  title: "Frontend Developer / Software Engineer",
  location: "Stockholm, Sweden",
  summary:
    "Short summary about you—what you do, what you’re strong at, and what roles you’re targeting.",

  links: {
    email: "you@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile"
  },

  skills: [
    "TypeScript",
    "React",
    "Vite",
    "Node.js",
    "Git"
  ],

  languages: ["Swedish", "English"],

  experience: [
    {
      period: "2021–2024",
      org: "Järvastaden",
      role: "Programming Teacher (Children)",
      highlights: [
        "Planned and taught beginner-friendly programming workshops.",
        "Designed interactive lessons for young learners."
      ],
      stack: ["Scratch", "Python", "JavaScript"]
    }
  ],

  education: [
    {
      school: "Your University",
      program: "BSc / MSc in Engineering",
      period: "2018–2023",
      notes: ["Thesis: ..."]
    }
  ],

  projects: [
    {
      name: "Portfolio Website",
      description: "A fast, responsive portfolio built with React + TypeScript.",
      stack: ["React", "TypeScript", "Vite"],
      links: [
        { label: "GitHub", href: "https://github.com/yourusername/portfolio" }
      ]
    }
  ]
};
