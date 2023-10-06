/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "mainBG": "#001C30",
        "btnBG": "#008080",
        "progressBarBG": "#0096FF"
      }
    },
  },
  plugins: [],
}