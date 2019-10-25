import 'babel-polyfill';
import 'normalize.css/normalize.css';
import './style/init.css';
import 'amfe-flexible';
import Vue from 'vue';
import App from './App.vue';
import router from './route/router';
import YiWapLib from 'yiwaplib';
import 'yiwaplib/lib/yiwaplib.css';

Vue.use(YilibWap, {
  env: 'prod',
  baseUrl: 'http://testzuul.erp2.itsmycar.cn:7775/zuul/',
  oauthUrl: 'http://testoauth.erp2.itsmycar.cn:7775/',
  client: 'demo',
  email: 'lih@itsmycar.com',
});
Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
