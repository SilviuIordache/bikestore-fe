import '@babel/polyfill';
import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './router/index.js'


Vue.prototype.$http = axios;
Vue.config.devtools = true;

const app = new Vue({
 el: '#app',
 router: router,
 render: (h) => h(App)
})

export default app;