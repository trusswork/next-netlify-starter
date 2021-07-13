module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3c3c3c',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/Background.jpg')",
      })
    },
  },
  variants: {
    extend: { backgroundColor: ['active'], },
  },
  plugins: [],
}
