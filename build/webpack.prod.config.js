var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config')
var config = require('../config')


module.exports = merge(baseConfig, {
  devtool: 'source-map',
  output: {
    filename: config.filename + '-[chunkhash:6].min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true // 移除console.log日志
      }
    })
  ]
})
