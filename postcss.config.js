module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 0
    }),
    require('css-mqpacker'),
    require('postcss-font-magician')({
      variants: {
          'Ubuntu': {
              '400': [],
              '700': []
          }
      },
    }),
    require('cssnano'), // TODO: Set only in prod.
  ]
};
