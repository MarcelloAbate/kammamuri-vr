module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#238f8e",
      },

      fontFamily: {
        primary: ['"Rajdhani"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
