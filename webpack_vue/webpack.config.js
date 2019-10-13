const path = require('path')
// 引入给html页面模板底部添加bundle.js的插件
const htmlWebpackPlugin = require('html-webpack-plugin') 
module.exports = {
    entry: path.join(__dirname, './src/main.js'), //webpack打包的入口js文件
    output: { // 出口js文件的配置
        path: path.join(__dirname, './dist'), 
        filename: 'bundle.js'
    },
    devServer: { //配置webpack-dev-server插件，该插件可以启动一个服务来热加载一些修改
        contentBase: './src',
        open: true,
        hot: true
    },
    plugins: [ //应用插件
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: { // 配置loader
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(jpg|gif|bmp|jpeg|png)$/,
            use: 'url-loader' //url-loader处理图片路径，内置了一个file-loader不必显示配置
        }, {
            test: /\.(ttf|woff2|woff|eot|svg)$/,
            use: 'url-loader' //同样使用url-loader处理字体文件
        }, {
            // babel在配置的过程中不仅需要npm安装babel以及其loader还要安装其转换语法的规则，也就是preset的包
            // 不同的语法还需要不同的插件来处理，所以需要安装相应的plugins
            test: /\.js$/, //配置正则处理的匹配文件
            use: 'babel-loader', //设置使用的loader
            exclude: /node_modules/ //设置不处理的内容的正则
        }]
    },
    resolve:{ // 这里用来设置js文件中导入vue时对应的js文件
        alias:{
            'vue$':'vue/dist/vue.js'
        }
    }
}