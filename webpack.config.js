const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'cardstylesheet.min.css': path.join(__dirname, '/cards/main.css'),
  },
  devtool: '',
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'cardstylesheet.min.css'
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    hot: true
  },
  module: {
    rules: [{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
    }]
  },
  resolve: {
    extensions: ['.css', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};