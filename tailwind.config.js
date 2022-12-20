/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.js"],
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
      backgroundImage: {
        'overlayBg' : 'linear-gradient(hsl(233, 8%, 62%), transparent)',
        'heroMobileBg': "url('/public/images/bg-intro-mobile.svg')",
        'heroDesktopBg': "url('/public/images/bg-intro-desktop.svg')",
        'heroPhonesBg': "url('/public/images/image-mockups.png')",
      },
      backgroundPosition: {
        'center-bottom': 'center bottom',
        'left-center': 'left center',
      },
      backgroundSize: {
        '93%': '93%',
      },
      spacing: {
        '78px' : '4.875rem',
        '60px' : '3.75rem',
        '21px': '1.3125rem',
        '307px': '19.1875rem',
        '108px': '6.625rem',
      },
      keyframes: {
        'fade-out': {
          from: {
            'visibility': 'visible',
            'opacity': '1',
          },
          '99%': {
            'visibility': 'visible',
            'opacity': '0',
          },
          to: {
            'visibility': 'hidden',
            'opacity': '0'
          }
        }
      },
      animation: {
        'fade-out': 'fade-out 300ms ease-in-out forwards'
      },
      minHeight: {
        '22.7rem': '21rem',
        '41rem': '37rem',
      },
      width: {
        '40rem': '40rem',
      },
      maxWidth: {
        '1124px': '70.25rem',
        '92%': '92%',
      }
    },
  },
  plugins: [],
}
