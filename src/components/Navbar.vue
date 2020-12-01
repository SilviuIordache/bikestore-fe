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
        | CART
        span.
</template>

<script>
import { EventBus } from '../util/EventBus';
export default {
  name: 'Navbar',
  mounted() {
    EventBus.$on('productAddedToCart', (object) => {
      console.log(object.model);
    })
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
