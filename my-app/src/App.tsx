
import { useMemo, useState } from "react";
import { resumeData } from "./resumeData";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Card from "./components/Card";
import Pill from "./components/Pill";
import ExternalLink from "./components/ExternalLink";

type Theme = "light" | "dark";

export default function App() {
  const [theme, setTheme] = useState<Theme>("light");

  const contactLinks = useMemo(() => {
    const links: { label: string; href: string }[] = [];
    if (resumeData.links.email) links.push({ label: "Email", href: `mailto:${resumeData.links.email}` });
    if (resumeData.links.phone) links.push({ label: "Phone", href: `tel:${resumeData.links.phone}` });
    if (resumeData.links.github) links.push({ label: "GitHub", href: resumeData.links.github });
    if (resumeData.links.linkedin) links.push({ label: "LinkedIn", href: resumeData.links.linkedin });
    if (resumeData.links.website) links.push({ label: "Website", href: resumeData.links.website });
    return links;
  }, []);

  return (
    <div className={`page ${theme}`} id="top">
      <Navbar
        name={resumeData.name}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />

      <main className="container">
        <div className="hero">
          <div>
            <h1>{resumeData.name}</h1>
            <p className="heroTitle">{resumeData.title}</p>
            <p className="muted">{resumeData.location}</p>
          </div>

          <div className="heroLinks">
            {contactLinks.map((l) => (
              <ExternalLink key={l.label} href={l.href}>
                {l.label}
              </ExternalLink>
            ))}
          </div>
        </div>

        <Section id="about" title="About" kicker="A quick summary">
          <p>{resumeData.summary}</p>

          <div className="pillRow">
            {resumeData.skills.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>

          {resumeData.languages?.length ? (
            <p className="muted small">Languages: {resumeData.languages.join(", ")}</p>
          ) : null}
        </Section>

        <Section id="experience" title="Experience">
          <div className="grid">
            {resumeData.experience.map((e) => (
              <Card
                key={`${e.org}-${e.role}-${e.period}`}
                title={e.role}
                subtitle={e.org}
                meta={e.period}
                footer={
                  e.stack?.length ? (
                    <div className="pillRow">
                      {e.stack.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>
                  ) : undefined
                }
              >
                <ul>
                  {e.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid">
            {resumeData.projects.map((p) => (
              <Card
                key={p.name}
                title={p.name}
                subtitle={p.description}
                footer={
                  p.links?.length ? (
                    <div className="linkRow">
                      {p.links.map((l) => (
                        <ExternalLink key={l.href} href={l.href}>
                          {l.label}
                        </ExternalLink>
                      ))}
                    </div>
                  ) : undefined
                }
              >
                {p.stack?.length ? (
                  <div className="pillRow">
                    {p.stack.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" kicker="Let’s talk">
          <div className="contact">
            {contactLinks.map((l) => (
              <div key={l.label} className="contactItem">
                <span className="muted">{l.label}</span>
                <ExternalLink href={l.href}>
                  {l.href.replace("mailto:", "").replace("tel:", "")}
                </ExternalLink>
              </div>
            ))}
          </div>
        </Section>

        <footer className="footer">
          <span className="muted small">
            © {new Date().getFullYear()} {resumeData.name}
          </span>
        </footer>
      </main>
    </div>
  );
}
