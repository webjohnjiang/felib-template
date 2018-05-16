/**
 * 生产: 压缩
 * 开发: 输入webpack日志；日志带颜色；检测代码变化；
 */



// 先检查开发者的开发环境是否满足我们package.json指定的开发环境版本要求，不满足会直接退出node进程
// 默认的package.json里面的engines字段，仅仅用来做建议，并不会强制。所以需要手工检测
require('./check-versions')()

// 引入一个shell脚本执行库，用于执行shell命令，例如删除目标dist目录。
var shell = require('shelljs')
// 引入终端屏幕上的状态提示字符动画工具
var ora = require('ora')
// 引入粉笔工具，让我们的标准输出带颜色
var chalk = require('chalk')
// 引入webpack，进行相关的编译打包等操作
var webpack = require('webpack')
// 引入node.js的内置模块path，处理路径相关问题
var path = require('path')


// 根据Bash用户环境变量获取到合适的webpack配置
var env = process.env.NODE_ENV
var configMap = {production: 'webpack.prod.config', development: 'webpack.dev.config'}
var webpackConfig = require(path.join(__dirname, configMap[env]))

// 打印开始前的提示
console.log(chalk.yellow(
  '  Tips:\n' +
  '  编译开始，请耐心等待...\n'
))

// 开始添加一个转圈圈的提示
var spinner = ora('building for production...')
spinner.start()

// 执行删除dist的shell命令
if (shell.test('-d', 'dist')) {
  console.log('delete dist folder')
  shell.rm('-rf', 'dist')
}


// 执行打包任务
webpack(webpackConfig, (err, states) => {
  // 打包完成，停止转圈圈的提示
  spinner.stop()
  // 如果打包有错，直接扔出去，让node进程崩溃
  if (err) throw err
  // 输出webpack编译的状态信息
  process.stdout.write(states.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
  // 用彩色粉笔提示编译成功的消息
  console.log(chalk.cyan('  编译成功.\n'))
  console.log(chalk.yellow(
    '  Tips:\n' +
    '  请将编译后的库文件引入到你的项目中进行使用.\n' +
    '  将其放置到互联网的cdn服务器上也是个比较好的选择.\n'
  ))
}, 3000)




