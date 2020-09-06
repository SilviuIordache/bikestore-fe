<template lang="pug">
  #detailed-view.container
    .row
      .col
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

</template>

<script>
export default {
  data() {
    return {
      brand: '',
      model: '',
      stock: '',
      price: '',
      imageName: ''
    }
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    async getProductInfo() {
      const url = `http://localhost:3000/api/v1/bikes/${this.$route.params.id}`;
      let response;
      try {
        response = await this.$http.get(url);
      } catch (err) { 
        console.log(`Error retrieving item: ${err}`)
      }

      if (response) {
        this.brand = response.data.data.bike.brand;
        this.model = response.data.data.bike.model;
        this.stock = response.data.data.bike.stock;
        this.price = response.data.data.bike.price;
        this.imageName = response.data.data.bike.imageName;
      }
    }
  },
  computed: {
    imagePath() {
      const path = 'http://localhost:3000/static/' + this.imageName;
      return path;
    }
  }
};
</script>

<style scoped lang="stylus">
  #detailed-view
    background-color white
</style>
