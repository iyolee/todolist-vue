const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const config = {
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					compilerOptions: {
						preserveWhitespace: false
					}
				}
			},
			{
				test: /\.js[x]?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	devtool: 'inline-source-map',
	plugins: [new VueLoaderPlugin()],
}

module.exports = config
