/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "ubuntu":['Ubuntu'],
        "poppins":['Poppins'],
        "lato":['Lato']
      }
    },
  },
  plugins: [],
}