/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    minHeight: {
      '20rem': '20rem',
      '41rem': '41rem',
    },
    extend: {
      fontFamily: {
        'Alegreya': ['Alegreya', 'serif']
      },
      colors: {
        'lightGray': 'hsl(233deg, 8%, 62%)',
        'veryLightGray': 'hsl(0deg, 0%, 100%)',
        'veryLightGrayish': 'hsl(0deg, 0%, 98%)'
      },
      transformOrigin: {
        'topRightLeft': '0.1875rem 0.0625rem'
      },
      backgroundImage: {
        'mobile-bg': "url('/src/images/bg-intro-mobile.svg')",
        'desktop-bg': "url('/src/images/bg-intro-desktop.svg')"
      },
      spacing: {
        '-32.5': '-8.5rem'
      }
    },
  },
  plugins: [],
}