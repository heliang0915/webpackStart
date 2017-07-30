var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		app: path.join(__dirname, 'src/app.js')
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name][hash].js',
		chunkFilename: '[chunkhash].js'
	},
	module: {
		rules: [{
			test: /\.js$|\.jsx$/,
			loader: "babel-loader",
			exclude: [
				path.join(__dirname, 'node_modules')
			]
		}]
	},
	devtool: "source-map",
	// externals:{
	//     'react': 'React',
	//     'react-dom': 'ReactDOM',
	//     'redux':'Redux',
	//     'react-redux':'ReactRedux',
	//     'react-router':'ReactRouter'
	// },
	plugins: [
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require('./vendor-manifest.json')
		}),
		// new webpack.DefinePlugin({
		//    'process.env': {
		//     NODE_ENV: JSON.stringify('development')
		//    }
		// }),
		new HtmlWebpackPlugin({
			title: "AAAA",
			template: path.join(__dirname, 'template/index.ejs')
		}),
		// new webpack.optimize.UglifyJsPlugin({
		//     output: {
		//         comments: false,
		//     },
		//     compress: {
		//         warnings: false
		//     }
		// })
	]
}