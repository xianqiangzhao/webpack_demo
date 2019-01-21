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
}
;