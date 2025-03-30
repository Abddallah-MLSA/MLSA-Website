import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#165D9E", // Sonic Blue
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#203A5F", // Navy Peony
          foreground: "#FFFFFF",
        },
        neutral: {
          100: "#F9F9F9", // White Smoke
          200: "#E7E7E7", // Gainsboro
          300: "#737373", // Dim Gray
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        darkMode: {
          background: "222.2 84% 4.9%",
          foreground: "0 0% 98%", // White Smoke
          card: "217 49% 24.7%", // Navy Peony
          "card-foreground": "0 0% 98%", // White Smoke
          popover: "217 49% 24.7%", // Navy Peony
          "popover-foreground": "0 0% 98%", // White Smoke
          primary: "210 73.7% 35.3%", // Sonic Blue
          "primary-foreground": "0 0% 98%", // White Smoke
          secondary: "217 49% 24.7%", // Navy Peony
          "secondary-foreground": "0 0% 98%", // White Smoke
          muted: "217 49% 24.7%", // Navy Peony
          "muted-foreground": "0 0% 91%", // Gainsboro
          accent: "210 73.7% 35.3%", // Sonic Blue
          "accent-foreground": "0 0% 98%", // White Smoke
          border: "217 49% 24.7%", // Navy Peony
          input: "217 49% 24.7%", // Navy Peony
          ring: "210 73.7% 35.3%", // Sonic Blue
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        "3xl": "1440px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

