/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/index.html", "./pages/contect.html", "./pages/shop.html"],
  theme: {
    extend: {
      colors: {
        primary: "#ff2800",
        background: "#f5f5f5",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],

        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
