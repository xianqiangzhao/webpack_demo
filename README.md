# webpack_demo

## test01:

 webpack 配置文件使用了 raw-loader、HtmlWebpackPlugin

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
    rules: [ //txt 文件loader
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

