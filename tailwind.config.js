const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["layouts/**/*.html"],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      purple: "#6644AF",
      "purple-light": "#B29FDA",
      gold: "#D4AF37",
      black: colors.black,
      white: colors.white,
      grey: colors.grey,
    },
    fontFamily: {
      sans: ["Montserrat"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
