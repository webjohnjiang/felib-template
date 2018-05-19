var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.dev.config')

// 新版的vue.js官方脚手架已经不再使用express自定义的方式启动dev-server，而是直接使用 webpack-dev-server 命令行进行启动
// 我们为了灵活起见，依然使用express + webpack-dev-middleware 的方式


// 默认端口设置
var port = process.env.PORT || config.devport


var app = express()
var compiler = webpack(webpackConfig)


// 用API的方式使用 webpack-dev-server 的底层。 这是webpack-dev-server的高级用法。 其实webpack-dev-middleware实现为一个express的中间件。
// webpack-dev-middleware中间件应该不具有server的功能，所以也不具有托管某个目录的功能。此种情景下，要通过express亲自实现。
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  // 从这里可以看出: publicPath决定了webpack编译结果以什么路径访问。其实就是告诉express监听哪个路径而已
  // 比如 如果publicPath是 / ,  则你可以访问localhost/felib.js 直接拿到webpack的编译结果。 如果publicPath是 abc, 则需要通过 /abc/felib.js拿到结果
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

// var hotMiddleware = require('webpack-hot-middleware')(compiler)
// // force page reload when html-webpack-plugin template changes
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })


// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
// app.use(hotMiddleware)

// 增加对staticPath路径的中间件，托管某个静态资源目录
// var staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory)
// 我们这里让express托管静态资源目录 examples.  examples里面可以放置一些实例代码，来引用webpack编译后的bundle进行实例和测试。
// 这样我们进行开发调试时，就可以直接访问 /examples 里的网页来查看我们的实例。网页中可以通过 /felib.js 来引用我们的js类库
var staticPath = '/examples'
app.use(staticPath, express.static('./examples'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
  // TODO: 利用webpack-dev-server使用的那个工具去打开浏览器。可以去webpack-dev-server看下有介绍。
})
