module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-600": "#238f8e",
        "primary-100": "#bddddd",
        "primary-50": "#e9f4f4",
      },

      fontFamily: {
        primary: ['"Rajdhani"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
