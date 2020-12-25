<template lang="pug">
  .card-item.d-flex.flex-column.justify-content-between.p-3(@click="goToDetailedView()")
    .bike-name
      h1.mb-0 {{ brand }}
      p {{ model }}
    
    .bike-image.px-3
      img(:src='imageUrl' width='100%')

    .bike-price-details
      p.stock-container.mb-5.text-center.text-muted.mt-2
        span(v-if="stock > 0 && stock < 5") {{ stock }} items left
        span(v-if="stock==0") Out of stock

      .price-part.d-flex.justify-content-between.align-items-center
        h5.d-inline.mb-0.
          {{price}} $
        button.add-to-cart-button(@click.stop="addToCart()" :class="{'button-disabled': stock === 0 }")
          i.fas.fa-cart-plus.mr-2
          | Add
</template>

<script>
import { EventBus } from '../util/EventBus.js';
import cart from '../util/cart.js';

export default {
  name: 'CardItem',
  props: {
    id: {
      type: String,
      default: 'no_ID',
      required: true,
    },
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
    imageUrl: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    goToDetailedView() {
      this.$router.push({ path: `/products/${this.id}`, params: { id: this.id } })
    },
    addToCart() {
      const newItem = {
        id: this.id,
        brand: this.brand,
        model: this.model,
        price: this.price,
        imageUrl: this.imageUrl,
        amount: 1
      }
      cart.addItem(newItem)
    }
  }
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
