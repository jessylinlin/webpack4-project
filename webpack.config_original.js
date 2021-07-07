const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


//sourcemap 几种方式
// const devtools = [
//     'eval',
//     'eval-cheap-source-map',
//     'eval-cheap-module-source-map',
//     'eval-source-map',
//     'cheap-source-map',
//     'cheap-module-source-map',
//     'inline-cheap-source-map',
//     'inline-cheap-module-source-map',
//     'source-map',
//     'inline-sourc-map',
//     'hidden-source-map',
//     'nosources-source-map'
// ]

module.exports = {
    //工作模式：
    mode: 'development',
    //入口文件
    entry: './src/main.js',
    //输出
    output: {
        filename: 'js/bundle.js'
    },
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
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.(jpe?g|png|gif)$/,
            use: 'file-loader'
        },
        ]
    },
    plugins: [
        //清除输出目录
        // new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'webpack plugin'
        }),

        //webpack内置插件--热更新
        new webpack.HotModuleReplacementPlugin()
    ]
}