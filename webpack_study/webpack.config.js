const path = require('path')
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
    }
}