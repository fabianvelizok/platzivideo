module.exports = {
  plugins: [
    require('cssnano'),
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 0
    }),
  ]
};
