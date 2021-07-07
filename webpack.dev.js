//导入公共对象
const common = require('./webpack.common')
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = merge(common, {
    mode: 'development',
    //source-map mode
    devtool: 'source-map',
    //开发服务器
    devServer: {
        //contentBase: path.join(__dirname, 'public'),
        //服务器api代理
        // proxy: {

        // },
        //HMR 热更新
        hot: true
        // hotOnly: true
    },
    //数组中需要合并 而不是替换
    plugins: [
        //webpack内置插件--热更新
        new webpack.HotModuleReplacementPlugin()
    ]
})