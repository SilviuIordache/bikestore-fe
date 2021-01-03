<template lang="pug">
  #detailed-view.container.mt-3
    .row#inner-container
      .col-12.col-md-4
        .image-container(v-if="imageLoaded")
          img(:src='item.imageUrl' width='100%')
      .col-12.col-md-8
        .top-container
          h1 {{ item.brand }}
          p {{ item.model }}
        .bottom-container
          .price-part.d-flex.justify-content-between.align-items-center
            h5.d-inline.mb-0.
              {{ item. price}} $
          button Add to cart
          button Add to compare

    p.stock-container.mb-5
      span(v-if="item.stock > 5") In stock
      span(v-else-if="item.stock > 0 && item.stock < 5") Only {{ item.stock }} left
      span(v-else) Out of stock

    

</template>

<script>
export default {
  data() {
    return {
      item: '',
      imageLoaded: false
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
          this.imageLoaded = true
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
  #detailed-view
    background-color #f0f2f0

    #inner-container
      background-color white
</style>
