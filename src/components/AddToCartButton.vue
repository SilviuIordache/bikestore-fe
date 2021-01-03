<template lang="pug">
  button.add-to-cart-button(@click.stop="addToCart()" :class="{'button-disabled': item.stock === 0 }")
    i.fas.fa-cart-plus.mr-2
    span(v-if="item.stock > 0") Add
    span(v-else) Out of Stock
</template>

<script>
import cart from '../util/cart.js';

export default {
  name: 'AddToCartButton',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      let cartObject = this.item;
      cartObject.amount = 1;
      cart.addItem(cartObject);
      this.$ebus.$emit('cartItemsUpdated');
    }
  }
};
</script>

<style lang="stylus" scoped>
  .add-to-cart-button
    border none
    padding 0.5rem 0.8rem
    border-radius 0.3rem
    background-color rgb(128, 210, 255)
    box-shadow 0rem 0.2rem 0.7rem rgba(128, 210, 255, 0.4);
    transition all .2s ease-in-out
    &:hover
      transform scale(1.04)

  .button-disabled
    background-color rgb(217,217,217)
    opacity 0.5
    pointer-events none
</style>