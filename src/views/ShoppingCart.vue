<template lang="pug">
  .container#shopping-cart-container.mt-2
    .row
      .col-12
        h3.my-4.
          Your Shopping Cart
    .row(v-if="!productsPresent")
      .col-12.empty-cart.pb-3.
        You have no items in your cart
    .row.d-flex.justify-content-center.pb-3(v-else)
      .col-12.col-xl-9
        .shopping-cart
          CartItem.mb-2(v-for="(item, index) in items" :item="item")
      .col-12.col-xl-3
        .checkout-container.p-2
          .total-amount
            .font-weight-bold.mb-4 TOTAL
            .total-price.d-flex.justify-content-between
              span Total
              span ${{ totalPrice }}
            .shipping-price-container.d-flex.justify-content-between
              span Shipping
              span ${{shippingCost}}
            .subtotal-container.d-flex.justify-content-between.mt-3.pt-1
              span Subtotal
              span ${{ totalPrice + shippingCost}}
          .checkout-button-container.text-right.mt-4
            button.btn.btn-primary(type="button") Checkout
</template>

<script>
import CartItem from '../components/CartItem.vue';
import cart from '../util/cart.js';
export default {
  name: 'ShoppingCart',
  components: {
    'CartItem': CartItem
  },
  data() {
    return {
      items: [],
      shippingCost: 100
    }
  },
  mounted(){
    this.getItems();

    this.$on('CartItem:itemUpdated', () => {
      this.getItems();
    })
  },
  methods: {
    getItems() {
      this.items = cart.getItems();
    },
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (let item of this.items) {
        total += item.price * item.amount;
      }
      return total;
    },
    productsPresent() {
      if (this.items) {
        if (this.items.length > 0) {
          return true;
        }
      }
      return false;
    }
  }
};
</script>

<style scoped lang="stylus">
  #shopping-cart-container
    border-radius 0.25rem
    background-color #ebf6fc
    .title
      font-size 1.5rem
    
    .checkout-container
      border-radius 0.25rem
      background-color white

      .subtotal-container
        border-top 1px solid black
</style>