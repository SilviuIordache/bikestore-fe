<template lang="pug">
  .container
    .row.d-flex.justify-content-center
      .col-8
        .shopping-cart
          .title.my-4.
            Your Shopping Cart
          .empty-cart(v-if="!productsPresent").
            You have no items in your cart
          .non-empty-cart(v-else)
            table.table.table-striped
              thead
                tr
                  th(scope='col') #
                  th(scope='col') brand
                  th(scope='col') model
                  th(scope='col') amount
                  th(scope='col') price
                  th
              tbody(v-for="(item, index) in items")
                tr
                  th(scope='row') {{ index + 1}}
                  td {{ item.brand }}
                  td {{ item.model }}
                  td
                    select(name="amount")
                      option(v-for="val in values" :selected="selectedState(val, item.amount)").
                        {{ val }}
                   
                  td {{ item.price * item.amount }}
                  td
                    a.delete-button(@click="removeItem(item.id)") Remove

              tbody
                tr
                  th(scope='row')
                  td(colspan='2')
                  td
                    .font-weight-bold TOTAL
                  td {{ totalPrice }}
                  td
                
            .checkout-container.text-right
              button.btn.btn-primary(type="button") Checkout
</template>

<script>
import cart from '../util/cart.js';
export default {
  name: 'ShoppingCart',
  data() {
    return {
      items: [],
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  mounted(){
    this.getItems();
  },
  methods: {
    addInputPlaceholder() {
      document.getElementById('search-input').placeholder = this.placeholderText;
    },
    removeItem(id) {
      cart.removeItem(id);
      this.getItems();
    },
    getItems() {
      this.items = cart.getItems();
    },
    selectedState(val, amount) {
      if (val === amount)
        return true
      else
        return false
    }
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
  .title
    font-size 2rem
  .delete-button
    font-size 0.8rem
    cursor pointer
    color #ff614f
    opacity 0.7
    &:hover
      color #ff614f
      opacity 1
</style>