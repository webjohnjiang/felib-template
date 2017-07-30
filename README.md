felib-template
======
A scaffold for the front end library. It is also an official template of [lime-cli](https://github.com/limefe/lime-cli).

In addition, the official scaffold also has these:

* html-template, a simple html5 html template
* [html5app-template](https://github.com/cuiyongjian/html5app-template), a html5 template with webpack bundle
* [felib-template](https://github.com/cuiyongjian/felib-template), a front end library template
* node-cmd-template, a node.js commandline programe template
* vue-template, a vue.js 2.0 template
* vue-component-template, a startup template for a `Vue Components Library` project
* lime-cms-template, generate a website driven by lime-cms


## Feature
* Full webpack workflow
* Just a simple configuration with config.js filedoc
* Local development with hot reload
* Elegant tips for Chinese developer
* Write javascript with ES6



## Usage

* First, install the [lime-cli](https://github.com/limefe/lime-cli) tools
``` bash
npm install lime-cli -g
```

* Then, install the official template
``` bash
lime new felib-template test
```

Now, a project folder named `test` has created. And all the files has been created in `test` folder.

* Then, cd into the project folder, and execute:
``` bash
npm install
```


## Scripts

``` bash
    "clean": "shx rm -rf dist && shx echo clean finished",
    "build": "cross-env NODE_ENV=production webpack",
    "devbuild": "cross-env NODE_ENV=development webpack --progress --colors --watch",
    "start": "cross-env NODE_ENV=development webpack-dev-server --open",
    "test": "echo \"Error: no test specified\" && exit 1"
```

* `npm run clean`: clean all the dist folder
* `npm run build`: execute webpack task, and it will create dist folder
* `npm run devbuild`: execute webpack task, but not compress the code
* `npm run start` or `npm start`: start a local server and hosting the webpack results, and open the browser automatically.

## Configuration explain
[从零开始搭建一个webpack类库开发脚手架[1]-概念](https://blog.cuiyongjian.com/2017/07/27/%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AAwebpack%E7%B1%BB%E5%BA%93%E5%BC%80%E5%8F%91%E8%84%9A%E6%89%8B%E6%9E%B6[1]-%E6%A6%82%E5%BF%B5/)

[从零开始搭建一个webpack类库开发脚手架[2]-插件及常用解决方案](https://blog.cuiyongjian.com/2017/07/28/%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AAwebpack%E7%B1%BB%E5%BA%93%E5%BC%80%E5%8F%91%E8%84%9A%E6%89%8B%E6%9E%B6[2]-%E6%8F%92%E4%BB%B6%E5%8F%8A%E5%B8%B8%E7%94%A8%E5%AE%9E%E8%B7%B5/)


## License
MIT
