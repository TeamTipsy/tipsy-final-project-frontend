module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-red': '#950952',
        'brand-beau-blue': '#BFDBF7',
        'brand-dark-blue': '#004E9A',
        'brand-yellow': '#FFBF00',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
