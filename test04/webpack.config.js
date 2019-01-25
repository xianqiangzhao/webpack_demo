var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let pathsToClean = [
  'dist',
]
module.exports = {
  entry: {
    app: './src/main.js',
   },
  output: {
    filename: '[name].js'
  },
   plugins: [new HtmlWebpackPlugin({ //自动生成 index.html 插件
      title: 'a test',
      hash: true,
      template: './src/index.html',
      filename: 'index.html'}),
    new CleanWebpackPlugin(pathsToClean)
    ]
};