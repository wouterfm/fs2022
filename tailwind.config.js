/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#ee0979",
      primaryHover: "#ee0979",
      secondary: "#ff6a00",
      secondaryHover: "#ff6a00",
      dark: "#000",
      darkAccent: "#121212",
      darkAccentBorder: "#121212",
      light: "#fff",
      textPrimary: "#fff",
      textPrimaryHover: "#fff",
      nav: "#000000d1",
    },
    extend: {
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
