
import { useState } from "react";
import { resumeData } from "./resumeData";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Card from "./components/Card";
import Pill from "./components/Pill";

export default function App() {
  const [theme] = useState<string>("dark");
  const [modalEducation, setModalEducation] = useState<typeof resumeData.education[0] | null>(null);

  return (
    <div className={`page ${theme}`} id="top">
      <Navbar
        name={resumeData.name}
      />

      <main className="container">
        <div className="hero">
          <div>
            <h1>{resumeData.name}</h1>
            <p className="heroTitle">{resumeData.title}</p>
            <p className="hero-description">{resumeData.summary}</p>

            <div className="hero-info">
              <span>📍 {resumeData.location}</span>
              {resumeData.links.phone && <span>📞 {resumeData.links.phone}</span>}
            </div>

            {resumeData.languages?.length ? (
              <p className="muted small">Languages: {resumeData.languages.join(", ")}</p>
            ) : null}
          </div>

        </div>

        <Section id="experience" title="Experience" className="page-section">
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

        <Section id="education" title="Education" className="page-section">
          <div className="grid">
            {resumeData.education.map((edu) => (
              <Card
                key={`${edu.school}-${edu.program}-${edu.period}`}
                title={edu.program}
                subtitle={edu.school}
                meta={edu.period}
                action={
                  edu.courses?.length ? (
                    <button
                      className="expand-btn"
                      onClick={() => setModalEducation(edu)}
                    >
                      View Courses
                    </button>
                  ) : undefined
                }
                secondaryAction={
                  edu.thesisLink ? (
                    <a
                      href={edu.thesisLink}
                      target="_blank"
                      rel="noreferrer"
                      className="thesis-btn"
                    >
                      📄 Thesis
                    </a>
                  ) : undefined
                }
              >
                {edu.notes?.length ? (
                  <ul>
                    {edu.notes.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                ) : null}
              </Card>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" className="page-section">
          <div className="grid">
            {resumeData.skills.map((category) => (
              <Card
                key={category.name}
                title={category.name}
              >
                <div className="pillRow">
                  {category.skills.map((skill) => (
                    <Pill key={skill}>{skill}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" className="page-section">
          <div className="grid">
            {resumeData.projects.map((p) => (
              <Card
                key={p.name}
                title={p.name}
                subtitle={p.description}
                footer={
                  p.links?.length ? (
                    <div className="project-links">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="github-btn"
                        >
                          <svg 
                            className="github-logo" 
                            viewBox="0 0 16 16" 
                            width="16" 
                            height="16"
                            fill="currentColor"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                          </svg>
                          {l.label}
                        </a>
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

        <Section id="contact" title="Get In Touch">
          <div className="contact">
            <div className="contact-grid">
              <div className="contact-section">
                <h3>Contact Information</h3>
                <div className="contact-list">
                  {resumeData.links.email && (
                    <div className="contact-item-simple">
                      <span className="contact-icon">📧</span>
                      <a href={`mailto:${resumeData.links.email}`}>{resumeData.links.email}</a>
                    </div>
                  )}
                  {resumeData.links.phone && (
                    <div className="contact-item-simple">
                      <span className="contact-icon">📱</span>
                      <span>{resumeData.links.phone}</span>
                    </div>
                  )}
                  {resumeData.links.github && (
                    <div className="contact-item-simple">
                      <svg className="contact-svg-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <a href={resumeData.links.github} target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                  )}
                  {resumeData.links.linkedin && (
                    <div className="contact-item-simple">
                      <svg className="contact-svg-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <a href={resumeData.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <footer className="footer">
          <span className="muted small">
            © {new Date().getFullYear()} {resumeData.name}
          </span>
        </footer>
      </main>

      {/* Education Courses Modal */}
      {modalEducation && (
        <div className="modal-overlay" onClick={() => setModalEducation(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{modalEducation.program}</h3>
              <button className="modal-close" onClick={() => setModalEducation(null)}>×</button>
            </div>
            <div className="modal-body">
              <p className="modal-subtitle">{modalEducation.school}</p>
              {modalEducation.modalDescription && (
                <div className="modal-notes">
                  {modalEducation.modalDescription.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              )}
              <div className="modal-courses">
                <h4>Courses Taken:</h4>
                <div className="courses-grid">
                  {modalEducation.courses?.map((course, idx) => (
                    <span key={idx} className="course-modal-item">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
