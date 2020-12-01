<template lang="pug">
  .container
    .shopping-cart
      .title.
        Shopping Cart
      table.table.table-striped
        thead
          tr
            th(scope='col') #
            th(scope='col') id
            th(scope='col') brand
            th(scope='col') model
            th(scope='col') amount
            th(scope='col') price
        tbody(v-for="(item, index) in items")
          tr
            th(scope='row') {{ index }}
            td {{ item.id }}
            td {{ item.brand }}
            td {{ item.model }}
            td
              input(type="number" id="amount" name="amount" min="1" max="5" :value="item.amount")
            td {{ item.price * item.amount }}
        tbody
          tr
            th(scope='row')
            td(colspan='3')
            td
              .font-weight-bold TOTAL
            td {{ totalPrice }}
      
</template>

<script>
export default {
  name: 'ShoppingCart',
  data() {
    return {
      items: []
    }
  },
  mounted(){
    this.items = JSON.parse(localStorage.getItem('cart-items'));
  },
  methods: {
    addInputPlaceholder() {
      document.getElementById('search-input').placeholder = this.placeholderText;
    },
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (let item of this.items) {
        total += item.price * item.amount;
      }
      return total;
    }
  }
};
</script>