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
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
