import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080808",
        surface: "#111111",
        elevated: "#1A1A1A",
        border: "#1E1D1B",
        "border-bright": "#2E2C28",
        accent: "#C8952A",
        "accent-muted": "rgba(200,149,42,0.12)",
        "accent-dim": "#6B4E15",
        "text-primary": "#EFEFEA",
        "text-secondary": "#7A7670",
        "text-tertiary": "#38352E",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        mono: ["var(--font-dm-mono)", "'Courier New'", "monospace"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        grain: "grain 8s steps(10) infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "scroll-hint": "scrollHint 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        grain: {
          "0%,100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-2%,-2%)" },
          "20%": { transform: "translate(2%,-4%)" },
          "30%": { transform: "translate(-4%,2%)" },
          "40%": { transform: "translate(4%,0%)" },
          "50%": { transform: "translate(-2%,4%)" },
          "60%": { transform: "translate(-4%,-4%)" },
          "70%": { transform: "translate(4%,-2%)" },
          "80%": { transform: "translate(-2%,2%)" },
          "90%": { transform: "translate(4%,4%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollHint: {
          "0%,100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.4" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(200,149,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,149,42,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
    },
  },
  plugins: [],
};

export default config;
