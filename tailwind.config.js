/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightgray: 'hsl(212, 45%, 89%)',
        grayishblue: 'hsl(220, 15%, 55%)',
        darkblue: 'hsl(218, 44%, 22%)'
      },
      fontSize: {
        paragraph: '15px'
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif']
      },
      fontWeight: {
      normal: '400',
      bold: '700'
      }
    },
  },
  plugins: [],
}

