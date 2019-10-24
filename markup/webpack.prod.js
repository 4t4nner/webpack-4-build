const path = require('path')
const webpack = require('webpack')
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const CopyWebpackPlugin = require('copy-webpack-plugin')

const buildPath = path.resolve(__dirname, 'build')

module.exports = {
	devtool: 'none', // source-map
	entry: './src/index.js',
	output: {
		filename: '[name].[hash:20].js',
		path: buildPath
	},
	node: {
		fs: 'empty'
	},
	module: {

		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['@babel/preset-env'],
					// sourceMaps: false,
				}
			},
			{
				test: /\.(scss|css|sass)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						// translates CSS into CommonJS
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						// Runs compiled CSS through postcss for vendor prefixing
						loader: 'postcss-loader',
						options: {
							sourceMap: true
						}
					},
					{
						// compiles Sass to CSS
						loader: 'sass-loader',
						options: {
							sassOptions: {
								outputStyle: 'expanded',
								sourceMap: true,
								sourceMapContents: true
							}
						}
					}
				]
			},
			{
				// Load all images as base64 encoding if they are smaller than 8192 bytes
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: 'assets/img/[name].[hash:20].[ext]',
							limit: 8192
						}
					}
				]
			},
			{
				// Load all icons
				test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/fonts/[name].[hash:20].[ext]',
						}
					}
				]
			},
			{
				test: /\.(html)$/,
				include: path.join(__dirname, 'src/html'),
				use: {
					loader: 'html-loader',
					options: {
						interpolate: true
					}
				}
			},
		]
	},
	plugins: [
		// new webpack.ProvidePlugin(
		// 	{
		// 		$: 'jquery',
		// 		jQuery: 'jquery',
		// 		'window.jQuery': 'jquery',
		// 		'global.jQuery': 'jquery',
		// 		'global.$': 'jquery',
		// 	},
		// ),
		new HtmlWebpackPlugin({
			template: './src/html/index.html',
			// Inject the js bundle at the end of the body of the given template
			inject: 'body',
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'styles.[contenthash].css'
		}),
		new OptimizeCssAssetsPlugin({
			cssProcessor: require('cssnano'),
			cssProcessorOptions: {
				map: {
					inline: false,
				},
				discardComments: {
					removeAll: true
				},
				discardUnused: false
			},
			canPrint: true
		}),
		new CopyWebpackPlugin([
			{
				from: './src/images/**/**',
				to: path.resolve(buildPath, 'assets/img/[name].[ext]')
			},
		]),
		new ImageminPlugin(),
	]
}
