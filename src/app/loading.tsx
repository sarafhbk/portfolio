export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-bg"
      aria-label="Loading"
    >
      {/* Logo mark */}
      <div className="mb-12">
        <div className="flex items-baseline gap-2">
          <span
            className="font-display text-5xl font-semibold text-text-primary"
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              lineHeight: 1,
            }}
          >
            S
          </span>
          <span
            className="font-mono text-sm text-accent tracking-widest uppercase"
            style={{ fontFamily: "var(--font-dm-mono, monospace)" }}
          >
            .dev
          </span>
        </div>
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
