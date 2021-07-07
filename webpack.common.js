const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    //工作模式：
    mode: 'development',
    //入口文件
    entry: './src/main.js',
    //输出
    output: {
        filename: 'js/bundle.js'
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
        })
    ]

}