/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,css}",
    "./components/**/*.{ts,tsx,js,jsx,css}",
    "./app/**/*.{ts,tsx,js,jsx,css}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        primary: "#465b52", // navbar
        primaryHover: "#5a7063",
        secondary: "#b2a59b", // h1
        mainText: "#2a2a2a",
        discount: "#e32e2e",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
