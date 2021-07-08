const webpack = require('webpack')
const OptimizeCssAssetsWebpack = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'none',
    entry: './src/main.js',
    output: {
        filename: 'bundle[contenthash:8].js'
    },
    //集中配置webpack内部优化功能
    optimization: {
        // usedExports: true,
        // // minimize: true,
        // //合并模块
        // concatenateModules: true,
        //同类打包--只打包用到的module
        sideEffects: true,
        // minimize: true,
        minimizer: [
            //css压缩打开后,需要手动指定js压缩插件
            new OptimizeCssAssetsWebpack(),

            //js压缩
            new TerserWebpackPlugin()
        ]
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        //强制使用cjs，会导致tree-shaking失效
                        // presets: [
                        //     ["@babel/preset-env", { modules: commonjs }]
                        // ]
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    // MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    //插件
    plugins: [

        new webpack.DefinePlugin({
            API_BASE_URL: JSON.stringify('https://api/eaxample.com')
        }),

        //CSS按需加载
        // new MiniCssExtractPlugin()
    ]
}