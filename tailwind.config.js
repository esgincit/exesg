/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#17506c",
          dark: "#0d3549",
          light: "#e8f1f6",
        },
        accent: "#d97706",
      },
    },
  },
  plugins: [],
};
