export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#2b1e3e',
        'cosmic-blue': '#4a4e8f',
        'lavender': '#a490c2',
        'silver': '#e6e6fa',
      },
      fontFamily: {
        sans: ['FreeSans', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}