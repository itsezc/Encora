import Webpack from 'webpack'
import Path from 'path'
import IO from 'fs'

import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = (env, argv) => {
  return {
    target: 'web',

    context: Path.resolve(__dirname, 'source'),

    plugins: [
		new HtmlWebpackPlugin({
		filename: 'index.html',
		template: './structure.page'
		})
    ],

    entry: {
		web: './index.js',
		core: './scripts/core.js'
    },

    devServer: {
		contentBase: Path.resolve(__dirname, 'source'),
		compress: true,
		historyApiFallback: true,
		port: 8080
    },

    output: {
      path: Path.join(__dirname, './dist'),
      filename: '[name].min.js'
    },

    devtool: 'source-map',

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