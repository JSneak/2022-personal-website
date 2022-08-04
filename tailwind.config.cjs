/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-profile': "url('../src/assets/hero/Sean.svg')",
      },
      colors: {
        palatinate_purple: "#4C1E4F",
        khaki_web: "#B5A886",
        bisque: "#FEE1C7",
        outrageous_orange: "#FA7E61",
        paradise_pink: "#F44174",
      },
    },
  },
  plugins: [],
};
