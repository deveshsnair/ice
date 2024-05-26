/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./contents/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'festive':["Festive",'cursive'],
        'oswald':["Oswald",'sans-serif'],
      },
    },
  },
  plugins: [],
}

