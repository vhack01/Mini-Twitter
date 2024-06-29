/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundColor: {
        themeColor: ["#1d9bf0", "#1190e6"],
        blackTransparent: "#00000085",
        dialogColor: "#212020",
        blackLightDark: "#222222",
      },
      borderColor: {
        themeColor: ["#1d9bf0"],
        darkBorder: "#191919",
      },
      textColor: {
        themeColor: ["#1d9bf0"],
      },
      boxShadowColor: {
        dark: "#0d0d0d",
      },
    },
  },
  plugins: [],
};
