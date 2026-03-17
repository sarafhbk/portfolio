'use client';

import { profile, education, languages } from "@/lib/data";
import AnimateIn from "./AnimateIn";

const marqueeItems = [
  "FRONTEND",
  "REACT NATIVE",
  "UI ARCHITECTURE",
  "PERFORMANCE",
  "NEXT.JS",
  "TYPESCRIPT",
  "DESIGN SYSTEMS",
  "MENTORSHIP",
];

export default function About() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <section
      id="about"
      className="relative"
      style={{ padding: "clamp(5rem, 10vw, 10rem) var(--section-px)" }}
    >
      {/* Section header */}
      <div className="flex items-start gap-8 mb-20">
        <AnimateIn>
          <span className="section-number select-none leading-none">01</span>
        </AnimateIn>
        <div className="flex flex-col justify-end pt-12">
          <AnimateIn delay={100}>
            <span className="section-label mb-3 block">About Me</span>
          </AnimateIn>
          <AnimateIn delay={200}>
            <h2 className="section-title">
              Crafting digital
              <br />
              <em
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  color: "var(--accent)",
                }}
              >
                experiences
              </em>
            </h2>
          </AnimateIn>
        </div>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
        {/* Left col: summary */}
        <div className="lg:col-span-3 space-y-8">
          <AnimateIn delay={100}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 2.8vw, 1.8rem)",
                color: "var(--text-primary)",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {profile.summary}
            </p>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div className="divider" />
          </AnimateIn>

          <AnimateIn delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Education */}
              <div>
                <span className="section-label block mb-4">Education</span>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.1rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.6,
                  }}
                >
                  {education.degree}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    marginTop: "0.4rem",
                    lineHeight: 1.5,
                  }}
                >
                  {education.institution}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: "var(--text-tertiary)",
                    marginTop: "0.25rem",
                  }}
                >
                  {education.location} · {education.year}
                </p>
              </div>

              {/* Languages */}
              <div>
                <span className="section-label block mb-4">Languages</span>
                <ul className="space-y-2">
                  {languages.map((lang) => (
                    <li
                      key={lang}
                      className="flex items-center gap-3"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1.1rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {/* Diamond accent */}
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          background: "var(--accent)",
                          transform: "rotate(45deg)",
                          flexShrink: 0,
                          opacity: 0.7,
                        }}
                      />
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>

          {/* Social links */}
          <AnimateIn delay={400}>
            <div className="flex flex-col gap-3 pt-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
                style={{
                  padding: "0.75rem 0",
                  borderBottom: "1px solid var(--border)",
                  transition: "border-color 0.25s ease",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    border: "1px solid var(--border-bright)",
                    flexShrink: 0,
                    transition: "border-color 0.25s ease",
                  }}
                  className="group-hover:border-accent"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--text-secondary)" }} className="group-hover:text-accent transition-colors">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    flex: 1,
                  }}
                  className="group-hover:text-accent transition-colors"
                >
                  LinkedIn
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: "var(--text-tertiary)",
                  }}
                  className="group-hover:text-accent transition-colors"
                >
                  /in/sarafhbk →
                </span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
                style={{
                  padding: "0.75rem 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    border: "1px solid var(--border-bright)",
                    flexShrink: 0,
                  }}
                  className="group-hover:border-accent"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--text-secondary)" }} className="group-hover:text-accent transition-colors">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    flex: 1,
                  }}
                  className="group-hover:text-accent transition-colors"
                >
                  GitHub
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: "var(--text-tertiary)",
                  }}
                  className="group-hover:text-accent transition-colors"
                >
                  /sarafhbk →
                </span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4"
                style={{
                  padding: "0.75rem 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    border: "1px solid var(--border-bright)",
                    flexShrink: 0,
                  }}
                  className="group-hover:border-accent"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--text-secondary)" }} className="group-hover:text-accent transition-colors">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    flex: 1,
                  }}
                  className="group-hover:text-accent transition-colors"
                >
                  Email
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: "var(--text-tertiary)",
                  }}
                  className="group-hover:text-accent transition-colors"
                >
                  {profile.email} →
                </span>
              </a>
            </div>
          </AnimateIn>
        </div>

        {/* Right col: current status */}
        <div className="lg:col-span-2">
          <AnimateIn delay={200}>
            <div
              className="relative p-8 space-y-8"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-bright)",
              }}
            >
              {/* Accent corner marks */}
              <div
                className="absolute top-0 left-0"
                style={{
                  width: "20px",
                  height: "20px",
                  borderTop: "2px solid var(--accent)",
                  borderLeft: "2px solid var(--accent)",
                }}
              />
              <div
                className="absolute top-0 right-0"
                style={{
                  width: "20px",
                  height: "20px",
                  borderTop: "2px solid var(--accent)",
                  borderRight: "2px solid var(--accent)",
                }}
              />
              <div
                className="absolute bottom-0 left-0"
                style={{
                  width: "20px",
                  height: "20px",
                  borderBottom: "2px solid var(--accent)",
                  borderLeft: "2px solid var(--accent)",
                }}
              />
              <div
                className="absolute bottom-0 right-0"
                style={{
                  width: "20px",
                  height: "20px",
                  borderBottom: "2px solid var(--accent)",
                  borderRight: "2px solid var(--accent)",
                }}
              />

              {/* Current Status */}
              <div>
                <span className="section-label block mb-3">Current Status</span>
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Open to opportunities
                  </span>
                </div>
              </div>

              <div className="divider" />

              <div className="space-y-5">
                <div>
                  <span className="section-label block mb-1.5">Role</span>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.1rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {profile.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      marginTop: "0.2rem",
                    }}
                  >
                    F22 Labs
                  </p>
                </div>
                <div>
                  <span className="section-label block mb-1.5">Location</span>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.1rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {profile.location}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      marginTop: "0.2rem",
                    }}
                  >
                    Open to remote globally
                  </p>
                </div>
                <div>
                  <span className="section-label block mb-1.5">Speciality</span>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.1rem",
                      color: "var(--text-primary)",
                      lineHeight: 1.6,
                    }}
                  >
                    Frontend Architecture · UI/UX Leadership · React Ecosystem
                  </p>
                </div>
              </div>

              <div className="divider" />

              <div>
                <span className="section-label block mb-3">Contact</span>
                <a
                  href={`mailto:${profile.email}`}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9rem",
                    color: "var(--accent)",
                    letterSpacing: "0.04em",
                    wordBreak: "break-all",
                  }}
                  className="hover:underline"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Availability marquee strip */}
      <div
        className="mt-20 -mx-[var(--section-px)] overflow-hidden"
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "1.1rem 0",
          maskImage: "linear-gradient(90deg, transparent, #060606 8%, #060606 92%, transparent)",
        }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 whitespace-nowrap"
              style={{ padding: "0 1.5rem" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                }}
              >
                {item}
              </span>
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  background: "var(--accent)",
                  transform: "rotate(45deg)",
                  flexShrink: 0,
                  opacity: 0.6,
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
