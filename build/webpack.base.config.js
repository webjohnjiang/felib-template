var path = require('path')
var rootPath = path.resolve(__dirname, '../') // 这种第一个参数就是绝对路径的情况，用join和resolve是一样的
var config = require('../config')

module.exports = {
  entry: path.join(rootPath, './src/', config.entry),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  // 这个具体含义需要查一下
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel',
            options: {
              presets: ['es2015'],
              plugins: ['transform-runtime'],
              comments: false
            }
          }
        ]
      }
    ]
  }
}
