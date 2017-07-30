felib-template
======
A scaffold for the front end library. It is also an official template of lime-cli.

In addition, the official scaffold also has these:

* html-template, a simple html5 html template
* html5app-template, a html5 template with webpack bundle
* felib-template, a front end library template
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

* First, install the lime-cli tools
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




## License
MIT
