module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  variants: {},
  theme: {
    extend: {
      fontFamily: {
        base: ['Quicksand', 'sans-serif'],
      },
    },
  },
};
