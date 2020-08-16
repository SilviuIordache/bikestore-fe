import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import AddProduct from '../views/AddProduct.vue';
import AddSuccess from '../views/AddSuccess.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/addProduct',
      name: 'AddProduct',
      component: AddProduct
    },
    {
      path: '/addSuccess',
      name: 'AddSuccess',
      component: AddSuccess
    }
  ]
})

export default router;