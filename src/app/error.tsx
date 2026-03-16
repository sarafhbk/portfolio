"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg">
      <div className="text-center space-y-8 px-8">
        <div className="space-y-3">
          <span className="section-label block">Something went wrong</span>
          <h1 className="font-display text-4xl font-semibold text-text-primary">
            Unexpected error
          </h1>
          <p className="font-mono text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
            An unexpected error occurred. Please try again or contact me
            directly.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <button onClick={reset} className="btn-primary">
            Try again
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 .49-3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
