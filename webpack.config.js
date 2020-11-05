const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: ['./client/index.js'],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(scss|css)$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		port: 8080,
		open: true,
		hot: true,
		publicPath: '/dist/',
		proxy: [
			{ '/' : 'http://localhost:3000' // added in to not have to type out entire url. just end routes 
		}, 
			{
				context: ['/auth/google'],
				target: 'http://localhost:3000',
			},
		],
		historyApiFallback: true
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
}