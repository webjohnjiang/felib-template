/*
  * @file config.js, 项目的配置文件
  * @desc 这些配置将影响到webpack打包的配置，以及express服务器相关的配置，因为他们的运行引用了本文件中的配置项
  * @dest 该配置文件的目的是简化配置难度，让小白可以在不了解webpack的情况下使用本脚手架进行工程化开发

  * warning 该脚手架的工作流已默认了一些既定的目录结构，例如源码放置在src目录下，编译结果放在dist目录下。所以config.js中并不提供修改这些默认目录的能力
  * tips 所有配置的相对路径，都是基于你的项目根目录。请使用相对路径，或者最前面直接不写路径。例如./src就表示项目根目录下的src
*/


module.exports = {
  entry: 'src/index.js', // 入口文件名，可以使用符合webpack entry规范的对象来写
  outputPath: 'dist', // 输出目录
  filename: 'felib', // 输出库文件名，不需要写hash, webpack配置里会自动加上6位hash
  library: 'felib', // 类库导出的变量名
  libraryTarget: 'umd', // 导出的模块化方式
  devport: '9090', // 开发模式的devServer端口号
  publicPath: '/', // dev-server的公共访问目录
  externals: []
}



// module.exports = {
//   base: {
//     entry: 'index.js', // 你的代码主入口文件，对于前端库项目请在此导出你的库对象，如jquery的$, lodash的_
//     filename: 'fet' // 编译后的目标文件名
//   },
//   production: {

//   },
//   development: {

//   },
//   // 本地开发服务器的配置(本地server是基于express框架的)
//   server: {
//     port: '9090'
//   }
// }
