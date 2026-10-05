import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const rgb = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1120px" } },
    extend: {
      colors: {
        // Corporate Blue
        brand: "#2563EB",
        primary: { DEFAULT: rgb("primary"), foreground: rgb("primary-foreground") },
        link: rgb("link"),
        background: rgb("background"),
        foreground: rgb("foreground"),
        card: rgb("card"),
        muted: { DEFAULT: rgb("muted"), foreground: rgb("muted-foreground") },
        border: rgb("border"),
        ring: rgb("primary"),
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...fontFamily.sans],
      },
      borderRadius: { lg: "6px", md: "4px", sm: "2px" },
    },
  },
};

export default config;
