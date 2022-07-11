/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
    primary: '#bf2b56',
    primaryHover: '#bf2b56',
    secondary: '#fff',
    secondaryHover: '#fff',
    dark: '#000',
    textPrimary: '#fff',
    textPrimaryHover: '#fff'
    },
    extend: {},
  },
  plugins: [],
}
