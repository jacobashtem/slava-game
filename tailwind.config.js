module.exports = {
  darkmode: "class",
  plugin: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        customPrimary: {
          100: "#FFF5DB",
          200: "#FFE19C",
          300: "#FFCD5D",
          400: "#FFB30D",
          500: "#E69F0A",
          600: "#BF7E08",
          700: "#995D06",
          800: "#733C04",
          900: "#4D1B02",
        },
      },
      screens: {
        xs: "480px",
        xxs: "320px",
      },
    },
  },
};
