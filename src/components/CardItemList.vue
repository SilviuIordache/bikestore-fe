<template lang="pug">
  .container
    .row
        card-item(
          v-for="item in items"
          :key="item.id"
          :brand="item.brand"
          :model="item.model"
          :price="item.price"
          :stock="item.stock")
</template>

<script>
import CardItem from '../components/CardItem.vue';

export default {
  components: {
    'card-item': CardItem,
  },
  data() {
    return {
      items: [],
    };
  },
  async created() {
    this.getBikes();
  },
  methods: {
    async getBikes() {
      const url = 'http://localhost:3000/api/v1/bikes';
      let response;
      try {
        response = await this.$http.get(url);
      } catch (err) {
        console.log(`Error retrieving items: ${err}`)
      }
      if (response) {
        this.items = response.data.data.bikes;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
  ul
    list-style-type none
</style>
