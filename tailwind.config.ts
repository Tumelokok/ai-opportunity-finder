import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff1f1",
          100: "#ffe3e3",
          200: "#fbb8b8",
          300: "#f48a8a",
          400: "#ea5b5b",
          500: "#e33434",
          600: "#c62828",
          700: "#a61a1a",
          800: "#7f1414",
          900: "#5f0f0f"
        },
        surface: "#F8F9FB",
        charcoal: "#111827"
      },
      boxShadow: {
        card: "0 18px 44px rgba(15, 23, 42, 0.08)"
      },
      borderRadius: {
        xl: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
