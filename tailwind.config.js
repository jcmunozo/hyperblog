/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      myfont: ['Anton', 'sans-serif']
    },
    extend: {
      colors: {
	danger: '#ff5f40',
      }
    },
  },
  plugins: [],
}
