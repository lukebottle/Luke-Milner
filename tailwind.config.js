// tailwind.config.js
module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.html',
    './*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // Tiny => @media (min-width: 320px) { ... }
      'ty': '320px',
      // Mobile
      'sm': '640px',
      // Tablet
      'md': '768px',
      // Desktop
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
