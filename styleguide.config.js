const path = require('path')

const webpack = require("webpack")

const CopyWebpackPlugin = require("copy-webpack-plugin")

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')

module.exports = {
    components: 'source/components/**/*.jsx',
    require: [
        'remixicon/fonts/remixicon.css',
        path.join(__dirname, 'source/styles/fonts.styl'),
        'cesium/Build/Cesium/Widgets/widgets.css',
        'cesium/Build/Cesium/Cesium.js'

    ],
    webpackConfig: {
        devServer: {
            clientLogLevel: 'warn'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader',
                    ]
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.styl$/,
                    use: ['style-loader', 'css-loader', 'stylus-loader']
                },
                {
                    test: /\.(pug|page)$/,
                    use: [
                        'pug-loader'
                    ]
                },
                {
                    test: /\.(png|gif|jpg|jpeg|svg|xml|json|ttf|woff|woff2|eot|otf)$/,
                    use: [
                        'url-loader?limit=100000'
                    ]
                }
            ]
        },
        output: {
            // Needed to compile multiline strings in Cesium
            sourcePrefix: ''
        },
        amd: {
            // Enable webpack-friendly use of require in Cesium
            toUrlUndefined: true
        },
        node: {
            // Resolve node module use of fs
            fs: 'empty'
        }
    },
}