var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: './main.js',
   // vendor: ['jquery'],
  },
  output: {
    filename: '[name].js'
  },
  plugins: [new HtmlWebpackPlugin({ //自动生成 index.html 插件
      title: 'a test',
      template: './src/index.html',
      filename: 'index.html'})]
  
};
