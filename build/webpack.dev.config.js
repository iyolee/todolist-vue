const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

const config = merge(base, {
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(
				process.env.NODE_ENV || 'development'
			)
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HTMLPlugin()
	]
})

// 配置source-map类型
config.devtool = 'source-map'

config.devServer = {
	// 启用gzip压缩
	compress: true,
	// 配置devServer服务器文件根目录
	contentBase: path.join(__dirname, 'src'),
	host: '0.0.0.0',
	// 运行端口8000
	port: 8000,
	// 通过代理客户端控制网页刷新
	inline: true,
	//开启模块热替换功能
	hot: true,
	// 开发HTML5 History API网页
	historyApiFallback: true,
	// 启用https
	// https: true,
	// 监听模式选项
	watchOptions: {
		// 不监听的文件或文件夹
		ignored: /node_modules/,
		// 监听到变化后等300ms再执行
		// aggregateTimeout: 300,
		// 每秒询问1000次指定的文件有没有变化
		poll: 1000
	}
}

module.exports = config
