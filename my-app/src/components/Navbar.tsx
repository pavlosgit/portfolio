
type Theme = "light" | "dark";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar({
  name,
  theme,
  onToggleTheme
}: {
  name: string;
  theme: Theme;
  onToggleTheme: () => void;
}) {
  return (
    <header className="nav">
      <button className="brand" onClick={() => scrollToId("top")} type="button">
        {name}
      </button>

      <nav className="navLinks">
        <button type="button" onClick={() => scrollToId("about")}>About</button>
        <button type="button" onClick={() => scrollToId("experience")}>Experience</button>
        <button type="button" onClick={() => scrollToId("projects")}>Projects</button>
        <button type="button" onClick={() => scrollToId("contact")}>Contact</button>
      </nav>

      <button className="themeBtn" onClick={onToggleTheme} type="button">
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </header>
  );
}
