# webpack_demo

## test01:

 webpack 配置文件使用了 raw-loader(文本文件loader)、HtmlWebpackPlugin(自动生成 index.html 插件)

```javascript
// webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  entry: './main.js', //入口文件
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js' //输出文件
  },plugins: [new HtmlWebpackPlugin({ //自动生成 index.html 插件
      title: 'a test',
      filename: 'index.html'})]
  ,module: {
    rules: [ //txt 文件loader .txt 扩展名的文件，使用raw-loader 加载
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```

入口js
```javascript
// main.js
let t = require("./a.txt");
document.write('<h1>Hello World</h1> ' +t);
```
TXT 文件
```
//a.txt
a raw-loader test
```

 启动方法
```bash
$ cd test01
$ npm install
$ npm run dev
```


## test02:
- webpack 配置文件自动生成 index.html index1.html
- entry 有两个入口 ./main1.js ./main2.js
- 另外配置了devServer的端口 9000

  启动方法
```bash
$ cd test02
$ npm install
$ npm run dev
```
## test03:
- 引用jquery

```javascript
var $ = require('jquery');
$('h1').text('Hello World');

```

  启动方法
```bash
$ cd test03
$ npm install
$ npm run dev
```
## test04:
- 使用vue


```html
//src/index.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>a vue test</title>
  </head>
  <body>
     <div id="app">
          <p>{{ hi }}</p>
        <input v-model="hi">
    </div>
  </body>
 
 </html> 

```
```javascript

const Vue = require('vue');

new Vue({
    el: '#app',
    data: { 
        hi: 'Hello Vue.js!' //会显示到index.html 页面上
    }
   });

console.log(Vue);
```


  启动方法
```bash
$ cd test04
$ npm install
$ npm run dev
```
## test05:
- 生产环境，开发环境不同的配置文件
- 利用webpack-merge模块来达到目的
追加三个配置文件
  |- webpack.common.js  通用
  |- webpack.dev.js     开发
  |- webpack.prod.js    生产
 

```bash
$ cd test05
$ npm install
$ npm run dev   //开发环境
$ npm run build //生产环境
```





