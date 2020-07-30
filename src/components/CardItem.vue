<template lang="pug">
  .card-item.col-12.col-sm-6.col-md-3.m-3.py-3
    h1 {{ brand }} : {{ model }}
    img(src='../assets/bike.png' width='200px')
    p.mb-5 Stock: {{ stock }}
    .price-part.d-flex.justify-content-between.align-items-center
      h5.d-inline.mb-0.
        {{price}} $
      span
        i.fas.fa-cart-plus
        | Add
</template>

<script>
export default {
  name: 'ShopItemCard',
  props: {
    brand: {
      type: String,
      default: 'brand',
      required: true,
    },
    model: {
      type: String,
      default: 'model',
      required: true,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
      required: true,
    },
  },
};
</script>

<style scoped lang="stylus">
  .card-item
    background-color #fafafa
  img
    background-color transparent
</style>
