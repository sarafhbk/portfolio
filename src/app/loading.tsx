export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-bg"
      aria-label="Loading"
    >
      {/* Logo mark */}
      <div className="mb-12">
        <span
          style={{
            fontFamily: "var(--font-cormorant, Georgia, serif)",
            fontSize: "clamp(2.2rem, 5vw, 3rem)",
            fontWeight: 600,
            color: "var(--text-primary)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          SARAF
        </span>
      </div>

      {/* Loader bar */}
      <div className="w-48 h-px bg-border overflow-hidden">
        <div className="loader-bar w-full h-full" />
      </div>

      <p
        className="mt-6 font-mono text-xs text-text-tertiary uppercase tracking-widest"
        style={{ fontFamily: "var(--font-dm-mono, monospace)" }}
      >
        Loading
      </p>
    </div>
  );
}
