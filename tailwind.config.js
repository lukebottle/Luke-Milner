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
      'LM':{
        black: {
          100: "#d2d0df",
          200: "#a5a0bf",
          300: "#78719f",
          400: "#4b417f",
          500: "#1e125f",
          600: "#180e4c",
          700: "#120b39",
          800: "#0c0726",
          900: "#060413"
      },
      pink: {
          100: "#fee1f1",
          200: "#fdc3e3",
          300: "#fca5d5",
          400: "#fb87c7",
          500: "#fa69b9",
          600: "#c85494",
          700: "#963f6f",
          800: "#642a4a",
          900: "#321525"
      },
      orange: {
          100: "#ffedd0",
          200: "#ffdba1",
          300: "#fec972",
          400: "#feb743",
          500: "#fea514",
          600: "#cb8410",
          700: "#98630c",
          800: "#664208",
          900: "#332104"
      },
      purple: {
          100: "#e8dcff",
          200: "#d1b9ff",
          300: "#ba96ff",
          400: "#a373ff",
          500: "#8c50ff",
          600: "#7040cc",
          700: "#543099",
          800: "#382066",
          900: "#1c1033"
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