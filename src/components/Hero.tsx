'use client';

import SplineScene from "./SplineScene";

export default function Hero() {
  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      id="hero"
      aria-label="Hero"
    >
      <SplineScene />

      {/* Bottom cover — hides Spline's "PORTFOLIO" + "Built with Spline" UI */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "90px",
          background: "var(--bg)",
          zIndex: 10,
        }}
      />
      {/* Gradient fade above the cover */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "200px",
          background: "linear-gradient(to top, var(--bg) 45%, transparent 100%)",
          zIndex: 10,
        }}
      />

      {/* Scroll down arrow */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute left-1/2 scroll-indicator"
        style={{
          bottom: "2.5rem",
          transform: "translateX(-50%)",
          zIndex: 11,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.6rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--text-tertiary)",
          }}
        >
          Scroll
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{ color: "var(--text-secondary)" }}
        >
          <path
            d="M10 4v12M4 10l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
