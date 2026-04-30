import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // v2 brand-guide families
        display: ["Oswald", "system-ui", "sans-serif"],
        italic: ["Newsreader", "Georgia", "serif"],
        "mono-tech": ["JetBrains Mono", "SFMono-Regular", "monospace"],

        // legacy (kept for un-refactored components)
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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

        // v2 brand-guide canonical color tokens
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
          deep: "hsl(var(--gold-deep))",
        },
        slate: {
          DEFAULT: "hsl(var(--slate))",
          light: "hsl(var(--slate-light))",
          deep: "hsl(var(--slate-deep))",
        },
        "mma-green": {
          DEFAULT: "hsl(var(--mma-green))",
          light: "hsl(var(--mma-green-light))",
          deep: "hsl(var(--mma-green-deep))",
        },

        // legacy aliases
        ember: "hsl(var(--ember))",
        cosmic: "hsl(var(--cosmic-blue))",
        charcoal: "hsl(var(--charcoal))",
        stone: "hsl(var(--stone))",
        cream: "hsl(var(--cream))",

        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        // v2 keyframes also defined in index.css for plain-CSS access;
        // exposing them here for tailwind users.
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 hsl(var(--gold) / 0.35)" },
          "50%":      { boxShadow: "0 0 0 14px hsl(var(--gold) / 0)" },
        },
        "pulse-green": {
          "0%, 100%": { boxShadow: "0 0 0 0 hsl(var(--mma-green) / 0.40)" },
          "50%":      { boxShadow: "0 0 0 16px hsl(var(--mma-green) / 0)" },
        },
        "drift-slow": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%":      { transform: "translate(6px, -3px)" },
          "66%":      { transform: "translate(-3px, 4px)" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "pulse-gold":     "pulse-gold 3s ease-in-out infinite",
        "pulse-green":    "pulse-green 2.6s ease-in-out infinite",
        "drift-slow":     "drift-slow 8s ease-in-out infinite",
        "float-soft":     "float-soft 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
