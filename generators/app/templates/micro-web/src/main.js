import Vue from 'vue';
import App from './App.vue';
import yilib from 'yilib';
import singleSpaVue from 'single-spa-vue';
import router from './route/router';

//需要自定义配置
Vue.use(yilib, {
	env: 'prod',
	baseUrl: 'https://api.erp.yiautos.com/zuul/',
	client: 'demo',
	email: 'lih@itsmycar.com'
});

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
	Vue,
	appOptions: {
		el: '#micro_container', //需要自定义配置
		render: h => h(App),
    router
	}
});


export const bootstrap = vueLifecycles.bootstrap;

export const mount = props => {
  return Promise.resolve().then(() => {
    const parentContainer = document.getElementById('erp_content_container');
    const mountContainer = document.createElement('div');
    mountContainer.id = 'micro_container';
    parentContainer.appendChild(mountContainer);
    props.rootComponent = mountContainer;
    vueLifecycles.mount(props);
  });
};

export const unmount = props => {
  return Promise.resolve().then(() => {
    const mountContainer = document.getElementById('micro_container');
    mountContainer.parentNode.removeChild(mountContainer);
    vueLifecycles.unmount(props);
  });
};
