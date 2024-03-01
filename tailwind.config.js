/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      skew: {
        30: "30deg",
      },
      fontFamily: {
        livvic: ["Livvic", "sans-serif"],
      },
      colors: {
        midnightGreen: "#014e56",
        lightCoral: "#f67e7e",
        raptureBlue: "#79c8c7",
        policeBlue: "#2c6269",
        deepJungleGreen: "#004047",
        sacramentoGreen: "#012f34",
        darkGreen: "#002529",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
