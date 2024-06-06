/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}'],
  theme: {
    colors: {
      pitch: { 
        '200': "#dfdea9",
        '100': "#edeed3",
        '50': "#f8f8ee",
      },
    },
    extend: {
      fontFamily: {
        oswald: ['Oswald'],
      }
    },
  },
  plugins: [],
}

