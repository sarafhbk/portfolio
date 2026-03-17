"use client";

import { useEffect, useRef, useState } from "react";

interface WordRevealProps {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
  accentWords?: string[];
}

export default function WordReveal({
  text,
  delay = 0,
  stagger = 60,
  className = "",
  style,
  accentWords = [],
}: WordRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <span
      ref={ref}
      className={className}
      style={{
        ...style,
        display: "flex",
        flexWrap: "wrap",
        gap: "0 0.25em",
        width: "100%",
      }}
    >
      {words.map((word, i) => {
        const isAccent = accentWords.some((aw) =>
          word.toLowerCase().includes(aw.toLowerCase())
        );
        return (
          <span key={i} className="mask-word">
            <span
              className={`mask-word-inner ${visible ? "mask-word-inner--visible" : ""}`}
              style={{
                transitionDelay: visible ? `${delay + i * stagger}ms` : "0ms",
                ...(isAccent
                  ? {
                      fontStyle: "italic",
                      color: "var(--accent)",
                    }
                  : {}),
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </span>
  );
}
