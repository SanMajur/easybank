/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'Alegreya': ['Alegreya', 'serif']
      },
      colors: {
        'lightGray': 'hsl(233deg, 8%, 62%)',
        'veryLightGray': 'hsl(0deg, 0%, 100%)',
      },
      transformOrigin: {
        'topRightLeft': '0.1875rem 0.0625rem'
      },
    },
  },
  plugins: [],
}