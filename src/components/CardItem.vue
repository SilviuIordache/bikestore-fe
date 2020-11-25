<template lang="pug">
  .col-12.col-sm-6.col-md-4.d-flex.py-2.px-1
    .card-item.d-flex.flex-column.justify-content-between.p-3(@click="goToDetailedView()")
      .bike-name
        h1.mb-0 {{ brand }}
        p {{ model }}
      
      .bike-image
        img(:src='imagePath' width='100%')

      .bike-price-details
        p.stock-container.mb-5.text-center.text-muted.mt-2
          span(v-if="stock > 0 && stock < 5") {{ stock }} items left
          span(v-if="stock==0") Out of stock

        .price-part.d-flex.justify-content-between.align-items-center
          h5.d-inline.mb-0.
            {{price}} $
          .add-to-cart-button
            i.fas.fa-cart-plus.mr-2
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
