const webpack = require('webpack')

module.exports = {
    mode: 'none',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js'
    },
    //集中配置webpack内部优化功能
    optimization: {
        usedExports: true,
        // minimize: true,
        //合并模块
        concatenateModules: true
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
        }]
    },
    //插件
    plugins: [

        new webpack.DefinePlugin({
            API_BASE_URL: JSON.stringify('https://api/eaxample.com')
        })
    ]
}