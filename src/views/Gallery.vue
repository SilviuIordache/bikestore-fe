<template lang="pug">
  .container
    .gallery-banner.py-3
      h1 Welcome to the Bike Store
      p Browse, find and buy your ideal bike
    card-item-list(:items="products")
</template>

<script>

import CardItemList from '../components/CardItemList.vue';
import products from '../assets/products.json';

export default {
  name: 'Gallery',
  components: {
    'card-item-list': CardItemList,
  },
  data() {
    return {
      products,
    };
  },
  mounted() {
    this.products = products.products;
  },
};
</script>

