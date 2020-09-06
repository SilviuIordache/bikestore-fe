<template lang="pug">
  .card-item.col-12.col-sm-6.col-md-3.m-3.py-3(@click="goToDetailedView()")
    h1 {{ brand }}
    p {{ model }}
    
    img(:src='imagePath' width='100%')

    p.stock-container.mb-5
      span(v-if="stock > 5") In stock
      span(v-else-if="stock > 0 && stock < 5") Only {{ stock }} left
      span(v-else) Out of stock

    .price-part.d-flex.justify-content-between.align-items-center
      h5.d-inline.mb-0.
        {{price}} $
      span
        i.fas.fa-cart-plus
        | Add
</template>

<script>
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
    }
  }
};
</script>

<style scoped lang="stylus">
  .card-item
    background-color white
  img
    background-color transparent
</style>
