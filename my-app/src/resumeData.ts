
import type { ResumeData } from "./types";

export const resumeData: ResumeData = {
  name: "Pavlos Papadopoulos",
  title: "MSc in Engineering, Computer Science",
  location: "Stockholm, Sweden",
  summary:
    "I recently completed my Bachelor's and Master's degrees in IT, and I'm passionate about creating technology that makes a positive difference. I love exploring how people and machines interact, how robots can support human needs, and how we can build more sustainable digital systems. I'm excited to bring creativity and responsibility together to shape a better tech future. \n(Sidenote: as of 20 january 2026, this portfolio is still a work in progress!)",

  links: {
    email: "Pavlos@live.com",
    phone: "0729027730",
    github: "https://github.com/pavlosgit",
    linkedin: "https://linkedin.com/in/pavlos-papadopoulos-0a680a130"
  },

  skills: [
    {
      name: "Programming Languages",
      skills: [ "Python", "Java", "C", "C++", "C#", "Haskell"]
    },
    {
      name: "Tools & Technologies",
      skills: ["Git", "Docker", "Linux", "VS Code", "Figma"]
    },
    {
      name: "Frontend",
      skills: ["JavaScript", "TypeScript", "React", "HTML", "CSS", "Vite"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "SQL", "MongoDB", "REST APIs"]
    }

  ],

  languages: ["Swedish", "English", "Greek"],

  experience: [
    {
      period: "2021–2024",
      org: "Järvastaden",
      role: "Programming Teacher (Children)",
      highlights: [
        "Planned and taught beginner-friendly programming workshops.",
        "Designed interactive lessons for young learners."
      ],
      stack: ["Scratch"]
    }
  ],

  education: [
    {
      school: "Uppsala University",
      program: "Master of Science in Computer Science",
      period: "2023–2025",
      notes: ["Focus on Human Machine Interaction"],
      modalDescription: "I chose to focus my Master's degree on Human-Machine Interaction which included the following research topics: \nSocial robotics (SR) \nHuman-Technology-Organsation (HTO) and workplace technology (WT) \nTechnology ethics (TE) \nSustainability (S)",
      thesisLink: "https://www.diva-portal.org/smash/get/diva2:1971310/FULLTEXT01.pdf",
      courses: [
        "IT, Sustainability and Social Responsibility - 1DL008",
        "Artificial Intelligence - 1DL340",
        "Software Engineering and Project Management - 1DL251",
        "Intelligent Interactive Systems - 1MD032",
        "Advanced Software Design - 1DL242",
        "Advanced Interaction Design - 1MD001",
        "Requirements in Agile Development - 1MD200",
        "Platform-Spanning Systems - 1DL620",
        "User Interface Programming II - 1MD003",
        "Complex IT Systems in Large Organisations - 1DL630",
        "Medical Informatics - 1MD030",
        "Data Mining I - 1DL360",
        "Data, Ethics and Law - 1DL002",
        "Non-Excluding Design and Evaluation - 1MD033",
        "Algorithms and Data Structures II - 1DL231",
        "IT, Ethics and Organisation - 1MD004",
        "Degree Project in Computer and Information Engineering - 1DT960",

      ]
    },
    {
      school: "Uppsala University", 
      program: "Bachelor of Science in Computer Science",
      period: "2020–2023",
      notes: ["Focus on Software Engineering, Math and Algorithms"],
      modalDescription: "My Bachelor's program provided a strong foundation in computer science fundamentals, with emphasis on algorithms, data structures, and software engineering. I gained comprehensive knowledge in mathematics, system design, and practical programming skills.",
      thesisLink: "https://uu.diva-portal.org/smash/record.jsf?dswid=6633&pid=diva2%3A1772583",
      courses: [
        "Information Technology - 1DT051",
        "Basic Course in Mathematics - 1MA010",
        "Program Design and Data Structures - 1DL201",
        "Algebra I - 1MA004",
        "Single Variable Calculus - 1MA013",
        "Computer Architecture - 1DT093",
        "Imperative and Object-Oriented Programming Methodology - 1DL221",
        "Linear Algebra and Geometry I - 1MA025",
        "Linear Algebra II - 1MA024",
        "System Design with a User Perspective - 1MD034",
        "Computer Systems with Project Work - 1DT003",
        "Probability and Statistics DV - 1MS321",
        "Digital Technology and Electronics - 1TE717",
        "Numerical Methods and Simulation - 1TD403",
        "Signals and Transforms - 1TE746",
        "Database Design I - 1DL301",
        "Industrial Management - 1TE743",
        "Introduction to Computer Control Systems - 1RT485",
        "Introduction to Machine Learning - 1DL034",
        "Independent Project in Information Engineering - 1DT350",
      ]
    }
  ],

  projects: [
    {
      name: "Portfolio Website",
      description: "A fast, responsive portfolio built with React + TypeScript.",
      stack: ["React", "TypeScript", "Vite"],
      links: [
        { label: "GitHub", href: "https://github.com/pavlosgit/portfolio" }
      ]
    },
    {
      name: "Local Business Website",
      description: "Adjusted and maintain a website for a local small company using one.com's website creator platform.",
      stack: ["HTML", "CSS", "JavaScript", "one.com"],
      links: [
        { label: "Visit Site", href: "https://servcrew.se/" }
      ]
    }
  ]
};
