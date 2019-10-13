const path = require('path')
// 导入插件
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: { //此配置配置了webpack-dev-server的一些东西，配置此项以后只要启动webpack-dev-server均使用此配置
        // npm的命令中的配置也会无效
        open: true,
        port: 3000,
        contentBase: 'src',
        hot: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), // 指定的模板路径
            filename: 'index.html'
        })
    ],
    module: { // 用于配置所有的loader
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'] // 这里使用loader的顺序是从后往前顺序执行，
            // 最后才给webpack，最后输出到bundle.js
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
}