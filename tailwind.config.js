/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, Arial, sans-serif",
        quicksand: "Quicksand, Arial, sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
