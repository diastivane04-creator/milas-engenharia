import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#12140F",
          soft: "#1B1F17",
          line: "#2C3226",
        },
        paper: {
          DEFAULT: "#F4F2EA",
          soft: "#ECE9DD",
        },
        moss: {
          DEFAULT: "#4B6B2D",
          light: "#8FB84A",
          dark: "#33481E",
        },
        clay: {
          DEFAULT: "#B5502A",
          light: "#D97F4F",
        },
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
    },
  },
  plugins: [],
};
export default config;
