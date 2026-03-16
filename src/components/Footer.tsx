'use client';

import { profile } from "@/lib/data";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--accent)",
        zIndex: 1,
      }}
    >
      {/* Thin gold top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, var(--accent) 30%, var(--accent) 70%, transparent 100%)",
          opacity: 0.6,
        }}
      />

      {/* Top section */}
      <div
        className="py-16 md:py-20"
        style={{ padding: "4rem var(--section-px)" }}
      >
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="space-y-5 max-w-xs">
            {/* Logo */}
            <div className="flex items-center">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  lineHeight: 1,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Saraf
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              {profile.tagline}
            </p>
            {/* Availability dot */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-tertiary)",
                }}
              >
                Available for work
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Navigate */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "1.25rem",
                }}
              >
                Navigate
              </p>
              <ul className="space-y-3">
                {["About", "Skills", "Work", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "1.25rem",
                }}
              >
                Connect
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href={`mailto:${profile.email}`}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    Email
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "1.25rem",
                }}
              >
                Contact
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--text-secondary)",
                      transition: "color 0.2s ease",
                      wordBreak: "break-all",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    {profile.email}
                  </a>
                </li>
                <li>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    {profile.location}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col sm:flex-row justify-between items-center gap-4"
        style={{
          borderTop: "1px solid var(--border)",
          padding: "1.25rem var(--section-px)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-tertiary)",
            letterSpacing: "0.06em",
          }}
        >
          &copy; {currentYear} {profile.name}. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-tertiary)",
            letterSpacing: "0.06em",
          }}
        >
          Built with{" "}
          <span style={{ color: "var(--accent)" }}>Next.js</span>
          {" · "}
          <span style={{ color: "var(--accent)" }}>Tailwind CSS</span>
          {" · "}
          <span style={{ color: "var(--accent)" }}>TypeScript</span>
        </p>
      </div>
    </footer>
  );
}
