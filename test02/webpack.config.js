var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let pathsToClean = [
  'dist',
]
module.exports = {
  entry: {
          "bundle1": './main1.js', //入口文件
          "bundle2":'./main2.js', //入口文件
      },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js' //输出文件
  },plugins: [new HtmlWebpackPlugin({ //自动生成 index.html 插件
      title: 'a test',
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: './src/index.html',
      filename: 'index.html'}),
      new HtmlWebpackPlugin({ //自动生成 index.html 插件
      title: 'a test',
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: './src/index.html',
      filename: 'index1.html'}),
      new CleanWebpackPlugin(pathsToClean)
      ]
  ,module: {
    rules: [ //txt 文件loader
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  devServer: {
    port: 9000
  },
}
;