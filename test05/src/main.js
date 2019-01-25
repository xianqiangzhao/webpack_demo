
var img2 = document.createElement("img");
img2.src = require("./a.svg");
document.body.appendChild(img2);

//vue 1.X 可以这样使用 vue 2.X 就不行可能需要使用 vue-loader
const Vue = require('vue');
import './app.css';
new Vue({
    el: '#app',
    data: { 
        hi: 'Hello Vue.js!'
    }
   });