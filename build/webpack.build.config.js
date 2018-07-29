const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = merge(base, {
  mode: 'production',
  entry: {
		app: path.resolve(__dirname, '../src/index.js'),
		vendor: ['vue']
	},
  output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].[chunkhash:8].js'
	},
	module: {
		rules: [
			{
				test: /\.styl(us)?$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						'postcss-loader',
						'stylus-loader'
					]
				})
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(
				process.env.NODE_ENV || 'development'
			)
		}),
    new HTMLPlugin(),
    new ExtractTextPlugin('styles.[chunkhash:8].css')
	]
})

module.exports = config
