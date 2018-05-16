var path = require('path')
var rootPath = path.resolve(__dirname, '../') // 这种第一个参数就是绝对路径__dirname的情况，用join和resolve是一样的
var config = require('../config')

module.exports = {
  entry: path.join(rootPath, './src/', config.entry),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '~': path.resolve(__dirname, '../src'),
      'src': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              comments: false
            }
          }
        ]
      }
    ]
  }
}
