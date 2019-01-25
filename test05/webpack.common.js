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
      chunks: ["app"],   //允许插入到模板中的一些chunk 默认是entry 中的所有
      template: './src/index.html',
      filename: 'index.html'}),
    new CleanWebpackPlugin(pathsToClean),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    ],
    mode: "production",
    module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
     ]
   }
};