import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', 'sans-serif'],
        'sf-pro': ['"SF Pro Display"', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#1A2B4B',
          accent: '#D9D9D9',
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          card: 'rgba(255, 255, 255, 0.08)',
          input: 'rgba(255, 255, 255, 0.04)',
          border: 'rgba(255, 255, 255, 0.15)',
        }
      },
      boxShadow: {
        'glass-nav': '0 4px 24px rgba(0, 0, 0, 0.10)',
        'glass-input': 'inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.4), inset 1px 0 0 0 rgba(255, 255, 255, 0.15), 0 12px 40px 0 rgba(0, 0, 0, 0.35)',
        'glass-card': 'inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.3), 0 8px 32px 0 rgba(0, 0, 0, 0.25)',
      },
      backdropBlur: {
        'glass': '24px',
        'glass-heavy': '40px',
        'glass-ultra': '50px',
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}
