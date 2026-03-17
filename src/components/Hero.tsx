'use client';

import { useEffect, useRef, useCallback, useState } from "react";
import SplineScene from "./SplineScene";

export default function Hero() {
  const scrollLockedRef = useRef(false);
  const preventMoveRef = useRef<((e: TouchEvent) => void) | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [heroVisible, setHeroVisible] = useState(true);

  const lockScroll = useCallback(() => {
    if (scrollLockedRef.current) return;
    const handler = (e: TouchEvent) => e.preventDefault();
    preventMoveRef.current = handler;
    document.addEventListener('touchmove', handler, { passive: false });
    scrollLockedRef.current = true;
  }, []);

  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return;
    if (preventMoveRef.current) {
      document.removeEventListener('touchmove', preventMoveRef.current);
      preventMoveRef.current = null;
    }
    scrollLockedRef.current = false;
  }, []);

  // Show/hide the fixed CTA based on hero visibility
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Mobile-only scroll lock
  useEffect(() => {
    if (window.innerWidth >= 640) return;

    lockScroll();

    const handleScroll = () => {
      if (!scrollLockedRef.current && window.scrollY < 50) {
        window.scrollTo({ top: 0 });
        lockScroll();
      }
    };

    const handleNavUnlock = () => unlockScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('nav-scroll-unlock', handleNavUnlock);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('nav-scroll-unlock', handleNavUnlock);
      unlockScroll();
    };
  }, [lockScroll, unlockScroll]);

  const scrollDown = () => {
    if (window.innerWidth < 640) {
      unlockScroll();
    }
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden"
        id="hero"
        aria-label="Hero"
      >
        <SplineScene />

        {/* Bottom cover — hides Spline's built-in UI */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "140px", background: "var(--bg)", zIndex: 10 }}
        />
        {/* Gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "200px",
            background: "linear-gradient(to top, var(--bg) 45%, transparent 100%)",
            zIndex: 10,
          }}
        />
      </section>

      {/* CTA rendered as fixed — completely outside Spline's DOM/stacking context
          so Spline's canvas event capture can never block it */}
      <div
        className="scroll-indicator"
        style={{
          position: "fixed",
          bottom: "2.5rem",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 100,
          opacity: heroVisible ? 1 : 0,
          pointerEvents: heroVisible ? "auto" : "none",
          transition: "opacity 0.4s ease",
        }}
      >
        <button
          onClick={scrollDown}
          aria-label="Scroll down"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.6rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "1rem",
            touchAction: "manipulation",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
              textAlign: "center",
            }}
          >
            <span className="hidden sm:inline">Scroll</span>
            <span className="sm:hidden">Tap here</span>
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
      </div>
    </>
  );
}
