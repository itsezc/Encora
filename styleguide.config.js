module.exports = {
    components: 'source/components/**/*.jsx',
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
                        'babel-loader'
                    ]
                },
                {
                    test: /\.styl$/,
                    use: [
                        'style-loader',
                        'css-loader?-url!postcss-loader',
                        'stylus-loader'
                    ]
                },
                {
                    test: /\.(pug|page)$/,
                    use: [
                        'pug-loader'
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        'url-loader?limit=100000'
                    ]
                }
            ]
        }
    }
}