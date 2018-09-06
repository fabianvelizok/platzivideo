const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  const plugins = [
    new ExtractTextPlugin("css/[name].css"),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      hash: true,
    }),
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], { root: __dirname })
    )
  }

  return {
    resolve: {
      alias: {
        Components: path.resolve(__dirname, 'src/components/'),
        Entries: path.resolve(__dirname, 'src/entries/'),
        Pages: path.resolve(__dirname, 'src/pages/'),
        Schemas: path.resolve(__dirname, 'src/schemas/'),
        State: path.resolve(__dirname, 'src/state/'),
        Styles: path.resolve(__dirname, 'src/styles/'),
        Utils: path.resolve(__dirname, 'src/utils/')
      }
    },
    entry: {
      home: path.resolve(__dirname, 'src/entries/home.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[hash].js',
      publicPath: path.resolve(__dirname, 'dist') + "/",
      chunkFilename: 'js/[id].js',
    },
    devServer: {
      port: 9000,
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
        },
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
              limit: 10000,
              fallback: 'file-loader',
              name: 'images/[name].[hash].[ext]',
            }
          }
        },
      ]
    },
    plugins
  }
}
