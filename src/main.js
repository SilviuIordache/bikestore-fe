import Vue from 'vue';
import axios from 'axios';
import '@babel/polyfill';

import App from './App.vue';
import router from './router/index.js'

Vue.prototype.$http = axios;

const app = new Vue({
 el: '#app',
 router: router,
 render: (h) => h(App)
})

export default app;