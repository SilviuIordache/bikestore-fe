<template lang="pug">
  #card-item-list.row.p-1
    .col-12.col-md-6.col-lg-4.d-flex.p-1(v-for="item in items")
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
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="stylus" scoped>
  #card-item-list
    background-color #f0f2f0
    border-radius 0.3rem
</style>
