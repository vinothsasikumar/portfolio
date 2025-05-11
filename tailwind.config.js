/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': "Poppins",
      'marck-script': "Marck Script",
    },
    extend: {
      colors: {
        "dark-blue": "#080E21",
        "mart-yellow": "#FFC220",
        "ang-purple": "#8514f5",
        "ang-purple2": "#8001c6"
      }
    },
  },
  plugins: [],
}