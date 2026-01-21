
import { useState, useEffect } from "react";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar({
  name
}: {
  name: string;
}) {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["experience", "education", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      // Check if at top
      if (window.scrollY < 200) {
        setActiveSection("top");
        return;
      }

      // Find which section is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="nav">
      <button 
        className={`brand ${activeSection === "top" ? "active" : ""}`}
        onClick={() => scrollToId("top")} 
        type="button"
      >
        {name}
      </button>

      <nav className="navLinks">
        <button 
          type="button" 
          onClick={() => scrollToId("experience")}
          className={activeSection === "experience" ? "active" : ""}
        >
          Experience
        </button>
        <button 
          type="button" 
          onClick={() => scrollToId("education")}
          className={activeSection === "education" ? "active" : ""}
        >
          Education
        </button>
        <button 
          type="button" 
          onClick={() => scrollToId("skills")}
          className={activeSection === "skills" ? "active" : ""}
        >
          Skills
        </button>
        <button 
          type="button" 
          onClick={() => scrollToId("projects")}
          className={activeSection === "projects" ? "active" : ""}
        >
          Projects
        </button>
        <button 
          type="button" 
          onClick={() => scrollToId("contact")}
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
