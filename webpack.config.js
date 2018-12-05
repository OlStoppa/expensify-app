const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CSSExtract = new ExtractTextPlugin('styles.css');

console.log(module.exports.mode);

module.exports = (env) => {
	const isProduction = env === 'production';
 return {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	mode: isProduction ? 'production' : 'developement',
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}, {
			test: /\.s?css$/,
			use: CSSExtract.extract({
				use: [
				{
					loader: 'css-loader',
					options: {
						sourceMap: true
					}
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: true
					}
				}
				]
			})
		}]
	},
	plugins: [
		CSSExtract
	],
	devtool: isProduction ? 'source-map' : 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true
	}

};
}


