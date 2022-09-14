/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
  darkMode: ['class']
}
