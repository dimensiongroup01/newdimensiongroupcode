import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        paper: "#F8FAFB",
        ink: "#0F172A",
        cobalt: "#00B4D8",
        "cobalt-dim": "#007A96",
        copper: "#FF6900",
        // Deeper orange for buttons/labels with white or small text (WCAG AA: 4.7:1 on white).
        "copper-deep": "#C84B00",
        slate: "#475569",
        line: "#E2E8F0",
      },
      fontFamily: {
        // One sans-serif family everywhere. `mono` is kept as a name (labels use
        // `font-mono`) but now renders in the same sans-serif face.
        display: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
        mono: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "42px 42px",
      },
    },
  },
  plugins: [],
};
export default config;
