const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

//支持导出一个函数，函数中返回需要的配置对象
//env 环境名
//argv 传递的所有参数 
module.exports = (env, argv) => {
    const config = {
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
            // new CleanWebpackPlugin(['public']),

            new HtmlWebpackPlugin({
                template: './src/index.html',
                title: 'webpack plugin'
            }),

            //webpack内置插件--热更新
            new webpack.HotModuleReplacementPlugin()
        ]
    }

    if (env === 'production') {
        config.mode = 'production'
        config.devtool = false //禁用sourcemap
        config.plugins = [
            ...config.plugins,
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin(['public'])
        ]
    }

    return config
}