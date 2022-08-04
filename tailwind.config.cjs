/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-profile": "url('../src/assets/hero/Sean2.svg')",
      },
      colors: {
        palatinate_purple: "#4C1E4F",
        khaki_web: "#B5A886",
        bisque: "#FEE1C7",
        outrageous_orange: "#FA7E61",
        paradise_pink: "#F44174",
        viridian_green: "#0FA3B1",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        wiggle2: {
          "0%, 100%": { transform: "rotate(10deg)", top: "0px", left: "0px" },
          "25%": { top: "5px", left: "3px" },
          "50%": { transform: "rotate(-10deg)", top: "10px", left: "6px" },
          "75%": { top: "5px", left: "3px" },
        },
        wiggle3: {
          "0%, 100%": {
            transform: "rotate(-10deg)",
            bottom: "-48px",
            right: "10px",
          },
          "25%": { bottom: "-43px", right: "6px" },
          "50%": { transform: "rotate(10deg)", bottom: "-39px", right: "4px" },
          "75%": { bottom: "-43px", right: "6px" },
        },
        wiggle4: {
          "0%, 100%": {
            transform: "rotate(-20deg)",
            top: "5px",
            right: "0px",
          },
          "25%": { top: "6px", right: "4px" },
          "50%": { transform: "rotate(20deg)", top: "7px", right: "6px" },
          "75%": { top: "6px", right: "4px" },
        },
      },
      animation: {
        blobAnimation: "wiggle 6s ease-in-out infinite",
        blobAnimation2: "wiggle 5s ease-in-out alternate infinite",
        widget1: "wiggle2 6s ease-in-out infinite alternate",
        widget2: "wiggle3 6s ease-in-out infinite ",
        widget3: "wiggle4 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
