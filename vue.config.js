const webpack = require('webpack')
const path = require('path')

module.exports = {
	publicPath: process.env.NODE_ENV == 'production' ?
		'/wp-content/themes/yooulife/dist/' : '/'
	,
	devServer: {
		proxy: {
			'/wp-json': {
				target: process.env.API_URL,
				secure: false,
				changeOrigin: true
			}
		}
	},
	css: process.env.NODE_ENV == 'production' ? {
		extract: {
			filename: '[name].bundle.css'
		},
		loaderOptions: {
			css: {
				url: false,
			},
			sass: {
				data: "@import '~@/stylesheets/core.scss';",
				includePaths: [
					require("bourbon-neat").includePaths,
				]
			}
		}
	} : {
		loaderOptions: {
			css: {
				url: false,
			},
			sass: {
				data: "@import '~@/stylesheets/core.scss';",
				includePaths: [
					require("bourbon-neat").includePaths,
				]
			}
		}
	},
	configureWebpack: {
		output: {
			filename: '[name].bundle.js',
			chunkFilename: '[name].js'
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					'API_URL': JSON.stringify(process.env.NODE_ENV == 'development' ?
						'http://localhost:8080' : process.env.API_URL
					),
					'PT_URL': JSON.stringify(process.env.PT_URL),
					'EN_URL': JSON.stringify(process.env.EN_URL)
				}
			})
		]
	},
	chainWebpack: (config) => {
		config.module
			.rule('storysource')
			.test(/\.stories\.js?$/)
			.post()
			.use('storysource')
			.loader(require.resolve('@storybook/addon-storysource/loader'))
	}
}
