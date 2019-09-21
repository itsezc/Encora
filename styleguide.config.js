const path = require('path')

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
        }
    },
    require: [
        'remixicon/fonts/remixicon.css',
        path.join(__dirname, 'source/styles/fonts.styl')
    ]
}