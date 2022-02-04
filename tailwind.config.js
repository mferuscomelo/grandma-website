const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["layouts/**/*.html"],
  darkMode: false,
  theme: {
    extend: {
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
      boxShadow: {
        "3xl": "0px 4px 5px rgba(0, 0, 0, 0.25)",
      },
    },
    fontFamily: {
      sans: ["Montserrat"],
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
