module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    position: ['after'],
    transform: ['after'],
    translate: ['after'],
    inset: ['after'],
    backgroundImages: ['after'],
    gradientColorStops: ['after'],
  },
  plugins: [require('tailwindcss-pseudo-elements')],
};
