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
        black: "#0A0A0A",
        violet: {
          DEFAULT: "#6B2FEB",
          light: "#8B5CF6",
          dark: "#4C1D95",
          glow: "rgba(107,47,235,0.35)",
        },
        grey: {
          dark: "#1a1a1a",
          mid: "#2a2a2a",
          DEFAULT: "#888888",
          light: "#F0F0F0",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-xl": "clamp(3.4rem, 8vw, 7.5rem)",
        "display-lg": "clamp(2.8rem, 6vw, 5.5rem)",
        "display-md": "clamp(2.2rem, 5vw, 4rem)",
        "display-sm": "clamp(1.8rem, 3vw, 2.8rem)",
      },
      animation: {
        "pulse-slow": "pulse 6s ease-in-out infinite",
        "marquee": "marquee 22s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "blink": "blink 1.4s ease-in-out infinite",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(6px)" },
        },
      },
      backgroundImage: {
        "violet-gradient": "linear-gradient(135deg, #6B2FEB, #1a0a3d)",
        "dark-gradient": "linear-gradient(160deg, rgba(107,47,235,0.15), #0A0A0A)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
