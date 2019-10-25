/*
 * 本地运行时的入口文件
 * */
import './style/init.css';
import Vue from 'vue';
import App from './App.vue';
import yilib from 'yilib';
import router from './route/router';

Vue.use(yilib, {
	env: 'prod',
	baseUrl: 'https://api.erp.yiautos.com/zuul/',
	client: 'demo',
	email: 'lih@itsmycar.com'
});

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
  router
}).$mount('#app');
