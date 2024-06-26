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
      },
      borderColor: {
        themeColor: ["#1d9bf0"],
      },
      textColor: {
        themeColor: ["#1d9bf0"],
      },
    },
  },
  plugins: [],
};
