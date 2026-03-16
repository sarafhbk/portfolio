import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg bg-grid">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,149,42,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative text-center space-y-8 px-8">
        <div>
          <span
            className="font-display text-[clamp(6rem,20vw,16rem)] font-light leading-none text-text-tertiary select-none"
            style={{ opacity: 0.4 }}
          >
            404
          </span>
        </div>

        <div className="space-y-3">
          <h1 className="font-display text-3xl font-semibold text-text-primary">
            Page not found
          </h1>
          <p className="font-mono text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
            This page doesn&apos;t exist or has been moved. Let&apos;s get you
            back on track.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Link href="/" className="btn-primary">
            Back to home
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
