path = require('path')
module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				pathRewrite: {
					'^/api': '/mock'
				}
			},
			'/sight': {
				target: 'https://route.showapi.com/268-1',
				changeOrigin: true,             //是否跨域
			}
		}
		// proxy: 'https://route.showapi.com/268-1'
	},
	chainWebpack: (config) => {
		config.resolve.alias
		.set('styles', path.join(__dirname, './src/assets/styles/'))
		.set('@', path.join(__dirname, './src/'))
		.set('common', path.join(__dirname, './src/common/'))
	}
}