import Vue from 'vue';
import VueRouter from 'vue-router';

import Gallery from '../views/Gallery.vue';
import About from '../views/About.vue';
import AddProduct from '../views/AddProduct.vue';
import AddSuccess from '../views/AddSuccess.vue';
import ItemDetailed from '../views/ItemDetailed.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Gallery',
      component: Gallery
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
    },
    {
      path: '/products/:id',
      name: 'ItemDetailed',
      component: ItemDetailed
    }
  ]
})

export default router;