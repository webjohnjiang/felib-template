module.export = function () {
	var add = require('./add.js')
	console.log('执行了 吗')
	console.log(add(1, 2))
}