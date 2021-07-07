const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


//devtool几种方式
const devtools = [
    'eval'
    // 'eval-cheap-source-map',
    // 'eval-cheap-module-source-map',
    // 'eval-source-map',
    // 'cheap-source-map',
    // 'cheap-module-source-map',
    // 'inline-cheap-source-map',
    // 'inline-cheap-module-source-map',
    // 'source-map',
    // 'inline-sourc-map',
    // 'hidden-source-map',
    // 'nosources-source-map'
]

module.exports = {
    //工作模式：
    mode: 'none',
    //入口文件
    entry: './src/main.js',
    //输出
    // output: {
    //     filename: `js/${item}.js`
    // },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'), //必须为绝对路径
        //打包文件path
        // publicPath: 'dist/'
    },
    //source-map mode
    devtool: 'cheap-module-source-map',
    //开发服务器
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        //服务器api代理
        // proxy: {

        // },
        //HMR 热更新
        hot: true
    },
    module: {
        rules: [{
                test: /.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.jpg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024 //10kb ,超过10kb会被打包成image单独文件
                    }
                }
            },
        ]
    },
    plugins: [
        //清除输出目录
        // new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'webpack plugin',
            filename: 'index.html'
        }),

        // new HtmlWebpackPlugin({
        //     template: './index.html',
        //     filename: `${item}.html`
        // }),

        //webpack内置插件--热更新
        new webpack.HotModuleReplacementPlugin()
    ]
}