"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function AnimateIn({
  children,
  delay = 0,
  className = "",
  style,
  as: Tag = "div",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Element = Tag as React.ElementType;

  return (
    <Element
      ref={ref}
      className={className}
      style={{ ...style, overflow: "clip", paddingBottom: "0.15em", marginBottom: "-0.15em" }}
    >
      <div
        className={`mask-reveal-inner ${visible ? "mask-reveal-inner--visible" : ""}`}
        style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      >
        {children}
      </div>
    </Element>
  );
}
