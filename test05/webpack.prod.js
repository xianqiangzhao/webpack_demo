const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  plugins: [
       new UglifyJSPlugin()  //使用这个vue 1.X 报错。ERROR in app.js from UglifyJs Unexpected token: keyword (const) [app.js:11533,0]
     ]
});

 