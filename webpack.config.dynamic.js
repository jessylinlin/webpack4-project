const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpack = require('optimize-css-assets-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/dynamic/index.js',
    output: {
        filename: '[name]-[contenthash:8]-bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
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
                    "style-loader", //CSS通过style 注入页面
                    // MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    //插件
    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            title: 'dynamic entry',
            template: './src/index.html',
            filename: 'index.html',
        }),

        //CSS按需加载
        // new MiniCssExtractPlugin(),

        //CSS压缩
        new OptimizeCssAssetsWebpack()
    ]
}