<template lang="pug">
  #card-item-list.row.px-1
    .col-12.col-md-6.col-lg-4.d-flex.py-2.px-1(v-for="item in items")
      card-item(
        :id="item._id"
        :key="item.id"
        :brand="item.brand"
        :model="item.model"
        :price="item.price"
        :stock="item.stock"
        :imageName="item.imageName")
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
  #card-item-list
    background-color #f0f2f0
    border-radius 0.3rem
</style>
