/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body_bg:{
          default: "#F8F9F9"
        },
        amazon_blue: {
          light: "#232F3E",
          default: "#131921"
        },
        btn:{
          primary: "#F4D03F",
          secondary: "#F1C40F"
        }
      }
    },
  },
  plugins: [],
}