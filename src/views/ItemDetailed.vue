<template lang="pug">
  #outer-container.py-2
    #detailed-view.container.my-3
      .row
        .col-12.col-md-4.p-2
          .image-container.p-3(v-if="itemRetrieved")
            img(:src='item.imageUrl' width='100%')
        .col-12.col-md-8.p-0
          .right-info.p-4.h-100.d-flex.flex-column.justify-content-between
            .top-container
              h1 {{ item.brand }}
              p {{ item.model }}
            .bottom-container.d-flex.justify-content-between.mt-5
              .price-part
                h5.d-inline.mb-0.
                  {{ item. price}} $
              .buttons-container
                AddToCartButton(v-if="itemRetrieved" :item="item")
                button.ml-3 Add to compare
                .stock-container
                  span(v-if="item.stock > 5") In stock
                  span(v-else-if="item.stock > 0 && item.stock < 5") Only {{ item.stock }} left
                  span(v-else) Out of stock

</template>

<script>
import AddToCartButton from '../components/AddToCartButton.vue';

export default {
  components: {
    'AddToCartButton': AddToCartButton
  },
  data() {
    return {
      item: '',
      itemRetrieved: false
    }
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    async getProductInfo() {
      const url = `${this.$config.apiUrl}/${this.$route.params.id}`;
      let response;
      try {
        response = await this.$http.get(url);
        if (response.status === 200) {
          this.itemRetrieved = true
        }
      } catch (err) { 
        console.log(`Error retrieving item: ${err}`)
      }
      if (response) {
        this.item = response.data.data.bike;
      }
    }
  }
};
</script>

<style scoped lang="stylus">
  #outer-container
    background-color #cccccc
  #detailed-view
    border-radius 0.5rem
    background-color white
    #inner-container
      background-color #f0f2f0
</style>
