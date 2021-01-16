import Vue from 'vue';
import VueRouter from 'vue-router';
import router from '@/router.js';
import App from '@/App.vue';

export const EventBus = new Vue();

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	router,
}).$mount('#app');
