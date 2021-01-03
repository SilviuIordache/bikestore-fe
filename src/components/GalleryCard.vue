<template lang="pug">
  .card-item.d-flex.flex-column.justify-content-between.p-3(@click="goToDetailedView()")
    .bike-name
      h1.mb-0 {{ item.brand }}
      p {{ item.model }}
    
    .bike-image.px-3
      img(:src='item.imageUrl' width='100%')

    .bike-price-details
      p.stock-container.mb-5.text-center.text-muted.mt-2
        span(v-if="item.stock > 3") In Stock
        span(v-if="item.stock >= 2 && item.stock <= 3") {{ item.stock }} items left
        span(v-if="item.stock==0") Out of stock

      .price-part.d-flex.justify-content-between.align-items-center
        h5.d-inline.mb-0.
          {{ item.price }} $
        AddToCartButton(:item="item")
</template>

<script>
import AddToCartButton from '../components/AddToCartButton.vue';

export default {
  name: 'GalleryCard',
  components: {
    'AddToCartButton': AddToCartButton
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToDetailedView() {
      this.$router.push({ path: `/products/${this.item._id}`})
    },
  },
};
</script>

<style lang="stylus" scoped>
  .card-item
    background-color white
    cursor pointer
    border-radius 0.3rem
    transition all .2s ease-in-out
    &:hover
      box-shadow 2px 9px 28px -8px rgba(0,0,0,0.75);

  img
    background-color transparent
</style>
