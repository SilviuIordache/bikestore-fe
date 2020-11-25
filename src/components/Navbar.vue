<template lang="pug">
  .navbar.d-flex.justify-content-between.py-3
    router-link(to="/")
      i.fas.fa-bicycle.mr-2
      | BIKESHOP
    ul.mb-0
      li
        router-link(to="/addProduct") + Add Bike
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
