const cssnano = require('cssnano')({ preset: 'default' })

if(process.env.NODE_ENV === 'development') {
  module.exports = {
    plugins: [
    require('tailwindcss/nesting'),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [cssnano] : [])
    ]
  }
} else if(process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
    require('tailwindcss/nesting'),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [cssnano] : [])
    ]
  }
}