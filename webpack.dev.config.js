const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/entries/home.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    port: 9000,
  },
  devtool: 'source-map',
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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[ext]',
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      hash: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function (module) {
        return module.context && module.context.includes("node_modules");
      }
    })
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Entries: path.resolve(__dirname, 'src/entries/'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      Schemas: path.resolve(__dirname, 'src/schemas/'),
      State: path.resolve(__dirname, 'src/state/'),
      Static: path.resolve(__dirname, 'src/static/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
      Utils: path.resolve(__dirname, 'src/utils/')
    }
  }
}
