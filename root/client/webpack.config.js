const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isExistApiUrl = typeof process.env.API_URL === 'undefined' || process.env.API_URL === '';
const localApiUrl = 'localhost:5000';
const API_URL = isExistApiUrl ? localApiUrl : process.env.API_URL;

module.exports = {
	mode: 'development',
	entry: {
		app: ['babel-polyfill', './src/js/index.js']
	},
	devtool: 'inline-source-map',
	devServer: {
		publicPath: '/',
		historyApiFallback: true,
		contentBase: path.join(__dirname, 'src'),
		proxy: [{
			logLevel: 'debug',
			context: ['/api'],
			target: {
				host: API_URL,
				protocol: 'http:',
			},
			changeOrigin: true,
			secure: false
		}]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'Weather Flying App'
		})
	],
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		moduleIds: 'hashed',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
};