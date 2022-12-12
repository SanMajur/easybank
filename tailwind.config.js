/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        pubSans : "Public Sans"
      },
      colors: {
        primary: {
         'Dark-Blue': 'hsl(233, 26%, 24%)',
         'Lime-Green': 'hsl(136, 65%, 51%)',
         'Bright-Cyan': 'hsl(192, 70%, 51%)',
        },
        neutral: {
          'Grayish-Blue': 'hsl(233, 8%, 62%)',
          'Light-Grayish-Blue': 'hsl(220, 16%, 96%)',
          'Very-Light-Gray': 'hsl(0, 0%, 98%)',
          'White': 'hsl(0, 0%, 100%)',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '3rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      },
    },
  },
  plugins: [],
}
