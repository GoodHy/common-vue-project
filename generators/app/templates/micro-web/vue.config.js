const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const IS_LIB = process.env.VUE_APP_MODE === 'production';

const APP_PUBLIC_PATH = process.argv[process.argv.length - 1].startsWith('--')
	? 'http://websitedn.yiautos.com/' +
	  process.argv[process.argv.length - 1].substring(2)
	: './';

console.log('APP_PUBLIC_PATH==>', APP_PUBLIC_PATH);

module.exports = {
	publicPath: APP_PUBLIC_PATH,
	chainWebpack: config => {
		if (IS_LIB) {
			config.externals({
				vue: 'vue',
				'vue-router': 'vue-router',
				yilib: 'yilib'
			});
      config.output.filename('js/app.[hash:8].js').end();
    }
		config.plugin('html').tap(args => {
			args[0].minify = false;
			return args;
		});
	},
  productionSourceMap: false
};
