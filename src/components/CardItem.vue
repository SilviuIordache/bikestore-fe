<template lang="pug">
  .card-item.d-flex.flex-column.justify-content-between.p-3(@click="goToDetailedView()")
    .bike-name
      h1.mb-0 {{ brand }}
      p {{ model }}
    
    .bike-image.px-3
      img(:src='imagePath' width='100%')

    .bike-price-details
      p.stock-container.mb-5.text-center.text-muted.mt-2
        span(v-if="stock > 0 && stock < 5") {{ stock }} items left
        span(v-if="stock==0") Out of stock

      .price-part.d-flex.justify-content-between.align-items-center
        h5.d-inline.mb-0.
          {{price}} $
        .add-to-cart-button(@click.stop="addToCart()")
          i.fas.fa-cart-plus.mr-2
          | Add
</template>

<script>
import { EventBus } from '../util/EventBus.js';
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
    imageName: {
      type: String,
      default: '',
      required: true
    }
  },
  computed: {
    imagePath() {
      const path = 'http://localhost:3000/static/' + this.imageName;
      return path;
    }
  },
  methods: {
    goToDetailedView() {
      this.$router.push({ path: `/products/${this.id}`, params: { id: this.id } })
    },
    addToCart() {
      let object = {
        id: this.id,
        brand: this.brand,
        model: this.model,
        price: this.price,
        amount: 0
      }
      EventBus.$emit('productAddedToCart', object)

      let cartItems = JSON.parse(localStorage.getItem('cart-items'));
      if (cartItems) {
        let itemInCart = false;
        for (let i = 0; i < cartItems.length; i++) {
          if (cartItems[i].id === object.id) {
            itemInCart = true;
            cartItems[i].amount++;
          }
        }
        if (!itemInCart) {
          cartItems.push(object)
        }
      } else {
        cartItems = [];
        cartItems.push(object)
      }
      localStorage.setItem('cart-items', JSON.stringify(cartItems));
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
    padding 0.5rem 0.8rem
    border-radius 0.3rem
    background-color lightgray
    transition all .2s ease-in-out
    &:hover
      transform scale(1.04)
      background-color #49b5fc

</style>
