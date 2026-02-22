import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#f8f5f1",
          100: "#e9dfd4",
          500: "#8b5e3c",
          900: "#2e1f13"
        }
      },
      boxShadow: {
        frame: "0 12px 40px rgba(0,0,0,0.25)"
      }
    }
  },
  plugins: []
};

export default config;
