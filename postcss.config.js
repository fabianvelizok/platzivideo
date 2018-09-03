module.exports = {
  plugins: [
    require('cssnano'), // TODO: Set only in prod.
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 0
    }),
    require('css-mqpacker'),
  ]
};
