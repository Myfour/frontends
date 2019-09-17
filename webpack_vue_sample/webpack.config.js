var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: 'build.js'
    },
    devServer: {
        historyApiFallback: true,
        overlay: true
    },
    resolve: { //resolve用来解析js文件中import一个对象时这个对象的路径，当import ... from vue 就是 from vue/dis/vue.esm
        alias: {
            'vue$': 'vue/dist/vue.esm'
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
        }, {
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.sass$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader?indentedSyntax'
            ]
        }]
    }
}