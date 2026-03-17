"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b"
            : "bg-transparent"
        }`}
        style={{
          height: "var(--nav-height)",
          background: scrolled ? "rgba(6,6,6,0.96)" : "transparent",
          borderColor: scrolled ? "var(--border)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div
          className="h-full flex items-center justify-between"
          style={{ padding: "0 var(--section-px)" }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-0 group"
            aria-label="Scroll to top"
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.7rem, 3vw, 2.1rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
                lineHeight: 1,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Saraf
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
            <Link
              href="mailto:saraffath@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 1.3rem",
                border: "1px solid var(--accent)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
                background: "transparent",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
              }}
            >
              Hire Me
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
              style={{ background: "var(--text-secondary)" }}
            />
            <span
              className={`block h-px w-6 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
              style={{ background: "var(--text-secondary)" }}
            />
            <span
              className={`block h-px w-6 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
              style={{ background: "var(--text-secondary)" }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu — full overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center items-center gap-10 transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(6,6,6,0.99)", backdropFilter: "blur(16px)" }}
      >
        {/* Decorative top border */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
        />

        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 12vw, 6rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.4s ease, transform 0.4s ease, color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
              (e.currentTarget as HTMLButtonElement).style.fontStyle = "italic";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
              (e.currentTarget as HTMLButtonElement).style.fontStyle = "normal";
            }}
          >
            {link.label}
          </button>
        ))}

        <Link
          href="mailto:saraffath@gmail.com"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginTop: "1rem",
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.4s ease 0.24s",
          }}
          onClick={() => setMenuOpen(false)}
        >
          saraffath@gmail.com
        </Link>

        {/* Bottom corner decoration */}
        <div
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          style={{ opacity: menuOpen ? 0.4 : 0, transition: "opacity 0.4s ease 0.3s" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--text-tertiary)",
            }}
          >
            Lead Frontend Developer
          </span>
        </div>
      </div>
    </>
  );
}
