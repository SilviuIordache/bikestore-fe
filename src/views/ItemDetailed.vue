<template lang="pug">
  #detailed-view.container
    .row
      .col(v-if="imageLoaded")
        h1 {{ brand }}
        p {{ model }}
        img(:src='imageUrl' width='100%')

    p.stock-container.mb-5
      span(v-if="stock > 5") In stock
      span(v-else-if="stock > 0 && stock < 5") Only {{ stock }} left
      span(v-else) Out of stock

    .price-part.d-flex.justify-content-between.align-items-center
      h5.d-inline.mb-0.
        {{price}} $

</template>

<script>
export default {
  data() {
    return {
      brand: '',
      model: '',
      stock: '',
      price: '',
      imageUrl: '',
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
        this.brand = response.data.data.bike.brand;
        this.model = response.data.data.bike.model;
        this.stock = response.data.data.bike.stock;
        this.price = response.data.data.bike.price;
        this.imageUrl = response.data.data.bike.imageUrl;
      }
    }
  }
};
</script>

<style scoped lang="stylus">
  #detailed-view
    background-color white
</style>
