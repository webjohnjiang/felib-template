const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const config = require('../config')
const webpack = require('webpack')


module.exports = merge(baseConfig, {
  devtool: 'source-map',
  output: {
    filename: config.filename + '-[chunkhash:6].min.js'
  },
  plugins: [],
  mode: 'production'
})
