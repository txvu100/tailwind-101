/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSuperLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkBlueLight: 'hsl(228, 39%, 33%)',
        darkBlueSuperLight: 'hsl(228, 39%, 43%)',
        grayishBlue: 'hsl(227, 12%, 61%)',
      }
    },
  },
  plugins: [],
}

