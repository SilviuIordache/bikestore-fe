<template lang="pug">
  .navbar.d-flex.justify-content-between.py-4.px-5
    router-link(to="/")
      i.fas.fa-bicycle.mr-2
      | BIKESHOP
    ul.mb-0
      li
        router-link(to="/addProduct").
          + Add Bike
    .shopping-cart
      router-link(to="/cart")
        i.fas.fa-shopping-cart.mr-2
        span CART
        span(v-if="itemsNumber > 0") ({{ itemsNumber }})
</template>

<script>

import cart from '../util/cart.js';
export default {
  name: 'Navbar',
  data() {
    return {
      itemsNumber: 0
    }
  },
  methods: {
    refreshCartItems() {
      this.itemsNumber = cart.getItemsNumber();
    }
  },
  mounted() {
    this.$ebus.$on('cartItemsUpdated', () => {
      this.refreshCartItems();
    });

    this.refreshCartItems();
  }
};
</script>

<style scoped lang="stylus">
  .navbar
    background-color #f5f5f5
  ul
    list-style-type none
    padding 0
    li
      display inline-block
      margin 0 10px
</style>
