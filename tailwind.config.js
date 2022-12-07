module.exports = {
  purge: [
  './_includes/**/*.html',
  './_layouts/**/*.html',
  './_posts/*.html',
  './*.html'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend:{
    colors:{
      'neo':{
        gray: {
          100: "#f2f3fb",
          200: "#e5e7f7",
          300: "#d9dcf2",
          400: "#ccd0ee",
          500: "#bfc4ea",
          600: "#999dbb",
          700: "#73768c",
          800: "#4c4e5e",
          900: "#26272f"
      },
      green: {
          100: "#dcfeee",
          200: "#b8fddd",
          300: "#95fbcd",
          400: "#71fabc",
          500: "#4ef9ab",
          600: "#3ec789",
          700: "#2f9567",
          800: "#1f6444",
          900: "#103222"
      },
      }
    },
    backgroundImage: {
    'hero-wave': "url('images/hero.png')"
    }
    },
    screens: {
      // Tiny => @media (min-width: 320px) { ... }
      'ty': '320px',
      // Mobile
      'md': '640px',
      // Tablet
      'sm': '768px',
      // Desktop
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'tiny': {'max': '320px'},
      'mob': {'max': '768px'},
    },
    fontFamily:{
      'Josefin': ['Josefin Sans', 'sans-serif'],
      'bungee': ['Bungee', 'cursive'],
      'OpenSans': ['Open Sans', 'sans-serif'],
    },

    
   
  },
  variants: {
    extend: {
      
    }
  },
  plugins: [
  require('@tailwindcss/typography'),
  //require('@tailwindcss/line-clamp'),
  //require('@tailwindcss/forms'),
  ]
}