module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
        colors: {
          'default': 'rgb(159, 120, 121)',
          'secondary': 'rgb(228, 182, 169)',
          'accent': 'rgb(238, 214, 202)'
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
       require('@tailwindcss/aspect-ratio'),
       require('@tailwindcss/typography'),
       require('@tailwindcss/forms'),
],
}
