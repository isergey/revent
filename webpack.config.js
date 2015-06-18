var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  devtool: 'source-map',
  output: {
    filename: path.join(__dirname, 'dist', 'revent.js')

  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
