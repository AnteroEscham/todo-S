const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'app');
const dirAssets = path.join(__dirname, 'assets');

const appHtmlTitle = 'Filter Friends';

/**
 * Webpack Configuration
 */
module.exports = {
	entry: {
		// vendor: [
		//     'lodash'
		// ],
		bundle: path.join(dirApp, 'index')
	},
	resolve: {
		modules: [
			dirNode,
			dirApp,
			dirAssets
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			IS_DEV: IS_DEV
		}),

		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'index.html'),
			title: appHtmlTitle
		}),

		new webpack.ProvidePlugin({
			// $: 'jquery',
			// jQuery: 'jquery'
		})
	],
	module: {
		rules: [
			// BABEL
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [
					'eslint-loader',
					{
						loader: 'babel-loader',
						options: {
							compact: true
						}
					}
				]
                
			},

			// STYLES
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: IS_DEV
						}
					},
				]
			},

			// CSS / SASS
			{
				test: /\.scss/,
				use: [
					'style-loader',

                    
					{
						loader: 'css-loader',
						options: {
							sourceMap: IS_DEV
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								autoprefixer({
									browsers:['ie >= 11', 'last 2 version']
								})
							],
							sourceMap: true
						}
					},

					{
						loader: 'sass-loader',
						options: {
							sourceMap: IS_DEV,
							includePaths: [dirAssets]
						}
					}

				]
			},

			// IMAGES
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]'
				}
			}
		]
	}
};
