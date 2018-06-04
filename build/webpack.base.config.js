const path = require('path')
const rootPath = path.resolve(__dirname, '../') // 这种第一个参数就是绝对路径__dirname的情况，用join和resolve是一样的
const config = require('../config')
const lang = require('kitty-lang') // 语言增强工具



// entry处理
let computedEntry = ""
if (typeof config.entry == 'string') {
  // 字符串为单入口
  computedEntry = path.resolve(rootPath, config.entry)
}
else if (lang.type.isPlainObject(config.entry)) {
  // 多入口
  computedEntry = config.entry
}
else {
  process.exit(0);
}


// webpack基本公用配置
module.exports = {
  entry: computedEntry,
  output: {
    path: path.resolve(rootPath, config.outputPath),
    publicPath: config.publicPath // publicPath是告诉webpack-dev-server监听的path，即匹配到哪个path时才展示webpack的编译contentBase目录
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
        use: ['babel-loader']
      }
    ]
  }
}
