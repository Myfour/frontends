const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src',
        open: true,
        hot: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
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
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    }
}