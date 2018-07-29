const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const config = {
	mode: 'development',
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js'
	},
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
				test: /\.styl(us)?$/,
				loader: ['vue-style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
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
	plugins: [new VueLoaderPlugin()]
}

module.exports = config
