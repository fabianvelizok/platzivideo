const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/',
    chunkFilename: 'js/[id].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              }
            }
          ]
        })
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]',
          }
        }
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].[hash].css'),
    new CleanWebpackPlugin(['dist'], { root: __dirname }),
    new webpack.DefinePlugin({
      'process.env': {
        ASSET_PATH: JSON.stringify('http://127.0.0.1:8080'),
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ]
});
