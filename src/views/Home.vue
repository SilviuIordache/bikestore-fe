<template lang="pug">
  .container
    shop-intro(msg="The coolest bike shop")
    card-item-list(:items="products")
</template>

<script>
import ShopIntro from '../components/ShopIntro.vue';
import CardItemList from '../components/CardItemList.vue';
import products from '../assets/products.json';

export default {
  name: 'Home',
  components: {
    'shop-intro': ShopIntro,
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
