import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f4f4f5",
          100: "#e4e4e7",
          200: "#c6c6d0",
          300: "#a1a1b3",
          400: "#7c7c94",
          500: "#5b5b72",
          600: "#444456",
          700: "#323241",
          800: "#1f1f29",
          900: "#0f0f18"
        },
        gold: {
          50: "#fff8eb",
          100: "#feeccc",
          200: "#fdd4a1",
          300: "#fbbc6f",
          400: "#f9a738",
          500: "#ec8c12",
          600: "#cc6d09",
          700: "#a0500b",
          800: "#773a0c",
          900: "#51260a"
        }
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"]
      }
    }
  },
  plugins: []
};

export default config;
