<template lang="pug">
  .cart-item.container
    .row.p-2
      .col-12.col-md-2.image-container.d-flex.align-items-center
        img(:src='item.imageUrl' width='100%')
      .col-12.col-md-4.info-container.d-flex.justify-content-between.align-items-center
        .name
          h4 {{ item.brand }}
          p {{ item.model }}
      .col-12.col-md-2.d-flex.align-items-center
        .amount-container
          label.mr-2 Qty
          select(name="amount" @change="updateCart(amount)" v-model="amount")
            option(v-for="val in values" :selected="selectedState(val, item.amount)").
              {{ val }}
      .col-12.col-md-4.d-flex.align-items-center.justify-content-end
        .right-container.text-right
          p.price-container.text-right.mb-1 ${{ item.price * item.amount}}
          p.small(v-if="item.amount > 1") {{ item.amount }} x ${{item.price}}
          .actions-container.d-flex
            .cart-button.mr-3 Favorite
            .cart-button(@click="removeItem(item._id)") Remove
    
</template>

<script>
import cart from '../util/cart.js';
export default {
  props: ['item'],
  data() {
    return {
      amount: this.item.amount,
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    updateCart(value) {
      cart.updateItem(this.item.id, parseInt(value,10));
      this.$ebus.$emit('cartItemsUpdated');
      this.item.amount = value;
    },
    selectedState(val, amount) {
      if (val === amount)
        return true
      else
        return false
    },
    removeItem(id) {
      cart.removeItem(id);
      this.$ebus.$emit('cartItemsUpdated');
      this.$parent.$emit('CartItem:itemUpdated')
    },
  },
}
</script>

<style scoped lang="stylus">
  .cart-item
    background-color white
    box-shadow 1px 1px 2px #BBC6CC
    border-radius 0.25rem
  
    .image-container
      min-height 8rem

    .cart-button
      font-size 0.8rem
      cursor pointer
      color #0083c9
      opacity 0.7
      &:hover
        color #0083c9
        opacity 1
    
    .price-container
      font-size 1.2rem
</style>