const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
// cnpm i -D css-loader style-loader
// cnpm i -D sass-loader node-sass
// Cnpm i -D extract-text-webpack-plugin@next(插件-分离器)



module.exports = {
    mode: 'development',

    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },

    plugins: [
        new htmlWebpackPlugin({
            title: 'Sass'
        }),
        new ExtractTextPlugin('style.css')
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // 在开发环境使用 style-loader
                fallback: "style-loader"
            })
        }]
    }

}
