import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        sans: ["var(--font-jetbrains-mono)", "system-ui", "sans-serif"],
      },
      colors: {
        "matrix-green": {
          DEFAULT: "#00FF41",
          dim: "rgba(0, 255, 65, 0.6)",
          subtle: "rgba(0, 255, 65, 0.2)",
          dark: "rgba(0, 255, 65, 0.1)",
        },
        terminal: {
          dark: "#0c0c0c",
          black: "#000000",
          gray: "#1a1a1a",
          light: "#333333",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#00FF41",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "matrix-flow": "matrix-flow 3s linear infinite",
        typing: "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite",
        glitch: "glitch 3s infinite",
        pulse: "pulse 2s infinite",
        "fade-in": "fadeIn 0.5s ease-in forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
      },
      keyframes: {
        "matrix-flow": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#00FF41" },
        },
      },
    },
  },
  plugins: [],
}

export default config

