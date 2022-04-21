module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#238f8e",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
