import { skillCategories } from "@/lib/data";
import AnimateIn from "./AnimateIn";
import WordReveal from "./WordReveal";

const techMarqueeItems = [
  "React.js",
  "Next.js",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "Redux",
  "Firebase",
  "Jest",
  "GitHub Actions",
  "Mapbox GL",
  "Vercel",
  "SCSS",
];

export default function Skills() {
  const marqueeItems = [...techMarqueeItems, ...techMarqueeItems];

  return (
    <section
      id="skills"
      className="relative"
      style={{
        padding: "clamp(5rem, 10vw, 10rem) 0",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Section header */}
      <div
        className="flex flex-col sm:flex-row items-start gap-2 sm:gap-8 mb-12 sm:mb-20"
        style={{ padding: "0 var(--section-px)" }}
      >
        <AnimateIn>
          <span className="section-number select-none leading-none">02</span>
        </AnimateIn>
        <div className="flex flex-col justify-end pt-0 sm:pt-12">
          <AnimateIn delay={100}>
            <span className="section-label mb-3 block">Expertise</span>
          </AnimateIn>
          <h2 className="section-title">
            <WordReveal text="Tools of the trade" delay={200} stagger={80} accentWords={["trade"]} />
          </h2>
        </div>
      </div>

      {/* Skill categories grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        {skillCategories.map((cat, i) => (
          <AnimateIn
            key={cat.label}
            delay={i * 80}
            className="p-8 md:p-10"
            style={
              {
                borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                borderBottom: i < skillCategories.length - 2 ? "1px solid var(--border)" : "none",
                background: "var(--surface)",
              } as React.CSSProperties
            }
          >
            {/* Category label */}
            <div className="mb-6 flex items-center gap-3">
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  background: "var(--accent)",
                  transform: "rotate(45deg)",
                  flexShrink: 0,
                  opacity: 0.8,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  fontWeight: 500,
                }}
              >
                {cat.label}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* Marquee — large italic Cormorant names */}
      <div
        className="mt-20 overflow-hidden"
        aria-hidden="true"
        style={{
          maskImage: "linear-gradient(90deg, transparent, var(--surface) 10%, var(--surface) 90%, transparent)",
        }}
      >
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 whitespace-nowrap"
              style={{ padding: "0 1.5rem" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--text-tertiary)",
                  letterSpacing: "-0.01em",
                }}
              >
                {item}
              </span>
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  background: "var(--accent)",
                  transform: "rotate(45deg)",
                  flexShrink: 0,
                  opacity: 0.45,
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
