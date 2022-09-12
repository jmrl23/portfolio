/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['\'Open Sans\'', 'sans-serif']
      }
    },
  },
  plugins: [],
  darkMode: ['class']
}
