var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.dev.config')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.devport


var app = express()
var compiler = webpack(webpackConfig)


// 用API的方式使用 webpack-dev-server 的底层。 这是webpack-dev-server的高级用法。 其实webpack-dev-middleware实现为一个express的中间件。
// webpack-dev-middleware中间件应该不具有server的功能，所以也不具有托管某个目录的功能。此种情景下，要通过express亲自实现。
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  // publicPath决定了webpack编译结果以什么路径访问。
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})


// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
// 用express亲自实现，让express托管静态资源目录 examples.  examples里面可以放置一些实例代码，来引用webpack编译后的bundle进行实例和测试。
app.use(staticPath, express.static('./examples'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
  // TODO: 利用webpack-dev-server使用的那个工具去打开浏览器。可以去webpack-dev-server看下有介绍。
})
