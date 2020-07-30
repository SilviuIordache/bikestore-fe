<template lang="pug">
  div.home
    hello-world(msg="The coolest bike shop")
    card-item-list(:items="products")
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue';
import CardItemList from '../components/CardItemList.vue';
import products from '../assets/products.json';

export default {
  name: 'Home',
  components: {
    'hello-world': HelloWorld,
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
