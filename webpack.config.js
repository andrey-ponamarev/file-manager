const path = require('path');
const webpack = require('webpack');

var config = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, 'app/app.js')
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		},
			{ test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=10000&mimetype=application/font-woff' },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=10000&mimetype=application/octet-stream' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file' },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=10000&mimetype=image/svg+xml' }]
	},
	plugins:[
		new webpack.ProvidePlugin({
			_: 'underscore',
			Backbone: 'backbone',
			$: 'jquery',
			React: 'react',
			ReactDOM: 'react-dom'
		})
	]
};

module.exports = config;



