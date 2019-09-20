module.exports = {
    components: 'source/components/**/*.jsx',
    require: [
        'remixicon/fonts/remixicon.css'
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
                        'babel-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
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