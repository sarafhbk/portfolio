'use client';

import { experiences } from "@/lib/data";
import AnimateIn from "./AnimateIn";

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  return (
    <div
      className="relative group transition-all duration-300"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        padding: "1.75rem",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-bright)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
      }}
    >
      {/* Accent top edge on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, var(--accent), transparent)" }}
      />

      {/* Project type + period row */}
      <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.2rem 0.6rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.58rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--accent)",
            border: "1px solid var(--accent-dim)",
            background: "var(--accent-muted)",
          }}
        >
          {exp.projectType}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            color: "var(--text-tertiary)",
            letterSpacing: "0.04em",
          }}
        >
          {exp.period}
        </span>
      </div>

      {/* Project name */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.2rem, 2.5vw, 1.65rem)",
          fontWeight: 600,
          color: "var(--text-primary)",
          lineHeight: 1.05,
          letterSpacing: "-0.01em",
          marginBottom: "0.6rem",
        }}
      >
        {exp.project}
      </h3>

      {/* Company */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          color: "var(--text-tertiary)",
          letterSpacing: "0.04em",
          marginBottom: "0.85rem",
        }}
      >
        {exp.company}
      </p>

      {/* Role badge */}
      <div className="mb-4">
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.25rem 0.7rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            color: "var(--text-secondary)",
            border: "1px solid var(--border-bright)",
            background: "var(--elevated)",
            letterSpacing: "0.05em",
          }}
        >
          <svg width="6" height="6" viewBox="0 0 10 10" fill="currentColor" style={{ opacity: 0.5 }}>
            <circle cx="5" cy="5" r="2" />
          </svg>
          {exp.role}
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.85rem",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          marginBottom: "1rem",
        }}
      >
        {exp.description}
      </p>

      {/* Highlights */}
      {exp.highlights.length > 0 && (
        <ul className="space-y-1.5 mb-5">
          {exp.highlights.map((h, hi) => (
            <li
              key={hi}
              className="flex items-start gap-2.5"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                className="flex-shrink-0 mt-1"
                style={{ color: "var(--accent)" }}
              >
                <polyline
                  points="2,6 5,9 10,3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Stack */}
      <div
        className="flex flex-wrap gap-1.5 pt-4"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {exp.stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.05em",
              padding: "0.2rem 0.55rem",
              color: "var(--accent)",
              background: "var(--accent-muted)",
              border: "1px solid var(--accent-dim)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const grouped = experiences.reduce(
    (acc, exp) => {
      if (!acc[exp.year]) acc[exp.year] = [];
      acc[exp.year].push(exp);
      return acc;
    },
    {} as Record<string, typeof experiences>
  );

  const years = Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a));

  // Flatten all entries with global index for left/right alternation
  const allEntries: { exp: typeof experiences[0]; year: string; globalIdx: number }[] = [];
  years.forEach((year) => {
    grouped[year].forEach((exp) => {
      allEntries.push({ exp, year, globalIdx: allEntries.length });
    });
  });

  return (
    <section
      id="experience"
      className="relative"
      style={{ padding: "clamp(5rem, 10vw, 10rem) var(--section-px)" }}
    >
      {/* Section header */}
      <div className="flex items-start gap-8 mb-20">
        <AnimateIn>
          <span className="section-number select-none leading-none">03</span>
        </AnimateIn>
        <div className="flex flex-col justify-end pt-12">
          <AnimateIn delay={100}>
            <span className="section-label mb-3 block">Experience</span>
          </AnimateIn>
          <AnimateIn delay={200}>
            <h2 className="section-title">
              6+ Years of{" "}
              <em
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  color: "var(--accent)",
                }}
              >
                shipping
              </em>
            </h2>
          </AnimateIn>
        </div>
      </div>

      {/* Alternating timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* Center vertical line — desktop only */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px"
          style={{
            background: "linear-gradient(180deg, var(--accent) 0%, var(--border-bright) 60%, transparent 100%)",
            transform: "translateX(-50%)",
          }}
        />

        {years.map((year, yi) => {
          const yearStartIdx = allEntries.findIndex((e) => e.year === year);

          return (
            <div key={year} className="mb-4">
              {/* Year label — centered on the line */}
              <AnimateIn delay={yi * 60}>
                <div className="relative flex justify-center items-center mb-8">
                  {/* Dot on the line */}
                  <div
                    className="hidden md:block absolute left-1/2 z-10"
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "var(--bg)",
                      border: "1.5px solid var(--accent)",
                      transform: "translateX(-50%)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                      fontWeight: 300,
                      color: "var(--text-tertiary)",
                      lineHeight: 1,
                      opacity: 0.45,
                      letterSpacing: "-0.02em",
                      background: "var(--bg)",
                      padding: "0 1.5rem",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {year}
                  </span>
                </div>
              </AnimateIn>

              {/* Cards for this year */}
              <div className="space-y-6">
                {grouped[year].map((exp, ei) => {
                  const globalIdx = yearStartIdx + ei;
                  const isLeft = globalIdx % 2 === 0;

                  return (
                    <AnimateIn key={exp.id} delay={yi * 60 + ei * 100 + 80}>
                      {/* Desktop: alternating layout */}
                      <div className="hidden md:grid grid-cols-[1fr_60px_1fr] items-start gap-0">
                        {/* Left slot */}
                        <div className={isLeft ? "pr-8" : ""}>
                          {isLeft && <ExperienceCard exp={exp} />}
                        </div>

                        {/* Center: connector dot */}
                        <div className="flex justify-center pt-6">
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              background: "var(--accent)",
                              opacity: 0.6,
                              flexShrink: 0,
                            }}
                          />
                        </div>

                        {/* Right slot */}
                        <div className={!isLeft ? "pl-8" : ""}>
                          {!isLeft && <ExperienceCard exp={exp} />}
                        </div>
                      </div>

                      {/* Mobile: single column */}
                      <div className="md:hidden">
                        <ExperienceCard exp={exp} />
                      </div>
                    </AnimateIn>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
