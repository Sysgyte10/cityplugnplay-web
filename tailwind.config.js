/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        deemWhite: "#F1F4F8",
        orange: "#F09228",
        sharpOrange: "#FF5722",
        primaryBlue: "#146DF5",
        accentBlue: "#1D1160",
        grey: "#F1F4F8",
        darkGrey: "#3b36367f",
        deepDarkGrey: "#57636C",
        lightGrey: "#d8d3e7",
        warning: "crimson",
        black: "#101213",
        green: "#24A891",
        sharpGreen: "#17e2c0",
        modalBg: "#00000067",
        screenBgColor: "#e2dbdb4f",
        brown: "#4E1114",
      },
    },
  },
  plugins: [],
};
