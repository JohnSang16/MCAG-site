/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#f5f0e8',
        surface: '#ffffff',
        'text-primary': '#1a1a1a',
        'text-secondary': '#6b6b6b',
        'brand-blue': '#1a3aad',
        'brand-teal': '#0e7c6e',
        'brand-gold': '#c9a84c',
        border: '#e5e0d8',
        'hero-navy': '#0a0f2e',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'pulse-cross': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'pulse-cross': 'pulse-cross 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
}
