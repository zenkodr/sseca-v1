import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sphere: ['SPHERE FEZ', 'sans-serif'],
      oxygen: ['Oxygen', 'sans-serif'],
    },
    letterSpacing: {
      1: '1.5px',
      2: '2px',
      3: '3px',
      4: '4px',
    },
    textShadowSteps: {
      xxs: '0.5px',
      xs: '0.8px',
      sm: '1px',
      md: '2px',
      lg: '3px',
      xl: '4px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
    },
    extend: {
      backgroundImage: {
          'sseca-logo': "url('/public/logos/Logo-full.svg')",
      },
      colors: {
        sseca: {
          accent            : '#7042f8',
          'accent-secondary': '#b49bff',
          ebony             : '#030014',
          zombie            : '#dfd699',
          windsor           : '#410473',
          blackPearl        : '#051C2C',
          lynch             : '#6E7C93',
          seagull           : '#89cff0',
          white             : '#fffeff',
        },
        moon: {
          '950': '#101b39',
          '900': '#333136',
          '500': '#6f6d72',
          '400': '#b4b1b8',
          '200': '#e9e8ee',
        },
      },
      boxShadow: {
        'sseca-sm': '0 1px 2px 0 rgba(223, 214,153)',
        'sseca-md': '0 4px 6px -1px rgba(223, 214,153), 0 2px 4px -2px rgba(223, 214,153)',
        'sseca-lg50': '0px 10px 15px -3px rgba(223, 214,153, 0.50), 0px 4px 6px -4px rgba(223, 214,153, 0.50)',
        'sseca-lg': '0px 10px 15px -13px rgba(223, 214,153) ',
        'sseca-xl': '0px 20px 25px -5px rgba(223, 214,153)',
        'sseca-2xl': '0px 25px 50px -12px rgba(223, 214,153)',
        'sseca-line': '0px 10px 8px rgba(223, 214,153)',
      },
      dropShadow: {
        'sseca-sm': '0 1px 2px rgba(223, 214,153, 0.50)',
        'sseca-md': [

        ],
        'sseca-lg50': [
          '0px 10px 8px rgba(223, 214,153, 0.5)',
          '0px 4px 3px rgba(223, 214,153, 0.2)',
        ],
        'sseca-lg': [
          '0px 10px 8px rgba(223, 214,153, 0.25)',
          '0px 4px 3px rgba(223, 214,153,0.1)',
        ],
        'sseca-xl': [
          '0px 20px 15px rgba(223, 214,153, 0.13)',
          '0px 10px 5px rgba(223, 214,153,  0.19)',
        ],
        'sseca-2xl': '0 25px 25px rgba(223, 214,153, 0.15)',
        'sseca-line': '0px 10px 8px rgba(223, 214,153, 0.5)',
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
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@designbycode/tailwindcss-text-stroke'),
    require('@designbycode/tailwindcss-text-shadow')({
      shadowColor: 'rgb(0, 0, 0,)',
      shadowOffsetX: '1px',
      shadowOffsetY: '2px',
      shadowOpacity: '0.7',
    }),
    require('tailwind-border-gradients'),
    require('@tailwindcss/forms'),
  ],
} satisfies Config

export default config