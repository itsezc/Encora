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
        externals: {
            cesium: "Cesium"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    // exclude: /node_modules/,
                    // include: [
                    //     path.resolve(__dirname, 'source'),
                    //     path.resolve(__dirname, 'node_modules/cesium-react')
                    // ],
                    use: [
                        'babel-loader',
                    ]
                },
                {
                    test: /\.(js|mjs|jsx)$/,
                    loader: 'string-replace-loader',
                    options: {
                        search: '#!/usr/bin/env node',
                        replace: '',
                    }
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
    dangerouslyUpdateWebpackConfig(webpackConfig, env) { 
       
        const newPlugins = [
            new CopyWebpackPlugin([
                {
                    from: 'node_modules/cesium/Build/CesiumUnminified/Cesium.js',
                    to: 'cesium',
                },
            ]),
            new webpack.DefinePlugin({
                CESIUM_BASE_URL: JSON.stringify('/cesium'),
            }),
        ]

        webpackConfig.plugins = webpackConfig.plugins.concat(newPlugins)

        return webpackConfig

    }
}