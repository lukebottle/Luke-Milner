module.exports = {
  purge: [
  './_includes/**/*.html',
  './_layouts/**/*.html',
  './_posts/*.html',
  './*.html'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    patterns: {
      opacities: {
          100: "1",
          80: ".80",
          60: ".60",
          40: ".40",
          20: ".20",
          10: ".10",
          5: ".05",
      },
      sizes: {
          1: "0.25rem",
          2: "0.5rem",
          4: "1rem",
          6: "1.5rem",
          8: "2rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          32: "8rem",
      }
  },
    extend:{
    colors:{
      'body': {
        700: '#1F1F1F',
        600: '#292929',
        500: '#2A2A2A',
        DEFAULT: '#2A2A2A',
        400: '#595959',
        300: '#757575',
        'line': '#D6D6D6',
        'shadow': 'rgba(0,0,0,0.25)',

      },
        purple: {
          100: "#e1d5f7",
          200: "#c3aaef",
          300: "#a480e7",
          400: "#8655df",
          500: "#682bd7",
          600: "#5322ac",
          700: "#3e1a81",
          800: "#2a1156",
          900: "#15092b"
        },
        red: {
          100: "#ffe2e1",
          200: "#fec5c2",
          300: "#fea9a4",
          400: "#fd8c85",
          500: "#fd6f67",
          600: "#ca5952",
          700: "#98433e",
          800: "#652c29",
          900: "#331615"
      },
      indigo: {
          100: "#cde0df",
          200: "#9cc1c0",
          300: "#6aa2a0",
          400: "#398381",
          500: "#076461",
          600: "#06504e",
          700: "#043c3a",
          800: "#032827",
          900: "#011413"
      },
      black: {
          100: "#ccd5d5",
          200: "#99abaa",
          300: "#668080",
          400: "#335655",
          500: "#002c2b",
          600: "#002322",
          700: "#001a1a",
          800: "#001211",
          900: "#000909"
      },
      orange: {
          100: "#ffd8cc",
          200: "#ffb199",
          300: "#ff8b66",
          400: "#ff6433",
          500: "#ff3d00",
          600: "#cc3100",
          700: "#992500",
          800: "#661800",
          900: "#330c00"
},
      white: {
          100: "#f7f9fa",
          200: "#eff3f6",
          300: "#e6ecf1",
          400: "#dee6ed",
          500: "#d6e0e8",
          600: "#abb3ba",
          700: "#80868b",
          800: "#565a5d",
          900: "#2b2d2e"
      },
    },
    backgroundImage: {
    'bg-1': "url('images/background-1.png')",
    'bg-2': "url('images/background-2.png')",
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
  require('tailwindcss-bg-patterns'),
  //require('@tailwindcss/line-clamp'),
  //require('@tailwindcss/forms'),
  ]
}