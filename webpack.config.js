const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('cardstylesheet.min.css')

module.exports = {
  entry: {
    'cardstylesheet.min.css': [
      __dirname + '/cards/__variables.css',
      __dirname + '/cards/main.css',
      __dirname + '/cards/nubank/nubank.css'
    ]
  },
  devtool: '',
  output: {
    path: __dirname + '/dist/',
    filename: '[name]'

  },
  module: {
    rules: [{
        test: /\.css$/i,
        use: extractCSS.extract({
          use: {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        })
    }]
  },
  resolve: {
    alias: {},
    modules: [],
    extensions: ['.css']
  },
  plugins: [
    extractCSS
  ]
};