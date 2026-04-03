import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],

  darkMode: "class",

  theme: {
    extend: {
      /* =========================
         🎨 COLORS SYSTEM
      ========================== */
      colors: {
        brand: {
          blue: {
            DEFAULT: '#007AFF',
            'main': '#007AFF',
            'bg': '#E5F1FF',
            '100': '#80BDFF',
            '50': '#CCE5FF',
            "border-shade": "#CDEBFF"
          },
          navy: '#002B58',
          accent: '#D9D9D9',
        },
        grey: {
          '950': '#121111',
          '900': '#1A1A1A',
          '800': '#262626',
          '700': '#333333',
          '600': '#4D4D4D',
          '500': '#7F7F7F',
          '400': '#B3B3B3',
          '300': '#CCCCCC',
          '200': '#E5E5E5',
          '100': '#F2F2F2',
          '50': '#F9F9F9',
        },
        green: {
          'main': "#28806F"
        },
        pill: {
          'main': '#2D806F',
          '200': '#B21E34',
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          card: 'rgba(255, 255, 255, 0.08)',
          input: 'rgba(255, 255, 255, 0.04)',
          border: 'rgba(255, 255, 255, 0.15)',
        }
      },

      /* =========================
         🔤 TYPOGRAPHY
      ========================== */
      fontFamily: {
        sans: ["SF Pro Display", 'Helvetica'],
        'sf-pro': ['SF Pro Display', 'Helvetica'],
        'inter': ['Inter', 'sans-serif'],
        'arial': ['Arial', 'sans-serif'],
      },

      // fontSize: {
      //   xs: ['10px', '14px'],
      //   sm: ['12px', '16px'],
      //   base: ['14px', '20px'],
      //   md: ['16px', '22px'],
      //   lg: ['18px', '26px'],
      //   xl: ['22px', '30px'],
      // },

      fontSize: {
        // Base scale — size: [fontSize, defaultLineHeight]
        '8': ['8px', '10px'],
        '10': ['10px', '14px'],
        '12': ['12px', '16px'],
        '14': ['14px', '18px'],
        '16': ['16px', '20px'],
        '18': ['18px', '22px'],
        '15.6': ['15.6px', '20.8px'],
        '12.83': ['12.83px', '15.68px'],

        // Variants with alternate line-heights
        '16-lg': ['16px', '22px'],   // Medium 16/22
        '14-xl': ['14px', '30px'],   // Bold   14/30
        '12-lg': ['12px', '18px'],   // SemiBold 12/18
      },
      lineHeight: {
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '15.68': '15.68px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '30': '30px',
      },
      fontWeight: {
        thin: '100',
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      letterSpacing: {
        tightest: '1px', // -2%
      },

      /* =========================
         🌫️ GLASS BLUR LEVELS
      ========================== */
      blur: {
        sm: '4px',
        md: '8px',
        lg: '16px', // adjust to your liking
        xl: '32px',
        '2xl': '48px',
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '20px', // This generates backdrop-blur-lg
        xl: '32px',
        '2xl': '48px',
      },

      /* =========================
         🌑 SHADOW SYSTEM
      ========================== */
      boxShadow: {
        /* Cards */
        'glass-card':
          'inset 0 1.5px 1.5px rgba(255,255,255,0.3), 0 8px 32px rgba(0,0,0,0.25)',

        /* Buttons (your case) */
        'glass-button':
          'inset 0 0 18px rgba(255,255,255,0.18), inset 0 0 35px rgba(255,255,255,0.08), 0 10px 35px rgba(0,0,0,0.25)',

        /* Inputs */
        'glass-input':
          'inset 0 1.5px 1.5px rgba(255,255,255,0.4), inset 1px 0 0 rgba(255,255,255,0.15), 0 12px 40px rgba(0,0,0,0.35)',

        /* Navbar */
        'glass-nav':
          '0 4px 24px rgba(0,0,0,0.10)',

        /* Strong depth (Figma depth ~100+) */
        'glass-depth':
          '0 12px 40px rgba(0,0,0,0.35)',

        'figma-drop': '0 9.35px 28.05px 0 rgba(0, 0, 0, 0.15)',
      },

      /* =========================
         🧊 BORDER RADIUS
      ========================== */
      borderRadius: {
        glass: '20px',
        'glass-sm': '8px',
      },

      /* =========================
         ✨ BACKGROUND GRADIENTS
      ========================== */
      backgroundImage: {
        'glass-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))',

        'glass-light':
          'linear-gradient(-45deg, rgba(255,255,255,0.5), rgba(255,255,255,0.1), transparent)',
      },

      /* =========================
         🧱 SPACING (optional tuning)
      ========================== */
      spacing: {
        'glass': '20px',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(4px)' },
        },
      },
      animation: {
        shake: 'shake 0.4s cubic-bezier(.36,.07,.19,.97) both',
      },
    },
  },
  safelist: [
    "backdrop-blur-[141px]",
    "bg-[linear-gradient(-45deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)]",
  ]

  // plugins: [heroui()],
};