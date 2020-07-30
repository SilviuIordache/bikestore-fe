<template lang="pug">
  .navbar.d-flex.justify-content-between.py-3
    .logo
      i.fas.fa-bicycle.mr-2
      | BIKESHOP
    ul.mb-0
      li
        router-link(to="/") Home
      li
        router-link(to="/about") About
      li Offers
      li Brands
    .shopping-cart
      i.fas.fa-shopping-cart.mr-2
      | CART
</template>

<script>
export default {
  name: 'Navbar',
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
