const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/chunks/index.js',
        album: './src/chunks/album.js'
    },
    output: {
        filename: '[name].bundle.js'
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
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            title: 'multi entry',
            template: './src/chunks/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            title: 'multi entry',
            template: './src/chunks/album.html',
            filename: 'album.html',
            chunks: ['album']
        })
    ]
}