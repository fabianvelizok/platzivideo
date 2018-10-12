const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/entries/main.js'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          }
        },
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      hash: true,
    })
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Entries: path.resolve(__dirname, 'src/entries/'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      Schemas: path.resolve(__dirname, 'src/schemas/'),
      Selectors: path.resolve(__dirname, 'src/selectors/'),
      State: path.resolve(__dirname, 'src/state/'),
      Static: path.resolve(__dirname, 'src/static/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
      Utils: path.resolve(__dirname, 'src/utils/')
    }
  }
}
