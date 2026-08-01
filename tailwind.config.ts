import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF7",
        ink: "#0F141B",
        cobalt: "#2453FF",
        "cobalt-dim": "#13277A",
        copper: "#FF6B35",
        slate: "#6B7280",
        line: "#E4E2DA",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #E4E2DA 1px, transparent 1px), linear-gradient(to bottom, #E4E2DA 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "42px 42px",
      },
    },
  },
  plugins: [],
};
export default config;
