const purgecss = require('@fullhuman/postcss-purgecss');

// npm install postcss-loader autoprefixer css-mqpacker cssnano --save-dev
if(process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('css-mqpacker'),
      require('autoprefixer'),
      require('cssnano')({
        preset: [
          'default', {
            discardComments: {
              removeAll: true
            }
          }
        ]
      }),
      purgecss({
        content: [
          './src/**/*.vue',
          './src/**/*.html',
          './src/**/*.js'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      })
    ]
  }
} else {
  module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('css-mqpacker'),
      require('autoprefixer'),
      require('cssnano')({
        preset: [
          'default', {
            discardComments: {
              removeAll: true
            }
          }
        ]
      })
    ]
  }
}