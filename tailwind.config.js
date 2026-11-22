/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBg: '#080808',
        darkSurface: '#111111',
        darkCard: '#171717',
        darkBorder: 'rgba(255, 255, 255, 0.12)',
        crimson: {
          DEFAULT: '#C8102E',
          bright: '#E32636',
          dark: '#9A0B22',
          subtle: 'rgba(200, 16, 46, 0.12)',
          border: 'rgba(200, 16, 46, 0.35)',
        },
        cream: '#F5F1EC',
        mutedGray: '#A3A3A3',
      },
      fontFamily: {
        display: ['Syne', '"Space Grotesk"', 'sans-serif'],
        sans: ['Manrope', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      aspectRatio: {
        '21/9': '21 / 9',
      },
      animation: {
        'ken-burns': 'kenburns 20s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'subtlePulse 2.5s ease-in-out infinite',
        'pulse-crimson': 'pulseCrimson 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.06) translate(-1%, -1%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        pulseCrimson: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(200, 16, 46, 0.7)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 0 8px rgba(200, 16, 46, 0)' },
        },
      },
      boxShadow: {
        'crimson-glow': '0 0 30px -4px rgba(200, 16, 46, 0.45)',
        'crimson-subtle': '0 10px 30px -10px rgba(200, 16, 46, 0.25)',
        'editorial-card': '0 16px 40px -12px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};
