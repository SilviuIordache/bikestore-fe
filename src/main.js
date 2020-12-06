import '@babel/polyfill';
import Vue from 'vue';
import axios from 'axios';

import App from './App.vue';
import router from './router/index.js'
import { config } from '../config.js';


Vue.prototype.$http = axios;
Vue.prototype.$config = config;
Vue.config.devtools = true;

let app = null;

config.get().finally(() => {
  app = new Vue({
    el: '#app',
    router: router,
    render: (h) => h(App)
  });
})

export default app;