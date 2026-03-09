
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["experience", "education", "skills", "certificates", "projects", "contact"];
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

  const handleNavClick = (id: string) => {
    scrollToId(id);
    setMenuOpen(false);
  };

  const sections = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificates" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="nav">
      <button 
        className={`brand ${activeSection === "top" ? "active" : ""}`}
        onClick={() => handleNavClick("top")} 
        type="button"
      >
        {name}
      </button>

      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`navLinks ${menuOpen ? "navOpen" : ""}`}>
        {sections.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => handleNavClick(s.id)}
            className={activeSection === s.id ? "active" : ""}
          >
            {s.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
