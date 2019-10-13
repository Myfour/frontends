// main.js 项目的JS入口文件

// 1.导入Jquery
//  import .... from ... 是ES6的模块导入方式
import $ from 'jquery'
import './css/index.css'
import './css/index.less'
import './css/index.scss'



$(function () {
    $('li:odd').css('backgroundColor', 'hotpink')
    $('li:even').css('backgroundColor', 'blue')
})


// webpack的作用？
// webpack能够处理JS文件的互相依赖关系；
// webpack能处理JS语法兼容性的问题，转换高级语法到能兼容的低级语法
// 打包命令 webpack xxx.js -o bundle.js
// 最好是使用配置文件来配置出入口 来处理JS


// webpack-dev-server可以实时打包生成打包好的js文件，该文件存于托管的服务器的根目录中，是虚拟的存在。
// 如果要使用这个打包后的js文件需要使用 src='/bundle.js'
// 之后如果正式使用需要用webpack打包后更改实际的路径