var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config')
var config = require('../config')


module.exports = merge(baseConfig, {
  devtool: 'source-map',
  output: {
    filename: config.filename + '-[hash].min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})
